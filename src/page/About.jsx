import React from 'react'
import Navbar from '../Components/Navbar'
import img from '../Assets/image 2241.png'
import img2 from '../Assets/image98745.png'
import certify from '../Assets/Group 1171274915.png'
import visual from '../Assets/image121.png'
import visual2 from '../Assets/image-1.png'
import Reform from '../Assets/Link.png'
import GetStartedNow from '../Assets/women.png'
import Footer from '../Components/Footer'
function About() {
  return (
<>
    <Navbar/>
    <div className='aboutbanner'>
    <h3>About Alura</h3>
    <p>HOME - ABOUT US</p>

    </div>
    <div className='about-div'>
    <div className='about-div-left'>
    <h3>At Alura</h3>
    <p>At Alura, we believe that true well-being is about finding balance  a space where your body feels strong, your mind feels calm, and your spirit feels connected. Nestled in the heart of Dubai, Alura is more than just a wellness studio — it's a peaceful retreat where you can step away from the rush of daily life and reconnect with yourself.</p>
    <p>Our thoughtfully designed classes are crafted to energize your body, calm your mind, and bring you a sense of inner peace. Whether you're seeking an invigorating workout, deep relaxation, or mindful meditation, Alura offers something for everyone.</p>
    <p>But Alura is more than just movement — it's a space where you feel supported, inspired, and part of a like-minded community. Here, you'll find passionate instructors dedicated to guiding you, uplifting experiences that help you grow, and a welcoming environment where you can truly be yourself.</p>

    <p>Step into Alura — where every breath brings calm, every stretch builds strength, and every visit leaves you feeling refreshed, restored, and renewed.</p>

</div>
<div className='about-div-right'>
<img src={img2}/>

</div>
    </div>
    {/* <div className='certify'>
    <div className='certify-left'>
    <img src={img}/>

</div>
  <div className='certify-right'>
  <h3>Transform with Certified and Passionate Instructors</h3>
  <br/>

  <p>At Alura, our certified and passionate instructors do more than just teach—they inspire, empower, and uplift. With expert guidance and a deep love for movement, they create a space where you feel safe, seen, and supported. Whether you’re flowing through yoga, strengthening in Pilates, or embracing deep healing, they’re here to help you grow with confidence and joy.</p>
  <br/>
  <h4><img src={certify}/>Sustainable Practices</h4>
  <br/>
  <h4><img src={certify}/>Certified Skills</h4>

  <br/>
  <h4><img src={certify}/>Bespoke Approach</h4>
  <br/>
  <br/>
    <button>Book A Class</button>

</div>
    </div>
    <div className="marquee-div">


    <div className="marquee">
    <h3>Today Experience Yoga</h3>
    <h3>Today Experience Yoga</h3>
    <h3>Today Experience Yoga</h3>
    <h3>Today Experience Yoga</h3>
    <h3>Today Experience Yoga</h3>
    <h3>Today Experience Yoga</h3>

  </div>
  </div> */}
  <div className='visual'>

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

</div>
  {/* <div className='GetStartedNow'>
  <div className='GetStartedNow-left'>
  <h3>Meet our yoga instructors Guiding you to wellness</h3>
  <br/>
  <p>Our experienced and passionate instructors are here to support you on your wellness journey. With expert guidance and a caring approach, they help you move, breathe, and grow with confidence. Whether you're new to yoga or deepening your practice, they’ll be with you every step of the way.
Move with guidance, breathe with intention, and grow with confidence.
</p>
  <br/>
  <br/>
    <button>Get Started Now</button>

  </div>
  <div className='GetStartedNow-right'>
  <div className='GetStartedNow-cards'>
  <div className='GetStartedNow-card'>
<img src={GetStartedNow}/>
<br/>
<br/>
<p>YOGA INSTRUCTOR</p>

<h3>Alena Stanton</h3>
  </div>
  <div className='GetStartedNow-card'>
<img src={GetStartedNow}/>
<br/>
<br/>
<p>YOGA INSTRUCTOR</p>

<h3>Alena Stanton</h3>
  </div>
  <div className='GetStartedNow-card'>
<img src={GetStartedNow}/>
<br/>
<br/>
<p>YOGA INSTRUCTOR</p>

<h3>Alena Stanton</h3>
  </div>
  <div className='GetStartedNow-card'>
<img src={GetStartedNow}/>
<br/>
<br/>
<p>YOGA INSTRUCTOR</p>

<h3>Alena Stanton</h3>
  </div>
  </div>

</div>
  </div> */}
  <Footer/>

</>
  )
}

export default About