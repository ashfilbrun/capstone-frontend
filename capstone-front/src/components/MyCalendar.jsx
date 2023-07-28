import { useState } from 'react';
import Calendar from 'react-calendar';
import '../App.css'

export default function myCalendar () {

  const [date, setDate] = useState(new Date ())

  return (
    <div className='myCalendar'>
      <h1 className='header'>React Calendar</h1>
      <div className='container' id='calendar'>
        <Calendar onChange={setDate} value={date}/>
      </div>
      <div className='text-center'>
        Selected date: {date.toDateString()}
      </div>
    </div>
  )
}