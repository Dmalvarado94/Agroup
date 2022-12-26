import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

import { Link } from 'react-router-dom';


export default function CustomizeDayPicker() {
  const [value, setValue] = React.useState(dayjs('2022-12-19'));

  return (

    <Link to="/calendario">
        <div className="calendar">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
        dayOfWeekFormatter={(day) => `${day}.`}
        toolbarFormat="ddd DD MMMM"
         
        
      />
    </LocalizationProvider>
    </div></Link>
  );
}