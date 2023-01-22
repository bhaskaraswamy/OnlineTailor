import React from 'react'
import TailorImg from '../../Images/TailorImg.png'
import labore from '../../Images/labore.jpg'
import fomo from '../../Images/fomo.jpg'
import Nostrud from '../../Images/Nostrud.jpg'
import Quantum from '../../Images/Quantum.jpg'
import omega from '../../Images/omega.jpg'

export default function TailorIndexHead() {
  return (
    <div className="mainind">
    <div className="indfisdiv">
        <div className="indsecdiv">
            <h3>Our Products are best company products</h3>
            <p>If you believe our product or service can fulfill a true need, it’s our moral obligation to sell it.</p>
            <button>Shop Now</button>
        </div>
        <div className="indthidiv">
            <img className="indimg" src={TailorImg} alt="mirrorimg"/>
        </div>
    </div>
    <div className="indfordiv">
      <h2>Our Company name's</h2>
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
