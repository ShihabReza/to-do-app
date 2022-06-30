import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { addMonths, isSameMonth } from 'date-fns';
const Celender = () => {
    const defaultMonth = new Date(2022, 6);
    return (
        <div className='mt-30 w-52 mx-auto'>
           <DayPicker
      defaultMonth={defaultMonth}
      fromMonth={defaultMonth}
      toDate={new Date(2022, 10, 20)}
    />
        </div>
    );
};

export default Celender;