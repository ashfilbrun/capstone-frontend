import React, { useState } from 'react';
import Calendar from 'react-calendar';
// import { useContext, useState } from 'react';
import '../App.css'


function tileContent({ date, view }) {

  const [selectedDate, setSelectedDate] = useState('')

  if (view === 'month') {
    if (selectedDate.find(dDate => isSameDay(dDate, date))) {
      return 'My content';
    }
  }
}

export default function myCalendar () {

  const [value, setValue] = useState(new Date ());

  // const handleChange = e => {
  //   setValue = ({...value, [e.target.id]: e.target.value})
  // }

  return (
    <Calendar
      // onChange={handleChange}
      // value={date}
      // tileContent={tileContent}
      // maxDate={new Date()}
      // onClickDay={<DailySurvey />}
    />
  )
}
// //USE ONCLICK DAY
