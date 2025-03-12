import React, { useState, useEffect, useRef } from 'react';

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import arrow from '../Assets/Link2.png'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import { Link } from 'react-router-dom';

function Services() {
    const [modal , setmodal] = useState(false)
    const [modal2 , setmodal2] = useState(false)
    const [modal3 , setmodal3] = useState(false)
    const [modal4 , setmodal4] = useState(false)
    const [modal5 , setmodal5] = useState(false)


  
  return (
    <>
        <Navbar/>
        <div className='aboutbanner'>
    <h3>Services</h3>
    <p>HOME - SERVICES</p>

    </div>
    <div className='service-page'>
    <div className='service-card-div'>
<div className='service-card-border'>
<Link to='/service1'>

<div className='service-card' >
<div className="service-card-overlay">
      <p>At Alura, our yoga classes are designed to strengthen your body, calm your mind, and restore balance—whether you seek energy, flexibility, or deep healing.</p>
      <img  src={arrow}/>
    </div>
</div>
</Link>

</div>
<h4>Move, Heal & Transform </h4>
</div>
<div className='service-card-div' style={{marginTop:'100px'}}>
<div className='service-card-border'>
<Link to='/service2'>
<div className='service-card'>
<div className="service-card-overlay">
      <p>A seamless blend of strength, rhythm, and breath, this energizing flow builds endurance, flexibility, and focus while relieving stress and refreshing your mind.</p>
      <img onClick={()=>setmodal2(true)} src={arrow}/>
    </div>
</div>
</Link>

</div>
<h4 > Flow Freely<br/> Move Powerfully</h4>
</div>


<div className='service-card-div'>
<div className='service-card-border'>
<Link to='/service3'>

<div className='service-card'>
<div className="service-card-overlay">
      <p>Enhance stability, focus, and control with a practice that strengthens your core and steadies your mind. Move with confidence, improve posture, and find inner calm.</p>
      <img onClick={()=>setmodal3(true)}  src={arrow}/>
    </div>
</div>
</Link>

</div>
<h4>Find Your Center<br/> Strengthen Within</h4>
</div>
<div className='service-card-div' style={{marginTop:'100px'}}>
<div className='service-card-border'>
<Link to='/service4'>
<div className='service-card'>
<div className="service-card-overlay">
      <p>Slow down, breathe, and release tension with long-held poses that ease tightness, enhance flexibility, and restore your body and mind.</p>
      <img onClick={()=>setmodal4(true)} src={arrow}/>
    </div>
</div>
</Link>

</div>
<h4>Release, Relax <br/>& Let Go</h4>
</div>
<div className='service-card-div'>
<div className='service-card-border'>
<Link to='/service5'>
<div className='service-card'>
<div className="service-card-overlay">
      <p>A gentle practice of breath, movement, and relaxation to relieve stress, restore balance, and nurture inner peace.</p>
      <img onClick={()=>setmodal5(true)} src={arrow}/>
    </div>
</div>
</Link>

</div>
<h4>Healing Yoga </h4>
</div>
    </div>
    <div className='map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.68281993904!2d54.897823313520995!3d25.076280448422047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1741756611755!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    <Footer/>

    <Modal
      size='md'
      isOpen={modal}
      toggle={()=>setmodal(!modal)}>
  <ModalBody>
<div className='service-modal'>
  <h2>Move, Heal & Transform </h2>
  <p>At Alura, we offer thoughtfully designed yoga classes to help you strengthen your body, calm your mind, and restore balance. Each class is crafted to meet different needs, whether you're looking for energy, flexibility, or deep healing.</p>
    <button>Book Classes</button>
</div>
  </ModalBody>

      </Modal>
      <Modal
      size='lg'
      isOpen={modal2}
      toggle={()=>setmodal2(!modal2)}>
  <ModalBody>
<div className='service-modal'>
  <h2>Dynamic Vinyasa – Flow Freely, Move Powerfully </h2>
  <p>This is for the movers, the breath-followers, and the energy-seekers. Dynamic Vinyasa is all about seamless movement, strength-building, and finding rhythm in every flow. Expect creative sequences, playful transitions, and a practice that challenges your body while freeing your mind. By the end, you’ll feel strong, empowered, and completely alive.</p>
  <ul>
    <li>Perfect if you love fast, energizing flows</li>
    <li>Builds endurance, flexibility & focus</li>
    <li>A great way to relieve stress & feel refreshed</li>

  </ul>
    <button>Book Classes</button>
</div>
  </ModalBody>

      </Modal>
      <Modal
      size='lg'
      isOpen={modal3}
      toggle={()=>setmodal3(!modal3)}>
  <ModalBody>
<div className='service-modal'>
  <h2>Building Balance – Find Your Center, Strengthen Within </h2>
  <p>Balance isn’t just about standing still—it’s about finding stability in movement and life. This class focuses on core strength, alignment, and control, helping you feel more grounded, steady, and connected. Whether you’re working on physical balance or seeking a sense of inner calm, this practice teaches you to move with confidence and grace.</p>
  <ul>
    <li>Ideal for improving focus, posture & coordination </li>
    <li>Strengthens your core & stabilizing muscles</li>
    <li>Helps bring a sense of calm & clarity</li>

  </ul>
    <button>Book Classes</button>
</div>
  </ModalBody>

      </Modal>
      <Modal
      size='lg'
      isOpen={modal4}
      toggle={()=>setmodal4(!modal4)}>
  <ModalBody>
<div className='service-modal'>
  <h2>Deep Stretch – Release, Relax & Let Go</h2>
  <p>Sometimes, we just need to slow down. Deep Stretch is all about releasing tension, opening up the body, and sinking into stillness. With long-held postures and mindful breathing, you’ll feel your stress melt away while your muscles relax and lengthen. This is your time to pause, breathe, and give your body the love it deserves.</p>
  <ul>
    <li>	Perfect for easing tightness & improving flexibility</li>
    <li>	Helps with recovery & relaxation</li>
    <li>	A gentle way to restore both body & mind</li>

  </ul>
    <button>Book Classes</button>
</div>
  </ModalBody>

      </Modal>
      <Modal
      size='lg'
      isOpen={modal5}
      toggle={()=>setmodal5(!modal5)}>
  <ModalBody>
<div className='service-modal'>
  <h2>Healing Yoga – A Safe Space to Heal & Reconnect</h2>
  <p>Healing Yoga is more than a class—it’s a space to breathe, feel, and restore from within. Whether you’re experiencing stress, emotional fatigue, or just need a moment to yourself, this practice gently guides you toward peace, presence, and self-care. Through slow movement, breathwork, and deep relaxation, you’ll leave feeling lighter, calmer, and more connected to yourself.</p>
  <ul>
    <li>	Ideal for stress relief & emotional healing</li>
    <li>		Soothes the nervous system & promotes inner balance</li>
    <li>	Helps create a sense of deep peace & renewal</li>

  </ul>
    <button>Book Classes</button>
</div>
  </ModalBody>

      </Modal>
    </>
  )
}

export default Services