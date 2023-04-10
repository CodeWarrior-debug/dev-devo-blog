/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import { useTable, useFilters, useSortBy, useGlobalFilter} from 'react-table'
// import '../styles/searchtable.module.css'
import Link from 'next/link'
import {Table} from 'react-bootstrap'
import Navbar from '@/components/Navbar'
import { GlobalFilter } from '@/components/globalFilter'
import FilterForm from '@/components/FilterForm'

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



  // const CustomLink = ({value})=>{   
  //       <Link href={`/blogs/${value}`}> 
  //         {value}
  //       </Link>
    
  // }


const columns = React.useMemo(
  () => [
    {
      Header: "ID",
      accessor: "idNum",
      disableFilters:true,
    },
    {
      Header: "Post Title" ,
      accessor: "title",
      Filter: FilterForm,
    },
    {
      Header: "Link",
      accessor: "url",
      // Custom cell configuration here, or can be applied from another component, see Genres example at https://blog.logrocket.com/react-table-complete-guide/#custom-styling-react-table
      // Cell method will provide the cell value; we pass it to render a custom component
      Cell: ({ cell: { value } }) => <Link href="/blogs">{value}</Link>,
      Filter: FilterForm,

    },
    {
      Header: "Date Updated",
      accessor: "updateddateTime",
      Filter: FilterForm,
    },

    {
      Header: "Author",
      accessor: "author",
      Filter: FilterForm,
    },
    {
      Header: "Date Created",
      accessor: "createddateTime",
      Filter: FilterForm,
    },
  ],
  []
);


const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, preGlobalFilteredRows, setGlobalFilter,state } =
  useTable({ columns, data }, useFilters, useGlobalFilter, useSortBy);
  // useTable({ columns, data }, useFilters);




return (
  <>
  <Navbar/>
  <div className="container position-relative mt-5 pt-3">
        <div className="container position-relative pt-5">
    
    <GlobalFilter preGlobalFilteredRows={preGlobalFilteredRows} globalFilter={state.globalFilter} setGlobalFilter={setGlobalFilter} />
  <Table className='searchTable' {...getTableProps()}>
      <thead className='searchTable'>
          {headerGroups.map((headerGroup) => (
              <tr className='searchTable' {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                      <th  className='searchTable' {...column.getHeaderProps(column.getSortByToggleProps())}>
                          {column.render('Header')}
                          {column.isSorted ? (column.isSortedDesc ? "⬇️" : "⬆️") :""}
                          {column.canFilter ? column.render('Filter') : null}

                          {/* <div>
                                        {column.canFilter ? column.render('Filter') : null}
                                    </div> */}
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
</div>
</>
);
}

      


export default ReactTable
