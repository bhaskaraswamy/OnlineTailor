import React from 'react'
import Tailormissionpins from '../../Images/Tailormissionpins.jpg'
import Tailorproducts from '../../Images/Tailorproducts.jpg'
// import shirt3 from '../../Images/Tailorproducts.jpg'
import Tailortaps from '../../Images/TailorTaps.jpg'

export default function TailorProducts() {
  return (
    <div className="indprod">
    <div className="indproddiv">
        <h2>Products</h2>
        <p>Shop our Mission products and clothes here </p>
    </div>
    <div className="indprodiv2">
        <div className="indprodiv3">
          <img  src={Tailormissionpins} alt="shirt"/>
          <div className="cardtext">
            <h4>Jasol Steel Pico Snap-on Foot for Picko</h4>
            <h6>$67.9</h6>
          </div>
        </div>
        <div className="indprodiv3">
          <img src={Tailorproducts} alt="shirt"/>
          <div className="cardtext">
          <h4>Hesch 9 Tailoring Accessories All Combo Set</h4>
          <h6>$70.9</h6>
          </div>
        </div>
        <div className="indprodiv3">
          <img src={Tailortaps} alt="shirt"/>
          <div className="cardtext">
          <h4>Isomars Tailoring Kit (White) - Set of 16</h4>
          <h6>$40.9</h6>
          </div>
        </div>
    </div>
</div>
  )
}
