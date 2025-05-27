import React from 'react'
import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/glightbox.css'
import { useTranslation } from 'react-i18next';

function AboutRahela() {
  const { t } = useTranslation();

  return (
    <>
         <section class="about">
         <div class="about_inner ptb100">
            <div class="container">
               <div class="sec_head">
                  <h4>{t('heroSection.AboutReh')}</h4>
                  <h2> <span>{t('heroSection.Rehla')}</span> {t('heroSection.RehlaIntro')} </h2>
                  <p>{t('heroSection.RehDes')}</p>
                  <div class="blue_btn">
                     <a href="javascript:void(0)"><span>{t('AboutUspage.GetStarted')}</span></a>
                  </div>
               </div>
               <div class="about_img">
                  <img src="../../images/image.webp" alt="img"/>
                  <div class="img_contant">
                     <h3>{t('heroSection.startTrip')}</h3>
                     <p>{t('heroSection.offerUp')}</p>
                     <a href="javascript:void(0)"><span>{t('heroSection.startTrip')}</span></a>
                  </div>
                  <a href="javascript:void(0);" data-video="video/dummy.mp4">
                     <img src="../../images/Play.webp" alt="play"/>
                  </a>
               </div>
            </div>
         </div>
         <div class="about_inner ptb100">
            <div class="container">
               <div class="sec_head">
                  <h4>{t('heroSection.AboutReh')}</h4>
                  <h2> <span>{t('heroSection.Signup')}</span>{t('heroSection.addingcar')}</h2>
                  <p>{t('heroSection.Trainingvideo')}</p>
                  <div class="blue_btn">
                     <a href="javascript:void(0)"><span>{t('AboutUspage.GetStarted')}</span></a>
                  </div>
               </div>
               <div class="about_img">
                  <img src="../../images/image.webp" alt="img"/>
                  <div class="img_contant">
                     <h3>{t('heroSection.startTrip')}</h3>
                     <p>{t('heroSection.offerUp')}</p>
                     <a href="javascript:void(0)"><span>{t('heroSection.startTrip')}</span></a>
                  </div>
                  <a href="javascript:void(0);"  data-video="video/dummy.mp4">
                  <img src="images/Play.webp" alt="play"/>
                  </a>
               </div>
            </div>
         </div>
         <div class="about_inner ptb100">
            <div class="container">
               <div class="sec_head">
                  <h4>{t('heroSection.AboutReh')}</h4>
                  <h2> <span>{t('heroSection.Rehla')}</span>{t('heroSection.Create')}</h2>
                  <p>{t('heroSection.explanation')}</p>
                  <div class="blue_btn">
                     <a href="javascript:void(0)"><span>{t('AboutUspage.GetStarted')}</span></a>
                  </div>
               </div>
               <div class="about_img">
                  <img src="../../images/image.webp" alt="img"/>
                  <div class="img_contant">
                     <h3>{t('heroSection.startTrip')}</h3>
                     <p>{t('heroSection.offerUp')}</p>
                     <a href="javascript:void(0)"><span>{t('heroSection.startTrip')}</span></a>
                  </div>
                  <a href="javascript:void(0);"  data-video="video/dummy.mp4">
                  <img src="../../images/Play.webp" alt="play"/>
                  </a>
               </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default AboutRahela