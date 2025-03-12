import React from 'react'
import Navbar from '../Components/Navbar'
import bookdetails from '../Assets/image321.png'
import { Modal } from 'reactstrap'
import Footer from '../Components/Footer'

function BookDetail() {
  return (
    <>
        <Navbar/>
        <div className='aboutbanner'>
    <h3>Book Classes</h3>
    <p>HOME - BOOK CLASSES - REFORM METHOD</p>

    </div>
    <div className='bookdetails'>
    <div className='bookdetails-left'>
    <h4>Reform Method (12/12)</h4>
    <br/>
    
    <p>Dui quis mi tortor in venenatis nisl egestas faucibus purus egestas purus feugiat massa
    lacus risus mi viverra dolor adipiscing maecenas in varius nibh egestas neque consectetur.</p>
    <br/>
    <br/>
    <button>Book Class</button>


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
   <div className='ClassDetails-p'>
    <p>TIME</p>
    <p><b>10:30Am-10:30 Am</b></p>


   </div>

   <br/>
   <div className='ClassDetails-p'>
    <p>TIME</p>
    <p><b>10:30Am-10:30 Am</b></p>


   </div>

   <br/>
   <div className='ClassDetails-p'>
    <p>TIME</p>
    <p><b>10:30Am-10:30 Am</b></p>


   </div>
   <br/>
<button className='BookClass'>Book Class</button>
<br/>
<br/>

<button className='Multiple'>Book Multiple</button>



   </div>
</div>

    </div>
    <div className='about-classes'>
    <div className='about-classes-left'>
    <h3>About the class</h3>
    <br/>
    <br/>
    <p>Egestas tincidunt ipsum in leo suspendisse turpis ultrices blandit augue eu amet vitae morbi egestas sed sem cras accumsan ipsum suscipit duis molestie elit libero malesuada lorem ut netus sagittis lacus pellentesque viverra velit cursus sapien sed iaculis cras at egestas duis maecenas nibh suscipit duis litum molestie elit libero malesuada lorem curabitur diam iaculis eros.</p>
    <br/>
    <br/>
    <h3>More details</h3>
    <br/>
    <br/>
    <p>Egestas tincidunt ipsum in leo suspendisse turpis ultrices blandit augue eu amet vitae morbi egestas sed sem cras accumsan ipsum suscipit duis molestie elit libero malesuada lorem ut netus sagittis lacus pellentesque viverra velit cursus sapien sed iaculis cras at egestas duis maecenas nibh suscipit duis litum molestie elit libero malesuada lorem curabitur diam iaculis eros.</p>

</div>
   <div className='about-classes-right'>
<img src={bookdetails}/>
 

</div>
    </div>
    <Modal>
        
    </Modal>
    <Footer/>

    </>
  )
}

export default BookDetail