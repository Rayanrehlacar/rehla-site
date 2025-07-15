import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/glightbox.css'

import { useTranslation } from 'react-i18next';

function Offer() {
   const { t } = useTranslation(); // Initialize the translation function
   const navigate = useNavigate();
   const isLoggedIn = !!sessionStorage.getItem('profile');  
   
  return (
    <>
        <section class="coming ptb100">
         <div class="container">
            <div class="offer_img">
               <img src="../../images/offer-Image.webp" alt="" />
            </div>
            <div class="offer_content">
               <div class="sec_head">
                  <h2>{t('AboutUspage.stayTuned')}</h2>
                  <p>An enim nullam tempor gravida donec enim  luctus risusd diam eget risus varius blandit sit amet.</p>
               </div>
               <div class="sub_content">
                  <h4>{t('AboutUspage.featureIntegration')}</h4>
                  <p>We believe that designing products and services in close  is the only way to have a real impact on their business.</p>
               </div>
               <div class="sub_content">
                  <h4>{t('AboutUspage.multipleDiscussions')}</h4>
                  <p>We believe that designing products and  have aclients is the only way to have a real impact on their business.</p>
               </div>
               {!isLoggedIn && (
                  <div class="blue_btn">
                     <a onClick={() => navigate("/login")}>
                        <span>{t('AboutUspage.GetStarted')}</span>
                     </a>
                  </div>
               )}
            </div>
         </div>
      </section>
    </>
  )
}

export default Offer