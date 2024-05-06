import React, { useState } from 'react';
import './App.css';
import './Styles/home.css';
import Navbar from './Components/Navbar';

function App() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [serviceRequest, setServiceRequest] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [homePhone, setHomePhone] = useState('');
  const [cellPhone, setCellPhone] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const [hairstyle, setHairstyle] = useState('');
  const [history, setHistory] = useState([]);
  const [showHairstylePopup, setShowHairstylePopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && date && hairstyle) {
      const newVisit = {
        name,
        date,
        serviceRequest,
        address,
        city,
        state,
        zipCode,
        homePhone,
        cellPhone,
        email,
        dob,
        age,
        hairstyle
      };
      setHistory([...history, newVisit]);
      setName('');
      setDate('');
      setServiceRequest('');
      setAddress('');
      setCity('');
      setState('');
      setZipCode('');
      setHomePhone('');
      setCellPhone('');
      setEmail('');
      setDob('');
      setAge('');
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
              placeholder='Client Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder='Appointment Date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              placeholder='Service Request'
              value={serviceRequest}
              onChange={(e) => setServiceRequest(e.target.value)}
            />
            <input
              placeholder='Address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              placeholder='City'
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              placeholder='State'
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <input
              placeholder='Zip Code'
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
            <input
              placeholder='Home Phone'
              value={homePhone}
              onChange={(e) => setHomePhone(e.target.value)}
            />
            <input
              placeholder='Cell Phone'
              value={cellPhone}
              onChange={(e) => setCellPhone(e.target.value)}
            />
            <input
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder='Date of Birth'
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            <input
              placeholder='Hairstyle'
              value={hairstyle}
              onChange={(e) => setHairstyle(e.target.value)}
            />
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
                                <p>Thats it.</p>
        </div>

      </div>
      {showHairstylePopup && (
  <div className='popup'>
    <div className='popup-content'>
      <span className='close' onClick={() => setShowHairstylePopup(false)}>&times;</span>
      <h2>{history[history.length - 1].name}</h2>
      {Object.entries(history[history.length - 1]).map(([key, value]) => (
        <h2 key={key} className='popup-info'>{key}: <span>{value}</span></h2>
      ))}
    </div>
  </div>
)}

    </>
  );
}

export default App;
