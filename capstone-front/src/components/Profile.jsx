import axios from "axios";
import { useState, useEffect, useContext } from "react";
// import { useParams, useNavigate } from "react-router-dom";
import Context from '../Context'

export default function Profile () {
  const { userInfo, setUserInfo } = useContext(Context)
  const [ user, setUser ] = useState(null)
  // let { id } = useParams()
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [ username, setUsername ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ passwordValid, setPasswordValid ] = useState('')
  const [ illness, setIllness ] = useState('')
  const [ illnesses, setIllnesses ] = useState('')

  
  const saveUserInfo = async () => {
    console.log(userInfo)
    try {
      const response = await axios.put(
        `http://localhost:3001/api/user/${userInfo._id}/`,
        userInfo
        )
        console.log('Profile updated successfully:', response.data)
      } catch (error) {
        console.error('Error updating profile:', error)
      }
    }
    
    const handleSubmit = (e) => {
      e.preventDefault()
      alert('Profile updated successfully!')
      const userInfo = {
        firstName,
        lastName,
        username,
        email,
        password,
        passwordValid,
        illness,
      }
      saveUserInfo(userInfo)
      console.log(userInfo)
    }

  useEffect(() => {
    const getIllnesses = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/illness/`)
        setIllnesses(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getIllnesses()
    console.log(illnesses)
  }, [])

  useEffect(() => {
  const getUser = async () => {
        try {
              const response = await axios.get(`http://localhost:3001/api/user/${userInfo.userId}/`)
              setUser(response.data)
        } catch (error) {
        console.error(error)
        }
  }
  getUser()
  console.log(user)
  }, [])


  const handleChangeIllness = event => {
    setIllness(event.target.value);
  };
      
  const handleChange = e => {
    setUserInfo({...user, [e.target.name]: e.target.value })
    setFirstName({...firstName, [e.target.name]: e.target.value})
    setLastName({...lastName, [e.target.name]: e.target.value})
    setUsername({...username, [e.target.name]: e.target.value})
    setEmail({...email, [e.target.name]: e.target.value})
    setPassword({...password, [e.target.name]: e.target.value})
    setPasswordValid({...passwordValid, [e.target.name]: e.target.value})
  }

  return user && illnesses ? (
    <div>
      <div className="updateProfileForm" onSubmit={handleSubmit}>
            <h2>{user.firstName}'s profile</h2>
            <h5>Update your profile information by entering the new details in the form below and clicking the "Update Profile" button.</h5>
            <form>
              <label htmlFor="firstName">UPDATE FIRST NAME:</label>
              <input 
                type="text" 
                placeholder={user.firstName}
                name="firstName" 
                onChange={handleChange} 
                defaultValue={user.firstName}/>
              <label htmlFor="lastName">UPDATE LAST NAME:</label>
              <input 
                type="text" 
                placeholder={user.lastName}
                name="lastName" 
                onChange={handleChange} 
                defaultValue={user.lastName}/>
              <label htmlFor="email">UPDATE EMAIL ADDRESS:</label>
              <input 
                type="email" 
                placeholder={user.email}
                name="email" 
                onChange={handleChange} 
                defaultValue={user.email}/>
              <label htmlFor="userName">UPDATE USERNAME:</label>
              <input 
                type="text" 
                placeholder={user.username}
                name="username" 
                onChange={handleChange} 
                defaultValue={user.username}/> 
              <label htmlFor="password">UPDATE PASSWORD:</label>
              <input 
                type="password" 
                placeholder={user.password}
                name="password" 
                onChange={handleChange} 
                defaultValue={user.password}/>
              <label htmlFor="passwordValid">CONFIRM NEW PASSWORD:</label>
              <input 
                type="password" 
                id="passwordValid" 
                onChange={handleChange} 
                defaultValue={user.passwordValid}/>
              <label htmlFor="illness">UPDATE ILLNESS:</label>
              <select 
                placeholder={user.illness} 
                name="illness" 
                onChange={handleChangeIllness}>
                {illnesses.map(illness => (
                  <option key={illness.id} defaultValue={illness.id}>
                    {illness.name}
                  </option>
                ))}
              </select>
              <button className="submit" id="updateBtn" type="submit">Update Profile</button>
            </form>
      </div>
    </div>
  ): 
  <div>Loading ...</div>
}
