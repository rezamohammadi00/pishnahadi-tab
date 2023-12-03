import "./MyTable.css"

import data from "../../data/data";

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


// import icon 
import AddIcon from '@mui/icons-material/Add';


// import { createSvgIcon } from '@mui/material/utils';
// const PlusIcon = createSvgIcon(
//   // credit: plus icon from https://heroicons.com/
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     strokeWidth={1.5}
//     stroke="currentColor"
//   >
//     <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
//   </svg>,
//   'Plus',
// );




const columns = [
  { id: 'codingId', label: '#', minWidth: 50,align: 'right', },
  { id: 'code', label: 'کد', minWidth: 100,align: 'center', },
  {
    id: 'description',
    label: 'شرح',
    minWidth: 250,
    align: 'center',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'mosavab',
    label: 'مصوب',
    minWidth: 170,
    align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'edit',
    label: 'اصلاح',
    minWidth: 170,
    align: 'right',
    // format: (value) => value.toFixed(2),
  },
  {
    id: 'creditAmount',
    label: 'ت اعتبار',
    minWidth: 170,
    align: 'right',
    // format: (value) => value.toFixed(2),
  }, {
    id: 'expense',
    label: 'هزینه',
    minWidth: 170,
    align: 'right',
    // format: (value) => value.toFixed(2),
  }, {
    id: 'budgetNext',
    label: 'جذب%',
    minWidth: 170,
    align: 'right',
    // format: (value) => value.toFixed(2),
  }, {
    id: 'levelNumber',
    label: 'عملیات',
    minWidth: 170,
    align: 'right',
    // format: (value) => value.toFixed(2),
  }
  , {
    id: 'crud',
    label: 'crud',
    minWidth: 50,
    align: 'right',
    // format: (value) => value.toFixed(2),
  },
];

const rows = data

function MyTable() {
  const [page] = React.useState(0);
  const [rowsPerPage] = React.useState(data.length);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];

                      // conditionIcon
                      const conditionPlus = (column.id === "code") ? true : false


                      return (

                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? <span>{`${column.format(value)} ${conditionPlus ? '+' : ''}`}</span>
                            : <span className="d-flex align-items-center "><span onClick={()=>{console.log("ok")}} className="text-primary" style={{cursor:"pointer"}}>{conditionPlus ? <AddIcon/> : false}</span>{value}</span>} 
                        </TableCell>

                        // <TableCell key={column.id} align={column.align}>
                        //   {column.format && typeof value === 'number'
                        //     ? column.format(value)
                        //     : value}
                        //   {/* + icon */}
                        //   {(conditionPlus) ? <AddIcon /> : false}
                        // </TableCell>

                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
}


// export default function MyTable() {
//   return (
//     <>
//       <StickyHeadTable />
//     </>)
// }

export default MyTable