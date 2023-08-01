import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Context from '../Context'


export default function Nav () {
  const { userInfo, setUserInfo } = useContext(Context)
  const userId = userInfo.userId
  console.log(userId)
  console.log(userInfo)

  return (
    <div className="navBar">
      <ul>
        <li><Link to={`/MyCalendar/`}>Calendar</Link></li>
        <li><Link to={`/DailySurvey/${userId}`}>Daily Survey</Link></li>
        <li><Link to={`/Profile/${userId}`}>Profile</Link></li>
      </ul>
    </div>
  )
}