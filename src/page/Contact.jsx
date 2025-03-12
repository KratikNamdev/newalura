import React from 'react'
import Navbar from '../Components/Navbar'
import contat from '../Assets/contact.png'
import Footer from '../Components/Footer'
function Contact() {
  return (
    <>
        <Navbar/>
        <div className='aboutbanner'>
    <h3>Need Talk To Contact Us Today</h3>
    <p>HOME - CONTACT US</p>

    </div>
    <div className='contact'>
    <div className='contact-left'>
    <img src={contat}/>

</div>   
<div className='contact-right'>
<h3>Let’s Get In Touch</h3>
<br/>
<br/>
<label>Your Email</label>
<input placeholder='Enter Your Email'/>
<br/>
<label>Your Phone</label>
<input placeholder='Enter Your Phone'/>
<br/>
<label>Your Address</label>
<input placeholder='Enter Your Address'/>
<br/>
<label>Your Address</label>
<textarea placeholder='Enter Your Address'/>
<br/>
<button>Send Message</button>
</div>
    </div>
    <div className='map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.68281993904!2d54.897823313520995!3d25.076280448422047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1741756611755!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    <Footer/>
    </>
  )
}

export default Contact