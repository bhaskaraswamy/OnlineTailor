import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';

export default function EditCustomer() {
    const {id}=useParams();
    const navigate=useNavigate();
    const indexAre={name:"",company_name:"",product_name:"",email:"",phoneno:""};
    const [Customer,SetCustomer]=useState(indexAre);
    const [Formerrors,Setformerrors]=useState({});
    const [Issubmit,SetIsSubmit]=useState(false);

    const OnchangeHandular=(e)=>{
        const {name,value}=e.target
        SetCustomer({...Customer,[name]:value});
    }
    
    const navigatetomainpage =()=>{
        navigate('/dashboard/Customer');
    }
    
    const SubmitHandle=(e)=>{
        e.preventDefault();
        Setformerrors(validateform(Customer))
        if(Object.keys(Formerrors).length === 0 && Issubmit )
        {
            axios.put(`https://localhost:7288/api/Customers/${id}`,Customer)
            .then(Response=>{
                console.log(Response.data);
                navigatetomainpage();
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }
    
    
    useEffect(()=>{
        axios.get(`https://localhost:7288/api/Customers/${id}`)
        .then(Response=>{
            SetCustomer(Response.data);
        })
        .catch(err=>{
            console.log(err);
        })
    },[id]);
    
    function validateform(Customer){
        SetIsSubmit(true)
        const errors={};
        if(!Customer.name)
        {
            errors.name="Please enter name";
        }

        if(!Customer.company_name)
        {
            errors.company_name="Please enter company name";
        }

        if(!Customer.product_name)
        {
            errors.product_name="Please enter product name";
        }

        if(!Customer.email)
        {
            errors.email="Please enter email";
        }

        if(!Customer.phoneno)
        {
            errors.phoneno="Please enter phone number";
        }

        return errors;
    }


  return (
        <div className="createformdiv">
            <h2>Edit Customer</h2>
            <form onSubmit={SubmitHandle}>
                <label>Name</label>
                <input type="text" name="name" value={Customer.name} onChange={OnchangeHandular} />
                <p className="error">{Formerrors.name}</p>

                <label>Company Name</label>
                <input type="text" name="company_name" value={Customer.company_name} onChange={OnchangeHandular}/>
                <p className="error">{Formerrors.company_name}</p>

                <label>Product Name</label>
                <input type="text" name="product_name" value={Customer.product_name} onChange={OnchangeHandular} />
                <p className="error">{Formerrors.product_name}</p>

                <label>Email</label>
                <input type="text" name="email" value={Customer.email}  onChange={OnchangeHandular} />
                <p className="error">{Formerrors.email}</p>

                <label>Phone number</label>
                <input type="text" name="phoneno" value={Customer.phoneno} onChange={OnchangeHandular} />
                <p className="error">{Formerrors.phoneno}</p>
                
                <input type="submit" className="btn btn-success" value="Update" />
                <Link to={{pathname:`/dashboard/Customer`}}>Back</Link>
            </form>     
        </div>
  )
}
