import React from 'react'
import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/glightbox.css'
import { useTranslation } from 'react-i18next';

function Steps() {
  const { t } = useTranslation();

  return (
    <>
         <section class="traveler coming">
         <div class="about_inner ptb100">
            <div class="container">
               <div class="sec_head">
                  <h2> {t('heroSection.join')}<br/> <span>{t('heroSection.Rehla')}</span>{t('heroSection.Traveler')}</h2>
                  <div class="img_list">
                     <img src="../../images/phone.webp" alt="img"/>
                     <img src="../../images/phone.webp" alt="img"/>
                     <img src="../../images/phone.webp" alt="img"/>
                  </div>
               </div>
               <div class="about_img">
                  <div class="travel_box">
                     <span></span>
                     <div>
                        <h4>{t('heroSection.firstStep')}</h4>
                        <p>{t('heroSection.first')}</p>
                     </div>
                  </div>
                  <div class="travel_box">
                     <span></span>
                     <div>
                        <h4>{t('heroSection.secondStep')}</h4>
                        <p>{t('heroSection.second')}</p>
                     </div>
                  </div>
                  <div class="travel_box">
                     <span></span>
                     <div>
                        <h4>{t('heroSection.thirdStep')}</h4>
                        <p>{t('heroSection.third')}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="about_inner ptb100">
            <div class="container">
               <div class="sec_head">
                  <h2> {t('heroSection.book')} <br/><span>{t('heroSection.Rehla')} </span>{t('heroSection.trip')} </h2>
                  <div class="img_list">
                     <img src="../../images/phone.webp" alt="img"/>
                     <img src="../../images/phone.webp" alt="img"/>
                     <img src="../../images/phone.webp" alt="img"/>
                  </div>
               </div>
               <div class="about_img">
                  <div class="travel_box">
                     <span></span>
                     <div>
                        <h4>{t('heroSection.firstStep')}</h4>
                        <p>{t('heroSection.login')}</p>
                     </div>
                  </div>
                  <div class="travel_box">
                     <span></span>
                     <div>
                        <h4>{t('heroSection.secondStep')}</h4>
                        <p>{t('heroSection.goto')}</p>
                     </div>
                  </div>
                  <div class="travel_box">
                     <span></span>
                     <div>
                        <h4>{t('heroSection.thirdStep')}</h4>
                        <p>{t('heroSection.select')}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="about_inner ptb100">
          <div class="container">
               <div class="sec_head">
                  <h2> {t('heroSection.join')}<br/> <span>{t('heroSection.Rehla')}</span>{t('heroSection.Traveler')}</h2>
                  <div class="img_list">
                     <img src="../../images/phone.webp" alt="img"/>
                     <img src="../../images/phone.webp" alt="img"/>
                     <img src="../../images/phone.webp" alt="img"/>
                  </div>
               </div>
               <div class="about_img">
                  <div class="travel_box">
                     <span></span>
                     <div>
                        <h4>{t('heroSection.firstStep')}</h4>
                        <p>{t('heroSection.first')}</p>
                     </div>
                  </div>
                  <div class="travel_box">
                     <span></span>
                     <div>
                        <h4>{t('heroSection.secondStep')}</h4>
                        <p>{t('heroSection.second')}</p>
                     </div>
                  </div>
                  <div class="travel_box">
                     <span></span>
                     <div>
                        <h4>{t('heroSection.thirdStep')}</h4>
                        <p>{t('heroSection.third')}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default Steps