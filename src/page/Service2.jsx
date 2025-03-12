import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import bookdetails from '../Assets/image321.png'

function Service2() {
  return (
    <>
    <Navbar/>
    <div className='aboutbanner'>
    <h3>Flow Freely, Move Powerfully</h3>
    {/* <p>Escape, Recharge & Renew</p> */}

    </div>
    <div className='about-classes'>
    <div className='about-classes-left'>
    <h3>Awaken your energy, ignite your strength, and connect with your breath.</h3>
    <p>Our Flow Freely, Move Powerfully class is an energizing and dynamic practice that blends strength, flexibility, and mindful movement. Through fluid sequences and breath-guided transitions, this class is designed to awaken your body and invigorate your mind.</p>

    <p>Expect creative flows that challenge your coordination, enhance your endurance, and leave you feeling empowered and strong. The focus is on building strength, improving flexibility, and cultivating mental clarity—all while moving in harmony with your breath.</p>

    
    <ul>
        <li>Energizing yoga flows with seamless transitions</li>
        <li>Focus on strength, balance & flexibility</li>
        <li>Breath-focused movements to calm the mind</li>
        <li>Ideal for boosting energy & improving focus</li>
       


    </ul>

    

    
</div>
   <div className='about-classes-right'>
<img src={bookdetails}/>
 

</div>
    </div>
    <Footer/>
   </>
  )
}

export default Service2