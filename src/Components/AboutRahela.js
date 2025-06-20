import React, { useState } from 'react'
import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/glightbox.css'
import '../css/videoModal.css'; 
import { useTranslation } from 'react-i18next';

function AboutRahela() {
   const { t } = useTranslation();
   const [showVideo, setShowVideo] = useState(false);

   const handleVideoToggle = () => {
      setShowVideo(!showVideo);
   };

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
                  <a href="#" onClick={(e) => { e.preventDefault(); handleVideoToggle(); }}>
                     <img src="../../images/Play.webp" alt="play"/>
                  </a>
               </div>
                {showVideo && (
                  <div className="video_modal_overlay" onClick={handleVideoToggle}>
                     <div className="video_modal_content" onClick={(e) => e.stopPropagation()}>
                        <button className="close_btn" onClick={handleVideoToggle}>×</button>
                        <video width="100%" controls autoPlay>
                        <source src="video/فديو التعريف بالرحلات بين المدن.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                        </video>
                     </div>
                  </div>
               )}
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
               <div className="about_img">
                  <img src="../../images/image.webp" alt="Trip" />

                  <div className="img_contant">
                  <h3>{t("heroSection.startTrip")}</h3>
                  <p>{t("heroSection.offerUp")}</p>
                  <a href="javascript:void(0)"><span>{t("heroSection.startTrip")}</span></a>
                  </div>

                  <a href="#" onClick={(e) => { e.preventDefault(); handleVideoToggle(); }}>
                     <img src="../../images/Play.webp" alt="Play Video" />
                  </a>
               </div>
               {showVideo && (
                  <div className="video_modal_overlay" onClick={handleVideoToggle}>
                     <div className="video_modal_content" onClick={(e) => e.stopPropagation()}>
                        <button className="close_btn" onClick={handleVideoToggle}>×</button>
                        <video width="100%" controls autoPlay>
                        <source src="video/فديو التعريف بالرحلات بين المدن.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                        </video>
                     </div>
                  </div>
               )}
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
                  <a href="#" onClick={(e) => { e.preventDefault(); handleVideoToggle(); }}>
                     <img src="../../images/Play.webp" alt="play"/>
                  </a>
               </div>
               {showVideo && (
                  <div className="video_modal_overlay" onClick={handleVideoToggle}>
                     <div className="video_modal_content" onClick={(e) => e.stopPropagation()}>
                        <button className="close_btn" onClick={handleVideoToggle}>×</button>
                        <video width="100%" controls autoPlay>
                        <source src="video/فديو التعريف بالرحلات بين المدن.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                        </video>
                     </div>
                  </div>
               )}
            </div>
         </div>
      </section>
    </>
  )
}

export default AboutRahela