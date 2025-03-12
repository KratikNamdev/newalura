import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ty from '../Assets/Thankyou.gif'
import { Link } from 'react-router-dom'
function Thankyou() {
  return (
   <>
    <Navbar/>
    <div className='thanqq'>
    <img src={ty}/>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    <br/>
<Link to='/profile'>

    <button>View Subscription</button>
</Link>

    </div>

    <Footer/>
   </>
  )
}

export default Thankyou