import React from 'react'
// import { Link } from 'react-router-dom'
import registerimg from '../../Images/registerimg.png'
import { useNavigate } from 'react-router'

export default function Measurement() {
  const navigater=useNavigate();
  const nextpage=()=>{
    navigater('/ByerIndex');
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
            <h3 className="logintitle">Measurements</h3>
          </div>
          <div className="logap">
              <input className="inputtype" type="text" name="name" placeholder="Chest length"/>
          </div>
          <div className="logap">
              <input className="inputtype" type="text" name="" placeholder="Waist length"/>
          </div>
          <div className="logap">
            <input className="inputtype" type="text"  name="email" placeholder="Leg length"/>
          </div>
          <div className="logap">
              <input className="inputtype" type="text" name="address" placeholder="Coller length" />
          </div>
          <div className="pincity">
              <input className="samepici" type="text" name="pincode" placeholder="Arm length"/>
              <input className="samepici" type="text" name="city" placeholder="Shoulder Length" />
          </div>
          <div className="logap"> 
           <input type="submit"  className="btn btn-info lobut" value="Next" onClick={nextpage} />
          </div>
        </div>
      </div>
    </div>
  )
}
