import React from 'react'
import icon from '../Assets/image 2236.png'
import send from '../Assets/Auto Layout Vertical.png'
import { Link } from 'react-router-dom'
function Footer() {
  return (
   <>
    <div className='footer'>
    <div className='top-footer'>
    <div className='top-footer-left'>
    <img src={icon}/>

</div>
 <div className='top-footer-right'>
 <p>Subscribe</p>
<input placeholder='Email address'/>
<img src={send}/>
</div>

    </div>
    <div className='bottom-footer'>
    <ul>
    Important Links
    <Link className='none' to='/about'>

        <li>About Us</li>
    </Link>
    <Link className='none' to='/bookclasses'>

        <li>Classes</li>
    </Link>
    <Link className='none' to='/services'>

        <li>Services</li>
    </Link>

      

    </ul>
    <ul>
    Classes Type
    <Link className='none' to='/retreat'>


        <li>Retreat</li>
    </Link>
    <Link className='none' to='/fusion'>


        <li>Fusion</li>
    </Link>
    <Link className='none' to='/meditation'>


        <li>Meditation</li>
        </Link>
   

    </ul>
    <ul>
    Legal Terms
    <Link className='none' to='/tnc'>


        <li>Legal Terms</li>
        </Link>
        <Link className='none' to='/tnc'>

        <li>Terms</li>
        </Link>

        <Link className='none' to='/thankyou'>


        <li>Thankyou</li>
        </Link>
   

    </ul>
    <ul>
    Contact Us
        <li>Contact Us</li>
        <li>lorem@ipsum.com</li>
    

    </ul>

    </div>
    <div className='copyright'>
    <p>Copyright & alura © 2023 - All Rights Reserved.</p>

    <p><i class="bi bi-instagram"></i>
    <i class="bi bi-facebook"></i>
    <i class="bi bi-linkedin"></i>
    <i class="bi bi-twitter"></i></p>

    </div>

    </div>
   </>
  )
}

export default Footer