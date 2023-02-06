
import axios  from "axios";
import { toast } from "react-toastify";
// import store from "../store";

axios.defaults.baseURL=`https://localhost:7272/api/`;



const requestUrl=(response)=>response.data;

axios.interceptors.request.use(config => {
    const token = localStorage.getItem("user");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
})


axios.interceptors.response.use(response=>{
    return response
},(error)=>{
    const{data,status}=error.response;
    switch(status){
        case 401:
            toast.error(data.title);
            break;
        case 500:
            toast.error(data.title);
            break;
        default:
            break;        
    }
    return Promise.reject(error.response);
});

const requests={
    get:(url)=>axios.get(url).then(requestUrl),
    put:(url,body)=>axios.put(url,body).then(requestUrl),
    post:(url,body)=>axios.post(url,body).then(requestUrl),
    delete:(url)=>axios.delete(url).then(requestUrl),
}
const cart={
    addcart:(body)=>requests.post('Carts',body),
    getCart:(userid)=>requests.get(`Carts/GetUserCartItems/${userid}`),
    DeleteCartItem:(id)=>requests.delete(`Carts/${id}`)
}
const Measurements={
    AddMeasurement:(body)=>requests.post('Measurements',body),
    GetMeasurement:(userid)=>requests.get(`Measurements/GetmeasurementUsingUserid/${userid}`)
}
const Users={
    listofTailors:()=>requests.get('Users'),
}
const Clothes={
    list:()=> requests.get(`Cothes`)
}
const Authentication={
    register:(body)=>requests.post('Authentication/register',body),
    login:(body)=>requests.post('Authentication/login',body)
}

const Tailor={
    AddUserData:(body)=>requests.post('BookingTylers',body)
}


const agents={
    Clothes,
    Authentication,
    Measurements,
    Users,
    cart,
    Tailor
}

export default agents;