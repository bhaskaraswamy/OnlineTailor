import React, { useState } from 'react'
import Modal from 'react-modal'
import { Link,useNavigate } from 'react-router-dom'
// import agents from '../../api/agent';
import loginimg from '../../Images/loginImg.png'
import { useForm } from 'react-hook-form';
import { useDispatch,useSelector } from 'react-redux';
import { signInUser } from '../../redux/authSlice';

// import { useNavigate } from 'react-router'
// import axios from 'axios';
// import {toast} from 'react-toastify';



export default function FrontendLogin() {
  // const initailData={Email:"",Password:""};
  // const [AuthUser,SetAuthUser]=useState(initailData)
  // const [error,seterror]=useState({Emailerror:"",Passworderror:""});
  const [getModal,SetModal]=useState(false);

  const getUser=useSelector((state)=>state.user.user);

  console.log("__________-selector_______",getUser);
  const navigater=useNavigate();

   const {register,handleSubmit,formState:{errors}}=useForm({});

   const dispatch =useDispatch();
  //  const navigate=useNavigate();

  const Onsubmitform=(data)=>{
    dispatch(signInUser(data));
  }

 if(getUser.token && getUser.typeofUser==="Buyer")
 {
   navigater("/ByerIndex")
 }else if(getUser.token && getUser.typeofUser==="Tailor"){
   navigater("/TailorIndex")
 }
  // const OnChangeHandular=(e)=>{
  //   const {name,value}=e.target
  //   SetAuthUser({...AuthUser,[name]:value});
  // }

  
  // const nextpage=()=>{
  //   navigater('/ByerIndex');
  // }
  
  // const FormHandling=(e)=>{
  //   e.preventDefault();
  //   agents.Authentication.login(AuthUser)
    
  // }

 
  



  return (
    <div className="lomadi">
      <style>{'body {background-color: #b419ef}'}</style>
      <div className="lomadisec">
        <div className="loimdi">
          <h3 className="weltext">Welcome,Back</h3>
          <img src={loginimg} className="loimg" alt="img"/>
          <small className="regitext">You don't have account?<button className="regbu" onClick={()=>{SetModal(true)}}>Register</button></small>
        </div>
        <div className="lotadiv">
          <div className="header">
            <h3>OnlineTailor</h3>
          </div>
          <div className="logap">
            <h3 className="logintitle">Login</h3>
          </div>
          <form onSubmit={handleSubmit(Onsubmitform)}>
            <div className="logap">
              <input className="inputtype" type="text"  name="Email" placeholder="Email" {...register('Email',{required:"Please enter Email",pattern:{
                value:/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/,
                message:"Not a valid Email"
              }})}/>
            </div>
            <small className="error">{errors?.Email?.message}</small>
            
            <div className="logap">
              <input className="inputtype" type="password" name="Password" placeholder="Password" {...register('Password',{required:"Please enter Password"})} />
            </div>
            <small className="error">{errors?.Password?.message}</small>
            <div className="logap"> 
              <input type="submit"  className="btn btn-info lobut" value="login" />
            </div>
          </form>
        </div>
      </div>
      <Modal isOpen={getModal} ariaHideApp={false} >
        <button className="crossbut" onClick={()=>SetModal(false)}>X</button>
        <div className="modmain">
          <div>
           <h2>Please select which type of User you are</h2>
          </div>
          <div className="modbutt">
           <Link to={{pathname: `/Registration/${"Buyer"}`}}> <button type="button" className="btn btn-primary buyerbut">Buyer</button></Link>
           <Link to={{pathname: `/Registration/${"Tailor"}`}}><button type="button" className="btn btn-info Tailorbut">Tailor</button></Link>
          </div>
        </div>
      </Modal>
      
    </div>
  )
}
