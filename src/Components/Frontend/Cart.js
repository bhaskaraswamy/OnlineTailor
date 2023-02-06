import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
// import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import greypant from '../../Images/grey_pant.jpg'
import Blackshirtimg from '../../Images/Blackshirtimg.jpg'
import agents from '../../api/agent';
import Shirtlengthimg from '../../Images/Shirtlengthimg.jpg'
import pantLength from '../../Images/pantlength.png'


// import { useNavigate } from 'react-router'
// import registerimg from '../../Images/registerimg.png'
// import { Link } from 'react-router-dom'

export default function Cart() {
  const [ShirtsModel,SetShirtsModel]=useState(false);
  const [PantModel,SetPantModel]=useState(false);
  const [CartItems,SetCartItems]=useState([""]);
  const [getlengths,setlengths]=useState([""]);
  const removeCartitems=(id)=>{
      console.log(id);
      agents.cart.DeleteCartItem(id);
      SetCartItems(CartItems.filter(item => item.id !== id))
    }
    useEffect(()=>{
      const userid=localStorage.getItem("userId");
      agents.cart.getCart(userid).then(data=>SetCartItems(data))
      agents.Measurements.GetMeasurement(userid).then(measurements=>setlengths(measurements))
    //   console.log(getlengths);
  },[]);
 
  return (
    <div className="bookdiv">
        <div className="Ordermaindiv">
            <div>
                <h4>
                    Cart Items
                </h4>
            </div>
            <div className="Ordersecdiv">
                <small>Total Cart Items: {CartItems.length}</small>
                {/* <Dropdown options={options}  value={defaultOption} placeholder="Select an option" /> */}
            </div>
        </div>
        <div className="carditemsdiv">
            {
                (CartItems.length !==0 ?(
                CartItems.map(items=>(
                <div class="card text-dark bg-light mb-3 ordercard">
                    <div class="card-header orderheader">
                        <div className="yourorder">
                            <span className="labled" >Tailor Name</span>
                            <span className="d-block" key={items.id}>{items.tailor_name}</span>
                        </div>
                        <div className="yourorderid">
                            <span className="labled">Tailor phone number</span>
                            <span className="d-block" >{items.phoneNumber}</span>
                        </div>
                        <div className="yourorderid">
                            <span className="labled">Tailor Address</span>
                            <span className="d-block" >{items.houseno}</span>
                        </div>
                        <div className="yourorderid">
                            <span className="labled">Delivery Date</span>
                            <span className="d-block" >{items.date}</span>
                        </div>
                    </div>
                    <div class="card-body ordercardbody">
                        <div className="orderproduct">
                        <div className="orderproductfirst">
                            <img src={Blackshirtimg} className="clothimg" alt="shirt" />
                            <p>
                                <span className="labled">Name</span>
                                <span >{items.shirt_name}</span>
                            </p>
                            <p>
                                <span className="labled">Descrption</span>
                                <span className="Descrption">{items.shirt_Description}</span>
                            </p>
                            <p>
                                <span className="labled">Measurements</span>
                                <button className="regbu" onClick={()=>{SetShirtsModel(true)}}>Measurements</button>
                            </p>
                            
                        </div> 
                        <div>
                            <img src={greypant} className="clothimg" alt="pant" />
                            <p>
                                <span className="labled" >Name</span>
                                <span >{items.pant_name}</span>
                            </p>
                            <p>
                                <span className="labled">Descrption</span>
                                <span className="Descrption">{items.pant_Description}</span>
                                
                            </p>
                            <p>
                                <span className="labled">Measurements</span>
                                <button className="regbu" onClick={()=>{SetPantModel(true)}}>Measurements</button>
                            </p>
                            
                        </div> 
                        </div>
                        <div className="orderbuttons">
                            <button onClick={()=>removeCartitems(items.id)} className="btn btn-default">Remove</button>
                            {/* <button className="btn btn-default">Edit</button> */}
                            <button className="btn btn-default">Order</button>
                        </div>
                    </div>
                </div>
                ))
                ):(<h6>No Cart Items</h6>))
            }
            
        </div>
        <Modal isOpen={ShirtsModel} ariaHideApp={false} >
            <button className="crossbut" onClick={()=>SetShirtsModel(false)}>X</button>
                {
                    <div className="modmain">
                        <div>
                           <h6>Shirt Measurements</h6>
                        </div>
                        <div className="modbutt"> 
                            <div>  
                                <img  src={Shirtlengthimg} alt="shirtlength"/>
                            </div>
                            <div> 
                                <ol>
                                    <div className="flexelements">
                                        <li>
                                            <span className="labled">chestLength:-</span>
                                            <span >{getlengths.chestLength} cm</span>
                                        </li>
                                        <li>
                                            <span className="labled">shoulderlength:-</span>
                                            <span>{getlengths.shoulderlength} cm</span>
                                        </li>
                                    </div>
                                    <div className="flexelements">
                                        <li>
                                            <span className="labled">collerlength:-</span>
                                            <span>{getlengths.collerlength} cm</span>
                                        </li>
                                        <li>
                                            <span className="labled">arm length:-</span>
                                            <span>{getlengths.armlength} cm</span>
                                        </li>
                                    </div>
                                    <li>
                                        <span className="labled">waistlength:-</span>
                                        <span>{getlengths.waistlength} cm</span>
                                    </li>
                                </ol>
                            </div>
                           {/* <div className="flexelements">                  
                                <p>
                                    <span className="labled">chestLength:-</span>
                                    <span >{getlengths.chestLength}</span>
                                </p>
                                <p>
                                    <span className="labled">shoulderlength</span>
                                    <span>{getlengths.shoulderlength}</span>
                                </p>
                           </div>
                            <div className="flexelements">
                                <p>
                                <span className="labled">collerlength</span>
                                <span>{getlengths.collerlength}</span>
                                </p>
                                <p>
                                <span className="labled">arm length</span>
                                <span>{getlengths.armlength}</span>
                                </p>
                            </div>
                            <p>
                                <span className="labled">waistlength</span>
                                <span>{getlengths.waistlength}</span>
                            </p> */}
                        </div>
                    </div>
                
           }
        </Modal>
        <Modal isOpen={PantModel} ariaHideApp={false} >
            <button className="crossbut" onClick={()=>SetPantModel(false)}>X</button>
                {
                    <div className="modmain">
                        <div>
                           <h6>Pant Measurements</h6>
                        </div>
                        <div className="modbutt"> 
                        <div>  
                                <img  src={pantLength} alt="pantLength"/>
                            </div>
                            <div> 
                                <ol>
                                    <div className="flexelements">
                                        <li>
                                            <span className="labled">laglength:-</span>
                                            <span >{getlengths.laglength} cm</span>
                                        </li>
                                        <li>
                                            <span className="labled">Kneelength:-</span>
                                            <span>{getlengths.kneelength} cm</span>
                                        </li>
                                    </div>
                                    <div className="flexelements">
                                        <li>
                                            <span className="labled">Thighlength:-</span>
                                            <span>{getlengths.thighlength} cm</span>
                                        </li>
                                        <li>
                                            <span className="labled">FrontRise:-</span>
                                            <span>{getlengths.frontRise} cm</span>
                                        </li>
                                    </div>
                                    <li>
                                        <span className="labled">LegOpening:-</span>
                                        <span>{getlengths.legOpening} cm</span>
                                    </li>
                                </ol>
                            </div>                        
                            {/* 
                            <p>
                               <span className="labled">laglength</span>
                               <span>{getlengths.laglength} cm</span>
                            </p>
                            <p>
                               <span className="labled">Kneelength</span>
                               <span>{getlengths.Kneelength}</span>
                            </p>
                            <p>
                               <span className="labled">Thighlength</span>
                               <span>{getlengths.Thighlength} cm</span>
                            </p>
                            <p>
                                <span className="labled">FrontRise</span>
                                <span>{getlengths.FrontRise}</span>
                            </p>
                            <p>
                                <span className="labled">LegOpening</span>
                                <span>{getlengths.LegOpening}</span>
                            </p> */}
                        </div>
                    </div>
                
           }
        </Modal>
    </div>
  )
}
