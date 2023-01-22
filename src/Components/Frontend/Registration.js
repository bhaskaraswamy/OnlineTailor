import React from 'react'
// import { Link } from 'react-router-dom'
// import agents from '../../api/agent';
import registerimg from '../../Images/registerimg.png'
import {useForm} from 'react-hook-form'
import { useDispatch,useSelector } from 'react-redux';
import { signUpUser } from '../../redux/authSlice';
import { useNavigate, useParams } from 'react-router';
import { toast } from "react-toastify";

export default function RegistrationforBuyer() {
  const dispatch=useDispatch();
  const {register,handleSubmit,formState:{errors}}=useForm({});
  const { user }=useParams();
  const navigate=useNavigate();
  const getUser=useSelector(state=>state.user.user);

  const  submitform=(data)=>{
      console.log(data);
      dispatch(signUpUser(data))
    }
    
    if(getUser)
    {
    toast.success("User Created Successfully");
    navigate("/");
    }
  
  // const InitialList={userName:"",phoneNumber:"",email:"",houseno:"",pincode:,city:"",password:"",typeofUser:"Byer"};
  // const [Data,SetData]=useState(InitialList);
  // const ChangeingData=(e)=>{
  //   const{name,value}=e.target
  //   SetData({...Data,[name]:value});
  // }

  // const OnformSubmit=(e)=>{
  //   e.preventDefault();
  //   agents.Authentication.register(Data);
  //   console.log(Data);
  // };

 

  return (
    <div className="lomadi">
      <style>{'body {background-color: #b419ef}'}</style>
      <div className="remadisec">
        <div className="loimdi">
          {/* <h3 className="weltext"></h3> */}
          <img src={registerimg} className="loimg" alt="img"/>
          {/* <small className="regitext">You don't have account?<button className="regbu" onClick={()=>{SetModal(true)}}>Register</button></small> */}
        </div>
        <div className="lotadiv">
          <div className="logap">
            <h3 className="logintitle">Register</h3>
          </div>
          <form onSubmit={handleSubmit(submitform)}>
            <div className="logap">
                <input className="inputtype" type="text" name="userName" placeholder="Name" {...register('userName',{required:"Please enter Name"})} />
            </div>
            <small className="error">{errors?.userName?.message}</small>
            <div className="logap">
                <input className="inputtype" type="text" name="phoneNumber" placeholder="Phone number" {...register('phoneNumber',{required:"Please enter Phone Number"})}/>
            </div>
            <small className="error">{errors?.phoneNumber?.message}</small>
            <div className="logap">
              <input className="inputtype" type="text"  name="email" placeholder="Email" {...register('email',{required:"Please enter Email",pattern:{
                value:/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/,
                message:"Not a valid Email"
              }})}/>
            </div>
            <small className="error">{errors?.email?.message}</small>
            <div className="logap">
                <input className="inputtype" type="text" name="houseno" placeholder="House no./street" {...register('houseno',{required:"Please enter House no./street"})}/>
            </div>
            <small className="error">{errors?.houseno?.message}</small>
            <div className="pincity">
              <div>
                <input className="samepici" type="number" name="pincode" placeholder="Pincode" {...register('pincode',{required:"Please enter Pincode"})}/>
                <small className="error">{errors?.pincode?.message}</small>
              </div>
              <div>
                <input className="samepici" type="text" name="city" placeholder="City/town" {...register('city',{required:"Please enter City/town"})} />
                <small className="error">{errors?.city?.message}</small>
              </div>
            </div>
            <div className="logap">
              <input className="inputtype" type="password" name="password" placeholder="Password" {...register('password',{required:"Please enter password"})}/>
            </div>
            <small className="error">{errors?.password?.message}</small>
            <input {...register("typeofUser", { value: user })} type="hidden" />
            <div className="logap"> 
            <input  type="submit"  className="btn btn-info lobut" value="Next" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
