import React from 'react'
import Navbar from '../Components/Navbar'
import Dynamic from '../Assets/Link1.png'
import img from '../Assets/image98745.png'
import Footer from '../Components/Footer'
function ServiceDetail() {
  return (
    <>
        <Navbar/>
        <div className='aboutbanner'>
    <h3>Service Detail</h3>
    <p>HOME - SERVICE-BUILDING BALANCE</p>

    </div>
    <div className='BuildingBalance'>
    <div className='BuildingBalance-left'>
    <div className='serv-box'>
    <h3>Our Services</h3>
    <br/>
    <p>Dynamic Vinyasa <img src={Dynamic}/></p>
    <p>Dynamic Vinyasa <img src={Dynamic}/></p>
    <p>Dynamic Vinyasa <img src={Dynamic}/></p>
    <p>Dynamic Vinyasa <img src={Dynamic}/></p>

    

    </div>
    </div>
    <div className='BuildingBalance-right'>
    <h3>Building Balance</h3>
    <br/>
    <br/>
    <img src={img}/>
    <br/>
    <br/>
    <br/>
    <h3>    About Building Balance Services</h3>

    <br/>
    <br/>

    <p>Energy healing is a holistic approach to health and wellness that focuses on restoring balance and harmony within the body’s energy fields. This practice involves identifying and clearing energetic blockages that may cause physical, emotional, or spiritual imbalances. Techniques such as Reiki, chakra balancing, and crystal therapy are used to channel healing energy, promoting relaxation and self-healing. Energy healing is rooted in the idea that the body has its natural ability to heal when energy flows freely. By addressing disruptions in this flow, energy healing helps individuals achieve greater vitality, emotional stability, and inner peace.</p>
    <br/>
    <br/>
    <br/>
    <h3>    About Building Balance Services</h3>

    <br/>
    <br/>

    <p>Energy healing is a holistic approach to health and wellness that focuses on restoring balance and harmony within the body’s energy fields. This practice involves identifying and clearing energetic blockages that may cause physical, emotional, or spiritual imbalances. Techniques such as Reiki, chakra balancing, and crystal therapy are used to channel healing energy, promoting relaxation and self-healing. Energy healing is rooted in the idea that the body has its natural ability to heal when energy flows freely. By addressing disruptions in this flow, energy healing helps individuals achieve greater vitality, emotional stability, and inner peace.</p>

    </div>

    </div>
    <Footer/>
    </>
  )
}

export default ServiceDetail