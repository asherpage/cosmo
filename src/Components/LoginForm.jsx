import React from 'react';
import Navbar from './Navbar';
import '../Styles/login.css'
import hairski from '../Styles/Images/DSC09294.jpg'

const LoginForm = () => {
  return(
    <>
    <Navbar />
    <div className="log-container">
    <div className="log-box">
        <div className="log-left-side">
            <img src={hairski} alt="Image" />
        </div>
        <div className="log-right-side">
            <h2>Login Form</h2>
            <form>
                <div className="input-group">
                    <label htmlFor="username">Username:</label>
                    <input className='log-input' type="text" id="username" name="username" />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input className='log-input' type="password" id="password" name="password" />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Confirm Password:</label>
                    <input className='log-input' type="password" id="password" name="password" />
                </div>
                <div className="input-group checkbox-group">
                    <input type="checkbox" id="save-password" name="save-password" />
                    <label htmlFor="save-password">Save Password</label>
                </div>
                <button type="submit" className='log-button'>Login</button>
                <p><span>Teacher Login</span> / <span>Student Login</span></p>
            </form>
        </div>
    </div>
</div>
    </>
  )
};

export default LoginForm;
