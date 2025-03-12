import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import bookdetails from '../Assets/image321.png'
import { Link } from 'react-router-dom'

function Class3() {
  return (
<>
    <Navbar/>
    <div className='aboutbanner'>
    <h3>Meditation   </h3>
    <p>Find Stillness, Clarity & Inner Peace</p>

    </div>
    <div className='bookdetails'>
    <div className='bookdetails-left'>
    <h4>Meditation – Find Stillness, Clarity & Inner Peace</h4>
    <br/>
    
    <p>In a world that never slows down, meditation is your sanctuary. This class is all about pausing, breathing, and reconnecting with yourself—because sometimes, the most powerful thing you can do is simply be present.</p>
    <br/>
 
    <p>Through guided breathing, visualization, and mindfulness techniques, we help you quiet the noise, release tension, and cultivate a deep sense of peace. Whether you’re new to meditation or have years of practice, this class provides a supportive space to reset your mind and restore your energy.</p>
  


</div>
  <div className='bookdetails-right'>
  <div className='ClassDetails-box'>
   <h4>Class Details</h4>
   <br/>
   <br/>
   <div className='ClassDetails-p'>
    <p>TIME</p>
    <p><b>10:30Am-10:30 Am</b></p>


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
        <li>Breath-focused meditation for relaxation</li>
        <li>Mindfulness techniques to enhance focus & clarity</li>
        <li>A peaceful, judgment-free space for self-discovery</li>
        <li>Gentle guidance to help you stay present</li>

    </ul>
    <br/>
    <h3>Perfect for you if…</h3>
    <ul>
        <li>You feel overwhelmed, stressed, or mentally drained</li>
        <li>You want to improve focus, patience & emotional balance</li>
        <li>You’re looking for a simple way to feel more at peace</li>
 

    </ul>
    <br/>
    <h3>Leave feeling: Calm, clear & deeply connected</h3>
    
</div>
   <div className='about-classes-right'>
<img src={bookdetails}/>
 

</div>
    </div>
    <Footer/>
   </>
  )
}

export default Class3