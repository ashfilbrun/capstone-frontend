import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Context from "../Context"

export default function Login () {
  const BASE_URL = `http://localhost:3001/api/`

  const initialState = {
    username: '',
    password: '',
  }

  const [formState, setFormState] = useState(initialState)
  const [isActive, setIsActive] = useState(false)
  const { userInfo, setUserInfo } = useContext(Context)

  let navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = async () => {
      const myUser = await axios.get(`${BASE_URL}user/username/${formState.username}`)
      console.log(myUser.data)

      if (myUser.data.length === 0) {
          setIsActive(true)
      }

      if (myUser.data[0].password === formState.password) {
          setUserInfo({...userInfo, firstName: myUser.data[0].firstName, lastName: myUser.data[0].lastName, userId: myUser.data[0]._id, username: myUser.data[0].username})
          setIsActive(false)
          navigate("/MyCalendar")
      } else {
          setIsActive(true)
      }
    }
    user()
    setFormState(initialState)
  }

  const handleChange = e => {
    setFormState({...formState, [e.target.id]: e.target.value})
  }

  // const login = async () => {
  //   await axios.get(`http://localhost:3001/api/`)
  // }

  const create = () => {
    navigate('/createAccount')
  }

  return (
    <div>
        <div className="container" id="loginContainer" onSubmit={handleSubmit}>
            <h2>Login:</h2>
            <form className="login">
                <label htmlFor="username">USERNAME: </label>
                <input 
                  type="text" 
                  placeholder="Enter username here" 
                  id="username" 
                  onChange={handleChange} 
                  value={formState.username}/>
                <label htmlFor="password">PASSWORD: </label>
                <input 
                  type="password" 
                  placeholder="Enter password here" 
                  id="password" 
                  onChange={handleChange} 
                  value={formState.password} />
                <p className="invalid" style={{display: isActive? "": "none"}}>Username or password is incorrect. Please try again!</p>
                <button type="submit" className="submit">LOG IN</button>
                <button type="reset" className="submit" id="resetBtn">forgot password ?</button>
            </form>       
        </div>
        <div className="lineBreak"></div>
        <div>
            {/* <button onClick={() => logIn()}>Login W/ Google</button> */}
        <button className="createBtn" onClick={create}>New Here? &nbsp;Create An Account</button>
      </div>
  </div>
  )
}