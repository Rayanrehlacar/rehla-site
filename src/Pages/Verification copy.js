import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next';


function Verification() {
   const { t } = useTranslation();


  return (
<>
    <Header/>
    <section class="varification ptb60">
      <div class="container">
         <form class="varification_form" id="varification_form" name="varification_form" method="post" action="#"> 
            <div class="varification_grid">
            <p>{t('header.verification')}</p>
               <div class="varification_proof">
                  <label for="num_varify" class="proof_contact">
                     <span> <img src="images/smartphone.svg"/></span>
                     <div class="contact_active">
                        <p><strong>{t('dropdown.phoneNumber')}</strong>
                           <a href="tel:01016171926"> 01016171926</a> </p>
                     </div>
                  </label>
                  <input type="radio" name="num_varify" class="num_varify" id="num_varify"/>
               </div>
               <div class="varification_proof">
                  <label for="email_varify" class="proof_contact">
                     <span> <img src="images/mail-message.svg"/></span>
                     <div class="contact_active">
                        <p><strong>{t('dropdown.Emailaddress')}</strong>
                           <a href="mailto:example@gmail.com"> example@gmail.com</a> </p>
                     </div>
                  </label>
                  <input type="radio" name="email_varify" class="email_varify" id="email_varify"/>
               </div>
               <div class="varification_proof">
                  <label for="id_card" class="proof_contact">
                     <span> <img src="images/id-card.svg"/></span>
                     <div class="contact_active">
                        <p><strong>{t('dropdown.IDcard')}</strong>
                           <a href="javascript:void(0);">Identification card to increase confidence</a> </p>
                     </div>
                  </label>
                  <input type="radio" name="id_card" class="id_card" id="id_card"/>
               </div>
            </div>
         </form>
      </div>
   </section>
    <Footer/>
</>
  )
}

export default Verification