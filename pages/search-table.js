/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react'
// import fakeData from "../lib/MOCK_DATA.json"
import blogsData from "../lib/blogsData.json"
import { useTable } from 'react-table'


const ReactTable = () =>{

  // RESOURCE: https://github.com/machadop1407/react-table-tutorial

const data = React.useMemo(() => blogsData, []);
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

const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  useTable({ columns, data });

return (
  <div className="App">
    <div className="container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                  {/* {column.render("Cell")} */}
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
