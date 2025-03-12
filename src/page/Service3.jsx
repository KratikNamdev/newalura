import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import bookdetails from '../Assets/image321.png'

function Service3() {
  return (
    <>
    <Navbar/>
    <div className='aboutbanner'>
    <h3>Find Your Center, Strengthen Within</h3>
    {/* <p>Escape, Recharge & Renew</p> */}

    </div>
    <div className='about-classes'>
    <div className='about-classes-left'>
    <h3>Balance your body, calm your mind, and discover your inner strength.</h3>
    <p>In this class, we focus on building stability, focus, and resilience—on and off the mat. Combining grounding poses, mindful breathing, and controlled transitions, this class trains your body to find strength in stillness and movement.</p>

    <p>You’ll strengthen your core, legs, and stabilizing muscles while enhancing your focus and body awareness. This class is perfect for those seeking to improve posture, enhance coordination, and feel more grounded in their everyday life.</p>

    
    <ul>
        <li>Controlled movements to improve stability</li>
        <li>Core-strengthening exercises to enhance posture</li>
        <li>Breath awareness techniques to build focus</li>
        <li>A steady flow that combines balance & strength</li>
       


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

export default Service3