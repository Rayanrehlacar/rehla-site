import React from 'react'
import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/glightbox.css'
import { useTranslation } from 'react-i18next';

function Services() {
   const { t } = useTranslation(); 

  return (
    <>
          <section class="service ptb100">
         <div class="container">
            <div class="sec_head">
               <h2> <span>{t('rehlaServiceSection.rehlaServiceTitle')} </span> {t('rehlaServiceSection.rehlaSer')}</h2>
               {/* <p>Fully layered dolor sit amet, nobis id expedita <br/> dolores officiis laboriosam.</p> */}
            </div>
            <div class="service_inner pt60">
               <div class="service_box">
                  <img src="../../images/going.webp"/>
                  <div class="service_content_box">
                     <h3>{t('rehlaServiceSection.serviceTitle1')}</h3>
                     <p>{t('rehlaServiceSection.serviceDescription1')}</p>
                  </div>
               </div>
               <div class="service_box">
                  <img src="../../images/Prebooking-trips.webp"/>
                  <div class="service_content_box">
                     <h3>{t('rehlaServiceSection.serviceTitle2')}</h3>
                     <p>{t('rehlaServiceSection.serviceDescription2')}</p>
                  </div>
               </div>
               <div class="service_box">
                  <img src="../../images/Tourism-Tours.webp"/>
                  <div class="service_content_box">
                     <h3>{t('rehlaServiceSection.serviceTitle3')}</h3>
                     <p>{t('rehlaServiceSection.serviceDescription3')}</p>
                  </div>
               </div>
               <div class="service_box">
                  <img src="../../images/Sending-Parcels.webp"/>
                  <div class="service_content_box">
                     <h3>{t('rehlaServiceSection.serviceTitle4')}</h3>
                     <p>{t('rehlaServiceSection.serviceDescription4')}</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default Services