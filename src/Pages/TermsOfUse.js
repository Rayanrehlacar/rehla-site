import React, { useEffect, useState } from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/glightbox.css'
import { GetTermAndConditions } from '../services/tripService'
function TermsOfUse() {
   const [terms, setTerms] = useState({})
   useEffect(() => {
      termsAndCondition();
   }, [])
   const termsAndCondition = async () => {
      let { data } = await GetTermAndConditions();
      console.log({ data });
      setTerms(data?.model[0])
   };
   return (
      <>
         <Header />
         <section class="banners" style={{ backgroundImage: `url(${'../../images/banners_bg.webp'})` }} id='terms-of-use'>
            <div class="container">
               <div class="banner_head">
                  {/* <h1>Terms of Use</h1> */}
                  {/* <p>An enim nullam tempor sapien gravida donec enim ipsum <br /> porta justo  congue purus pretium ligula </p> */}
                  <h1>{terms?.Title}</h1>
                  <p>{terms?.Discription}</p>
               </div>
               <div class="bredcrub">
                  <a href="index.html" target="_self"> Home </a><span> <img src="images/arrow.png" alt="arrow" /></span>
                  <p>Terms of Use</p>
               </div>
            </div>
         </section>
         {/* <!--------------------|| Banner End ||------------------------> */}
         {/* <!----------------|| Terms of Use Css Start ||--------------------> */}
         <section class="term_condition">
            <div class="container">
               <div class="condition_contents">
                  <div class="term_heading">
                     <h2>Generate Terms & Conditions</h2>
                     <p>By accessing and placing an order with UXTheme, you confirm that you are in greement with and bound by the terms and conditions contained in the Terms Of Use outlined elow.entire website and any emailommunication between you and UXTheme. Under no circumstances shall UXTheme team be liable for any direct, indirect, special, incidental or consequential damages, including, but not limited to, loss of data or profit, arisingout of the use, or the inability to use, the materials on this site, even if UXTheme team or an authorized representative has been advised of the possibility of such damages. If your use of materials from this site results in the need for servicing, repair or correction of equipment or data, you assume any costs thereof</p>
                  </div>
                  <div class="term_heading">
                     <h2>Generate Terms & Conditions for websites</h2>
                     <p>Creating a Terms & Conditions for your application or website can take a lot of time. You could either spend tons of money on hiring a lawyer, or you could simply use our service and get a unique Terms & Conditions fully custumized to your website. Creating a Terms & Conditions for your application or website can take a lot of time. You could either spend tons of money on hiring a lawyer, or you could simply use our service and get a unique Terms & Conditions fully custumized to your website.</p>
                  </div>
                  <div class="term_heading">
                     <h2>Generate Terms & Conditions for apps</h2>
                     <p>Creating a Terms & Conditions for your application or website can take a lot of time. You could either spend tons of money on hiring a lawyer, or you could simply use our service and get a unique Terms & Conditions fully custumized to your website. Creating a Terms & Conditions for your application or website can take a lot of time. You could either spend tons of money on hiring a lawyer, or you could simply use our service and get a unique Terms & Conditions fully custumized to your website.</p>
                  </div>
                  <div class="term_heading">
                     <h2>Changes about terms</h2>
                     <p>Creating a Terms & Conditions for your application or website can take a lot of time. You could either spend tons of money on hiring a lawyer, or you could simply use our service and get a unique Terms & Conditions fully custumized to your website. Creating a Terms & Conditions for your application or website can take a lot of time. You could either spend tons of money on hiring a lawyer, or you could simply use our service and get a unique Terms & Conditions fully custumized to your website.</p>
                  </div>
               </div>

            </div>
         </section>
         <Footer />
      </>
   )
}

export default TermsOfUse