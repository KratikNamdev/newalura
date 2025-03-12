import React from 'react'
import { useState } from 'react';
import Navbar from '../Components/Navbar'
import img from '../Assets/basd.png'
import testimonials from '../Assets/test.png'
import b1 from '../Assets/b1 (2).png'
import b2 from '../Assets/b1 (1).png'
import visual from '../Assets/image121.png'
import visual2 from '../Assets/image-1.png'
import Reform from '../Assets/Link.png'
import { motion } from 'framer-motion';
import img2 from '../Assets/Group 1171274914.png'
import img3 from '../Assets/image.png'
import arrow from '../Assets/Link2.png'
import icon from '../Assets/Group 1171274915.png'
import Footer from '../Components/Footer'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import { Link } from 'react-router-dom'

const testimonialsData = [
  {
    image: 'image1.jpg',
    title: 'Fantastic',
    text: 'Lorem ipsum dolor sit amet consectetur. Lacus et tempus nulla scelerisque turpis commodo commodo nulla. Diam massa sed ornare sed ullamcorper sit condimentum convallis. Lobortis massa leo aliquam felis eu ullamcorper faucibus dictum suscipit.',
    author: 'Kendra Rose',
  },
  {
    image: 'image2.jpg',
    title: 'Amazing Service',
    text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.',
    author: 'John Doe',
  },
  {
    image: 'image3.jpg',
    title: 'Highly Recommend',
    text: 'Suspendisse potenti. Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum.',
    author: 'Emily Smith',
  }
];
function Home() {
  const [modal , setmodal] = useState(false)
      const [modal2 , setmodal2] = useState(false)
      const [modal3 , setmodal3] = useState(false)
      const [modal4 , setmodal4] = useState(false)
      const [modal5 , setmodal5] = useState(false)
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextTestimonial = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
   <>
    <Navbar/>
    <div className='banner'>
    <p>EXPLORE THE BENEFITS OF HOT YOGA</p>
    <br/>

    <h3>Transform Your Mind and<br/> Body with Daily Yoga</h3>
    <br/>
    <button>Book A Class</button>

    </div>
    <div className='SERVICES-home'>
    <p>SERVICES</p>
    <h3>Discover Personalized Yoga Classes For Your Unique Needs</h3>
   <br/>
<div className='service-cards'>

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
    </div>
    {/* <div className='visual'>

  <div className='visual-left'>
  <p>Visual journey of mind and body harmony</p>
  
  <img src={visual}/>


  </div>
  <div className='visual-right'>
  <img className='visual2' src={visual2}/>

  <h3>Book Our classes</h3>
  
  <div className='Our-classes'>
<h4>Platis</h4>
<img src={Reform}/>
  </div>

 
  <div className='Our-classes'>
<h4>Yoga</h4>
<img src={Reform}/>
  </div>
  
  <div className='Our-classes'>
<h4>Workshop</h4>
<img src={Reform}/>
  </div>

<button>View All Classes</button>
  </div>

  </div> */}
    {/* <div className="mq-div">
  <div className="marquee">
    <p>From Stress to Serenity</p>
    <p>From Stress to Serenity</p>
    <p>From Stress to Serenity</p>
    <p>From Stress to Serenity</p>
  </div>
</div>
<div className='howyoga'>
<div className='howyoga-left'>
  <img src={img}/>
  </div>
  <div className='howyoga-right'>
  <h3>How Yoga Can Help You Achieve Mental Clarity</h3>
  <p>Yoga is more than just movement—it’s a reset for your mind. Through breathwork, mindful poses, and meditation, yoga helps clear mental fog, reduce stress, and improve focus. It creates a sense of inner calm, allowing you to process thoughts with clarity and navigate life with a peaceful, centered mindset.</p>
  <br/>
  <br/>
  <h4>Strong Foundations Yoga</h4>
  <p>A strong practice begins with a solid foundation. This class is your gateway to strength, balance, and confidence, focusing on alignment, breathwork, and mindful movement. Whether you're new to yoga or refining your flow, you’ll build stability from the ground up—one breath, one pose, one powerful step forward.</p>
  <br/>
  <br/>
    <div className='bt-div'>
      <div className='bt'>
      <img src={icon}/>
        <p>Root deep.  </p>
      </div>
      <div className='bt'>
      <img src={icon}/>
        <p>Rise strong.</p>
      </div>
      <div className='bt'>
      <img src={icon}/>
        <p>Flow freely.</p>
      </div>
    </div>

</div>
</div> */}
  {/* <div className='testimonials'>
      <h3>Testimonials</h3>
      <div className='testimonials-div'>
        <div className='testimonials-div-left'>
          <motion.img 
            key={index} 
            src={testimonialsData[index].image} 
            alt='testimonial' 
            initial={{ opacity: 0, x: direction * 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 100 }}
            transition={{ duration: 0.5 }}
          />
          <img src={testimonials}/>
        </div>
        <motion.div 
          className='testimonials-div-right'
          key={index}
          initial={{ opacity: 0, x: direction * 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -direction * 100 }}
          transition={{ duration: 0.5 }}
        >
       <div>
       <h4>{testimonialsData[index].title}</h4>
          <br />
          <p>{testimonialsData[index].text}</p>
          <br />
          <h5>{testimonialsData[index].author}</h5>
       </div>
          <div className='buttons'>
            <button onClick={prevTestimonial}><img src={b1}/></button>
            <button onClick={nextTestimonial}><img src={b2}/></button>
          </div>
        </motion.div>
      </div>
    </div> */}
<div className='CONTACTUS-div'>
<div className='CONTACTUS-div-left'>
<img src={img2}/>
</div>
<div className='CONTACTUS-div-center'>
<p>CONTACT US</p>

<h3>Your journey to wellness starts with a single step—reaching out</h3>


<h4>Whether you’re looking for guidance, have questions, or are ready to begin your practice, we’re here to support you. Our team is dedicated to helping you find balance, healing, and transformation in a space designed for your well-being. "Let’s connect and create a path to a healthier, more mindful you together.</h4>
<Link to='/contact'>

<button>Contact Us</button>
</Link>
</div>
<div className='CONTACTUS-div-right'>
<img src={img3}/>

</div>
</div>
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
      <div className='map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.68281993904!2d54.897823313520995!3d25.076280448422047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1741756611755!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
<Footer/>
  
  
   </>
  )
}

export default Home