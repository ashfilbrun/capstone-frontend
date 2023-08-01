import axios from "axios";
import moment from "moment";
import { useCallback, useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import "../App.css";
import Context from "../Context";
import { BASE_URL } from "../constants/constants";
import DailySurvey from "./DailySurvey";

export default function MyCalendar() {
  const [surveysByUser, setSurveysByUser] = useState("");
  const [symptoms, setSymptoms] = useState([{}]);
  const [illness, setIllness] = useState({});
  const { userInfo } = useContext(Context);

  const getSurveysByUser = async (date) => {
    getIllnesByUser();
    const parsedDate = moment(date, "ddd MMMM D YYYY");
    const formattedDate = parsedDate.format("YYYY-MM-DD");

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

  const getIllness = useCallback(async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/user/${userInfo.illnessId}`
      );
      setIllness(response.data);
      setSymptoms(response.data.symptoms);
    } catch (error) {
      console.log(error);
    }
  }, [userInfo.illnessId]);

  const getIllnesByUser = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/illness/${userInfo.illnessId}`
      );
      setIllness(response.data);
      setSymptoms(response.data.symptoms);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Calendar
        maxDate={new Date()}
        onClickDay={(day) => {
          getSurveysByUser(day);
        }}
      />

      <DailySurvey
        surveys={surveysByUser}
        illness={illness}
        symptoms={symptoms}
      />
    </div>
  );
}
