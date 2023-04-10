
/* eslint-disable react/jsx-key */
import { Filter, DefaultColumnFilter,SelectColumnFilter } from "@/components/Filters";
import React, { useEffect, useState } from "react";
import { useTable, useSortBy,useFilters } from "react-table";
// import { Table } from "react-bootstrap";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Container from 'react-bootstrap'
import TableContainer from "@/components/TableContainer";

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

  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //   useTable({ columns, data: blogsData }, useFilters, useSortBy);
    

  return (
    <>
      <Navbar />
      <div className="container position-relative mt-5 pt-3">
        <div className="container position-relative mt-5">
         <Container>
          <TableContainer  columns={columns} data={blogsData}/>
         </Container>
        </div>
      </div>
    </>
  );
};

export default ReactTable;
