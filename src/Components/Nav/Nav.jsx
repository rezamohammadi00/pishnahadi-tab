
import React from 'react'
import "./Nav.css"

import Button from '@mui/material/Button';

import SelectBox from '../SelectBox/SelectBox';


export default function Nav() {
  return (

    <div className=''>
      <div className='d-flex align-items-center m-4'>
        <div className='item ms-4' style={{ width: "20%" }}>
          <SelectBox value={"سال"} />
        </div>
        <div className='item ms-4' style={{ width: "20%" }}>
          <SelectBox value={"منطقه"} />
        </div>
        <div className='item ms-5' style={{ width: "20%" }}>
          <SelectBox value={"نوع بودجه"} />
        </div>
        <div className='item mt-3'>
          <Button variant="contained" className='w-25' >نمایش</Button>
        </div>
      </div>
    </div>
  );
}