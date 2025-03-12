import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import bookdetails from '../Assets/image321.png'

function Service5() {
  return (
    <>
    <Navbar/>
    <div className='aboutbanner'>
    <h3>Healing Yoga – Nurture Your Heart & Soul</h3>
    {/* <p>Escape, Recharge & Renew</p> */}

    </div>
    <div className='about-classes'>
    <div className='about-classes-left'>
    <h3>A gentle, nurturing space for emotional healing and inner peace.</h3>
    <p>Our Healing Yoga class is a deeply restorative practice designed to support you during moments of stress, emotional fatigue, or when you simply need to feel cared for. Combining gentle yoga movements, breathwork, and mindfulness techniques, this class creates a safe space for you to release emotional blockages, process feelings, and reconnect with yourself.</p>

    <p>This practice soothes the nervous system, reduces anxiety, and promotes feelings of safety, comfort, and calm. It's perfect for those navigating change, experiencing burnout, or seeking a grounding space for self-care.</p>

    
    <ul>
        <li>Gentle, mindful movements to ease tension</li>
        <li>Breath-focused techniques to soothe the nervous system</li>
        <li>Guided relaxation for emotional balance</li>
        <li>A peaceful, nurturing environment for self-reflection</li>
    </ul>
    <p><b>Find Your Practice, Embrace Your Journey </b></p>
    <p>At Alura, we believe there’s no ‘one-size-fits-all’ when it comes to wellness. Whether you need energy, calm, strength, or stillness, our classes are designed to support your unique journey.</p>



    

    
</div>
   <div className='about-classes-right'>
<img src={bookdetails}/>
 

</div>
    </div>
    <Footer/>
   </>
  )
}

export default Service5