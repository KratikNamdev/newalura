import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Assets/Logo.png';
import { FaWallet } from "react-icons/fa";
import { Modal, ModalBody } from 'reactstrap';

function Navbar() {
  const [showWallet, setShowWallet] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true'); 
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const toggleDivRef = useRef(null);
  const [isDivVisible, setIsDivVisible] = useState(false);
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowWallet(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isDivVisible) {
      document.addEventListener('mousedown', handleClickOutsideToggle);
    } else {
      document.removeEventListener('mousedown', handleClickOutsideToggle);
    }
    return () => document.removeEventListener('mousedown', handleClickOutsideToggle);
  }, [isDivVisible]);

  const handleLogin = () => {
    if (username === 'kratik123' && password === 'kratik@123') {
      alert('Login Successful!');
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');  // Store login status
      setModal(false);
      navigate('/bookclasses');
    } else {
      alert('Invalid Username or Password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');  // Remove login status
    setShowWallet(false);
    alert('Logged Out!');
  };

  const openToggleDiv = () => setIsDivVisible(true);
  const closeToggleDiv = () => setIsDivVisible(false);

  const handleClickOutsideToggle = (event) => {
    if (toggleDivRef.current && !toggleDivRef.current.contains(event.target)) {
      closeToggleDiv();
    }
  };

  return (
    <>
      <div className='topnav'>
        <p>Sign up and get 20% off on your first order. <span style={{ cursor: 'pointer' }} onClick={() => setModal2(true)}>Sign Up Now</span></p>
      </div>

      <nav>
        <div className='nav-div'>
          <Link to='/'>
            <img src={logo} alt="Logo" />
          </Link>
          <ul>
            <Link className='none' to='/'><li>Home</li></Link>
            <Link className='none' to='/about'><li>About Us</li></Link>
            <Link className='none' to='/services'><li>Services</li></Link>
            <Link className='none' to='/Package'><li>Packages</li></Link>
            <Link className='none' to='/contact'><li>Contact</li></Link>


          </ul>
        </div>

        <div className='wlt-div'>
          {!isLoggedIn ? (
            <button onClick={() => setModal(true)}>Log In</button>
          ) : (
            <div className="relative">
              <p ref={buttonRef} onClick={() => setShowWallet(!showWallet)} className="profile-btn">
                <FaWallet style={{color:'#849348'}} size={25} />
              </p>

              {showWallet && (
                <div ref={dropdownRef} className="wallet-dropdown active">
                  <div className='person'>
                  <i className="bi bi-person-circle"></i>
                    <p style={{marginTop:'8px'}}> Hi Kratik</p>
                  </div>
                  <div className="wallet-header">
                    <span>Remaining Classes</span>
                  </div>
                  <p className="wallet-balance">Completed: 3 Classes</p>
                  <p className="wallet-balance">Remaining: 4 Classes</p>
                  <br />
                  <button className='logout' style={{ width: '100%', display: 'block' }} onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          )}

          <i
            style={{ color: 'black', cursor: 'pointer' }}
            className="bi bi-list"
            onClick={isDivVisible ? closeToggleDiv : openToggleDiv}
          ></i>
        </div>
      </nav>

      {isDivVisible && (
        <div className="toggleDiv-ops">
          <div className="toggleDiv" ref={toggleDivRef}>
            <ul>
              <Link className='none' to='/'><li>Home</li></Link>
              <Link className='none' to='/about'><li>About Us</li></Link>
              <Link className='none' to='/services'><li>Services</li></Link>
              <Link className='none' to='/Package'><li>Packages</li></Link>
            <Link className='none' to='/contact'><li>Contact</li></Link>

              {!isLoggedIn ? (
                <>
                  <button onClick={() => setModal(true)}>Login</button>
                  <br />
                  <br />
                  <button onClick={() => setModal2(true)} className='sing-nav'>Signup</button>
                </>
              ) : (
                <button onClick={handleLogout} className='logout-btn'>Logout</button>
              )}
            </ul>
          </div>
        </div>
      )}

      {/* Login Modal */}
      <Modal size='lg' isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalBody>
          <div className='login-div'>
            <img src={logo} alt='Logo' />
            <br />
            <div className='login-heading'>
              <h1>Login</h1>
              <p onClick={() => { setModal(false); setModal2(true); }}>Don't Have An Account? <br /> Sign Up</p>
            </div>
            <br />
            <div className='login-div2'>
              <label>Email</label>
              <input type='text' placeholder='Enter Your Username' value={username} onChange={(e) => setUsername(e.target.value)} />
              <br />
              <label>Password</label>
              <input type='password' placeholder='Enter Your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
              <br />
              <button onClick={handleLogin}>Login</button>
            </div>
          </div>
        </ModalBody>
      </Modal>

      {/* Signup Modal */}
      <Modal size='lg' isOpen={modal2} toggle={() => setModal2(!modal2)}>
        <ModalBody>
          <div className='login-div'>
            <img src={logo} alt='Logo' />
            <br />
            <div className='login-heading'>
              <h1>Signup</h1>
              <p onClick={() => { setModal2(false); setModal(true); }}>Already Have an Account? <br /> Login</p>
            </div>
            <br />
            <div className='login-div2'>
              <label>Full Name</label>
              <input type='text' placeholder='Enter Your Full Name' />
              <br />
              <label>Mobile No.</label>
              <input type='number' placeholder='Enter Your Mobile No' />
              <br />
              <label>Date of Birth</label>
              <input type='date' />
              <br />
              <label>Password</label>
              <input type='password' placeholder='Enter Your Password' />
              <br />
              <button>Sign Up</button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}

export default Navbar;
