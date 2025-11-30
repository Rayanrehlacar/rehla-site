import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Card, Descriptions, Tag, Divider, Avatar, Rate } from 'antd';
import './ReservationDetails.css';

function ReservationDetails() {
   const { t } = useTranslation();
   const navigate = useNavigate();
   const location = useLocation();
   const { id } = useParams();
   const [reservationData, setReservationData] = useState(null);

   useEffect(() => {
      const isLoggedIn = sessionStorage.getItem('profile');

      if (!isLoggedIn) {
         navigate('/login', { state: { from: location.pathname } });
         return;
      }

      // Get reservation data from location state (passed via router)
      if (location.state?.reservationData) {
         setReservationData(location.state.reservationData);
      } else {
         // If no data in state, redirect back to reservations list
         navigate('/my-reservation');
      }
   }, [navigate, location, id]);

   // Helper function to format date and time
   const formatDateTime = (dateTimeStr) => {
      if (!dateTimeStr) return '';
    
      const date = new Date(dateTimeStr);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
    
      let hours = date.getHours();
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
    
      return `${day}-${month}-${year} , ${hours}:${minutes} ${ampm}`;
   };

   const getTripStatusColor = (colorHex) => {
      if (!colorHex) return 'default';
      // Convert hex to a readable color name or use custom style
      return 'default';
   };

   if (!reservationData) {
      return (
         <>
            <Header />
            <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
               <p>Loading reservation details...</p>
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
                  <h1>{t('header.reservationDetails') || 'Reservation Details'}</h1>
                  <p>View complete information about your reservation</p>
               </div>
               <div className="bredcrub">
                  <a href="index.html" target="_self">{t('header.home')}</a><span> <img src="images/arrow.png" alt="arrow" /></span>
                  <button onClick={() => navigate('/my-reservation')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', padding: 0, font: 'inherit' }}>{t('header.myReservation')}</button><span> <img src="images/arrow.png" alt="arrow" /></span>
                  <p>{t('header.reservationDetails') || 'Reservation Details'}</p>
               </div>
            </div>
         </section>
         <section className="reservation_details_section ptb100">
            <div className="container">
               <div className="reservation_details_header">
                  <button className="back_button" onClick={() => navigate('/my-reservation')}>
                     ← Back to Reservations
                  </button>
               </div>

               <div className="reservation_details_content">
                  {/* Quick Info Cards */}
                  <div className="info_section">
                     <div className="info_card">
                        <div className="info_card_title">Trip Status</div>
                        <Tag 
                           color={getTripStatusColor(reservationData?.TripStatusColor)} 
                           className="status_tag"
                           style={{ 
                              backgroundColor: reservationData?.TripStatusColor || '#1890ff', 
                              color: '#fff',
                              marginTop: '8px',
                              display: 'inline-block'
                           }}
                        >
                           {reservationData?.TripStatusNameLT || reservationData?.TripStatusName || 'N/A'}
                        </Tag>
                     </div>
                     <div className="info_card">
                        <div className="info_card_title">Real Cost</div>
                        <p className="info_card_value highlight">
                           {reservationData?.RealCost ? `${reservationData.RealCost} SAR` : 'N/A'}
                        </p>
                     </div>
                     <div className="info_card">
                        <div className="info_card_title">Expected Cost</div>
                        <p className="info_card_value">{reservationData?.ExpectedCost ? `${reservationData.ExpectedCost} SAR` : 'N/A'}</p>
                     </div>
                     <div className="info_card">
                        <div className="info_card_title">Seats Booked</div>
                        <p className="info_card_value">{reservationData?.SeatCount || 0}</p>
                     </div>
                  </div>

                  {/* Trip Information Card */}
                  <Card className="reservation_details_card" bordered={false}>
                     <div className="reservation_details_title">
                        <h2>📍 Trip Information</h2>
                     </div>

                     <Divider />

                     <Descriptions column={{ xxl: 2, xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }} bordered>
                        <Descriptions.Item label="📍 Source City">
                           {reservationData?.SourceCity || 'N/A'}
                        </Descriptions.Item>

                        <Descriptions.Item label="📍 Destination City">
                           {reservationData?.DistinationCity || 'N/A'}
                        </Descriptions.Item>

                        <Descriptions.Item label="📍 From Address" span={2}>
                           {reservationData?.FromCaption || 'N/A'}
                        </Descriptions.Item>

                        <Descriptions.Item label="📍 To Address" span={2}>
                           {reservationData?.ToCaption || 'N/A'}
                        </Descriptions.Item>

                        <Descriptions.Item label="📅 Start Date">
                           {formatDateTime(reservationData?.StartDate) || 'N/A'}
                        </Descriptions.Item>

                        <Descriptions.Item label="📅 End Date">
                           {formatDateTime(reservationData?.EndDate) || 'N/A'}
                        </Descriptions.Item>

                        <Descriptions.Item label="Seat Count">
                           {reservationData?.SeatCount || 0}
                        </Descriptions.Item>

                        <Descriptions.Item label="Available Seats">
                           {reservationData?.AvailableSeat || 0}
                        </Descriptions.Item>

                        <Descriptions.Item label="💰 Real Cost">
                           {reservationData?.RealCost ? `${reservationData.RealCost} SAR` : 'N/A'}
                        </Descriptions.Item>

                        <Descriptions.Item label="💰 Expected Cost">
                           {reservationData?.ExpectedCost ? `${reservationData.ExpectedCost} SAR` : 'N/A'}
                        </Descriptions.Item>

                        <Descriptions.Item 
                           label={<span>Payment Type</span>}
                        >
                           {reservationData?.PaymentType ? 'Cash' : 'Online'}
                        </Descriptions.Item>

                        <Descriptions.Item 
                           label={<span>Coupon</span>}
                        >
                           {reservationData?.Coupon || 'No coupon applied'}
                        </Descriptions.Item>

                        <Descriptions.Item 
                           label={<span>Coupon Value</span>}
                        >
                           {reservationData?.CouponValue ? `${reservationData.CouponValue} SAR` : '0 SAR'}
                        </Descriptions.Item>

                        <Descriptions.Item 
                           label={<span>VAT Percentage</span>}
                        >
                           {reservationData?.VATPercentage ? `${reservationData.VATPercentage}%` : 'N/A'}
                        </Descriptions.Item>

                        <Descriptions.Item 
                           label={<span>Transport Authority Fee</span>}
                        >
                           {reservationData?.TransportAuthorityFee ? `${reservationData.TransportAuthorityFee} SAR` : 'N/A'}
                        </Descriptions.Item>
                     </Descriptions>
                  </Card>

                  {/* Driver Information Card */}
                  <Card className="reservation_details_card driver_card" bordered={false}>
                     <div className="reservation_details_title">
                        <h2>👤 Driver Information</h2>
                     </div>

                     <Divider />

                     <div className="driver_info">
                        <Avatar 
                           size={100} 
                           src={reservationData?.DriverProfilePhoto} 
                           className="driver_avatar"
                        >
                           {!reservationData?.DriverProfilePhoto && '👤'}
                        </Avatar>
                        <div className="driver_details">
                           <h3>{reservationData?.DriverName || 'N/A'}</h3>
                           <p>📞 {reservationData?.DriverPhoneKey} {reservationData?.DriverPhoneNumber}</p>
                           {reservationData?.TotalRate && (
                              <div className="driver_rating">
                                 <Rate disabled defaultValue={reservationData.TotalRate} allowHalf />
                                 <span className="rating_text">
                                    {reservationData.TotalRate.toFixed(1)} ⭐ ({reservationData.TotalCount} reviews)
                                 </span>
                              </div>
                           )}
                        </div>
                     </div>
                  </Card>

                  {/* Car Information Card */}
                  <Card className="reservation_details_card" bordered={false}>
                     <div className="reservation_details_title">
                        <h2>🚗 Car Information</h2>
                     </div>

                     <Divider />

                     <Descriptions column={{ xxl: 2, xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }} bordered>
                        <Descriptions.Item label="Car Brand">
                           {reservationData?.CarBrandNameLT || reservationData?.CarBrandName || 'N/A'}
                        </Descriptions.Item>

                        <Descriptions.Item label="Car Model">
                           {reservationData?.CarModelNameLT || reservationData?.CarModelName || 'N/A'}
                        </Descriptions.Item>

                        <Descriptions.Item label="Car Color">
                           {reservationData?.CarColorNameLT || reservationData?.CarColorName || 'N/A'}
                        </Descriptions.Item>

                        <Descriptions.Item label="Plate Number">
                           {reservationData?.CarPlateNumber || 'N/A'}
                        </Descriptions.Item>

                        <Descriptions.Item label="Car Category">
                           {reservationData?.CarCategoryNameLT || reservationData?.CarCategoryName || 'N/A'}
                        </Descriptions.Item>

                        <Descriptions.Item label="Passenger Booked Seats">
                           {reservationData?.PassengerBookedSeats || 0}
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

export default ReservationDetails

