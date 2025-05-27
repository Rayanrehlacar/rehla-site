import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import ServiceHeroSection from '../Components/ServiceHeroSection'
import Service from '../Components/Services'
import AboutRahela from '../Components/AboutRahela'
import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/glightbox.css'
function Services() {
  return (
    <>
        <Header/>
        <ServiceHeroSection />
        <Service/>
        <AboutRahela/>
        <Footer/>
    </>
  )
}

export default Services