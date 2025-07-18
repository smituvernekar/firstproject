import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Hero/Hero'
import Programs from './Components/Programs/programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
// import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {

  const [playState, setPlayState]=useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Title subTitle='Our PROGRAM' title='What We Offer'/>
      <div className="container">
      <Programs/>
      <About/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='TESTIMONIALS' title='What Student says'/>
      <Testimonials/>
      <Title subTitle='Contact Us' title='Get in Touch'/>
      <Campus/>
      <Contact/>
      <Footer/>
      
      </div>
    {/* <VideoPlayer playState={playState} setPlayState={setPlayState}/> */}
    </div>
  )
}

export default App