import React from 'react'
import './Style.css'
import { Link, Outlet} from 'react-router-dom'

export default function Sidebar() {
  return (
      <section className="outdiv">
        <div className="side1">
            <div className="side2">
                Deals
            </div>
            <div>
                <ul className="side3">
                    <Link to="/dashboard"> <li>DashBoard</li> </Link>
                    <Link to="Users"> <li>Users</li> </Link>
                    <Link to="Customer"><li>Customers</li></Link>
                    <li>Help</li>
                    <li>About</li>
                    <li>Contect</li>
                </ul>
            </div>
            <div className="side4">
               <Link to={'/'} > Logout</Link>
            </div> 
        </div> 
            <Outlet/>   
        </section>
  )
}
