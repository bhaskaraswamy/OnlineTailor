import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

export default function Login() {
  const initailData={email:"",password:""};
  const [AuthUser,SetAuthUser]=useState(initailData)
  const [Formerrors,SetFormerrors]=useState("");
  const [Issubmit,SetIssubmit] =useState(false);
  const navigate =useNavigate();

  const OnChangeHandular=(e)=>{
    const {name,value}=e.target
    SetAuthUser({...AuthUser,[name]:value});
  }

  const FormHandling=(e)=>{
    e.preventDefault();
    SetFormerrors(validationForm(AuthUser))
    SetIssubmit(true)
  }
  const navigatetopage=useCallback(()=>{
    navigate('/dashboard')
  },[navigate]);

  useEffect(()=>{
    if(Object.keys(Formerrors).length === 0 && Issubmit)
    {
      axios.post(`https://localhost:7288/app/Auth?email=${AuthUser.email}&password=${AuthUser.password}`)
      .then(Response=>{
        console.log(Response.data);
        navigatetopage();
      })
      .catch(err=>{
        console.log(err.message);
      })
    }

  },[Formerrors,Issubmit,navigatetopage,AuthUser.email,AuthUser.password]);

  const validationForm=(Customer)=>{
    const errors={};
    if(!Customer.email)
    {
        errors.email="Please enter email!";
    }

    if(!Customer.password)
    {
        errors.password="Please enter Password!";
    }

    return errors;
}


  return (
    <div className="login">
        <form onSubmit={FormHandling}>
          <div className="loginformdiv1">
            <div className="samedivs">
              <h3>Login</h3>
            </div>
            <div className="samedivs">
              {/* <label>Email</label> */}
              <input className="inemail g" type="email"  name="email" placeholder="Email" value={AuthUser.email} onChange={OnChangeHandular} />
              <p className="error">{Formerrors.email}</p>
            </div>

            <div className="samedivs">
              {/* <label>Password</label> */}
              <input className="inPassword g" type="password" name="password" placeholder="Password" value={AuthUser.password} onChange={OnChangeHandular} />
              <p className="error">{Formerrors.password}</p>
            </div>
            <p className="forgotlink">forgot Password?</p>
            
            <div className="samedivs">
               <input type="submit" className="btn btn-success loginbut" value="Login" />
               <Link to="/Register"><input className="btn btn-info loginbut"  value="Register"/></Link>
            </div>
          </div>
        </form>
    </div>
  )
}
