import { useState, useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Context from '../Context'
import Select from 'react-select'

export default function DailySurvey ({open, onClose, meTeamId}) {
  const BASE_URL = 'http://localhost:3001/api/'

  const [date, setDate] = useState('')
  const [formState, setFormState] = useState(initialState)
  const { userInfo, setUserInfo } = useContext(Context)
  const [score, setScore] = useState('')
  const [symptoms, setSymptoms] = useState([{}])
  const 

  let navigate = useNavigate()

  const surveyData = {
    date,
    userId,
    symptoms,
    score,
  }


  // const object = [
  //   {label: `chris87`, value: `64a8149cc3cd0299e6f1f3af` },
  //   {label: `Demo1`, value: `64a63f9c8eb8541d68cafc4b`}
  // ]

  useEffect(() => {
    const getSymptoms = async () => {
      const users = await axios.get(`${BASE_URL}/user/${_id}/${illnessId.symptomsId}`)
      for (let i = 0; i < users.data[0].symptom.length; i++) {
        let userId = users.data[0].illness[i]._id
        let userName = users.data[0].member[i].username
        const newObj = []
        newObj['value'] = userId
        newObj['label'] = userName
        //object[i] = newObj
      }
    }
    setProjectLeader(userInfo.userId)
    setTaskId(null)
    setTeamId(myTeamId)
    getTeamMembers()
  }, [])

  console.log(userInfo.userId)

  return (
    <div className="container" id='survey'>
      <form className="dailySurvey">
        <h3>Daily Survey</h3>
        <></>
      </form> 
    </div>
  )
}