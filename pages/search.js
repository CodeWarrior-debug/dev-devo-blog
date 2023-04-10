/* eslint-disable react/jsx-key */
import React, { useEffect, useState, useMemo } from 'react'
import { useTable, useFilters, useSortBy, useGlobalFilter} from 'react-table'
// import '../styles/searchtable.module.css'
import {Table} from 'react-bootstrap'

import { GlobalFilter } from '@/components/globalFilter'

const ReactTable = () =>{

  const [data, setData] = useState([])
  // RESOURCE: https://github.com/machadop1407/react-table-tutorial
  // https://hygraph.com/blog/react-table
  // https://www.youtube.com/watch?v=WRKEjPq75BY  BEST ONE

  useEffect(()=>{

    const getFBData = async ()=>{
      const res = await fetch("./api/readPosts")
      const data = await res.json()
      setData(data)
    }

    getFBData()

  },[])



const columns = React.useMemo(
  () => [
    {
      Header: "Title",
      accessor: "title",
      // Filter: FilterForm,
    },
    {
      Header: "ID",
      accessor: "idNum",
      // Filter: FilterForm,
    },
    {
      Header: "Date Updated",
      accessor: "updateddateTime",
      // Filter: FilterForm,
    },
    {
      Header: "URL End",
      accessor: "url",
      // Filter: FilterForm,
    },
    {
      Header: "Author",
      accessor: "author",
      // Filter: FilterForm,
    },
    {
      Header: "Date Created",
      accessor: "createddateTime",
      // Filter: FilterForm,
    },
  ],
  []
);

// const { getTableProps, getTableBodyProps, headerGroups, rows, state, prepareRow } =
//   useTable({ columns, data }, useFilters);
const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, preGlobalFilteredRows, setGlobalFilter,state } =
  useTable({ columns, data }, useGlobalFilter, useSortBy);




return (
  <div>
    
    <GlobalFilter preGlobalFilteredRows={preGlobalFilteredRows} globalFilter={state.globalFilter} setGlobalFilter={setGlobalFilter} />
  <Table className='searchTable' {...getTableProps()}>
      <thead className='searchTable'>
          {headerGroups.map((headerGroup) => (
              <tr className='searchTable' {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                      <th  className='searchTable' {...column.getHeaderProps(column.getSortByToggleProps())}>
                          {column.render('Header')}
                          {column.isSorted ? (column.isSortedDesc ? "⬇️" : "⬆️") :""}
                      </th>
                  ))}
              </tr>
          ))}
      </thead>
      <tbody className='searchTable' {...getTableBodyProps()}>
          {rows.map((row) => {
              prepareRow(row);
              return (
                  <tr className='searchTable' {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                          return (
                              <td  className='searchTable' {...cell.getCellProps()}>
                                  {cell.render('Cell')}
                              </td>
                          );
                      })}
                  </tr>
              );
          })}
      </tbody>
  </Table>
</div>

);
}

      


export default ReactTable
