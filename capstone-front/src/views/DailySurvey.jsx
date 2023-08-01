import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import axios from "axios";
import Context from "../Context";
import Select from "react-select";
import { BASE_URL } from "../constants/constants";

export default function DailySurvey(props) {
  const { surveys } = props;
  const [date, setDate] = useState(new Date());
  const [survey, setSurvey] = useState("");
  const [surveysByUser, setSurveysByUser] = useState("");
  const { userInfo, setUserInfo } = useContext(Context);
  console.log(
    "🚀 ~ file: DailySurvey.jsx:15 ~ DailySurvey ~ userInfo:",
    userInfo
  );
  const [score, setScore] = useState("");
  const [symptoms, setSymptoms] = useState([{}]);

  let navigate = useNavigate();

  // const surveyData = {
  //   date,
  //   user,
  //   symptoms,
  //   score,
  // };

  // const getSymptoms = async () => {
  //   const users = await axios.get(
  //     `${BASE_URL}/user/${_id}/${illnessId.symptomsId}`
  //   );
  //   for (let i = 0; i < users.data[0].symptom.length; i++) {
  //     let userId = users.data[0].illness[i]._id;
  //     let username = users.data[0].member[i].username;
  //     const newObj = [];
  //     newObj["value"] = userId;
  //     newObj["label"] = username;
  //   }
  // };

  // useEffect(() => {
  //   getSymptoms();
  //   setUser(userInfo.userId);
  //   setDate(dateNow);
  //   setScore(null);
  // }, []);

  // const getSurvey = async () => {
  //   try {
  //     const response = await axios.get(`${BASE_URL}/survey/`);
  //     setSurvey(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getSurveysByUser = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${BASE_URL}/survey/userSurvey/${userInfo.userId}`
  //     );
  //     setSurvey(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getSurveysByUser();
  // }, []);

  // console.log(survey);

  // const handleChangeSurvey = (e) => {
  //   setSurveyFormState = ({...survey, [e.target.id]: e.target.value })
  // }

  return (
    <div className="container" id="survey">
      <div>
        {surveys &&
          surveys.length &&
          surveys.map((survey) => {
            return <h1 key={survey._id}>Daily Surveys: {survey._id}</h1>;
          })}
        <form>
          {/* map through to find users illness symptoms */}
          {/* pull symptom */}
          {/* add score bar */}
        </form>
      </div>
    </div>
  );
}
