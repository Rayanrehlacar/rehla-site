import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Card, Descriptions, Tag, Divider } from 'antd';
import './TripDetails.css';
import { UserOutlined } from '@ant-design/icons';

function TripDetails() {
   const { t } = useTranslation();
   const navigate = useNavigate();
   const location = useLocation();
   const { id } = useParams();
   const [tripData, setTripData] = useState(null);

   useEffect(() => {
      const isLoggedIn = sessionStorage.getItem('profile');

      if (!isLoggedIn) {
         navigate('/login', { state: { from: location.pathname } });
         return;
      }

      // Get trip data from location state (passed via router)
      if (location.state?.tripData) {
         setTripData(location.state.tripData);
      } else {
         // If no data in state, redirect back to trips list
         navigate('/my-trip');
      }
   }, [navigate, location, id]);

   const formatDate = (dateStr) => {
      if (!dateStr) return '';
      const date = new Date(dateStr);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
   };

   const getStatusColor = (statusId) => {
      const statusColors = {
         1: 'blue',
         2: 'green',
         3: 'orange',
         4: 'red',
         5: 'default'
      };
      return statusColors[statusId] || 'default';
   };

   if (!tripData) {
      return (
         <>
            <Header />
            <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
               <p>Loading trip details...</p>
            </div>
            <Footer />
         </>
      );
   }

   return (
      <>
         <Header />
         <section className="banners" style={{ backgroundImage: `url(${'../../images/banners_bg.webp'})` }}>
            <div className="container">
               <div className="banner_head">
                  <h1>{t('header.tripDetails')}</h1>
                  <p>View complete information about your trip</p>
               </div>
               <div className="bredcrub">
                  <a href="index.html" target="_self">{t('header.home')}</a><span> <img src="images/arrow.png" alt="arrow" /></span>
                  <button onClick={() => navigate('/my-trip')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', padding: 0, font: 'inherit' }}>{t('header.myTrips')}</button><span> <img src="images/arrow.png" alt="arrow" /></span>
                  <p>{t('header.tripDetails')}</p>
               </div>
            </div>
         </section>
         <section className="trip_details_section ptb100">
            <div className="container">
               <div className="trip_details_header">
                  <button className="back_button" onClick={() => navigate('/my-trip')}>
                     ← Back to Trips
                  </button>
               </div>

               <div className="trip_details_content">
                  {/* Quick Info Cards */}
                  <div className="info_section">
                     <div className="info_card">
                        <div className="info_card_title">Trip Status</div>
                        <Tag color={getStatusColor(tripData?.PrebookingAdvanceStatusId)} className="status_tag" style={{ marginTop: '8px', display: 'inline-block' }}>
                           {tripData?.PrebookingAdvanceStatusName}
                        </Tag>
                     </div>
                     <div className="info_card">
                        <div className="info_card_title">Total Cost</div>
                        <p className="info_card_value highlight">
                           {tripData?.RealCost ? `${tripData.RealCost} SAR` : 'Not calculated'}
                        </p>
                     </div>
                     <div className="info_card">
                        <div className="info_card_title">Passengers</div>
                        <p className="info_card_value">{tripData?.PassengerCount || 0}</p>
                     </div>
                     <div className="info_card">
                        <div className="info_card_title">Payment Type</div>
                        <p className="info_card_value">{tripData?.PaymentType ? 'Cash' : 'Online'}</p>
                     </div>
                  </div>

                  <Card className="trip_details_card" bordered={false}>
                     <div className="trip_details_title">
                        <h2>📍 Trip Information</h2>
                     </div>

                     <Divider />

                     <Descriptions column={{ xxl: 2, xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }} bordered>
                        <Descriptions.Item label="📍 Source City">
                           {tripData?.SourceCity || 'N/A'}
                        </Descriptions.Item>

                        <Descriptions.Item label="📍 Destination City">
                           {tripData?.DestinationCity || 'N/A'}
                        </Descriptions.Item>

                        <Descriptions.Item label="📅 Start Date">
                           {formatDate(tripData?.StartDate) || 'N/A'}
                        </Descriptions.Item>

                        <Descriptions.Item label="🕐 Start Time">
                           {tripData?.StartTime || 'N/A'}
                        </Descriptions.Item>

                        <Descriptions.Item label="📅 Creation Date">
                           {formatDate(tripData?.CreationDate) || 'N/A'}
                        </Descriptions.Item>

                        <Descriptions.Item label="💰 Real Cost">
                           {tripData?.RealCost ? `${tripData.RealCost} SAR` : 'Not calculated'}
                        </Descriptions.Item>

                        <Descriptions.Item label="👤 Passenger Name">
                           {tripData?.PassengerName || 'N/A'}
                        </Descriptions.Item>

                        <Descriptions.Item label="📞 Passenger Phone">
                           {tripData?.PassengerPhone || 'N/A'}
                        </Descriptions.Item>

                        <Descriptions.Item label="👥 Passenger Count">
                           {tripData?.PassengerCount || 0}
                        </Descriptions.Item>

                        <Descriptions.Item 
                           label={<span>Bag Count</span>}
                        >
                           {tripData?.BagCount || 0}
                        </Descriptions.Item>

                        <Descriptions.Item 
                           label={<span><UserOutlined /> Employee Name</span>}
                        >
                           {tripData?.EmployeeName || 'N/A'}
                        </Descriptions.Item>

                        <Descriptions.Item 
                           label={<span>User ID</span>}
                        >
                           {tripData?.UserId || 'N/A'}
                        </Descriptions.Item>

                        <Descriptions.Item 
                           label={<span>Car Category ID</span>}
                        >
                           {tripData?.CarCategoryId || 'N/A'}
                        </Descriptions.Item>

                        <Descriptions.Item 
                           label={<span>Payment Type</span>}
                        >
                           {tripData?.PaymentType ? 'Cash' : 'Online'}
                        </Descriptions.Item>

                        <Descriptions.Item 
                           label={<span>Coupon</span>}
                        >
                           {tripData?.Coupon || 'No coupon applied'}
                        </Descriptions.Item>

                        <Descriptions.Item 
                           label={<span>Coupon Value</span>}
                        >
                           {tripData?.CouponValue ? `${tripData.CouponValue} SAR` : 'N/A'}
                        </Descriptions.Item>

                        <Descriptions.Item 
                           label={<span>Description</span>}
                           span={2}
                        >
                           {tripData?.Description || 'No description provided'}
                        </Descriptions.Item>
                     </Descriptions>
                  </Card>
               </div>
            </div>
         </section>
         <Footer />
      </>
   )
}

export default TripDetails

