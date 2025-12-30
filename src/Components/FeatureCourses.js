import React from 'react'
import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/glightbox.css'
import { useTranslation } from 'react-i18next';

function FeatureCourses() {
  const { t } = useTranslation();

  return (
    <>
        <section class="featured ptb100">
         <div class="container">
            <div class="sec_head">
                  <h4>{t('heroSection.Featuredcoures')}</h4>
                  <h2>{t('heroSection.Charge')}</h2>
               </div>
            <div class="card_inner pt60">
               <div class="card_box">
                  <img src="../../images/img1.webp" alt="img"/>
                  <div class="card_details">
                     <h3>{t('heroSection.Rehla')} - <span>15 SAR</span></h3>
                     <p>{t('heroSection.price')}: <span>15 SAR</span></p>
                     <a href="#/add-balance-form"><span>{t('heroSection.Chargewallet')}</span></a>
                  </div>
               </div>
                <div class="card_box">
                  <img src="../../images/img2.webp" alt="img"/>
                  <div class="card_details">
                     <h3>{t('heroSection.Rehla')} - <span>50 SAR</span></h3>
                     <p>{t('heroSection.price')}: <span>50 SAR</span></p>
                     <a href="#/add-balance-form"><span>{t('heroSection.Chargewallet')}</span></a>
                  </div>
               </div>
                <div class="card_box">
                  <img src="../../images/img3.webp" alt="img"/>
                  <div class="card_details">
                     <h3>{t('heroSection.Rehla')} - <span>100 SAR</span></h3>
                     <p>{t('heroSection.price')}: <span>100 SAR</span></p>
                     <a href="#/add-balance-form"><span>{t('heroSection.Chargewallet')}</span></a>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default FeatureCourses