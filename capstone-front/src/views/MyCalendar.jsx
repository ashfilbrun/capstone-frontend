import React, { useState } from "react";
import Calendar from "react-calendar";
import "../App.css";
import DailySurvey from "./DailySurvey";

function tileContent({ date, view }) {
  const [selectedDate, setSelectedDate] = useState("");

  if (view === "month") {
    if (selectedDate.find((dDate) => isSameDay(dDate, date))) {
      return "My content";
    }
  }
}

export default function MyCalendar() {
  const [date, setDate] = useState(new Date());

  const handleChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <div>
      <Calendar
        onChange={handleChange}
        value={date}
        // tileContent={tileContent}
        maxDate={new Date()}
        // onClickDay={<DailySurvey />}
      />
      <DailySurvey />
    </div>
  );
}
// //USE ONCLICK DAY
