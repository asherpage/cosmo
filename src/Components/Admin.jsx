import React, { useState } from 'react';
import Navbar from './Navbar';

export const Admin = () => {
  const [showHairstylePopup, setShowHairstylePopup] = useState(false);
  const [filterCriteria, setFilterCriteria] = useState(null);

  const handleAdminCardClick = () => {
    setShowHairstylePopup(true);
  };

  const handleFilterClick = (criteria) => {
    setFilterCriteria(criteria);
  };

  const handleAllStudentsClick = () => {
    setFilterCriteria(null); // Clear the filter
  };

  return (
    <>
      <Navbar />
      <div className='admin-container'>
        <h2 className='titles'>Student list</h2>
        <button
          className='filter-btns'
          style={{ backgroundColor: filterCriteria === null ? '#AA2F2F' : '#212121', color: filterCriteria === null ? 'white' : 'white' }}
          onClick={handleAllStudentsClick}
        >
          All Students
        </button>
        <button
          className='filter-btns'
          style={{ backgroundColor: filterCriteria === 'Graduated' ? '#AA2F2F' : '#212121', color: filterCriteria === 'Graduated' ? 'white' : 'white' }}
          onClick={() => handleFilterClick('Graduated')}
        >
          Graduated
        </button>
        <button
          className='filter-btns'
          style={{ backgroundColor: filterCriteria === 'FirstYear' ? '#AA2F2F' : '#212121', color: filterCriteria === 'FirstYear' ? 'white' : 'white' }}
          onClick={() => handleFilterClick('FirstYear')}
        >
          First Year
        </button>
        <button
          className='filter-btns'
          style={{ backgroundColor: filterCriteria === 'SecondYear' ? '#AA2F2F' : '#212121', color: filterCriteria === 'SecondYear' ? 'white' : 'white' }}
          onClick={() => handleFilterClick('SecondYear')}
        >
          Second Year
        </button>
        <div className='admin-flex'>
          <div className='admin-cards' style={{ display: filterCriteria === 'FirstYear' || filterCriteria === null ? 'block' : 'none' }} typeof='firstYear'>
            <div className='admin-pics'></div>
            <div className='admin-titles' onClick={handleAdminCardClick}>
              <div className='admin-inputs'>
                <h4>Asher Page</h4>
                <p>Assign</p>
              </div>
            </div>
          </div>
          <div className='admin-cards' style={{ display: filterCriteria === 'FirstYear' || filterCriteria === null ? 'block' : 'none' }} typeof='firstYear'>
            <div className='admin-pics'></div>
            <div className='admin-titles' onClick={handleAdminCardClick}>
              <div className='admin-inputs'>
                <h4>Asher Page</h4>
                <p>Assign</p>
              </div>
            </div>
          </div>
          <div className='admin-cards' style={{ display: filterCriteria === 'FirstYear' || filterCriteria === null ? 'block' : 'none' }} typeof='firstYear'>
            <div className='admin-pics'></div>
            <div className='admin-titles' onClick={handleAdminCardClick}>
              <div className='admin-inputs'>
                <h4>Asher Page</h4>
                <p>Assign</p>
              </div>
            </div>
          </div>
          <div className='admin-cards' style={{ display: filterCriteria === 'FirstYear' || filterCriteria === null ? 'block' : 'none' }} typeof='firstYear'>
            <div className='admin-pics'></div>
            <div className='admin-titles' onClick={handleAdminCardClick}>
              <div className='admin-inputs'>
                <h4>Asher Page</h4>
                <p>Assign</p>
              </div>
            </div>
          </div>
          <div className='admin-cards' style={{ display: filterCriteria === 'FirstYear' || filterCriteria === null ? 'block' : 'none' }} typeof='firstYear'>
            <div className='admin-pics'></div>
            <div className='admin-titles' onClick={handleAdminCardClick}>
              <div className='admin-inputs'>
                <h4>Asher Page</h4>
                <p>Assign</p>
              </div>
            </div>
          </div>
          <div className='admin-cards' style={{ display: filterCriteria === 'FirstYear' || filterCriteria === null ? 'block' : 'none' }} typeof='firstYear'>
            <div className='admin-pics'></div>
            <div className='admin-titles' onClick={handleAdminCardClick}>
              <div className='admin-inputs'>
                <h4>Asher Page</h4>
                <p>Assign</p>
              </div>
            </div>
          </div>
          <div className='admin-cards' style={{ display: filterCriteria === 'FirstYear' || filterCriteria === null ? 'block' : 'none' }} typeof='firstYear'>
            <div className='admin-pics'></div>
            <div className='admin-titles' onClick={handleAdminCardClick}>
              <div className='admin-inputs'>
                <h4>Asher Page</h4>
                <p>Assign</p>
              </div>
            </div>
          </div>
          <div className='admin-cards' style={{ display: filterCriteria === 'SecondYear' || filterCriteria === null ? 'block' : 'none' }} typeof='secondYear'>
            <div className='admin-pics'></div>
            <div className='admin-titles' onClick={handleAdminCardClick}>
              <div className='admin-inputs'>
                <h4>andrew Page</h4>
                <p>Assign</p>
              </div>
            </div>
          </div>
          <div className='admin-cards' style={{ display: filterCriteria === 'Graduated' || filterCriteria === null ? 'block' : 'none' }} typeof='Graduated'>
            <div className='admin-pics'></div>
            <div className='admin-titles' onClick={handleAdminCardClick}>
              <div className='admin-inputs'>
                <h4>ashly Page</h4>
                <p>Assign</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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