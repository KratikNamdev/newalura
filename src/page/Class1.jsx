import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import bookdetails from '../Assets/image321.png'
import { Link } from 'react-router-dom'


function Class1() {
  return (
   <>
    <Navbar/>
    <div className='aboutbanner'>
    <h3>Retreat </h3>
    <p>Escape, Recharge & Renew</p>

    </div>
    <div className='bookdetails'>
    <div className='bookdetails-left'>
    <h4>Retreat
    Escape, Recharge & Renew</h4>
    <br/>
    
    <p>Imagine stepping away from the noise of daily life into a space where you can just be. No deadlines, no distractions—just you, your breath, and the opportunity to reset your mind, body, and soul.</p>
    <br/>
 
    <p>Our retreats are designed to help you reconnect with yourself, whether through yoga, meditation, breathwork, or healing workshops. You’ll move, reflect, and release tension while surrounded by a community of like-minded individuals who, just like you, are seeking a deeper connection within.</p>
  


</div>
  <div className='bookdetails-right'>
  <div className='ClassDetails-box'>
   <h4>Class Details</h4>
   <br/>
   <br/>
   <div className='ClassDetails-p'>
    <p>TIME</p>
    <p style={{textAlign:'right'}}><b>10:30Am-10:30 Am</b></p>


   </div>
   
 
   <br/>
   <Link to='/package'>

<button className='BookClass'>Book Class</button>
   </Link>



   </div>
</div>

    </div>
    <div className='about-classes'>
    <div className='about-classes-left'>
    <h3>About the class</h3>
    
    <ul>
        <li>A blend of yoga, meditation & mindful movement</li>
        <li>Guided breathwork and self-reflection practices</li>
        <li>Healing workshops and wellness rituals</li>
        <li>A peaceful, supportive space to unwind</li>

    </ul>
    <br/>
    <h3>Perfect for you if…</h3>
    <ul>
        <li>You need a break from the everyday hustle</li>
        <li>You want to deepen your yoga & mindfulness practice</li>
        <li>You're looking for clarity, relaxation & emotional balance</li>
 

    </ul>
    <br/>
    <h3>Leave feeling: Light, refreshed & deeply renewed</h3>
    
</div>
   <div className='about-classes-right'>
<img src={bookdetails}/>
 

</div>
    </div>
    <Footer/>
   </>
  )
}

export default Class1