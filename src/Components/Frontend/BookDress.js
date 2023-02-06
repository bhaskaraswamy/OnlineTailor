import React, { useEffect, useState } from 'react'
import Blackshirtimg from '../../Images/Blackshirtimg.jpg'
// import whiteshirt from '../../Images/whiteshirtimg.jpg'
// import Blackpant from'../../Images/black_pant.jpg'
import greypant from '../../Images/grey_pant.jpg'
import Tailorman from '../../Images/Tailorman.jpg'
// import SecTailorman from '../../Images/sec_Tailor_man.jpg'
// import thirdTailorImg from '../../Images/third_Tailor_img.jpg'
// import axios from 'axios'
import agents from '../../api/agent'
import { useDispatch,useSelector} from 'react-redux'
import { Addproducts,Deleteproduct } from '../../redux/productSlice'
import {useForm} from 'react-hook-form'
// import {Calendar} from 'antd'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
// import dayjs from 'dayjs';
import moment from 'moment';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
// import { Link } from 'react-router-dom'
// import Measurement from './Measurement';


export default function BookDress() {
    // const stylebread={
        //     name:"--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);"
        // }
    const Userid=localStorage.getItem("userId");
    const [value, onChange] = useState();
    const [ids,setids]=useState({shirtId:0,pantId:0,TailorId:0,date:0});
    const[Index,setIndex]=useState("");
    const[Clothes,setClothes]=useState([""]);
    const[Tailor,SetTailor]=useState("");
    const Initialmeasurements={chestLength:"",shoulderlength:"",collerlength:"",armlength:"",waistlength:"",laglength:"",kneelength:"",thighlength:"",frontRise:"",legOpening:"",userid:Userid};
    const {register,setValue,handleSubmit,formState:{errors}}=useForm({
        defaultValues:{
            Initialmeasurements
        }
    });
    const navigate=useNavigate();
    // const[Measurements,Setmeasurements]=useState(Initialmeasurements);
    const navarray={shirts:"nav-link active",pants:"nav-link disabled",measure:"nav-link disabled",Tailor:"nav-link disabled",datetime:"nav-link disabled",terms:"nav-link disabled"};
    const[IndexActive,SetIndexActive]=useState(navarray)
    const[Shirtskip,SetShirtskip]=useState(false);
    const Clickhandular=(a)=>{
        SetIndexActive(a)
    }

   
    const dispatch= useDispatch();
    console.log("-----userid----------",Userid);
   const  SubmitMeasurements =(data)=>{
       console.log("__datatomeas----",data.Initialmeasurements);
       agents.Measurements.AddMeasurement(data.Initialmeasurements).then(toast.success("successfully submited measurements"));
       console.log(errors);
       setIndex("Tailor");
       Clickhandular({shirts:"nav-link disabled",pants:"nav-link disabled",measure:"nav-link disabled",Tailor:"nav-link active",datetime:"nav-link disabled",terms:"nav-link disabled"});
    }

    
    // const OnchangeMeasurements=(e)=>{
    //     const {name,value}=e.target
    //     Setmeasurements({...Measurements,[name]:value});
    // }

const disabledate = ({ activeStartDate, date, view }) => {
    return date <= new Date()
 }

 const onchangedate = (date) => {
    onChange(date);
    // console.log(date.toString());
    var formatedate=  moment(date).format("YYYY-MM-DD");

    dispatch(Addproducts({Date:formatedate}));
    setids({...ids,date:date})
   } 
    console.log(ids);

    const Alldata=useSelector((state)=>state.product.products);
    const AddID=(e)=>{
        const {name,value}=e.target
        console.log("-----targetvalues-----",name,value);
        setids({...ids,[name]:value});
    }

    const OnsubmitAlldata=()=>{
        console.log("--alldata--",Object.assign({UserId:Userid}, ...Alldata));
        agents.cart.addcart(Object.assign({UserId:Userid}, ...Alldata)).finally(toast.success("All Items added to cart successfully "));
        navigate("/ByerIndex/Cart")
    }
    useEffect(()=>{
        agents.Clothes.list().then(allClothes => setClothes(allClothes));
        agents.Measurements.GetMeasurement(Userid).then(lengths => setValue("Initialmeasurements",{chestLength:lengths.chestLength,shoulderlength:lengths.shoulderlength,collerlength:lengths.collerlength,armlength:lengths.armlength,waistlength:lengths.waistlength,laglength:lengths.laglength,kneelength:lengths.kneelength,thighlength:lengths.thighlength,frontRise:lengths.frontRise,legOpening:lengths.legOpening,userid:lengths.userid},{shouldValidate:true}));
        agents.Users.listofTailors().then(Tailor => SetTailor(Tailor));
    },[Userid,setValue]);
    
  return (
      <div className="bookdiv">
        <div className="bread">
            <nav  aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">Home</li>
                    <li className="breadcrumb-item active" aria-current="page">Book Dress</li>
                </ol>
            </nav>
        </div>
        <div className="booksidemain">
            <div className="booksidesec">
                
                <div className="booksidefor">
                    <div className="card text-center">
                        <div className="card-header">
                            <ul className="nav nav-tabs card-header-tabs">
                                <li className="nav-item">
                                    <button className={IndexActive.shirts} aria-current="true" onClick={()=>{setIndex("shirts");Clickhandular({shirts:"nav-link active",pants:"nav-link",measure:"nav-link",Tailor:"nav-link",datetime:"nav-link",terms:"nav-link"}) }}>Shirt Clothes</button>
                                </li>
                                <li className="nav-item">
                                    <button className={IndexActive.pants}  onClick={()=>{setIndex("pants");Clickhandular({shirts:"nav-link",pants:"nav-link active",measure:"nav-link",Tailor:"nav-link",datetime:"nav-link",terms:"nav-link"})}}>Pant Clothes</button>
                                </li>
                                <li className="nav-item">
                                    <button className={IndexActive.measure} onClick={()=>{setIndex("Measurements");Clickhandular({shirts:"nav-link",pants:"nav-link",measure:"nav-link active",Tailor:"nav-link",datetime:"nav-link",terms:"nav-link"})}}   aria-disabled="true">Measurements</button>
                                </li>
                                <li className="nav-item">
                                    <button className={IndexActive.Tailor} onClick={()=>{setIndex("Tailor");Clickhandular({shirts:"nav-link",pants:"nav-link",measure:"nav-link",Tailor:"nav-link active",datetime:"nav-link",terms:"nav-link"})}}  aria-disabled="true">Tailor</button>
                                </li>
                                <li className="nav-item">
                                    <button className={IndexActive.datetime} onClick={()=>{setIndex("datetime");Clickhandular({shirts:"nav-link",pants:"nav-link",measure:"nav-link",Tailor:"nav-link",datetime:"nav-link active",terms:"nav-link"})}}  aria-disabled="true">Date & Time</button>
                                </li>
                                <li className="nav-item">
                                    <button className={IndexActive.terms} onClick={()=>{setIndex("terms");Clickhandular({shirts:"nav-link",pants:"nav-link",measure:"nav-link",Tailor:"nav-link",datetime:"nav-link",terms:"nav-link active"})}}  aria-disabled="true">Terms & Conditions</button>
                                </li>
                            </ul>
                        </div>
                        {/* <div className="card-body">
                           <div>
                               <div>

                               </div>
                           </div>
                        </div> */}
                       {(Index ==="Measurements" &&
                       <div>
                           <div>
                               <h3>Measurements</h3>
                           </div>
                                <form  onSubmit={handleSubmit(SubmitMeasurements)}>
                                  <div className="shirtmaindiv">
                                    <div>
                                        <h5>Shirt Sizes</h5>
                                            <div className="twoinputscomb">
                                                <div>
                                                    <div className="allinputsmeas">
                                                            <label htmlFor="chest" className="form-label">Chest length(cm)</label>
                                                            <input type="number" className="chestinput" id="chest" name="chestLength" /*value={Measurements.chestLength} onChange={OnchangeMeasurements}*/ {...register('Initialmeasurements.chestLength',{required:"Please enter chest Length",maxLength:4})}/>
                                                    </div>
                                                    <small className="error">{errors?.Initialmeasurements?.chestLength?.message}</small>
                                                </div>
                                                <div>
                                                    <div className="allinputsmeas">
                                                        <label htmlFor="shoulder" className="form-label">Shoulder length(cm)</label>
                                                        <input type="number" className="shoulderinput" id="shoulder" name="shoulderlength" /*value={Measurements.shoulderlength} onChange={OnchangeMeasurements}*/ {...register('Initialmeasurements.shoulderlength',{required:"Please enter shoulder length",maxLength:4})} />
                                                    </div>
                                                    <small className="error">{errors?.Initialmeasurements?.shoulderlength?.message}</small>
                                                </div>
                                            </div>
                                        
                                        <div className="twoinputscomb">
                                                <div>
                                                    <div className="allinputsmeas">
                                                        <label htmlFor="coller" className="form-label">Coller length(cm)</label>
                                                        <input type="number" className="collerinput" id="coller" name="collerlength"  /* value={Measurements.collerlength} onChange={OnchangeMeasurements}*/  {...register('Initialmeasurements.collerlength',{required:"Please enter coller length",maxLength:4})} />
                                                    </div>
                                                    <small className="error">{errors?.Initialmeasurements?.collerlength?.message}</small>
                                                </div>
                                                <div>
                                                    <div className="allinputsmeas">
                                                        <label htmlFor="arm" className="form-label">Arm length(cm)</label>
                                                        <input type="number" className="arminput" id="arm" name="armlength" /*value={Measurements.armlength} onChange={OnchangeMeasurements}*/ {...register('Initialmeasurements.armlength',{required:"Please enter arm length",maxLength:4})} />
                                                    </div>
                                                    <small className="error">{errors?.Initialmeasurements?.armlength?.message}</small>
                                                </div>
                                        </div>
                                        <div>
                                            <div className="allinputsmeas">
                                                <label htmlFor="Waist" className="form-label">Waist length(cm)</label>
                                                <input type="number" className="Waistinput" id="Waist" name="waistlength" /*value={Measurements.waistlength} onChange={OnchangeMeasurements}*/{...register('Initialmeasurements.waistlength',{required:"Please enter waistlength",maxLength:4})} />
                                            </div>
                                            <small className="error">{errors?.Initialmeasurements?.waistlength?.message}</small>
                                        </div>
                                    </div>
                                    <div>
                                        <h5>Pants Sizes</h5>
                                        <div className="twoinputscomb">
                                            <div>
                                                <div className="allinputsmeas">
                                                        <label htmlFor="lag" className="form-label">lag length(cm)</label>
                                                        <input type="number" className="laginput" id="lag" name="laglength" /*value={Measurements.laglength} onChange={OnchangeMeasurements}*/ {...register('Initialmeasurements.laglength',{required:"Please enter lag length",maxLength:4})} />
                                                </div>
                                                <small className="error">{errors?.Initialmeasurements?.laglength?.message}</small>
                                            </div>
                                            <div>
                                                <div className="allinputsmeas">
                                                    <label htmlFor="knee" className="form-label">Knee length(cm)</label>
                                                    <input type="number" className="kneeinput" id="knee" name="kneelength" /*value={Measurements.Kneelength} onChange={OnchangeMeasurements}*/ {...register('Initialmeasurements.kneelength',{required:"Please enter Knee length",maxLength:4})} />
                                                </div>
                                                <small className="error">{errors?.Initialmeasurements?.kneelength?.message}</small>
                                            </div>
                                        </div>
                                        <div className="twoinputscomb">
                                            <div>
                                                <div className="allinputsmeas">
                                                    <label htmlFor="Thigh" className="form-label">Thigh length(cm)</label>
                                                    <input type="number" className="Thighinput" id="Thigh" name="thighlength" /*value={Measurements.Thighlength} onChange={OnchangeMeasurements}*/ {...register('Initialmeasurements.thighlength',{required:"Please enter Thigh length",maxLength:4})} />
                                                </div>
                                                <small className="error">{errors?.Initialmeasurements?.thighlength?.message}</small>
                                            </div>
                                            <div>
                                                <div className="allinputsmeas">
                                                    <label htmlFor="FrontRise" className="form-label">Front Rise(cm)</label>
                                                    <input type="number" className="Frontriseinput" id="FrontRise" name="frontRise" /*value={Measurements.FrontRise} onChange={OnchangeMeasurements}*/  {...register('Initialmeasurements.frontRise',{required:"Please enter Front rice length",maxLength:4})}/>
                                                </div>
                                                <small className="error">{errors?.Initialmeasurements?.frontRise?.message}</small>
                                            </div>
                                        </div>
                                        <input {...register("Initialmeasurements.userid", { value: Userid })} type="hidden" />
                                        <div>
                                            <div className="allinputsmeas">
                                                <label htmlFor="LegOpening" className="form-label">Leg Opening(cm)</label>
                                                <input type="number" className="leginput" id="legOpening" /*value={Measurements.LegOpening} onChange={OnchangeMeasurements}*/ {...register('Initialmeasurements.legOpening',{required:"Please enter Leg Opening length",maxLength:4})} />
                                            </div>
                                            <small className="error">{errors?.Initialmeasurements?.legOpening?.message}</small>
                                        </div>
                                    </div>
                                </div>
                                    <div className="meas_submit_button">
                                       <button onClick={()=>{setIndex("pants");Clickhandular({shirts:"nav-link disabled",pants:"nav-link active",measure:"nav-link disabled",Tailor:"nav-link disabled",datetime:"nav-link disabled",terms:"nav-link disabled"})}} className="btn btn-warning skipbutton">Back</button>
                                       <input className="btn btn-success" type="submit"  value="submit"/>
                                    </div>
                                </form>
                           {/* <div>
                               <button onClick={()=>{setIndex("Tailor");Clickhandular({shirts:"nav-link disabled",pants:"nav-link disabled",measure:"nav-link disabled",Tailor:"nav-link active",datetime:"nav-link disabled",terms:"nav-link disabled"})}}  className="btn btn-success">Next</button>
                           </div> */}
                       </div>
                       ) 
                       ||(Index ==="Tailor" && <div>
                            <div className="Tailorcards row row-cols-1 row-cols-sm-2 row-cols-md-3 g-2">
                                {
                                    Tailor.map(t=>(
                                <div className="card cardwidth">
                                    <img src={Tailorman} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{t.userName}</h5>
                                        <p className="card-text">I have 10 years experience in stitching men's shirts and pants </p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">{t.houseno}</li>
                                        <li className="list-group-item">{t.city}</li>
                                        <li className="list-group-item">{t.pincode}</li>
                                    </ul>
                                    <div className="card-body">
                                    { ids.TailorId===(t.id).toString() ? (
                                       <button className="btn btn-info" onClick={()=>{dispatch(Deleteproduct({shirtId:t.id}));setids({...ids,TailorId:0})}} >Remove from Cart</button>
                                    ):(<button className="btn btn-info" name="TailorId" value={t.id}  onClick={(e)=>{dispatch(Addproducts({TailorId:t.id}));AddID(e)}} >Add to Cart</button>)
                                     }
                                        {/* <button className="btn btn-info">Add</button> */}
                                    </div>
                                </div>
                                    ))
                                }
                               
                            </div>
                            <div>
                            <button onClick={()=>{setIndex("Measurements");Clickhandular({shirts:"nav-link disabled",pants:"nav-link disabled",measure:"nav-link active",Tailor:"nav-link disabled",datetime:"nav-link disabled",terms:"nav-link disabled"})}} className="btn btn-warning skipbutton">Back</button>
                            {ids.TailorId ===0 ?(
                            <button onClick={()=>toast.error("Please add the Tailor to cart")} className="btn btn-success">Next</button>):(<button onClick={()=>{setIndex("datetime");Clickhandular({shirts:"nav-link disabled",pants:"nav-link disabled",measure:"nav-link disabled",Tailor:"nav-link disabled",datetime:"nav-link active disabled",terms:"nav-link disabled"})}} className="btn btn-success">Next</button>)}
                            </div>
                       </div>) 
                       || (Index ==="datetime" && 
                        <div>
                            <div className="cardmaindiv row row-cols-1 row-cols-sm-2 row-cols-md-3 g-2">
                                <div className="col">
                                    <Calendar onChange={onchangedate} value={value} tileDisabled={disabledate}  /*onClickDay={()=>onclickday()}*//* formatDay ={(locale, date) => dayjs(date).format('YYYY-MM-DD')}*/  />
                                </div>    
                            </div>
                            <div>
                            <button onClick={()=>{setIndex("Tailor");Clickhandular({shirts:"nav-link disabled",pants:"nav-link disabled",measure:"nav-link disabled",Tailor:"nav-link active",datetime:"nav-link disabled",terms:"nav-link disabled"})}} className="btn btn-warning skipbutton">Back</button>
                            {ids.date ===0 ?(
                               <button onClick={()=>toast.error("Please select the date")}  className="btn btn-success">Next</button>):(<button onClick={()=>{setIndex("terms");Clickhandular({shirts:"nav-link disabled",pants:"nav-link disabled",measure:"nav-link disabled",Tailor:"nav-link disabled",datetime:"nav-link disabled",terms:"nav-link active"})}}  className="btn btn-success">Next</button>)
                            }
                            </div>
                        </div>) 
                       || (Index==="terms" && <div className="terms">
                           <div className="">
                                <ul className="termsmaindiv">
                                    <li>* Please recheck the shirt Measurements and pant Measurements</li>
                                    <li>* Our Tailor will give those Measurements Dress only</li>
                                    <li>* 1 hour order Cancellation Time </li>
                                    <li>* After 1 hour you Cancellation money is not returnable </li>
                                </ul>
                           </div>
                           <div className="termsandcond">
                                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                                I Accept Terms & Conditions  
                           </div>
                           <button  onClick={()=>OnsubmitAlldata()} className="btn btn-success">Submit</button>
                           <button onClick={()=>{setIndex("datetime");Clickhandular({shirts:"nav-link disabled",pants:"nav-link disabled",measure:"nav-link disabled",Tailor:"nav-link disabled",datetime:"nav-link active",terms:"nav-link disabled"})}} className="btn btn-warning">Back</button>
                       </div>) 
                       || (Index==="shirts" && 
                        <div>
                           <div className="cardmaindiv row row-cols-1 row-cols-sm-2 row-cols-md-3 g-2">
                           {
                                    Clothes.filter(t => t.typeofclothes === 0).map(x=>(
                                    <div className="col">
                                        <div className="card mb-3 cardwith">
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                <img src={Blackshirtimg} className="img-fluid rounded-start" alt="..."/>
                                                </div>
                                                <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title" key={x.id}>{x.clotheName}</h5>
                                                    <p className="card-text">{x.clotheDescription}</p>
                                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                    { ids.shirtId=== (x.id).toString() ? (
                                                    <button className="btn btn-info" onClick={()=>{dispatch(Deleteproduct({shirtId:x.id}));setids({...ids,shirtId:0})}} >Remove from Cart</button>
                                                    ):(<button className="btn btn-info" name="shirtId" value={x.id} onClick={(e)=>{dispatch(Addproducts({shirtId:x.id}));AddID(e)}} >Add to Cart</button>)
                                                     }
                                                    {/* <button class="plus_minus">+</button>
                                                    <span class="number">1</span>
                                                    <button class="minus_plus">-</button> */}
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    ))
                                }
                            </div> 
                            <div>
                                <button onClick={()=>{setIndex("pants");Clickhandular({shirts:"nav-link disabled",pants:"nav-link active",measure:"nav-link disabled",Tailor:"nav-link disabled",datetime:"nav-link disabled",terms:"nav-link disabled"})}}  className="btn btn-danger skipbutton">Skip</button>
                                {ids.shirtId ===0 ?(
                                    
                                    <button  onClick={()=>toast.error("Please select the pant")} className="btn btn-success">Next</button>):(<button   onClick={()=>{setIndex("pants");Clickhandular({shirts:"nav-link disabled",pants:"nav-link active",measure:"nav-link disabled",Tailor:"nav-link disabled",datetime:"nav-link disabled",terms:"nav-link disabled"})}} className="btn btn-success">Next</button>)
                                }
                            </div>
                        </div>  )
                       || (Index ==="pants" && 
                        <div>
                            <div className="cardmaindiv row row-cols-1 row-cols-sm-2 row-cols-md-3 g-2">
                                {
                                    Clothes.filter(t => t.typeofclothes === 1).map(x=>(
                                    <div className="col">
                                        <div className="card shadow-sm  mb-3 cardwith">
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                <img src={greypant} className="img-fluid rounded-start" alt="..."/>
                                                </div>
                                                <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title" key={x.id}>{x.clotheName}</h5>
                                                    <p className="card-text">{x.clotheDescription}</p>
                                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                    { ids.pantId===(x.id).toString() ? (
                                                    <button className="btn btn-info" onClick={()=>{dispatch(Deleteproduct({shirtId:x.id}));setids({...ids,pantId:0})}} >Remove from Cart</button>
                                                    ):(<button className="btn btn-info" name="pantId" value={x.id} onClick={(e)=>{dispatch(Addproducts({pantId:x.id}));AddID(e)}} >Add to Cart</button>)
                                                    }
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>    
                                    ))
                                }
                            </div>
                            <div>
                                <button onClick={()=>{setIndex("shirts");Clickhandular({shirts:"nav-link active",pants:"nav-link disabled",measure:"nav-link disabled",Tailor:"nav-link disabled",datetime:"nav-link disabled",terms:"nav-link disabled"})}} className="btn btn-warning skipbutton">Back</button>
                             
                                 {Shirtskip ?(
                                ""
                                 ):(<button onClick={()=>{setIndex("Measurements");Clickhandular({shirts:"nav-link disabled",pants:"nav-link disabled",measure:"nav-link active",Tailor:"nav-link disabled",datetime:"nav-link disabled",terms:"nav-link disabled"})}} className="btn btn-danger skipbutton">Skip</button>)}
                                {ids.pantId ===0 ?(
                                <button onClick={()=>toast.error("Please select the pant")} className="btn btn-success skipbutton" >Next</button>):(<button onClick={()=>{setIndex("Measurements");Clickhandular({shirts:"nav-link disabled",pants:"nav-link disabled",measure:"nav-link active",Tailor:"nav-link disabled",datetime:"nav-link disabled",terms:"nav-link disabled"})}} className="btn btn-success skipbutton">Next</button>)
                                 }
                            </div>
                        </div>) 
                        ||
                        <div>
                            <div className="cardmaindiv row row-cols-1 row-cols-sm-2 row-cols-md-3 g-2">
                                
                                {
                                    Clothes.filter(t => t.typeofclothes === 0).map(x=>(
                                    <div className="col">  
                                        <div className="card shadow-sm  mb-3 cardwith">
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                <img src={Blackshirtimg} className="img-fluid rounded-start" alt="..."/>
                                                </div>
                                                <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title" key={x.id}>{x.clotheName}</h5>
                                                    <p className="card-text">{x.clotheDescription}</p>
                                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                    { ids.shirtId=== (x.id).toString() ? (
                                                    <button className="btn btn-info" onClick={()=>{dispatch(Deleteproduct({shirtId:x.id}));setids({...ids,shirtId:0})}} >Remove from Cart</button>
                                                    ):( <button className="btn btn-info" name="shirtId" value={x.id} onClick={(e)=>{dispatch(Addproducts({shirtId:x.id}));AddID(e)}} >Add to Cart</button> )
                                                    }
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    ))
                                }
                                {/* <div className="card mb-3 cardwith">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                        <img src={whiteshirt} className="img-fluid rounded-start" alt="..."/>
                                        </div>
                                        <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            <button className="btn btn-info">Add</button>
                                        </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            <div>
                                <button  onClick={()=>{setIndex("pants");Clickhandular({shirts:"nav-link disabled",pants:"nav-link active",measure:"nav-link disabled",Tailor:"nav-link disabled",datetime:"nav-link disabled",terms:"nav-link disabled"});SetShirtskip(true)}}  className="btn btn-danger skipbutton">Skip</button>
                                {ids.shirtId ===0 ?(
                                    
                                 <button  onClick={()=>toast.error("Please select the Shirt")} className="btn btn-success">Next</button>):(<button   onClick={()=>{setIndex("pants");Clickhandular({shirts:"nav-link disabled",pants:"nav-link active",measure:"nav-link disabled",Tailor:"nav-link disabled",datetime:"nav-link disabled",terms:"nav-link disabled"})}} className="btn btn-success">Next</button>)
                                 }
                            </div>
                        </div>    
                       }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
