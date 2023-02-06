import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
// import personicon from '../../Images/personicon.png'
import cart from '../../Images/cart.png'
import personimg from '../../Images/person1.png'
import search from '../../Images/search.png'
import { logout } from '../../redux/authSlice'





export default function Header() {
  const[Userdrop,Setuserdrop]=useState(false);
  const dispatch =useDispatch();
  const Clickdropdowm=()=>{
    if(Userdrop)
    {
      Setuserdrop(false);
    }
    else{
      Setuserdrop(true);
    }
  }
  return (
    <div>
    <div className="hefisdiv">
        <div className="hesecdiv">
            <div className="hethirdiv">
                <h3>OnlineTailor</h3>
            </div>
            <div className="hefordiv">
              <ul className="hefivdiv">
               <Link to={"/ByerIndex"}> <li className="links">Home</li></Link>
                <li>Clothes</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Help</li>
              </ul>
            </div>
            <div className="headimages">
               <img className="headerImg" src={search} alt="img"/>
               <button  onClick={Clickdropdowm}><img className="headerImg personimg" src={personimg} alt="img"/></button>
               <Link to={"Cart"} ><img className="headerImg" src={cart} alt="cartimg"/></Link>
            </div>
        </div>
        {Userdrop&&<div className="Userdrop">
            <div className="dropmain">
             <Link to={"BookDress"}> <small onClick={()=>Setuserdrop(false)} className="linkDress">Book Dress</small></Link>
             <Link to={"BookTailor"}><small onClick={()=>Setuserdrop(false)} >Book Tailor</small></Link>
              <small>Orders</small>
              <small>Profile</small>
              <small onClick={()=>dispatch(logout())}>Logout</small>
              
            </div>
          </div>
        }

        {/* if(Userdrop)
        {
          <div className="Userdrop">
            <div>

            </div>
          </div>
        } */}
      
    </div>
      <Outlet/>
    <footer id="footer">
      <div className="footdiv">
        <div className="footerdivs">
          <h5>Information</h5>
          <ul>
            <li>Delivery</li>
            <li>Secure Payment</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="footerdivs">
          <h5>Custom Links</h5>
          <ul>
            <li>Legal Notice</li>
            <li>Prices Drop</li>
            <li>New Products</li>
            <li>Best Sales</li>
          </ul>
        </div>
        <div className="footerdivs">
          <h5>My Account</h5>
          <ul>
            <li>Personal Info</li>
            <li>Orders</li>
            <li>Credit Slips</li>
            <li>Addresses</li>
            <li>Vouchers</li>
          </ul>
        </div>
        <div className="footerdivs">
          <h5>Follow Us</h5>
          <ul>
            <li>Faceback</li>
            <li>Twitter</li>
            <li>YouTube</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </footer>
    </div>
  )
}
