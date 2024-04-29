import React, { useState } from 'react';
import './App.css';
import './Styles/home.css';
import Navbar from './Components/Navbar';

function App() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <Navbar />
      <div className='flex'>
        <div className='visit-container'>
          <h2 className='titles'>Record A Visit</h2>
          <form className='formski'>
            <input placeholder='Name'></input>
            <input placeholder='Name'></input>
            <input placeholder='Name'></input>
            <input placeholder='Name'></input>
            <input placeholder='Name'></input>
            <input placeholder='Name'></input>
            <input placeholder='Name'></input>
            <input placeholder='Name'></input>
            <input placeholder='Name'></input>
          </form>
        </div>
        <div className='history-container'>
          <h2 className='titles'>History</h2>
          <div
            className='history-box'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <h3 className='history-name'>Asher Page</h3>
            <p className='history-date'>01/01/1999</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .history-box {
          background-color: rgb(69, 55, 55);
          width: 100%;
          height: 100px;
          border-radius: 5px;
          padding: 5px;
          cursor: ${isHovered ? 'url("path/to/custom-cursor.png"), auto' : 'default'};
        }
      `}</style>
    </>
  );
}

export default App;
