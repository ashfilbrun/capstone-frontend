import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Context from "../Context";

export default function CreateAccount() {
  const BASE_URL = "http://localhost:3001/api/";

  const initialState = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    sex: "",
    passwordValid: "",
    illness: "",
  };

  const [formState, setFormState] = useState(initialState);
  const [illness, setIllness] = useState("");
  const [illnesses, setIllnesses] = useState("");

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      firstName: formState.firstName,
      lastName: formState.lastName,
      email: formState.email,
      username: formState.username,
      password: formState.password,
      sex: formState.sex,
      birthDate: formState.birthDate,
      illnessId: null,
      googleId: null,
    };
    await axios.post(`${BASE_URL}user/create`, newUser);
    navigate("/");
  };

  useEffect(() => {
    const getIllnesses = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/illness/`);
        setIllnesses(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getIllnesses();
    console.log(illnesses);
  }, []);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  const handleChangeIllness = (e) => {
    setIllness({ ...illness, [e.target.id]: e.target.value });
  };

  const cancel = () => {
    setFormState(initialState);
    navigate("/");
  };

  return illnesses ? (
    <div className="container" id="createAccountContainer">
      <div className="form" id="createAccountForm" onSubmit={handleSubmit}>
        <form>
          <label htmlFor="firstName">FIRST NAME: </label>
          <input
            type="text"
            placeholder="Enter first name here"
            id="firstName"
            onChange={handleChange}
            value={formState.firstName}
          ></input>
          <label htmlFor="lastName">LAST NAME: </label>
          <input
            type="text"
            placeholder="Enter last name here"
            id="lastName"
            onChange={handleChange}
            value={formState.lastName}
          ></input>
          <label htmlFor="birthDate">BIRTH DATE: </label>
          <input
            type="date"
            placeholder="Enter birth date here"
            id="birthDate"
            onChange={handleChange}
            value={formState.birthDate}
          ></input>
          <label htmlFor="sex">SEX: </label>
          <select name="sex" id="sex" onChange={handleChange}>
            <option value="select an answer"></option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="no">Prefer not to answer</option>
          </select>
          <label htmlFor="illness">CHRONIC ILLNESS:</label>
          <select
            placeholder="select"
            name="illness"
            onChange={handleChangeIllness}
          >
            {illnesses?.map((illness) => (
              <option key={illness.id} value={illness.id} placeholder="select">
                {illness.name}
              </option>
              // <option value="other">other</option>
            ))}
          </select>
          <label htmlFor="username">CREATE USERNAME: </label>
          <input
            type="text"
            placeholder="Enter username here"
            id="username"
            onChange={handleChange}
            value={formState.username}
          ></input>
          <label htmlFor="email">EMAIL ADDRESS:</label>
          <input
            type="email"
            placeholder="Enter email address here"
            id="email"
            onChange={handleChange}
            value={formState.email}
          ></input>
          <label htmlFor="password">CREATE PASSWORD:</label>
          <input
            type="password"
            placeholder="Enter password here"
            id="password"
            onChange={handleChange}
            value={formState.password}
          ></input>
          <label htmlFor="passwordValid">CONFIRM PASSWORD:</label>
          <input
            type="password"
            placeholder="Enter password again to confirm"
            id="passwordValid"
            onChange={handleChange}
            value={formState.passwordValid}
          ></input>
          <div className="createButtons">
            <button type="submit" className="createBtn">
              Create New Account
            </button>
            <button
              type="cancel"
              className="submit"
              id="cancelBtn"
              onClick={cancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
}
