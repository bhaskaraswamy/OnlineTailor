import React from 'react'
import mirrorimg from '../../Images/mirrorimg.png'
import labore from '../../Images/labore.jpg'
import fomo from '../../Images/fomo.jpg'
import Nostrud from '../../Images/Nostrud.jpg'
import Quantum from '../../Images/Quantum.jpg'
import omega from '../../Images/omega.jpg'


export default function Indexhead() {
  return (
    <div className="mainind">
    <div className="indfisdiv">
        <div className="indsecdiv">
            <h3>Get your dress according to your Sizes</h3>
            <p>Our Tailors Stitching your Dress according to  your need and also time to delivery to your address with in 24hours</p>
            <button>Shop Now</button>
        </div>
        <div className="indthidiv">
            <img className="indimg" src={mirrorimg} alt="mirrorimg"/>
        </div>
    </div>
    <div className="indfordiv">
      <h2>Designers We Work With</h2>
    </div>
    <div className="brandimgs">
      <img src={labore} alt="labore"/>
      <img src={fomo} alt="fomo"/>
      <img src={Nostrud} alt="Nostrud"/>
      <img src={Quantum} alt="Quantum"/>
      <img src={omega} alt="omega"/>
    </div>
    <hr/>
    </div>
  )
}
