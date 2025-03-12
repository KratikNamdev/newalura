import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import bookdetails from '../Assets/image321.png'
import { Link } from 'react-router-dom'

function Class2() {
  return (
    <>
    <Navbar/>
    <div className='aboutbanner'>
    <h3>Fusion  </h3>
    <p>The Best of Everything in One Class</p>

    </div>
    <div className='bookdetails'>
    <div className='bookdetails-left'>
    <h4>Fusion – The Best of Everything in One Class</h4>
    <br/>
    
    <p>Why limit yourself to just one style? Our Fusion class brings together the best elements of yoga, Pilates, and breathwork for a well-rounded, energizing experience. Expect strength-building movements, mindful breathwork, and deep stretches all woven into a seamless flow.</p>
    <br/>
 
    <p>This is a class that keeps things exciting—one day, you might move through a power sequence, the next, you’ll dive into slow, controlled core work. It’s all about balance, variety, and feeling good in your body.</p>
 


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
        <li>A mix of yoga, Pilates & mindful movement</li>
        <li>Strength-building, flexibility & breathwork in one session</li>
        <li>A dynamic, creative flow that evolves each class</li>
        <li>A perfect balance of effort & ease</li>

    </ul>
    <br/>
    <h3>Perfect for you if…</h3>
    <ul>
        <li>You love variety in your movement practice</li>
        <li>You want a full-body workout without stress on the joints</li>
        <li>You're looking for both strength & relaxation in one class</li>
 

    </ul>
    <br/>
    <h3>Leave feeling: Strong, balanced & re-energized</h3>
    
</div>
   <div className='about-classes-right'>
<img src={bookdetails}/>
 

</div>
    </div>
    <Footer/>
   </>
  )
}

export default Class2