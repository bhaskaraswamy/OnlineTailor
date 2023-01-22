import React from 'react'


export default function BookTailor() {
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
            <div className="Tailortwodivs">
                <div className="commondivclass">
                    <label>Name</label>
                    <input type="text" name="Name" className="inputtype "/>
                </div>
                <div className="commondivclass">
                    <label>Phone Number</label>
                    <input type="text" name="phoneno" className="inputtype "/>
                </div>
            </div>
            <div className="Tailortwodivs">
                <div className="commondivclass">
                    <label>Email</label>
                    <input type="text" name="phoneno" className="inputtype "/>
                </div>
                <div className="commondivclass">
                    <label>House no./Street name</label>
                    <input type="text" name="streetno" className="inputtype"/>
                </div>
            </div>
            <div className="Tailortwodivs">
                <div className="commondivclass">
                    <label>city/Town/village</label>
                    <input type="text" name="city" className="inputtype"/>
                </div>
                <div className="commondivclass">
                    <label>Pincode</label>
                    <input type="text" name="pincode" className="inputtype"/>
                </div>
            </div>
            <div className="Tailortwodivs">
                <div className="commondivclass">
                    <label>Date</label>
                    <input type="date" name="date" className="inputtype"/>
                </div>
                <div className="commondivclass">
                    <label>Time</label>
                    <input type="time" name="time" className="inputtype"/>
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
        </div>
    </div>    
  )
}
