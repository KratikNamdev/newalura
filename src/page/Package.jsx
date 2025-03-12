import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

function Package() {
  return (
   <>
    <Navbar/>
    <div className='aboutbanner'>
    <h3>Packages </h3>
    <p>Montly , Weakly , Yearly</p>

    </div>
    <div className='package-div'>
    <div className='package-div-section'>
    <h2>Monthly</h2>
    <h3>$ 100</h3>
    <ul>
        <li>Transform Your Mind and
        Body with Daily Yoga</li>
        <li>Transform Your Mind and
        Body with Daily Yoga</li>
        <li>Transform Your Mind and
        Body with Daily Yoga</li>
    </ul>
    <Link to='/checkout'>

    <button>Book Now</button>
    </Link>

</div>
 <div className='package-div-section'>
 <h2>Monthly</h2>
 <h3>$ 100</h3>
    <ul>
        <li>Transform Your Mind and
        Body with Daily Yoga</li>
        <li>Transform Your Mind and
        Body with Daily Yoga</li>
        <li>Transform Your Mind and
        Body with Daily Yoga</li>
    </ul>
    <Link to='/checkout'>

<button>Book Now</button>
</Link>

</div>
 <div className='package-div-section'>
 <h2>Monthly</h2>
 <h3>$ 100</h3>
    <ul>
        <li>Transform Your Mind and
        Body with Daily Yoga</li>
        <li>Transform Your Mind and
        Body with Daily Yoga</li>
        <li>Transform Your Mind and
        Body with Daily Yoga</li>
    </ul>
    <Link to='/checkout'>

<button>Book Now</button>
</Link>


</div>
    </div>

    <Footer/>
   </>
  )
}

export default Package