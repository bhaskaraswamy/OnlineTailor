import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  'All Orders', 'Dress Order','Measurements'
];
const defaultOption = options[0];

export default function UserOrders() {
    
  return (
    <div className="bookdiv">
        <div className="Ordermaindiv">
            <div>
                <h4>
                    User Orders
                </h4>
            </div>
            <div className="Ordersecdiv">
                <small>Total Order:2</small>
                <Dropdown options={options}  value={defaultOption} placeholder="Select an option" />
            </div>
        </div>
        <div className="carditemsdiv">
            <div class="card text-dark bg-light mb-3 ordercard">
                <div class="card-header orderheader">
                    <div className="yourorder">
                        <span className="labled">Ordered</span>
                        <span className="d-block">13-10-2022</span>
                    </div>
                    <div className="yourorderid">
                        <span className="labled">Order Id</span>
                        <span className="d-block">234566</span>
                    </div>
                </div>
                <div class="card-body ordercardbody">
                    <div className="orderproduct">
                        <p>
                            <span className="labled">Name</span>
                            <span>Surya</span>
                        </p>
                        <p>
                            <span className="labled">Category</span>
                            <span>Measurements</span>
                        </p>
                        <p>
                            <span className="labled">Status</span>
                            <span>Not Approved</span>
                        </p>
                        <p>
                            <span className="labled">Phone number</span>
                            <span>9923452348</span>
                        </p>
                        <p>
                            <span className="labled">Address</span>
                            <span>11-2-9/4,infront of temple,Okkiyampet,chennai-600097</span>
                        </p>
                    </div>
                    <div className="orderbuttons">
                        <button className="btn btn-default">Order Details</button>
                        <button className="btn btn-default">Approve</button>
                    </div>
                </div>
            </div>
            <div class="card text-dark bg-light mb-3 ordercard">
                <div class="card-header orderheader">
                    <div className="yourorder">
                        <span className="labled">Ordered</span>
                        <span className="d-block">14-10-2022</span>
                    </div>
                    <div className="yourorderid">
                        <span className="labled">Order Id</span>
                        <span className="d-block">4567435</span>
                    </div>
                </div>
                <div class="card-body ordercardbody">
                    <div className="orderproduct">
                        <p>
                            <span className="labled">Name</span>
                            <span>Pradeep</span>
                        </p>
                        <p>
                            <span className="labled">Category</span>
                            <span>Dress</span>
                        </p>
                        <p>
                            <span className="labled">Status</span>
                            <span>Not Approved</span>
                        </p>
                        <p>
                            <span className="labled">Phone number</span>
                            <span>8234321675</span>
                        </p>
                        <p>
                            <span className="labled">Address</span>
                            <span>17-1-9/2,infront of School,ptc quaters,chennai-600097</span>
                        </p>
                    </div>
                    <div className="orderbuttons">
                        <button className="btn btn-default">Order Details</button>
                        <button className="btn btn-default">Approve</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
