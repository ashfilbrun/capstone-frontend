import React from "react";
import Context from '../Context'
import { useContext } from "react";
import Nav from './Nav'

export default function Header () {

  const { userInfo, setUserInfo } = useContext(Context)

  if (userInfo.username === '') {
    return ( 
      <div>
        <div className="header">
          <h1>Chronic/ally</h1>
        </div>
      </div>
    )
  } else {
    return (
      <div className="header">
        <div>
          <div>
            <h1>Chronic/ally</h1>
          </div>
          <Nav />
        </div>
      </div>
    )
  }
}