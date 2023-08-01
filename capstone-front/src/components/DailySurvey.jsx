import { useState, useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Calendar from 'react-calendar'
import axios from 'axios'
import Context from '../Context'
import Select from 'react-select'

export default function DailySurvey ({open, onClose, meTeamId}) {
  const BASE_URL = 'http://localhost:3001/api/'

  const [date, setDate] = useState('')
  const [ survey, setSurvey ] = useState('')
  const [formState, setFormState] = useState(initialState)
  const { user, setUser } = useContext(Context)
  const [score, setScore] = useState('')
  const [symptoms, setSymptoms] = useState([{}])
  const [value, setValue] = useState(new Date ());

  let navigate = useNavigate()

  const surveyData = {
    date,
    user,
    symptoms,
    score,
  }

  useEffect(() => {
    const getSymptoms = async () => {
      const users = await axios.get(`${BASE_URL}/user/${_id}/${illnessId.symptomsId}`)
      for (let i = 0; i < users.data[0].symptom.length; i++) {
        let userId = users.data[0].illness[i]._id
        let username = users.data[0].member[i].username
        const newObj = []
        newObj['value'] = userId
        newObj['label'] = username
        //object[i] = newObj
      }
    }
    setUser(userInfo.userId)
    setDate(dateNow)
    setScore(null)
    getSymptoms()
  }, [])

  const getSurvey = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/survey/`)
      setSurvey(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getSurvey()
  }, [])

  const handleChangeSurvey = (e) => {
    setSurveyFormState = ({...survey, [e.target.id]: e.target.value })
  }
  console.log(userInfo.userId)

  return (
    <div className="container" id='survey' onSubmit={handleSubmit}>
      <div>
        <Calendar 
          onChange={handleChangeSurvey}
        />
      </div>
    </div>
  )
}