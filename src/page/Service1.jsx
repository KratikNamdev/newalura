import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import bookdetails from '../Assets/image321.png'

function Service1() {
  return (
   <>
    <Navbar/>
    <div className='aboutbanner'>
    <h3>Move, Heal & Transform  </h3>
    {/* <p>Escape, Recharge & Renew</p> */}

    </div>
    <div className='about-classes'>
    <div className='about-classes-left'>
    <h3>At Alura</h3>
    <p>We believe that true well-being is more than just physical fitness — it’s a harmonious blend of movement, healing, and transformation. Our carefully designed classes, immersive experiences, and mindful practices empower you to connect with your body, calm your mind, and embrace personal growth.</p>
    
    <ul>
        <li><b>Move </b>– Movement is the foundation of growth. At Alura, we offer dynamic classes that challenge your body while calming your mind. Through yoga, Pilates, and fusion practices, you’ll build strength, improve flexibility, and enhance your overall well-being.</li>
       
        <li><b>Heal  </b>– Healing is about creating space — physically, emotionally, and mentally — to feel grounded and whole. Our restorative yoga, guided meditation, and breathwork classes are designed to help you</li>
        <li><b>Move </b>– Movement is the foundation of growth. At Alura, we offer dynamic classes that challenge your body while calming your mind. Through yoga, Pilates, and fusion practices, you’ll build strength, improve flexibility, and enhance your overall well-being.</li>
        <li><b>Transform  </b>– Transformation is the beautiful result of consistent movement and mindful healing. At Alura, our transformative practices guide you toward self-discovery, empowerment, and lasting change. Through immersive retreats, supportive community events, and thoughtful workshops, you’ll unlock the tools to embrace a stronger body, calmer mind, and uplifted spirit.</li>
      
       


    </ul>

    <br/>
    <p><b>Step into your journey with Alura — where movement inspires strength, healing brings peace, and transformation leads to growth.</b></p>
    

    
</div>
   <div className='about-classes-right'>
<img src={bookdetails}/>
 

</div>
    </div>
    <Footer/>
   </>
  )
}

export default Service1