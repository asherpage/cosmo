import React from 'react'
import '../Styles/home.css'
import carro from '../Styles/Images/NW-Hairstyling-22.jpg'
import keys from '../Styles/Images/NW-Hairstyling-22.jpg'
export const Home = () => {
  return (
    <>
    <div className='flex-cont'>
      <div className='the-text'>
        <h1>Get An Instant Quote</h1>
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident porro a cupiditate necessitatibus incidunt explicabo assumenda ducimus tempore, reprehenderit fugit labore totam, id, praesentium minima minus impedit placeat doloremque modi? Natus ad ab hic, fugiat quasi, magni similique, neque distinctio dolorum placeat rerum corporis a impedit. Vero atque sit commodi! <span>Read More.</span></h5>
        <button className='opener-button'>Get Quote</button>
      </div>
      <div className='imagyo'>
        <img src={carro}></img>
      </div>
    </div>
    <div className='flex-cont rev'>
      <div className='the-text'>
        <h1>Get An Instant Quote</h1>
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident porro a cupiditate necessitatibus incidunt explicabo assumenda ducimus tempore, reprehenderit fugit labore totam, id, praesentium minima minus impedit placeat doloremque modi? Natus ad ab hic, fugiat quasi, magni similique, neque distinctio dolorum placeat rerum corporis a impedit. Vero atque sit commodi! <span>Read More.</span></h5>
        <button className='opener-button'>More Info</button>
      </div>
      <div className='imagyo'>
        <img src={keys}></img>
      </div>
    </div>
    </>
  )
}

export default Home