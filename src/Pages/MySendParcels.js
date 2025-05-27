import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import { GetRequestsToSendPackage } from '../services/tripService';
import { useTranslation } from 'react-i18next';

function MyReservation() {
   const { t } = useTranslation();
   const [packageList, setPackageList] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
    getPackageRes();
   }, []);

   const getPackageRes = async () => {
      const { data } = await GetRequestsToSendPackage();
      setPackageList(data?.model || []);
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
         <section class="banners" style={{ backgroundImage: `url(${'../../images/banners_bg.webp'})` }}>
            <div class="container">
               <div class="banner_head">
                  <h1>{t('header.mySendParcel')}</h1>
                  <p>An enim nullam tempor sapien gravida donec enim ipsum <br /> porta justo  congue purus pretium ligula </p>
               </div>
               <div class="bredcrub">
                  <a href="index.html" target="_self">{t('header.home')}</a><span> <img src="images/arrow.png" alt="arrow" /></span>
                  <p>{t('header.mySendParcel')}</p>
               </div>
            </div>
         </section>
         <section class="my_reservation ptb100">
            <div class="container">
               {loading ? (
                  <div className="">
                     <p>Loading...</p>
                  </div>
               ) : packageList.length > 0 ? (
                packageList.map((item, index) => (
                     <div className="trip_box" key={index}>
                        <div className="trip_head">
                           <img src="images/my_trip/car.png" alt="car" />
                           <h2>Go trip <span> ({item?.Id ?? 'N/A'}#)</span></h2>
                        </div>
                        <div className="ribben sky">
                           <span>Underway</span>
                        </div>
                        <ul className="trip_list">
                           <li><img src="images/my_trip/list1.png" alt="list1" /><span>{item?.SourceCity ?? ''}</span></li>
                           <li><img src="images/my_trip/list2.png" alt="list2" /><span>{item?.DestinationCity ?? ''}</span></li>
                        </ul>
                        <div className="trip_bottom">
                           <p>{formatDateTime(item?.CreationDate)}</p>
                           <h3>{item?.RealCost ?? '0.000'} KD</h3>
                        </div>
                     </div>
                  ))
               ) : (
                  <p>No Send Package found</p>
               )}
            </div>
         </section>
         <Footer />
      </>
   )
}

export default MyReservation