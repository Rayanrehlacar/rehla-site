import React, {useEffect,useState} from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import {GetAllNotification} from '../services/tripService';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n'; 

function Notifications() {
   const { t } = useTranslation();
   const [notification,setNotification] = useState([]);
   const [loading, setLoading] = useState(true);

  useEffect(() => {
   getAllNotification();
  },[i18n.language]);

  const getAllNotification = async () => {
      try {
      const { data } = await GetAllNotification();
      setNotification(data?.model || []); // ensure it's always an array
      } catch (error) {
      console.error("Error fetching notifications", error);
      setNotification([]); // fallback in case of error
      }
      setLoading(false); // Set loading to false when data is fetched
   };

  return (
   <>
    <Header/>
    <section className="banners" style={{backgroundImage: `url(${'../../images/banners_bg.webp'})`}}>
      <div className="container">
         <div className="banner_head">
            <h1>{t('header.notification')}</h1>
            <p>An enim nullam tempor sapien gravida donec enim ipsum <br/> porta justo  congue purus pretium ligula </p>
         </div>
         <div className="bredcrub">
            <a href="index.html" target="_self"> {t('header.home')} </a><span> <img src="images/arrow.png" alt="arrow"/></span> 
            <p>{t('header.notification')}</p>
         </div>
      </div>
   </section>

    <section className="notification ptb60">
      <div className="notification_box_grid">
         {loading ? (
            <div className="notification_grid">
               <p>Loading...</p> {/*Display loading message until data is fetched */}
         </div>
         ) :notification.length > 0 ? (
         notification.map((item,index) => (
            <div className="notification_grid" key={index}>
                  <div className="notification_box">
                     <img src="images/logo1.webp" alt="notification img" />
                     <div className="notification_content">
                        <div className="notification_text">
                           <h5>{i18n.language === 'ur' ? item?.MessageLT : item?.Message}</h5>
                           <p>Your flight has been booked successfully. You can now communicate with the flight captain and follow the movements on the map until they reach you</p>
                        </div>
                        <div className="notification_date">
                           <p>{moment(item.CreationDate).format('MMM DD, YYYY')} </p>
                        </div>
                     </div>
                  </div>
               </div>
               ))
            ) : (
               <p>No Reservation found</p>
            )} 
         
         {/* <div className="notification_grid">
            <div className="notification_box">
               <img src="images/logo1.webp" alt="notification img" />
               <div className="notification_content">
                  <div className="notification_text">
                     <h5>Your flight has been booked successfully</h5>
                     <p>Your flight has been booked successfully. You can now communicate with the flight captain and follow the movements on the map until they reach you</p>
                  </div>
                  <div className="notification_date">
                     <p>May 28, 2021</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="notification_grid">
            <div className="notification_box">
               <img src="images/logo1.webp" alt="notification img" />
               <div className="notification_content">
                  <div className="notification_text">
                     <h5>Your flight has been booked successfully</h5>
                     <p>Your flight has been booked successfully. You can now communicate with the flight captain and follow the movements on the map until they reach you</p>
                  </div>
                  <div className="notification_date">
                     <p>May 28, 2021</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="notification_grid">
            <div className="notification_box">
               <img src="images/logo1.webp" alt="notification img" />
               <div className="notification_content">
                  <div className="notification_text">
                     <h5>Your flight has been booked successfully</h5>
                     <p>Your flight has been booked successfully. You can now communicate with the flight captain and follow the movements on the map until they reach you</p>
                  </div>
                  <div className="notification_date">
                     <p>May 28, 2021</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="notification_grid">
            <div className="notification_box">
               <img src="images/logo1.webp" alt="notification img" />
               <div className="notification_content">
                  <div className="notification_text">
                     <h5>Your flight has been booked successfully</h5>
                     <p>Your flight has been booked successfully. You can now communicate with the flight captain and follow the movements on the map until they reach you</p>
                  </div>
                  <div className="notification_date">
                     <p>May 28, 2021</p>
                  </div>
               </div>
            </div>
         </div> */}
      </div>
   </section>
    <Footer/>
   </>
  )
}

export default Notifications