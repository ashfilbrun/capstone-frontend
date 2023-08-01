import { useState, useContext, useEffect } from "react";
import Calendar from "react-calendar";
import axios from "axios";
import "../App.css";
import DailySurvey from "./DailySurvey";
import Context from "../Context";
import { BASE_URL } from "../constants/constants";
import moment from "moment";

export default function MyCalendar() {
  const [surveysByUser, setSurveysByUser] = useState("");
  const { userInfo, setUserInfo } = useContext(Context);
  const [date, setDate] = useState(new Date());

  const getSurveysByUser = async (date) => {
    console.log(
      "🚀 ~ file: MyCalendar.jsx:25 ~ getSurveysByUser ~ date:",
      date
    );
    const parsedDate = moment(date, "ddd MMMM D YYYY");
    const formattedDate = parsedDate.format("YYYY-MM-DD");
    console.log(
      "🚀 ~ file: MyCalendar.jsx:22 ~ getSurveysByUser ~ formattedDate:",
      formattedDate
    );
    try {
      const response = await axios.get(
        `${BASE_URL}/survey/userSurvey/${userInfo.userId}`,
        { params: { date: formattedDate } }
      );
      setSurveysByUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Calendar
        maxDate={new Date()}
        onClickDay={(day, event) => {
          getSurveysByUser(day);
        }}
      />
      {surveysByUser && surveysByUser.length && (
        <DailySurvey surveys={surveysByUser} />
      )}
    </div>
  );
}
