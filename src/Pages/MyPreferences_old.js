import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';


function MyPreferences() {
   const { t } = useTranslation();

   const { preferences } = useSelector(state => state?.preferenceStore);
   const [userPreferences, setUserPreferences] = useState(preferences || {});

   useEffect(() => {
      const savedPreferences = JSON.parse(localStorage.getItem('userPreferences'));
      if (savedPreferences) {
         setUserPreferences(savedPreferences);
      }
   }, []);

   const handlePreferenceChange = (preferenceKey) => (e) => {
      const updatedPreferences = {
         ...userPreferences,
         [preferenceKey]: e.target.checked,
      };
      setUserPreferences(updatedPreferences);
      localStorage.setItem('userPreferences', JSON.stringify(updatedPreferences));
   };

   return (
      <>
         <Header />
         <section className="banners" style={{ backgroundImage: `url(${'../../images/banners_bg.webp'})` }}>
            <div className="container">
               <div className="banner_head">
                  <h1>{t('header.myPreferences')}</h1>
                  <p>An enim nullam tempor sapien gravida donec enim ipsum <br /> porta justo  congue purus pretium ligula </p>
               </div>
               <div className="bredcrub">
                  <a href="index.html" target="_self"> {t('header.home')}</a><span> <img src="images/arrow.png" alt="arrow" /></span>
                  <p>{t('header.myPreferences')} </p>
               </div>
            </div>
         </section>
         <section className="my_preferences ptb60">
            <div className="container">
               <div className="preferences_box">
                  <p><span><img src="images/Preferences/Smoking.svg" alt="Smoking" /></span>{t('dropdown.smoking')}</p>
                  <label className="switch">
                     <input type="checkbox" checked={userPreferences?.LikeSmoking} onChange={handlePreferenceChange('LikeSmoking')} />
                     <span></span>
                  </label>
               </div>
               <div className="preferences_box">
                  <p><span><img src="images/Preferences/Air-conditioning.svg" alt="Air conditioning" /></span> {t('dropdown.airCondistioning')} </p>
                  <label className="switch">
                     <input type="checkbox" checked={userPreferences?.HaveAirCondition} onChange={handlePreferenceChange('HaveAirCondition')} />
                     <span></span>
                  </label>
               </div>
               <div className="preferences_box">
                  <p><span><img src="images/Preferences/Music.svg" alt="Music" /></span> {t('dropdown.Music')} </p>
                  <label className="switch">
                     <input type="checkbox" checked={userPreferences?.LikeMusic} onChange={handlePreferenceChange('LikeMusic')} />
                     <span></span>
                  </label>
               </div>
               <div className="preferences_box">
                  <p><span><img src="images/Preferences/Chating.svg" alt="Chating" /></span> {t('dropdown.chating')} </p>
                  <label className="switch">
                     <input type="checkbox" checked={userPreferences?.LikeSpeaking} onChange={handlePreferenceChange('LikeSpeaking')} />
                     <span></span>
                  </label>
               </div>
               <div className="preferences_box">
                  <p><span><img src="images/Preferences/car-charger.svg" alt="car charger" /></span> {t('dropdown.carCharger')} </p>
                  <label className="switch">
                     <input type="checkbox" checked={userPreferences?.HaveChargeMobile} onChange={handlePreferenceChange('HaveChargeMobile')} />
                     <span></span>
                  </label>
               </div>
               <div className="preferences_box">
                  <p> <span><img src="images/Preferences/suitcase.svg" alt="suitcase" /></span>{t('dropdown.suitcase')} </p>
                  <label className="switch">
                     <input type="checkbox" checked={userPreferences?.LikePets} onChange={handlePreferenceChange('LikePets')} />
                     <span></span>
                  </label>
               </div>
               <div className="preferences_box">
                  <p> <span><img src="images/Preferences/Wifi.svg" alt="Wifi" /></span> {t('dropdown.wifi')} </p>
                  <label className="switch">
                     <input type="checkbox" checked={userPreferences?.HaveWifi} onChange={handlePreferenceChange('HaveWifi')} />
                     <span></span>
                  </label>
               </div>
               <div className="preferences_box">
                  <p> <span><img src="images/Preferences/Display-Screen.svg" alt="Smoking" /></span>{t('dropdown.displayScreen')} </p>
                  <label className="switch">
                     <input type="checkbox" checked={userPreferences?.DeliverPost} onChange={handlePreferenceChange('DeliverPost')} />
                     <span></span>
                  </label>
               </div>
            </div>
         </section>
         <Footer />
      </>
   );
}

export default MyPreferences;
