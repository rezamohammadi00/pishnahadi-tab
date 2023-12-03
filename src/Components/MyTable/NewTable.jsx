import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AddIcon from '@mui/icons-material/Add';

import "./NewTable.css"

import data from "../../data/data";

const columns = [
  { id: 'codingId', label: '#', minWidth: 50, align: 'right' },
  { id: 'code', label: 'کد', minWidth: 100, align: 'center', isPlusIcon: true },
  { id: 'description', label: 'شرح', minWidth: 250, align: 'center' },
  { id: 'mosavab', label: 'مصوب', minWidth: 170, align: 'right' },
  { id: 'edit', label: 'اصلاح', minWidth: 170, align: 'right' },
  { id: 'creditAmount', label: 'ت اعتبار', minWidth: 170, align: 'right' },
  { id: 'expense', label: 'هزینه', minWidth: 170, align: 'right' },
  { id: 'budgetNext', label: 'جذب%', minWidth: 170, align: 'right' },
  { id: 'levelNumber', label: 'عملیات', minWidth: 170, align: 'right' },
  { id: 'crud', label: 'خام', minWidth: 50, align: 'center' },
];

const NewTable = () => {
  const [page] = useState(0);
  const [rowsPerPage] = useState(data.length);
  const rows = data  //data

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow style={{backgroundColor:"#e0e0e0"}}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth,backgroundColor:"##eeeeee" }}       //color head row
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
      
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code} className={`${row.levelNumber>=2?"level-red":''}${(row.levelNumber<2&&row.levelNumber!==0)?"level-yellow":""}${row.levelNumber===0?"level-green":""}`}>
                  {console.log(row.levelNumber)}

                  {columns.map((column) => {
                    const value = row[column.id];

                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.isPlusIcon && (
                          <span onClick={() => console.log("ok")} className="text-primary d-flex " style={{ cursor: "pointer" }}>
                           <AddIcon /> <span className='text-black'>{value}</span>
                          </span>
                        )}
                        {column.format && typeof value === 'number' ? (
                          <span>{`${column.format(value)} ${column.isPlusIcon ? '+' : ''}`}</span>
                        ) : (
                          <span className="d-flex align-items-center">
                            {column.isPlusIcon ? null : value}
                          </span>
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default NewTable;
