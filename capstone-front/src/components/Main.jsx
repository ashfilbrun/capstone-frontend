import { Routes, Route } from 'react-router-dom'
import { useState, useContext } from 'react'
import Login from './Login'
import CreateAccount from './CreateAccount'
import MyCalendar from './MyCalendar'
// import Profile from './Profile'
// import Day from './Day'
import Context from '../Context'

export default function Main () {

  const [user, setUser] = useState('')
  const { userInfo, setUserInfo } = useContext(Context)
  console.log(userInfo)

  if (userInfo.username === '') {
    return (
      <>
        <Routes>
          <Route path='' element={<Login />} />
          <Route path='/CreateAccount' element={<CreateAccount />}/>
        </Routes>
      </>
    )
  } else {
    return (
      <>
        <Routes>
          <Route path='/' element={<MyCalendar />}/>
          <Route path='/Profile/:id' element={<Profile />}/>
          <Route path='/DailySurvey/:id' element={<DailySurvey />}/>
        </Routes>
      </>
    )
  }
}