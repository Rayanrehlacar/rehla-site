import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import { getPassengerReservations } from '../services/tripService';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { Skeleton, Card } from 'antd';
import './MyReservation.css';

function MyReservation() {
   const { t } = useTranslation();
   const [passengerList, setPassengerList] = useState([]);
   const [loading, setLoading] = useState(true);
   const navigate = useNavigate();
   const location = useLocation();

   useEffect(() => {
      const isLoggedIn = sessionStorage.getItem('profile');

      if (!isLoggedIn) {
         navigate('/login', { state: { from: location.pathname } });
         return;
      }

      getPassengerRes();
   }, [navigate, location]);

   const getPassengerRes = async () => {
      const { data } = await getPassengerReservations();
      setPassengerList(data?.model || []);
      setLoading(false);
   }


   // Helper function to format date and time
   const formatDateTime = (dateTimeStr) => {
      if (!dateTimeStr) return '';
    
      const date = new Date(dateTimeStr);
      const day = date.getDate();
      const month = date.getMonth() + 1; // Months are zero-based
      const year = date.getFullYear();
    
      let hours = date.getHours();
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12; // Convert to 12-hour format
    
      return `${day}-${month}-${year} , ${hours}:${minutes} ${ampm}`;
    };
    

   return (
      <>
         <Header />
         <section className="banners" style={{ backgroundImage: `url(${'../../images/banners_bg.webp'})` }}>
            <div className="container">
               <div className="banner_head">
                  <h1>{t('header.myReservation')}</h1>
                  <p>An enim nullam tempor sapien gravida donec enim ipsum <br /> porta justo  congue purus pretium ligula </p>
               </div>
               <div className="bredcrub">
                  <a href="index.html" target="_self">{t('header.home')}</a><span> <img src="images/arrow.png" alt="arrow" /></span>
                  <p>{t('header.myReservation')}</p>
               </div>
            </div>
         </section>
         <section className="my_reservation ptb100">
            <div className="container">
               {loading ? (
                  <div className="trip_skeleton_container">
                     {[...Array(4)].map((_, index) => (
                        <Card key={index} className="trip_skeleton_card" bordered={false}>
                           <Skeleton active avatar={{ shape: 'square', size: 68 }} paragraph={{ rows: 3 }} />
                        </Card>
                     ))}
                  </div>
               ) : passengerList.length > 0 ? (
                  <div className="trip_grid">
                     {passengerList.map((item, index) => (
                        <div 
                           className="trip_box enhanced_trip_box" 
                           key={index}
                           // onClick={() => navigate(`/reservation-details/${item?.ReservationId}`, { state: { reservationData: item } })}
                           // style={{ cursor: 'pointer' }}
                        >
                           <div className="trip_head">
                              <img src="images/my_trip/car.png" alt="car" />
                              <h2>Go trip <span> ({item?.TripId ?? 'N/A'}#)</span></h2>
                           </div>
                           <div className="ribben sky">
                              <span>Underway</span>
                           </div>
                           <ul className="trip_list">
                              <li><img src="images/my_trip/list1.png" alt="list1" /><span>{item?.SourceCity ?? ''}</span></li>
                              <li><img src="images/my_trip/list2.png" alt="list2" /><span>{item?.DistinationCity ?? ''}</span></li>
                           </ul>
                           <div className="trip_bottom">
                              <p>{formatDateTime(item?.StartDate)}</p>
                              <h3>{item?.RealCost ?? '0.000'} SAR</h3>
                           </div>
                        </div>
                     ))}
                  </div>
               ) : (
                  <div className="empty_state">
                     <p>No Reservation found</p>
                  </div>
               )}
            </div>
         </section>
         <Footer />
      </>
   )
}

export default MyReservation