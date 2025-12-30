import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import { GetPrebookingAdvance } from '../services/tripService';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { Skeleton, Card } from 'antd';
import './MyTrip.css';

function MyTrip() {
   const { t } = useTranslation();
   const [trips, setTrips] = useState([]);
   const [loading, setLoading] = useState(true);
   const navigate = useNavigate();
   const location = useLocation();

   useEffect(() => {
      const isLoggedIn = sessionStorage.getItem('profile');

      if (!isLoggedIn) {
         navigate('/login', { state: { from: location.pathname } });
         return;
      }

      getTrips();
   }, [navigate, location]);

   const getTrips = async () => {
      // const {data} = await getDriverTrips();
      const { data } = await GetPrebookingAdvance();
      setTrips(data?.model || []);
      setLoading(false);
   }

   // Helper function to format date and time
   const formatDateTime = (dateStr, timeStr) => {
      if (!dateStr || !timeStr) return '';

      const date = new Date(dateStr);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const formattedDate = `${day}-${month}-${year}`; // e.g., 3-3-2023

      const [hour, minute] = timeStr.split(':');
      let h = parseInt(hour);
      const ampm = h >= 12 ? 'PM' : 'AM';
      h = h % 12 || 12;

      return `${formattedDate} , ${h}:${minute} ${ampm}`;
   };


   return (
      <>
         <Header />
         <section className="banners" style={{ backgroundImage: `url(${'../../images/banners_bg.webp'})` }}>
            <div className="container">
               <div className="banner_head">
                  <h1>{t('header.myTrips')}</h1>
                  <p>An enim nullam tempor sapien gravida donec enim ipsum <br /> porta justo  congue purus pretium ligula </p>
               </div>
               <div className="bredcrub">
                  <a href="index.html" target="_self">{t('header.home')}</a><span> <img src="images/arrow.png" alt="arrow" /></span>
                  <p>{t('header.myTrips')}</p>
               </div>
            </div>
         </section>
         <section className="my_trip ptb100">
            <div className="container">
               {loading ? (
                  <div className="trip_skeleton_container">
                     {[...Array(4)].map((_, index) => (
                        <Card key={index} className="trip_skeleton_card" bordered={false}>
                           <Skeleton active avatar={{ shape: 'square', size: 68 }} paragraph={{ rows: 3 }} />
                        </Card>
                     ))}
                  </div>
               ) : trips.length > 0 ? (
                  <div className="trip_grid">
                     {trips.map((item, index) => (
                        <div 
                           className="trip_box enhanced_trip_box" 
                           key={index}
                           onClick={() => navigate(`/trip-details/${item?.Id}`, { state: { tripData: item } })}
                           style={{ cursor: 'pointer' }}
                        >
                           <div className="trip_head">
                              <img src="images/my_trip/car.png" alt="car" />
                              <h2>Go trip <span> ({item?.UserId}#)</span></h2>
                           </div>
                           <div className="ribben sky">
                              <span>{item?.PrebookingAdvanceStatusName}</span>
                           </div>
                           <ul className="trip_list">
                              <li><img src="images/my_trip/list1.png" alt="list1" /><span>{item?.SourceCity}</span></li>
                              <li><img src="images/my_trip/list2.png" alt="list2" /><span>{item?.DestinationCity}</span></li>
                           </ul>
                           <div className="trip_bottom">
                              <p>{formatDateTime(item?.StartDate, item?.StartTime)}</p>
                              <h3>{item?.RealCost ?? 0} SAR</h3>
                           </div>
                        </div>
                     ))}
                  </div>
               ) : (
                  <div className="empty_state">
                     <p>No Trips found</p>
                  </div>
               )}
            </div>

         </section>
         <Footer />
      </>
   )
}

export default MyTrip