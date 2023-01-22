import React, { useEffect, useState } from 'react'
import './Style.css'
import { Link,useNavigate,useParams} from 'react-router-dom'
import axios from 'axios';

export default function Edituser() {
    const {id}=useParams();
    console.log(id);
    const navigater=useNavigate();
    const intialValues={first_Name:"",last_Name:"",email:"",phoneno:"",password:""}
    const [User,addUser]=useState(intialValues);
    // const [first_Name,setfirst_Name]=useState("");
    // const [last_Name,setlast_Name]=useState("");
    // const [email,setemail]=useState("");
    // const [phoneno,setphoneno]=useState("");
    // const [password,setpassword]=useState("");
    const [FormErrors,SetFormErrors]=useState({});
    const [Issubmit,Setissubmit]=useState(false);

    const OnChangeHandular=(e)=>{
        const {name,value}=e.target
        addUser({...User,[name]:value});
    }
    
    const handlesubmit=(e)=>{
        e.preventDefault();
        

        SetFormErrors(validation(User));
        //    Setissubmit(true);
        //    console.log("submithandle");
        if(Object.keys(FormErrors).length === 0 && Issubmit)
        {
            
            axios.put(`https://localhost:7288/api/Users/${id}`,User)
                .then(Response=>{
                    console.log(Response.data)
                    // navigaterpage();
                    navigater('/dashboard/Users')
                    
                    
                })
                .catch(err=>{
                    console.log(err)
                })
        }

        
        
    }

    // const navigaterpage=useCallback(()=>{
    //     navigater('/Users')
    // },[navigater]);
    
    // axios.get(`https://localhost:7288/api/Users/${id}`)
    //      .then(Response=>{
    //          console.log(Response.data);
    //          addUser(Response.data);
    //      })
    //      .catch(err=>{
    //          console.log(err);
    //      })
    useEffect(()=>{
        console.log("useeffect");
        axios.get(`https://localhost:7288/api/Users/${id}`)
         .then(Response=>{
             console.log(Response.data);
             addUser(Response.data)
            //  setfirst_Name(Response.data.first_Name)
            //  setlast_Name(Response.data.last_Name)
            //  setemail(Response.data.email)
            //  setphoneno(Response.data.phoneno)
            //  setpassword(Response.data.password)

            //  addUser(Response.data);
         })
         .catch(err=>{
             console.log(err);
         })
        // setfirst_Name(localStorage.getItem("first_Name"));
        // setlast_Name(localStorage.getItem("last_Name"));
        // setemail(localStorage.getItem("email"));
        // setphoneno(localStorage.getItem("phoneno"));
        // setpassword(localStorage.getItem("password"));
        // addUser({first_Name:localStorage.getItem("first_Name"),last_Name:localStorage.getItem("last_Name"),email:localStorage.getItem("email"),})


        // if(Object.keys(FormErrors).length === 0 && Issubmit )
        // {
        //     console.log("*******useeffect*********",FormErrors);
    },[id]);

    const validation=(User)=>{
        Setissubmit(true);
        const errors={};
        const regex=/\S+@\S+\.\S+/;
        if(!User.first_Name){
            errors.first_Name="First Name is Required!";
        }
        if(!User.last_Name){
            errors.last_Name="Last Name is Required!";
        }
        if(!User.email){
            errors.email="Email is Required!";
        }else if(!regex.test(User.email))
        {
            errors.email="Email is Not valid";
        }
        if(!User.phoneno){
            errors.phoneno="Phone number is Required!";
        }
        if(!User.password){
            errors.password="Password is Required!";
        }
        return errors;
    }

  return (
    <div className="createformdiv">
        <h4>Edit User</h4>
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

