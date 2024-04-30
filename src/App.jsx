import React, { useState } from 'react';
import './App.css';
import './Styles/home.css';
import Navbar from './Components/Navbar';

function App() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [hairstyle, setHairstyle] = useState(''); // State for hairstyle input
  const [history, setHistory] = useState([]);
  const [showHairstylePopup, setShowHairstylePopup] = useState(false); // State to control the visibility of the popup

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if both name and date are filled out
    if (name && date && hairstyle) {
      // Add the new visit to the history
      setHistory([...history, { name, date, hairstyle }]);
      // Clear the input fields
      setName('');
      setDate('');
      setHairstyle('');
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <>
      <Navbar />
      <div className='flex'>
        <div className='visit-container'>
          <h2 className='titles'>Record A Visit</h2>
          <form className='formski' onSubmit={handleSubmit}>
            <input
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              placeholder='Date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
            ></input>
            <input
              placeholder='Hairstyle' // Input for hairstyle
              value={hairstyle}
              onChange={(e) => setHairstyle(e.target.value)}
            ></input>
            <button type='submit' id='submit'>Submit</button>
          </form>
        </div>
        <div className='history-container'>
          <h2 className='titles'>History</h2>
          {history.map((visit, index) => (
            <div className='history-box' key={index} onClick={() => setShowHairstylePopup(true)}>
              <h3 className='history-name'>{visit.name}</h3>
              <p className='history-date'>{visit.date}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Popup to display hairstyle */}
      {showHairstylePopup && (
  <div className='popup'>
    <div className='popup-content'>
      <span className='close' onClick={() => setShowHairstylePopup(false)}>&times;</span>
      <h2>{history[history.length - 1].name}</h2> {/* Access the name directly */}
      <h2 className='popup-info'>Hairstyle: <span>{history[history.length - 1].hairstyle}</span></h2>
    </div>
  </div>
)}

    </>
  );
}

export default App;
