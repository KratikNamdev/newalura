import React from 'react'
import Navbar from '../Components/Navbar'
import Classes from '../Assets/image321.png'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
function BookClasses() {
    const today = new Date();
  
    // Function to format the date and get day name
    const getFormattedDate = (offset) => {
      const futureDate = new Date();
      futureDate.setDate(today.getDate() + offset);
      
      const options = { weekday: "short" }; // Get day abbreviation (e.g., Sun, Mon)
      return {
        date: futureDate.getDate(),
        day: futureDate.toLocaleDateString("en-US", options),
      };
    };
  
    // Generate an array of the next 14 days
    const dateArray = Array.from({ length: 14 }, (_, index) => getFormattedDate(index));
  
  return (
   <>
    <Navbar/>
    <div className='aboutbanner'>
    <h3>Book Classes</h3>
    <p>HOME - BOOK CLASSES</p>

    </div>
    <div className='ClassSchedule'>
    <h3>Class Schedule</h3>
    <br/>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
    <br/>
    <br/>

    <h4>{today.toLocaleDateString("en-US", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</h4>
    <br/>

    <div className="date-div">
        {dateArray.map((item, index) => (
        <div>
        <div key={index} className="date">
            <h3>{item.date}</h3>
            <p>{item.day}</p>
          </div>
        </div>
        ))}
      </div>
    <br/>
    <br/>
    <br/>

    <h4>All Classes</h4>
    <br/>
    <br/>
    <div className='All-Classes'>
    
<div className='All-Classes-card1' >

    <div className='All-Classes-card'>
    <div className='All-Classes-heading'>
        <h4>Retreat – Escape, Recharge & Renew</h4>
        <p></p>
    </div>
    <br/>
    {/* <img src={Classes}/> */}
    <br/>
    <div className='TIME'>
    <h6>Time</h6>
    <h5>10:30AM - 12:30PM</h5>

    </div>
    <br/>
    <Link to='/checkout'>
<button>Book Class</button>
    </Link>

</div>
</div>
<div className='All-Classes-card1'>

    <div className='All-Classes-card'>
    <div className='All-Classes-heading'>
        <h4>Fusion – The Best of Everything in One Class</h4>
        <p></p>
    </div>
    <br/>
    {/* <img src={Classes}/> */}
    <br/>
    <div className='TIME'>
    <h6>Time</h6>
    <h5>01:30PM - 03:30PM</h5>

    </div>
    <br/>
    <Link to='/checkout'>
<button>Book Class</button>
    </Link>

</div>
</div>
<div className='All-Classes-card1'>

    <div className='All-Classes-card'>
    <div className='All-Classes-heading'>
        <h4>Meditation – Find Stillness, Clarity & Inner Peace</h4>
        <p></p>
    </div>
    <br/>
    {/* <img src={Classes}/> */}
    <br/>
    <div className='TIME'>
    <h6>Time</h6>
    <h5>04:30PM - 06:30PM</h5>

    </div>
    <br/>
    <Link to='/checkout'>
<button>Book Class</button>
    </Link>

</div>
</div>
   
    </div>
    </div>
    <Footer/>
   </>
  )
}

export default BookClasses