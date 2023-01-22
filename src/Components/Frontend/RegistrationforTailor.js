import React from 'react'
import { useNavigate } from 'react-router'
import registerimg from '../../Images/registerimg.png'
// import { Link } from 'react-router-dom'

export default function RegistrationforTailor() {
  const navigater =useNavigate();

  const getIndex=()=>{
    navigater('/TailorIndex');
  }

  return (
    <div className="lomadi">
      <style>{'body {background-color: #b419ef}'}</style>
      <div className="remadisec">
        <div className="loimdi">
          {/* <h3 className="weltext"></h3> */}
          <img src={registerimg} className="loimg" alt="img"/>
          {/* <small className="regitext">You don't have account?<button className="regbu" onClick={()=>{SetModal(true)}}>Register</button></small> */}
        </div>
        <div className="lotadiv">
          <div className="logap">
            <h3 className="logintitle">Register</h3>
          </div>
          <div className="logap">
              <input className="inputtype" type="text" name="name" placeholder="First Name"/>
          </div>
          <div className="logap">
              <input className="inputtype" type="text" name="" placeholder="Phone number"/>
          </div>
          <div className="logap">
            <input className="inputtype" type="text"  name="email" placeholder="Email"/>
          </div>
          <div className="logap">
              <input className="inputtype" type="text" name="address" placeholder="House no./street" />
          </div>
          <div className="pincity">
              <input className="samepici" type="text" name="pincode" placeholder="Pincode"/>
              <input className="samepici" type="text" name="city" placeholder="City/town" />
          </div>
          <div className="logap">
            <input className="inputtype" type="password" name="password" placeholder="Password"/>
          </div>
          <div className="logap"> 
            <input type="submit" onClick={getIndex}  className="btn btn-info lobut" value="Next" />
          </div>
        </div>
      </div>
    </div>
  )
}
