import React from 'react'
import '../Styles/home.css'
import carro from '../Styles/Images/NW-Hairstyling-22.jpg'
import keys from '../Styles/Images/NW-Hairstyling-22.jpg'
import Footer from './Footer'
import Navbar from './Navbar'
export const Home = () => {
  return (
    <>
    <Navbar />
    <div className='flex-cont'>
      <div className='the-text'>
        <h1>Elevate Your Style</h1>
        <h5>Welcome to WM Styling, a sanctuary where beauty is not just a goal, but a way of life. As you step through our doors, you're greeted by an atmosphere brimming with elegance and sophistication, where every corner exudes warmth and charm. Our team of dedicated stylists, armed with a wealth of experience and a passion for innovation, is here to elevate your hair game to new heights. From timeless classics to avant-garde creations, we tailor each appointment to your unique preferences and lifestyle, ensuring that every cut, every color, every style is a true reflection of your individuality. <span>Read More.</span></h5>
        <button className='opener-button'>Get Quote</button>
      </div>
      <div className='imagyo'>
        <img src={carro}></img>
      </div>
    </div>
    <div className='flex-cont rev'>
      <div className='the-text'>
        <h1>Crafting Beauty</h1>
        <h5>Step into the luxurious ambiance of WM Styling, where every visit is an indulgent journey tailored exclusively for you. Nestled in our haven of sophistication, our skilled artisans are poised to unlock the full potential of your hair, weaving together precision and creativity to craft a style that not only complements your features but also embodies your unique essence. From the moment you enter, you're enveloped in an atmosphere of opulence and relaxation, where every detail is meticulously curated to ensure your comfort and satisfaction.  <span>Read More.</span></h5>
        <button className='opener-button'>More Info</button>
      </div>
      <div className='imagyo'>
        <img src={keys}></img>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Home