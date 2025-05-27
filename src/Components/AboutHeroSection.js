import React, { useEffect, useState } from 'react'
import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/glightbox.css'
import { AboutApplication } from '../services/tripService'
import { useTranslation } from 'react-i18next';
import i18n from '../i18n'; 

function AboutHeroSection() {
  const { t } = useTranslation();

  const [aboutus, setAboutus] = useState()

  useEffect(() => {
    aboutApplication();
  }, [])
  const aboutApplication = async () => {
    let { data } = await AboutApplication();
    setAboutus(data?.model[0])
  };
  return (
    <>
      <section class="banners" style={{ backgroundImage: `url(${'../../images/banners_bg.webp'})` }}>
        <div class="container">
          <div class="banner_head">
            <h1>{i18n.language === 'en' ? aboutus?.Title : aboutus?.TitleLT}</h1>
            <p>{i18n.language === 'en' ? aboutus?.Discription : aboutus?.DiscriptionLT}</p>
            {/* <h1>AboutUs</h1> */}
            {/* <p>An enim nullam tempor sapien gravida donec enim ipsum <br /> porta justo  congue purus pretium ligula </p> */}
          </div>
          <div class="bredcrub">
            <a href="index.html" target="_self"> Home </a><span> {'>'}</span> <p>AboutUs </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutHeroSection