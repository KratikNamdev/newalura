import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import pay from '../Assets/pay.png'
import pay2 from '../Assets/Group 2644.png'
import pay3 from '../Assets/master.png'


import profile from '../Assets/prof.png'
import { Link } from 'react-router-dom'
function Checkout() {
  return (
    <>
    <Navbar/>
    <div className='aboutbanner'>
    <h3>Checkout</h3>
    <p>HOME - BOOK CLASSES - REFORM METHOD-CHECKOUT</p>

    </div>
    <div className='checkout'>
    <div className='checkout-left'>
    <div className='Package'>
<p>RA 30 Class Package</p>
    </div>
    <br/>

    <br/>
    <br/>
    <h3>Payment Method</h3>
    <br/>
    <br/>
<div className='PaymentMethod'>
  <img src={pay}/>
  <img src={pay2}/>
  <img src={pay3}/>
  
</div>
    <br/>
    <br/>
<div className='checkout-form'>
<h3>Credit / Debit Card</h3>
<br/>
<br/>
<label>Card Number</label>
<br/>
<input placeholder='Enter Card Number'/>
<br/>
<br/>
<label>Card Holder Name</label>
<br/>
<input placeholder='Enter Holder Number'/>

<br/>
<br/>
<label>Exp. Date</label>
<br/>
<input placeholder='dd-mm-yy'/>

<br/>
<br/>
<label>Cvv</label>
<br/>
<input placeholder='Enter Your Cvv'/>

<br/>
<br/>
<div className='checkout-btns'>
  <button>Cancel</button>
  <button className='sub'>Submit</button>

</div>
</div>
</div>
  <div className='checkout-right'>
  <div className='checkout-profile'>
  <img src={profile}/>
  <div>
    <h3>Reform Method (12/12)</h3>
    <p>10:30Am - 10:30Am</p>
  </div>

  </div>
  <br/>
  <div className='checkout-bill'>
<h3>Bill Details</h3>
<br/>
<div className='subtotal'>
  <p>Sub Total</p>
  <p><b>$400.00</b></p>
</div>
<br/>
<div className='subtotal'>
  <p>Sub Total</p>
  <p><b>$400.00</b></p>
</div>
<br/>
<div className='subtotal'>
  <p>Sub Total</p>
  <p><b>$400.00</b></p>
</div>
<br/>
<br/>
<Link to='/thankyou'>

<button>Buy Now</button>
</Link>
  </div>

</div>
    </div>
    <Footer/>
        
    </>
  )
}

export default Checkout