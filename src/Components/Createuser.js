import React, { useCallback, useEffect, useState } from 'react'
import './Style.css'
import { Link,useNavigate} from 'react-router-dom'
import axios from 'axios';

export default function Createuser() {
    const navigater=useNavigate();
    const intialValues={first_Name:"",last_Name:"",email:"",phoneno:"",password:""}
    const [User,addUser]=useState(intialValues);
    const [FormErrors,SetFormErrors]=useState({});
    const [Issubmit,Setissubmit]=useState(false);

    const OnChangeHandular=(e)=>{
        const {name,value}=e.target
        addUser({...User,[name]:value});
    }

    const handlesubmit=(e)=>{
        e.preventDefault();
       SetFormErrors(validation(User));
       Setissubmit(true);
       console.log("submithandle");
    }

    const navigaterpage=useCallback(()=>{
        navigater('/dashboard/Users')
    },[navigater]);

    useEffect(()=>{
        console.log("useeffect");
        if(Object.keys(FormErrors).length === 0 && Issubmit )
        {
            console.log("*******useeffect*********",FormErrors);
            axios.post("https://localhost:7288/api/Users",User)
                .then(Response=>{
                    console.log(Response.data)
                    navigaterpage();
                    
                })
                .catch(err=>{
                    console.log(err)
                })
            }
    },[FormErrors,Issubmit,User,navigaterpage]);

    const validation=(values)=>{
        const errors={};
        const regex=/\S+@\S+\.\S+/;
        if(!values.first_Name){
            errors.first_Name="First Name is Required!";
        }
        if(!values.last_Name){
            errors.last_Name="Last Name is Required!";
        }
        if(!values.email){
            errors.email="Email is Required!";
        }else if(!regex.test(values.email))
        {
            errors.email="Email is Not valid";
        }
        if(!values.phoneno){
            errors.phoneno="Phone number is Required!";
        }
        if(!values.password){
            errors.password="Password is Required!";
        }
        return errors;
    }

  return (
    <div className="createformdiv">
        <h4>Create User</h4>
        <form onSubmit={handlesubmit} className="confrom">
            <label >First Name</label>
            <input type="text" id="fname" name="first_Name" placeholder="Your First Name.." value={User.first_Name} onChange={OnChangeHandular} />
            <p className="error">{FormErrors.first_Name}</p>

            <label >Last Name</label>
            <input type="text" id="lname" name="last_Name" placeholder="Your Last Name.." value={User.last_Name} onChange={OnChangeHandular} />
            <p className="error">{FormErrors.last_Name}</p>

            <label >Email</label>
            <input type="text" id="email" name="email" placeholder="Your Email.." value={User.email} onChange={OnChangeHandular} />
            <p className="error">{FormErrors.email}</p>

            <label >Phone Number</label>
            <input type="text" id="phoneno" name="phoneno" placeholder="Your Phone number.." value={User.phoneno} onChange={OnChangeHandular} />
            <p className="error">{FormErrors.phoneno}</p>


            <label >Password</label>
            <input type="text" id="password" name="password" placeholder="Your Password.." value={User.password} onChange={OnChangeHandular} />
            <p className="error">{FormErrors.password}</p>
        
            <input type="submit" value="Submit"/>
            <Link to={{pathname:`/dashboard/Users`}}>Back</Link>
        </form>
    </div>
  )
}
