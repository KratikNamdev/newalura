import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import bookdetails from '../Assets/image321.png'

function Service4() {
  return (
    <>
    <Navbar/>
    <div className='aboutbanner'>
    <h3>Release, Relax & Let Go</h3>
    {/* <p>Escape, Recharge & Renew</p> */}

    </div>
    <div className='about-classes'>
    <div className='about-classes-left'>
    <h3>Unwind your body, quiet your mind, and find deep inner calm.</h3>
    <p>Life can be overwhelming, and sometimes the best thing you can do for yourself is to slow down, breathe, and let go. This class is designed to help you release tension from tight muscles, calm your busy mind, and ease into a state of deep relaxation.

</p>

    <p>Through gentle stretching, long-held postures, and mindful breathing, you’ll create space in your body and mind, allowing you to feel lighter, calmer, and deeply restored.</p>

    
    <ul>
        <li>Slow, mindful stretching to release tension</li>
        <li>Deep breathing practices to calm your mind</li>
        <li>Poses designed to improve flexibility & mobility</li>
        <li>A soothing practice ideal for recovery & relaxation</li>
       


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

export default Service4