import { useState, useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Context from '../Context'
import Select from 'react-select'

export default function DailySurvey ({open, onClose, meTeamId}) {
  const BASE_URL = 'http://localhost:3001/api/'

  const [date, setDate] = useState('')
  const [formState, setFormState] = useState(initialState)
  const { user, setUser } = useContext(Context)
  const [score, setScore] = useState('')
  const [symptoms, setSymptoms] = useState([{}])

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

  console.log(userInfo.userId)

  return (
    <div className="container" id='survey' onSubmit={handleSubmit}>
      <div>
        <h3>Daily Survey</h3>
        <form className="dailySurvey">
          <></>
        </form> 

      </div>
    </div>
  )
}