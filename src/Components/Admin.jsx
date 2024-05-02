import React from 'react'
import Navbar from './Navbar'

export const Admin = () => {
  return (
    <>
    <Navbar />
    <div className='admin-container'>
    <h2 className='titles'>Student list</h2>
    <div className='admin-flex'>
        <div className='admin-cards'></div>
        <div className='admin-cards'></div>
        <div className='admin-cards'></div>
        <div className='admin-cards'></div>
        
    </div>
    </div>
    </>
  )
}
 export default Admin