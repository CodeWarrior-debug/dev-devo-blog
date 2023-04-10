
/* eslint-disable react/jsx-key */
import { Filter } from "@/components/Filters";
import React, { useEffect, useState } from "react";
import { useTable, useSortBy,useFilters } from "react-table";
import { Table } from "react-bootstrap";
import Navbar from "@/components/Navbar";
import Link from "next/link";

// TODO: Add custom link cell


const ReactTable = () => {
  // RESOURCES: https://github.com/machadop1407/react-table-tutorial
  // https://medium.com/@thewidlarzgroup/react-table-7-sorting-filtering-pagination-and-more-6bc28af104d6

  const [blogsData, setBlogsData] = useState([]);

  useEffect(() => {
    const getFBdocs = async () => {
      const res = await fetch("../api/readPosts");
      const data = await res.json();

      setBlogsData(data);

    //   console.log(data);
    };

    getFBdocs();
  }, []);

  
const generateSortingIndicator = column => {
  return column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""
}


  const columns = React.useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "ID",
        accessor: "idNum",
      },
      {
        Header: "Date Updated",
        accessor: "updateddateTime",
      },
      {
        Header: "Link",
        // accessor: "url",
        accessor: (values)=>{
          const slug = values.url
          const stringPath = `blogs/${slug}`
          return <Link href={stringPath} >{slug}</Link>
        }
        ,
      },
      {
        Header: "Author",
        accessor: "author",
      },
      {
        Header: "Date Created",
        accessor: "createddateTime",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: blogsData }, useSortBy);

  return (
    <>
      <Navbar />
      <div className="container position-relative mt-5 pt-3">
        <div className="container position-relative mt-5">
          <Table bordered hover {...getTableProps()}>
            <thead className="bg-dark text-white">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      <div {...column.getSortByToggleProps()}>
                        {column.render("Header")}
                        {generateSortingIndicator(column)}
                      </div>
                    <Filter column={column} />
                  </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="fw-bold" {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default ReactTable;
