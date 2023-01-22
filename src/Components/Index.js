import React, {  useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import { Link,Outlet } from 'react-router-dom'

export default function Index() {
    const [UserData,SetUserData]=useState([])
    const getdata= useCallback(()=>{
        axios.get('https://localhost:7288/api/Users')
        .then(Response=>{
            SetUserData(Response.data);
        })
        .catch(err=>{
            console.log(err);
        })
    },[]);
    useEffect(()=>{
        getdata();
    },[getdata])
    
    const deleteUser=(id,e)=>{
        e.preventDefault();
       console.log(id);
        axios.delete(`https://localhost:7288/api/Users/${id}`)
        .then(Response=>{
            console.log(Response);
        })
        .catch(err=>{
            console.log(err);
        })

        const newlist = UserData.filter((UserData)=>{
            return UserData.id !== id;
        });

        SetUserData(newlist);
    }

    // const setLocalStroge=(f,l,e,p,pas)=>{
    //     localStorage.setItem("first_Name",f);
    //     localStorage.setItem("last_Name",l);
    //     localStorage.setItem("email",e);
    //     localStorage.setItem("phoneno",p);
    //     localStorage.getItem("password",pas);
    // }
  return (
    <div className="maindivindex">
        <h3>Users</h3>
       <Link to="CreateUser"><button type="button" className="btn btn-primary">Create User</button></Link>
       
        <table>
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone number</th>
            </tr>
            </thead>
            <tbody>
            {
                UserData.map(data =>(
                        <tr key={data.id}>
                            <td>{data.first_Name}</td>
                            <td>{data.last_Name}</td>
                            <td>{data.email}</td>
                            <td>{data.phoneno}</td>
                            {/* <td><img src={data.avatar} alt="userimg" height="40" width="40"/></td> */}
                            {/* to={{pathname:`/EditUser/${data.id}`,}} */}
                            <td><Link to={{pathname:`Edit/${data.id}`,}}>
                            <button type="button" className="btn btn-info">Edit</button>
                                </Link>
                                |
                                <button type="button" onClick={(e)=>deleteUser(data.id,e)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                ))
            }
            </tbody>
            
        </table>
        <Outlet/>
    </div>
  )
}

// import React, { useEffect, useState } from "react"

// const Index = () => {
//   const [users, setUsers] = useState([])

//   const fetchData = () => {
//     fetch("https://reqres.in/api/users/")
//       .then(response => {
//         return response.json()
//       })
//       .then(data => {
//           console.log(data.data);
//         setUsers(data.data)
//       })
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])

//   return (
//     <div>
//       {users.length > 0 && (
//         <ul>
//           {users.map(user => (
//             <li key={user.id}>{user.email}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }

// export default Index

// import axios from "axios"
// import React, { useEffect, useState } from "react"

// const Index = () => {
//   const [users, setUsers] = useState([])

//   const fetchData = () => {
//     axios.get("https://reqres.in/api/users/").then(data => {
//       setUsers(data.data.data)
//       console.log(data.data.data);
//     })
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])

//   return (
//     <div>
//       {users.length > 0 && (
//         <ul>
//           {users.map(user => (
//             <li key={user.id}>{user.email}  </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }

// export default Index

// import React, { Component } from 'react'
// import axios from 'axios'

// export default class Index extends Component {
//      constructor() {
//          super();
//          this.state={
//              UserData:{}
//          }
//      }

//      componentDidMount(){
//          axios.get('https://reqres.in/api/users/')
//          .then(Response=>{
//              console.log(Response.data);
//              this.setState({
//                 UserData:Response.data
//              })
//          })
//          .catch(err=>{
//              console.log(err);
//          })
//      }
//   render() {

//     return (
//       <div>
//           {
              
//           }
//       </div>
//     )
//   }
// }
