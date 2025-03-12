import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Services from "./page/Services";
import ServiceDetail from "./page/ServiceDetail";
import BookClasses from "./page/BookClasses";
import BookDetail from "./page/BookDetail";
import Checkout from "./page/Checkout";
import Contact from "./page/Contact";
import 'bootstrap/dist/css/bootstrap.css'
import TnC from "./page/TnC";
import Thankyou from "./page/Thankyou";
import Class1 from "./page/Class1";
import Class2 from "./page/Class2";
import Class3 from "./page/Class3";
import Package from "./page/Package";
import Profile from "./page/Profile";
import CancellationPolicy from "./page/CancellationPolicy";
import Service1 from "./page/Service1";
import Service2 from "./page/Service2";
import Service3 from "./page/Service3";
import Service4 from "./page/Service4";
import Service5 from "./page/Service5";

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/servicesdetail" element={<ServiceDetail />} />
            <Route path="/bookclasses" element={<BookClasses />} />
            <Route path="/bookdetail" element={<BookDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/retreat" element={<Class1 />} />
            <Route path="/fusion" element={<Class2 />} />
            <Route path="/meditation" element={<Class3 />} />
            <Route path="/package" element={<Package />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/tnc" element={<TnC />} />
            <Route path="/thankyou" element={<Thankyou />} />
            <Route path="/cancellation" element={<CancellationPolicy />} />
            <Route path="/service1" element={<Service1 />} />

            <Route path="/service2" element={<Service2 />} />
            <Route path="/service3" element={<Service3 />} />
            <Route path="/service4" element={<Service4 />} />
            <Route path="/service5" element={<Service5 />} />










          </Routes>
        </Router>
   </>
  );
}

export default App;
