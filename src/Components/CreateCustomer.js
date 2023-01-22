import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import './Style.css'

export default function CreateCustomer() {
    const navigate=useNavigate();
    const initialValues={name:"",company_name:"",product_name:"",email:"",phoneno:""}
    const [Customer,SetCustomer]=useState(initialValues);
    const [Formerrors,SetFormerrors]=useState("");
    const [Issubmit,SetIssubmit] =useState(false);

    const OnchangeHandular=(e)=>{
        const {name,value}=e.target
        SetCustomer({...Customer,[name]:value})
    }

    const SubmitHandular=(e)=>{
        e.preventDefault();
        SetFormerrors(validationForm(Customer))
        SetIssubmit(true)
    }

    const navigatetopage=useCallback(()=>{
        navigate("/dashboard/Customer");
    },[navigate]);


    useEffect(()=>{
        if(Object.keys(Formerrors).length === 0 && Issubmit)
        {
            axios.post("https://localhost:7288/api/Customers",Customer)
            .then(Response=>{
                console.log(Response.data);
                navigatetopage();
            })
            .catch(err=>{
                console.log(err);
            })
        }
    },[Formerrors,Customer,Issubmit,navigatetopage]);

   const validationForm=(Customer)=>{
       const errors={};
       if(!Customer.name)
       {
           errors.name="Please enter name!";
       }

       if(!Customer.company_name)
       {
           errors.company_name="Please enter Company Name!";
       }

       if(!Customer.product_name)
       {
           errors.product_name="Please enter product name!";
       }

       if(!Customer.email)
       {
           errors.email="Please enter email!";
       }

       if(!Customer.phoneno)
       {
           errors.phoneno="Please enter Phone number!";
       }

       return errors;
   }



  return (
    <div className="createformdiv">
        <h2>Create Customer</h2>
        <form onSubmit={SubmitHandular}>
            <label>Name</label>
            <input type="text" name="name" value={Customer.name} onChange={OnchangeHandular}/>
            <p className="error">{Formerrors.name}</p>

            <label>Company name</label>
            <input type="text" name="company_name" value={Customer.company_name} onChange={OnchangeHandular}/>
            <p className="error">{Formerrors.company_name}</p>

            <label>Product Name</label>
            <input type="text" name="product_name" value={Customer.product_name} onChange={OnchangeHandular}/>
            <p className="error">{Formerrors.product_name}</p>

            <label>Email</label>
            <input type="text" name="email" value={Customer.email} onChange={OnchangeHandular}/>
            <p className="error">{Formerrors.email}</p>

            <label>Phone Number</label>
            <input type="text" name="phoneno" value={Customer.phoneno} onChange={OnchangeHandular}/>
            <p className="error">{Formerrors.phoneno}</p>

            <input type="submit" value="Create" />
            <Link to={{pathname:`/dashboard/Customer`}}>Back</Link>
        </form>
    </div>
  )
}
