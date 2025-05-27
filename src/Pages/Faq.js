import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/glightbox.css'
function Faq() {

    
    useEffect(() => {
        // Function to handle accordion functionality
        const handleAccordion = () => {
          // Initial slide down for the first accordion item
          $(".accordion-item:first-child").find('.accordion-content').slideDown();
          $(".accordion-item:first-child").addClass('active');
    
          // Click event for accordion headers
          $('.accordion-header').click(function() {
            $('.accordion-content').slideUp();
            $(".accordion-item").removeClass("active");
            if (!$(this).next().is(":visible")) {
              $(this).next().slideDown();
              $(this).parents(".accordion-item").addClass("active");
            }
          });
    
          // Click event for FAQ topics
          $('.faq_topics li a').on('click', function () {
            $('.faq_topics li a').removeClass("active");
            $(this).addClass("active");
            var tab = $(this).attr('data-tab');
            $('.topic_details .accordion').fadeOut(0);
            $('div[data-details="' + tab + '"]').fadeIn(0);
            $(".accordion-item:first-child").find('.accordion-content').slideDown();
            $(".accordion-item:first-child").addClass('active');
          });
        };
    
        // Call the function when the component mounts
        handleAccordion();
    
        // Clean up event listeners when the component unmounts
        return () => {
          $('.accordion-header').off('click');
          $('.faq_topics li a').off('click');
        };
      }, []); // Empty dependency array ensures this effect runs only once
    

  return (
    <>
    <Header/>

<section class="banners" style={{backgroundImage: `url(${'../../images/banners_bg.webp'})`}} id='faq'>
		<div class="container">
			<div class="banner_head">
				<h1>FAQ</h1>
				<p>An enim nullam tempor sapien gravida donec enim ipsum <br/> porta justo  congue purus pretium ligula </p>
			</div>
			<div class="bredcrub">
				<a href="index.html" target="_self"> Home </a><span> . </span> <p>FAQ </p>
			</div>
		</div>
	</section>
   {/* <!-------------|| Faq Quick Navigation Css Start ||------------------> */}
  
   <section class="faq_Navigation ptb120">
      <div class="container">
         <div class="topics_box">
            <h3>Quick Navigation</h3>
            <ul class="faq_topics">
               <li><a href="javascript:void(0);" class="active" data-tab="1">General</a> </li>
               <li><a href="javascript:void(0);" data-tab="2">Account</a> </li>
               <li><a href="javascript:void(0);" data-tab="3">Pricing & Support</a> </li>
               <li><a href="javascript:void(0);" data-tab="4">Purchasing Online</a> </li>
               <li><a href="javascript:void(0);" data-tab="5">Returns Policy</a> </li>
               <li><a href="javascript:void(0);" data-tab="6">Technical Methods</a> </li>
            </ul>
         </div>
         <div class="topic_details">
            <div class="accordion" data-details="1">
                <div class="accordion-item">
                    <h3 class="accordion-header"> Where can I get analytics help? 
                        <span class="open_plus"> <img src="images/plus.svg" /> </span>
                        <span class="open_minus"> <img src="images/minus.svg" /> </span>
                    </h3>
                    <div class="accordion-content">
                        <p>On the other hand, the strengthening and development of the structure largely determines the creation of substantial financial and administrative conditions. Equally, the beginning of the daily work on the formation of the position provides a wide range of (specialists) participation in the formation of participatory systems.</p>
                    </div>
                </div>
                <div class="accordion-item">
                    <h3 class="accordion-header">Equally the beginning of the daily work?
                        <span class="open_plus"> <img src="images/plus.svg" /> </span>
                        <span class="open_minus"> <img src="images/minus.svg" /> </span>
                    </h3>
                    <div class="accordion-content">
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                    </div>
                </div>
                <div class="accordion-item">
                    <h3 class="accordion-header">What payment methods do you accept?
                        <span class="open_plus"> <img src="images/plus.svg" /> </span>
                        <span class="open_minus"> <img src="images/minus.svg" /> </span>
                    </h3>
                    <div class="accordion-content">
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                    </div>
                </div>
                 <div class="accordion-item">
                    <h3 class="accordion-header">Can I use all the Home page demos in a single website?
                        <span class="open_plus"> <img src="images/plus.svg" /> </span>
                        <span class="open_minus"> <img src="images/minus.svg" /> </span>
                    </h3>
                    <div class="accordion-content">
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                    </div>
                </div>
                <div class="accordion-item">
                    <h3 class="accordion-header">What kind of data is needed for analysis?
                        <span class="open_plus"> <img src="images/plus.svg" /> </span>
                        <span class="open_minus"> <img src="images/minus.svg" /> </span>
                    </h3>
                    <div class="accordion-content">
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                    </div>
                </div>
            </div>
            <div class="accordion" data-details="2">
                <div class="accordion-item">
                    <h3 class="accordion-header">Where can I get analytics help?
                        <span class="open_plus"> <img src="images/plus.svg" /> </span>
                        <span class="open_minus"> <img src="images/minus.svg" /> </span>
                    </h3>
                    <div class="accordion-content">
                        <p>On the other hand, the strengthening and development of the structure largely determines the creation of substantial financial and administrative conditions. Equally, the beginning of the daily work on the formation of the position provides a wide range of (specialists) participation in the formation of participatory systems.</p>
                    </div>
                </div>
                <div class="accordion-item">
                    <h3 class="accordion-header">Equally the beginning of the daily work?
                        <span class="open_plus"> <img src="images/plus.svg" /> </span>
                        <span class="open_minus"> <img src="images/minus.svg" /> </span>
                    </h3>
                    <div class="accordion-content">
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                    </div>
                </div>
                <div class="accordion-item">
                    <h3 class="accordion-header">What payment methods do you accept?
                        <span class="open_plus"> <img src="images/plus.svg" /> </span>
                        <span class="open_minus"> <img src="images/minus.svg" /> </span>
                    </h3>
                    <div class="accordion-content">
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                    </div>
                </div>
                 <div class="accordion-item">
                    <h3 class="accordion-header">Can I use all the Home page demos in a single website?
                        <span class="open_plus"> <img src="images/plus.svg" /> </span>
                        <span class="open_minus"> <img src="images/minus.svg" /> </span>
                    </h3>
                    <div class="accordion-content">
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                    </div>
                </div>
                <div class="accordion-item">
                    <h3 class="accordion-header">What kind of data is needed for analysis?
                        <span class="open_plus"> <img src="images/plus.svg" /> </span>
                        <span class="open_minus"> <img src="images/minus.svg" /> </span>
                    </h3>
                    <div class="accordion-content">
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                    </div>
                </div>
            </div>
            <div class="accordion" data-details="3">
                <div class="accordion-item">
                    <h3 class="accordion-header">Where can I get analytics help?
                        <span class="open_plus"> <img src="images/plus.svg" /> </span>
                        <span class="open_minus"> <img src="images/minus.svg" /> </span>
                    </h3>
                    <div class="accordion-content">
                        <p>On the other hand, the strengthening and development of the structure largely determines the creation of substantial financial and administrative conditions. Equally, the beginning of the daily work on the formation of the position provides a wide range of (specialists) participation in the formation of participatory systems.</p>
                    </div>
                </div>
                <div class="accordion-item">
                    <h3 class="accordion-header">Equally the beginning of the daily work?
                        <span class="open_plus"> <img src="images/plus.svg" /> </span>
                        <span class="open_minus"> <img src="images/minus.svg" /> </span>
                    </h3>
                    <div class="accordion-content">
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                    </div>
                </div>
                <div class="accordion-item">
                    <h3 class="accordion-header">What payment methods do you accept?
                        <span class="open_plus"> <img src="images/plus.svg" /> </span>
                        <span class="open_minus"> <img src="images/minus.svg" /> </span>
                    </h3>
                    <div class="accordion-content">
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                    </div>
                </div>
                 <div class="accordion-item">
                    <h3 class="accordion-header">Can I use all the Home page demos in a single website?
                        <span class="open_plus"> <img src="images/plus.svg" /> </span>
                        <span class="open_minus"> <img src="images/minus.svg" /> </span>
                    </h3>
                    <div class="accordion-content">
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                    </div>
                </div>
                <div class="accordion-item">
                    <h3 class="accordion-header">What kind of data is needed for analysis?
                        <span class="open_plus"> <img src="images/plus.svg" /> </span>
                        <span class="open_minus"> <img src="images/minus.svg" /> </span>
                    </h3>
                    <div class="accordion-content">
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                    </div>
                </div>
            </div>
            <div class="accordion" data-details="4">
                <div class="accordion-item">
                    <h3 class="accordion-header">Where can I get analytics help?
                        <span class="open_plus"> <img src="images/plus.svg" /> </span>
                        <span class="open_minus"> <img src="images/minus.svg" /> </span>
                    </h3>
                    <div class="accordion-content">
                        <p>On the other hand, the strengthening and development of the structure largely determines the creation of substantial financial and administrative conditions. Equally, the beginning of the daily work on the formation of the position provides a wide range of (specialists) participation in the formation of participatory systems.</p>
                    </div>
                </div>
                <div class="accordion-item">
                    <h3 class="accordion-header">Equally the beginning of the daily work?
                        <span class="open_plus"> <img src="images/plus.svg" /> </span>
                        <span class="open_minus"> <img src="images/minus.svg" /> </span>
                    </h3>
                    <div class="accordion-content">
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                    </div>
                </div>
                <div class="accordion-item">
                    <h3 class="accordion-header">What payment methods do you accept?
                        <span class="open_plus"> <img src="images/plus.svg" /> </span>
                        <span class="open_minus"> <img src="images/minus.svg" /> </span>
                    </h3>
                    <div class="accordion-content">
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                    </div>
                </div>
                 <div class="accordion-item">
                    <h3 class="accordion-header">Can I use all the Home page demos in a single website?
                        <span class="open_plus"> <img src="images/plus.svg" /> </span>
                        <span class="open_minus"> <img src="images/minus.svg" /> </span>
                    </h3>
                    <div class="accordion-content">
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                    </div>
                </div>
                <div class="accordion-item">
                    <h3 class="accordion-header">What kind of data is needed for analysis?
                        <span class="open_plus"> <img src="images/plus.svg" /> </span>
                        <span class="open_minus"> <img src="images/minus.svg" /> </span>
                    </h3>
                    <div class="accordion-content">
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                    </div>
                </div>
            </div>
             <div class="accordion" data-details="5">
                <div class="accordion-item">
                    <h3 class="accordion-header">Where can I get analytics help?
                        <span class="open_plus"> <img src="images/plus.svg" /> </span>
                        <span class="open_minus"> <img src="images/minus.svg" /> </span>
                    </h3>
                    <div class="accordion-content">
                        <p>On the other hand, the strengthening and development of the structure largely determines the creation of substantial financial and administrative conditions. Equally, the beginning of the daily work on the formation of the position provides a wide range of (specialists) participation in the formation of participatory systems.</p>
                    </div>
                </div>
                <div class="accordion-item">
                    <h3 class="accordion-header">Equally the beginning of the daily work?
                        <span class="open_plus"> <img src="images/plus.svg" /> </span>
                        <span class="open_minus"> <img src="images/minus.svg" /> </span>
                    </h3>
                    <div class="accordion-content">
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                    </div>
                </div>
                <div class="accordion-item">
                    <h3 class="accordion-header">What payment methods do you accept?
                        <span class="open_plus"> <img src="images/plus.svg" /> </span>
                        <span class="open_minus"> <img src="images/minus.svg" /> </span>
                    </h3>
                    <div class="accordion-content">
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                    </div>
                </div>
                 <div class="accordion-item">
                    <h3 class="accordion-header">Can I use all the Home page demos in a single website?
                        <span class="open_plus"> <img src="images/plus.svg" /> </span>
                        <span class="open_minus"> <img src="images/minus.svg" /> </span>
                    </h3>
                    <div class="accordion-content">
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                    </div>
                </div>
                <div class="accordion-item">
                    <h3 class="accordion-header">What kind of data is needed for analysis?
                        <span class="open_plus"> <img src="images/plus.svg" /> </span>
                        <span class="open_minus"> <img src="images/minus.svg" /> </span>
                    </h3>
                    <div class="accordion-content">
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                    </div>
                </div>
            </div>
             <div class="accordion" data-details="6">
                <div class="accordion-item">
                    <h3 class="accordion-header">Where can I get analytics help?
                        <span class="open_plus"> <img src="images/plus.svg" /> </span>
                        <span class="open_minus"> <img src="images/minus.svg" /> </span>
                    </h3>
                    <div class="accordion-content">
                        <p>On the other hand, the strengthening and development of the structure largely determines the creation of substantial financial and administrative conditions. Equally, the beginning of the daily work on the formation of the position provides a wide range of (specialists) participation in the formation of participatory systems.</p>
                    </div>
                </div>
                <div class="accordion-item">
                    <h3 class="accordion-header">Equally the beginning of the daily work?
                        <span class="open_plus"> <img src="images/plus.svg" /> </span>
                        <span class="open_minus"> <img src="images/minus.svg" /> </span>
                    </h3>
                    <div class="accordion-content">
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                    </div>
                </div>
                <div class="accordion-item">
                    <h3 class="accordion-header">What payment methods do you accept?
                        <span class="open_plus"> <img src="images/plus.svg" /> </span>
                        <span class="open_minus"> <img src="images/minus.svg" /> </span>
                    </h3>
                    <div class="accordion-content">
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                    </div>
                </div>
                 <div class="accordion-item">
                    <h3 class="accordion-header">Can I use all the Home page demos in a single website?
                        <span class="open_plus"> <img src="images/plus.svg" /> </span>
                        <span class="open_minus"> <img src="images/minus.svg" /> </span>
                    </h3>
                    <div class="accordion-content">
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                    </div>
                </div>
                <div class="accordion-item">
                    <h3 class="accordion-header">What kind of data is needed for analysis?
                        <span class="open_plus"> <img src="images/plus.svg" /> </span>
                        <span class="open_minus"> <img src="images/minus.svg" /> </span>
                    </h3>
                    <div class="accordion-content">
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                    </div>
                </div>
            </div>
         </div>
      </div>
   </section>
   
   <Footer/>
    </>
  )
}

export default Faq