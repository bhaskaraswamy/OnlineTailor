import React from 'react'
import {useForm} from 'react-hook-form'
// import { toast } from 'react-toastify';
import agents from '../../api/agent';


export default function BookTailor() {
    const Userid=localStorage.getItem("userId");
    // const InitialData={name:"",phoneno:"",email:"",Houseno:"",pincode:"",city:"",Data:"",Time:"",userid:Userid};
    const {register,handleSubmit,formState:{errors}}=useForm({
       /* defaultValues:{
            InitialData
        }*/
    });
    const SubmitUserData=(data)=>{
        console.log(errors);
        agents.Tailor.AddUserData({...data,userid:Userid});
    }
  return (
    <div className="bookdiv">
        <div className="bread">
            <nav  aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">Home</li>
                    <li className="breadcrumb-item active" aria-current="page">Book Tailor</li>
                </ol>
            </nav>
        </div>
        <div className="BookTailorform">
            <form  onSubmit={handleSubmit(SubmitUserData)}>
                <div className="Tailortwodivs">
                    <div className="commondivclass">
                        <label>Name</label>
                        <input type="text" name="Name" className="inputtype" {...register('name',{required:""})}/>
                        <small className="error">{errors?.name?.message}</small>
                    </div>
                    <div className="commondivclass">
                        <label>Phone Number</label>
                        <input type="text" name="phoneno" className="inputtype" {...register('phoneno',{required:""})}/>
                        <small className="error">{errors?.phoneno?.message}</small>
                    </div>
                </div>
                <div className="Tailortwodivs">
                    <div className="commondivclass">
                        <label>Email</label>
                        <input type="text" name="phoneno" className="inputtype" {...register('email',{required:""})}/>
                        <small className="error">{errors?.email?.message}</small>
                    </div>
                    <div className="commondivclass">
                        <label>House no./Street name</label>
                        <input type="text" name="streetno" className="inputtype" {...register('Houseno',{required:""})}/>
                        <small className="error">{errors?.Houseno?.message}</small>
                    </div>
                </div>
                <div className="Tailortwodivs">
                    <div className="commondivclass">
                        <label>city/Town/village</label>
                        <input type="text" name="city" className="inputtype" {...register('city',{required:""})}/>
                        <small className="error">{errors?.city?.message}</small>
                    </div>
                    <div className="commondivclass">
                        <label>Pincode</label>
                        <input type="text" name="pincode" className="inputtype" {...register('pincode',{required:""})}/>
                        <small className="error">{errors?.pincode?.message}</small>
                    </div>
                </div>
                <div className="Tailortwodivs">
                    <div className="commondivclass">
                        <label>Date</label>
                        <input type="date" name="date" className="inputtype" {...register('Data',{required:""})}/>
                        <small className="error">{errors?.Data?.message}</small>
                    </div>
                    <div className="commondivclass">
                        <label>Time</label>
                        <input type="time" name="time" className="inputtype" {...register('Time',{required:""})}/>
                        <small className="error">{errors?.Time?.message}</small>
                    </div>
                </div>
                <div className="Tailorterms">
                    <ol>
                        <li>Our Tailor will come and Take your Measurements</li>
                        <li>There is no charge for this it free for you</li>
                        <li>Any Doubts call to our Toll free number</li>
                    </ol>
                    <div className="checkterms">
                        <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                        I Accept Terms & Conditions
                    </div>
                </div >
                <div className="buttonSub">
                    <button className="btn btn-success">Submit</button>
                </div>
           </form>
        </div>
    </div>    
  )
}
