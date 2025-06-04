import React, { useEffect, useState } from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { Formik } from 'formik';
import { bookTourSchema } from '../validationSchema/validationSchema';
import LocalError from '../Components/Error/validationError';
import { useDispatch } from 'react-redux';
import { addTourismReservationAction } from '../actions/tripAction';
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function BookTour() {

   const { t } = useTranslation(); 
   const location = useLocation();
   const { selectedRoutes, userId } = location.state || {};  //  Destructure both together

   const [userLocation, setUserLocation] = useState({ lat: null, lng: null });

   useEffect(() => {
      if ('geolocation' in navigator) {
         navigator.geolocation.getCurrentPosition(
            (position) => {
               setUserLocation({
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
               });
            },
            (err) => {
               console.error("Geolocation error:", err.message);
            }
         );
      } else {
         console.error("Geolocation not supported");
      }
   }, []);
   

   const [tourDetails, setTourDetails] = useState({
      StartFrom: "",
      StartDate: "",
      PaymentType: "",
   });

   const dispatch = useDispatch();

   const handleSubmitForm = async (values) => {
      // Extract route IDs
      const TourismRoutes = (selectedRoutes || []).map(route => route.Id);

      let post = {
         ...values,
         StartDate: values?.StartDate,
         TourismExpertUserId: userId,
         TourismRoutes: TourismRoutes,
         TourismLatitude: userLocation.lat,
         TourismLongitude: userLocation.lng,
      };

      let res = dispatch(addTourismReservationAction(post));
   };
   
   

  return (
    <>
        <Header/>
        <section class="banners" style={{backgroundImage: `url(${'../../images/banners_bg.webp'})`}}>
      <div class="container">
         <div class="banner_head">
            <h1>Book a tour</h1>
            <p>An enim nullam tempor sapien gravida donec enim ipsum <br/> porta justo  congue purus pretium ligula </p>
         </div>
         <div class="bredcrub">
            <a href="index.html" target="_self"> Home </a><span> <img src="images/arrow.png" alt="arrow"/></span> 
            <p>Book a tour</p>
         </div>
      </div>
   </section>
   <section class="prebooking_trips booking_tour ptb60">
      <div class="container">
         <Formik
            enableReinitialize
            initialValues={tourDetails}
            validationSchema={bookTourSchema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
               setSubmitting(true);
               await handleSubmitForm(values);
               resetForm();
               setSubmitting(false);
            }}
         >
            {({
               values,
               errors,
               touched,
               handleChange,
               setFieldValue,
               handleSubmit
            }) =>
            (
               <form method="post" class="book_tour_form" id="book_tour_form"  onSubmit={handleSubmit}>
                  <div class="prebooking_box">
                     <div class="booking_group">
                        <label for="StartFrom">{t('bookTour.startFrom')}</label>
                        <input type="text" name="StartFrom" id="StartFrom" value={values?.StartFrom} placeholder="please enter Start Place"  onChange={handleChange} />
                        <LocalError touched={touched.StartFrom} error={errors.StartFrom} />
                     </div>
                     <div class="booking_group">
                        <label for="StartDate">{t('bookTour.startDate')}</label>
                        <input type="date" name="StartDate" id="StartDate" value={values?.StartDate} placeholder="please enter Kick Off Time"  onChange={handleChange} min={new Date().toISOString().split('T')[0]}/> 
                        <LocalError touched={touched.StartDate} error={errors.StartDate} />
                     </div>
                     <div class="booking_group">
                        <label for="PaymentType">{t('bookTour.paymentType')}</label>
                           <select id="PaymentType" name="PaymentType"  onChange={handleChange}  value={values?.PaymentType} >
                              <option value="">please Select Payment type</option>
                              <option value="credit">Credit Card</option>
                              <option value="debit">Debit Card</option>
                              <option value="paypal">PayPal</option>
                           </select> 
                           <LocalError touched={touched.PaymentType} error={errors.PaymentType} />
                     </div>
                  </div> 
                  <button type="submit" class="prebooking_sub booking_sub">Book The Tour Now</button>
               </form>
             )
            }

         </Formik>
      </div>
   </section>
        <Footer/>
    </>
  )
}

export default BookTour