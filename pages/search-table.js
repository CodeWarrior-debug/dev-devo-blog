/* eslint-disable react/jsx-key */
import React, { useEffect, useState, useMemo } from 'react'
import blogsData from "../lib/blogsData.json"
import { useGlobalFilter, useTable } from 'react-table'
import "../styles/search-table.module.css"


const ReactTable = () =>{

  const [data, setData] = useState([])
  // RESOURCE: https://github.com/machadop1407/react-table-tutorial
  // https://hygraph.com/blog/react-table

  useEffect(()=>{

    const getFBData = async ()=>{
      const res = await fetch("./api/readPosts")
      const data = await res.json()
      setData(data)
    }

    getFBData()

  })



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
      Header: "URL End",
      accessor: "url",
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

const { getTableProps, getTableBodyProps, headerGroups, rows, state, setGlobalFilter, prepareRow } =
  useTable({ columns, data }, useGlobalFilter);

return (
  <div className="search-table">
    <div className="container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
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
      </table>
    </div>
  </div>
);
}

      


export default ReactTable
