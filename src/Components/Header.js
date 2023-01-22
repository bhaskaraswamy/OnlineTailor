import React from 'react'
import "./Style.css"
import {loginimg} from "../Images/LoginImg"

export default function Header() {
  return (
      <div className="Dev2">
        <img src={loginimg} alt="img"/>
        <p>Hello</p>
      </div>
    
  )
}
