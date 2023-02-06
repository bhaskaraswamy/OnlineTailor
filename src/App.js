import Index from "./Components/Index";
// import Header from "./Components/Header";
import Register from "./Components/Admin/Register";
import "./Components/Style.css"
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import Createuser from "./Components/Createuser";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Edituser from "./Components/Edituser";
import CustomersIndex from "./Components/CustomersIndex";
import EditCustomer from "./Components/EditCustomer";
import CreateCustomer from "./Components/CreateCustomer";
import Login from "./Components/Admin/Login";

import FrontendLogin from "./Components/Frontend/FrontendLogin";
import SelectUserType from "./Components/Frontend/SelectUserType";
import Registration from "./Components/Frontend/Registration";
import Measurement from "./Components/Frontend/Measurement";
import Cart from "./Components/Frontend/Cart";
import Header from "./Components/Frontend/Header";
import Home from "./Components/Frontend/Home";
import TailorHeader from "./Components/Frontend/TailorHeader";
import TailorHome from "./Components/Frontend/TailorHome";
import BookDress from './Components/Frontend/BookDress';
import BookTailor from "./Components/Frontend/Booktailor";
import UserOrders from "./Components/Frontend/UserOrders";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Indexhead from "./Components/Frontend/Indexhead";

// import { useEffect, useState } from "react";


function App() {
  return (
    
    <Router>
      <div className="App">
      <ToastContainer position="bottom-right" hideProgressBar />
        <Routes>
             <Route path="/" element={<FrontendLogin/>}/>
             <Route path="/SelectUserType" element={<SelectUserType/>}/>
             <Route path="/Registration/:user" element={<Registration/>}/>
             <Route path="/Measurements" element={<Measurement/>}/>
             <Route path="/ByerIndex" element={<Header/>}>
               <Route index element={<Home/>}/>
               <Route path="BookDress" element={<BookDress/>}/>
               <Route path="BookTailor" element={<BookTailor/>}/>
               <Route path="Cart" element={<Cart/>}/>
             </Route>
             <Route path="/TailorIndex" element={<TailorHeader/>}>
               <Route index element={<TailorHome/>}/>
               <Route path="UserOrders" element={<UserOrders/>}/>
             </Route>
        </Routes>
        <section className="rowC">
          <Routes mode="absolute">
             <Route path="/admin/Login" element={<Login/>}/>
             <Route path="/Register" element={<Register/>}/>
             <Route path="/dashboard" element={<Sidebar/>}>
               <Route index element={<Dashboard/>}/>
                <Route path="Users">
                  <Route index element={<Index/>}/> 
                  <Route path="Edit/:id" element={<Edituser/>}/>
                  <Route path="CreateUser" element={<Createuser/>}/>
                </Route>
                <Route path="Customer">
                  <Route index element={<CustomersIndex/>}/>
                  <Route path="EditCustomer/:id" element={<EditCustomer/>}/>
                  <Route path="CreateCustomer" element={<CreateCustomer/>}/>
                </Route>  
             </Route>
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
