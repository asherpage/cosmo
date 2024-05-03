import React, { useState } from 'react';
import Navbar from './Navbar';

export const Admin = () => {
  const [showHairstylePopup, setShowHairstylePopup] = useState(false); // State to control the visibility of the popup

  const handleAdminCardClick = () => {
    setShowHairstylePopup(true);
  };

  return (
    <>
      <Navbar />
      <div className='admin-container'>
        <h2 className='titles'>Student list</h2>
        <div className='admin-flex'>
          <div className='admin-cards'>
            <div className='admin-pics'></div>
            <div className='admin-titles' onClick={handleAdminCardClick}>
              <div className='admin-inputs'>
                <h4>Asher Page</h4>
                <p>Assign</p>
              </div>
            </div>
          </div>
          {/* Repeat the above structure for other admin-cards */}
        </div>
      </div>
      {/* Popup to display hairstyle */}
      {showHairstylePopup && (
        <div className='popup'>
          <div className='popup-content'>
            <span className='close' onClick={() => setShowHairstylePopup(false)}>&times;</span>
            <h2>Asher Page</h2>
            <div className='admin-list-container'>
              <div className='list-boxes'>
                <h4>Cut lil rodny</h4>
                <h6>Time: <span>8:45AM</span></h6>
                <button className='assign-button'>Assign</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Admin;
