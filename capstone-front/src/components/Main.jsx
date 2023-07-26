import { Routes, Route } from 'react-router-dom'
import { useState, useContext } from 'react'
import Login from './Login'
import CreateAccount from './CreateAccount'
import CreateSymptom from './CreateSymptom'
import Survey from './DailySurvey'
import Calendar from './Calendar'
import Profile from './Profile'
import Day from './Day'
import Context from '../Context'

export default function Main () {

  const [user, setUser] = useState('')
  const { userInfo, setUserInfo } = useContext(Context)
  console.log(userInfo)

  if (userInfo.username === '') {
    return (
      <>
        <Routes>
          <Route path='' element={<Login />}/>
          <Route path='/CreactAccount' element={<CreateAccount />}/>
          <Route path='/Profile' element={<Profile />}/>
        </Routes>
      </>
    )
  } else {
    return (
      <>
        <Routes>
          <Route path='/' element={<Calendar />}/>
          <Route path='/Profile/:id' element={<Profile />}/>
          <Route path='/Day/:id' element={<Day />}/>
        </Routes>
      </>
    )
  }
}