import React from 'react'
import Header from '../Components/Header/Header'
import Herosection from '../Components/Herosection'
import Partner from '../Components/Partner'
import Services from '../Components/Services'
import Offer from '../Components/Offer'
import AboutRahela from '../Components/AboutRahela'
import Steps from '../Components/Steps'
import FeatureCourses from '../Components/FeatureCourses'
import AppScreenshots from '../Components/AppScreenshots'
import Counter from '../Components/Counter'
import Testimonial from '../Components/Testimonial'
import AppStore from '../Components/AppStore'
import Footer from '../Components/Footer/Footer'
import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/glightbox.css'

function Home() {
  return (
    <>
        <Header/>
        <Herosection/>
        <Partner/>
        <Services/>
        {/* <Offer/> */}
        <AboutRahela/>
        <Steps/>
        <FeatureCourses/>
        <AppScreenshots/>
        <Counter/>
        {/* <Testimonial/> */}
        <AppStore/>
        <Footer/>
    </>
  )
}

export default Home