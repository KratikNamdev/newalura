import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import perosn from '../Assets/women.png'
function Profile() {
    const [selectedDates, setSelectedDates] = useState([]);

    const handleDateClick = (date) => {
      const formattedDate = date.toDateString();
      setSelectedDates((prevDates) =>
        prevDates.includes(formattedDate)
          ? prevDates.filter((d) => d !== formattedDate)
          : [...prevDates, formattedDate]
      );
    };
  
    const tileClassName = ({ date }) => {
        const today = new Date().toDateString();
        const formattedDate = date.toDateString();
        
        if (selectedDates.includes(formattedDate)) {
          return "selected-day";
        }
        if (formattedDate === today) {
          return "current-day";
        }
        return "";
      };
  
  return (
    <>
        <Navbar/>
        <div className='profile'>
        <div className='profile-info'>
        <div className='profile-img'>

        <img src={perosn}/>
        </div>
        <br/>
        <div className='profile-div'>
        <h2>User Name</h2>
        <h3>username@gmail.com</h3>
        <h3>+01-9874563210</h3>



</div>


        </div>
        <div className='profile-plan'>
        <div className="">
      <h2 className="Select">Remaning Days</h2>
      <br/>
      {/* <Calendar 
        onClickDay={handleDateClick} 
        tileClassName={tileClassName} 
        className='cl'
      />
      <div className="mt-4">
        <p className="font-semibold">Selected Days: {selectedDates.length}</p>
        <ul>
          {selectedDates.map((date, index) => (
            <li key={index} className="text-sm text-gray-600">{date}</li>
          ))}
        </ul>
      </div> */}
      <div className="encourage-cards">
      <div>

      <div className="encourage-card">
      <img src={perosn}/>
      <h3>March 20</h3>
      <h4>Sat</h4>
      <p>Breathe in peace, breathe out stress. Embrace the power of yoga!</p>

</div>
      </div>

      <div>

<div className="encourage-card">
<img src={perosn}/>
<h3>March 21</h3>
<h4>Sat</h4>
<p>A few minutes of yoga today, a lifetime of wellness tomorrow.</p>

</div>
</div>
  <div>

<div className="encourage-card">
<img src={perosn}/>
<h3>March 22</h3>
<h4>Sat</h4>
<p>Stretch your body, calm your mind, and uplift your soul.</p>

</div>
</div>
  <div>

<div className="encourage-card">
<img src={perosn}/>
<h3>March 23</h3>
<h4>Sat</h4>
<p>Start your day with yoga and feel the energy flow within!</p>

</div>
</div>
  <div>

<div className="encourage-card">
<img src={perosn}/>
<h3>March 24</h3>
<h4>Sat</h4>
<p>Find your balance, find your strength, find your inner peace.</p>

</div>
</div>
      </div>
    </div>
        </div>

        </div>

        <Footer/>
    </>
  )
}

export default Profile