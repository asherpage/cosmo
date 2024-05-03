import React from 'react';
import '../Styles/navbar.css'
import logo from '../Styles/Images/logo.PNG';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="links">
        <a href="/">Home</a>
        <a href="./visit">Record Visit</a>
        <a href="./admin">Admin</a>
      </div>
      <div className="auth">
        <a href="./Signup">Sign Up</a>
        <a href="./Login" id='blue-signup'>Login</a>
      </div>
    </div>
  );
}

export default Navbar;
