import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function CustomersIndex() {
    const [Customers,SetCustomers]= useState([]);

    useEffect(()=>{
        axios.get('https://localhost:7288/api/Customers')
        .then(Response=>{
            SetCustomers(Response.data);
        })
        .catch(err =>{
            console.log(err);
        })
    },[]);

    const deleteCustomer=(id,e)=>{
        e.preventDefault();
        axios.delete(`https://localhost:7288/api/Customers/${id}`)
        .then(Response=>{
            console.log(Response.data);
        })
        .catch(err=>{
            console.log(err);
        })

       var  newList = Customers.filter((Customers)=>{
           return Customers.id !== id;
       });
        
       SetCustomers(newList);
    }
  return (
    <div className="maindivindex">
        <h2>Customers</h2>
        <Link to={"CreateCustomer"}><button className="btn btn-primary">Create Customer</button></Link>
        <table>
            <thead>
                <tr>     
                    <th>Name</th>
                    <th>Company Name</th>
                    <th>Product Name</th>
                    <th>Email</th>
                    <th>Phone number</th>
                </tr>
            </thead>
            <tbody>
                    {
                        Customers.map(data =>(
                        <tr key={data.id}>
                            <td>{data.name}</td>
                            <td>{data.company_name}</td>
                            <td>{data.product_name}</td>
                            <td>{data.email}</td>
                            <td>{data.phoneno}</td>
                            <td><Link to={{pathname:`EditCustomer/${data.id}`}}><button className="btn btn-info">Edit</button></Link>|<button className="btn btn-danger" onClick={(e)=>deleteCustomer(data.id,e)}>Delete</button></td>
                        </tr>
                        ))
                    }
            </tbody>
        </table>
    </div>
  )
}
