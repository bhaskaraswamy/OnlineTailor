import React from 'react'
import shirt from '../../Images/shirt.jpg'
import shirt2 from '../../Images/shirt2.jpg'
// import shirt3 from '../../Images/shirt3.jpg'
import shirt4 from '../../Images/shirt4.jpg'

export default function Indexproducts() {
  return (
    <div className="indprod">
        <div className="indproddiv">
            <h2>Featured Products</h2>
            <p>Shop our full selection of men’s clothing and accessories here.</p>
        </div>
        <div className="indprodiv2">
            <div className="indprodiv3">
              <img  src={shirt} alt="shirt"/>
              <div className="cardtext">
                <h4>LONG-SLEEVE SHIRT</h4>
                <h6>$67.9</h6>
              </div>
            </div>
            <div className="indprodiv3">
              <img src={shirt2} alt="shirt"/>
              <div className="cardtext">
              <h4>PRIMUM LONG-SLEEVE SHIRT</h4>
              <h6>$70.9</h6>
              </div>
            </div>
            <div className="indprodiv3">
              <img src={shirt4} alt="shirt"/>
              <div className="cardtext">
              <h4>LONG-SLEEVE SHIRT</h4>
              <h6>$40.9</h6>
              </div>
            </div>
        </div>
    </div>
  )
}
