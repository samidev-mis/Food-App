import React, { useEffect } from 'react'
import Navbar from './components/Navbar'

import HeroTwo from './components/HeroTwo'
import CheckSection from './components/CheckSection'
import Checkout from './components/Checkout'
import AOS from "aos"
import "aos/dist/aos.css"
import Service from './components/Service'
import ChooseUs from './components/ChooseUs'
import Customer from './components/Customer'
import Download from './components/Download'
import Footer from './components/Footer'
import HeroOne from './components/HeroOne'


const App = () => {
  useEffect(() => {
    AOS.init({
      offset:100,
      duration:700,
      easing:"ease-in",
      delay:100,
    });
    AOS.refresh();
}, []);
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <HeroOne />
      <HeroTwo />
      <Checkout/>
      <CheckSection />
      <Service/>
      <ChooseUs />
      <Customer/>
      <Download />
      <Footer />
    </div>
  )
}

export default App