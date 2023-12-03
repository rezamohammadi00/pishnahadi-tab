import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SelectVariants({value}) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" className='w-100'>
        <InputLabel id="demo-simple-select-standard-label">{value}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>1401</MenuItem>
          <MenuItem value={20}>1402</MenuItem>
          <MenuItem value={30}>1403</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}


export default function SelectBox({ value }) {
  return (<SelectVariants value={value} />)
}