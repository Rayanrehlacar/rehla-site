import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { useSelector } from "react-redux";
import { GetMyPreferences, EditPreferences } from "../services/tripService";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const preferenceOptions = [
   { key: 'LikeMusic', label: 'Music', icon: 'Music.svg' },
   { key: 'HaveAirCondition', label: 'Air Conditioning', icon: 'Air-conditioning.svg' },
   { key: 'HaveWifi', label: 'Wi-Fi', icon: 'Wifi.svg' },
   { key: 'DeliverPost', label: 'Post Delivery', icon: 'Display-Screen.svg' },
   { key: 'LikeSpeaking', label: 'Speaking', icon: 'Chating.svg' },
   { key: 'LikeSmoking', label: 'Smoking', icon: 'Smoking.svg' },
   { key: 'HaveChargeMobile', label: 'Mobile Charging', icon: 'car-charger.svg' },
   { key: 'LikePets', label: 'Pets', icon: 'suitcase.svg' }
 ];
 
 const MyPreferences = () => {
   const { t } = useTranslation();
   const [userPreferences, setUserPreferences] = useState({});
 
   useEffect(() => {
     fetchPreferences();
   }, []);
 
   const fetchPreferences = async () => {
     const { data } = await GetMyPreferences();
     setUserPreferences(data?.model || {}); // Save model directly
   };
 
   const handlePreferenceChange = (key) => async (e) => {
      const newValue = e.target.checked;

      const updatedPreferences = {
         ...userPreferences,
         [key]: newValue
      };
    
      // 1. Update state first
      setUserPreferences(updatedPreferences);
    
     // 2. Send full preferences object in API
     try {
         await EditPreferences(updatedPreferences);

         // Display success toast notification
         toast.success('Preference updated successfully!');

      } catch (error) {
         // Display error toast notification
         toast.error('Failed to update preference.');
      }
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
            {Array.isArray(preferenceOptions) &&
            preferenceOptions.map((item, index) => (
           <div className="preferences_box" key={index}>
             <p>
               <span>
                 <img
                   src={`images/Preferences/${item.icon}`}
                   alt={item.label}
                 />
               </span>
               {item.label}
             </p>
             <label className="switch">
               <input
                 type="checkbox"
                 checked={userPreferences?.[item.key] || false}
                 onChange={handlePreferenceChange(item.key)}
               />
               <span></span>
             </label>
           </div>
            ))}
            </div>
         </section>
     <Footer />
      </>
   );
 };
 
 export default MyPreferences;
