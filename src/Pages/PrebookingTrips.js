import React, { useEffect, useState, useRef } from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { Formik } from 'formik';
import { prebookingSchema } from '../validationSchema/validationSchema';
import LocalError from '../Components/Error/validationError';
import { useDispatch } from 'react-redux';
import { addNewTripAction } from '../actions/tripAction';
import { GetCarCategories } from '../services/tripService';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Autocomplete } from '@react-google-maps/api';
import moment from 'moment';

function PrebookingTrips() {
   const { t } = useTranslation();
   const sourceRef = useRef(null);
   const destinationRef = useRef(null);

   const navigate = useNavigate()
   const [tripDetails, setTripDetails] = useState({
      // FromCaption: "",
      // ToCaption: "",
      FromLatitude: "",
      FromLongitude: "",
      ToLatitude: "",
      ToLongitude: "",
      SourceCity: "",
      DestinationCity: "",
      StartDate: "",
      StartTime: '',
      PassengerName: '',
      PassengerPhone: '',
      PassengerCount: '',
      EmployeeName: '',
      BagCount: '',
      Coupon: '',
      CarCategoryId: '',
      PaymentType: '',
      Description: '',
      // EndDateTime: "",
      // ExpectedDistance: "",
      // ExpectedCost: "",
      // RealCost: "",
      // RealCostWithoutCommission: "",
      // SeatCountId: "",
      // IsGoingOnly: "",
      // ReturnStartDate: "",
      // ReturnEndDateTime: "",
      // DiscountProgramId: "",
      // SystemSettingId: "",

   });

   const dispatch = useDispatch();

   const handleSubmitForm = async (values) => {
      // Format StartDate as ISO format (2025-11-30T04:40:00) and StartTime as HH:mm:ss
      let formattedStartDate = '';
      let formattedStartTime = '';
      
      if (values?.StartDate && values?.StartTime) {
         // Combine date and time, then format using moment
         const dateTimeString = `${values.StartDate} ${values.StartTime}`;
         const momentObj = moment(dateTimeString, 'YYYY-MM-DD HH:mm');
         
         // Format StartDate as ISO format without timezone (2025-11-30T04:40:00)
         formattedStartDate = momentObj.format('YYYY-MM-DDTHH:mm:ss');
         
         // Format StartTime as HH:mm:ss (04:40:00)
         formattedStartTime = momentObj.format('HH:mm:ss');
      }
      
      let post = {
         ...values,
         StartDate: formattedStartDate || values?.StartDate,
         StartTime: formattedStartTime || values?.StartTime,
         PaymentType: values?.PaymentType === "true" ? true : values?.PaymentType
      }

      let res = dispatch(addNewTripAction(post));
      // Return success status
      return res?.type === 'ADD_TRIP_SUCCESS';
   };

   const [carcategoryList, setCarcategoryList] = useState([]);

   useEffect(() => {
      getCarCategories();
   }, []);

   const getCarCategories = async () => {
      let { data } = await GetCarCategories();
      setCarcategoryList(data?.model);
   }

   // Inside the Formik context
   const handlePlaceSelect = (ref, fieldName, setFieldValue, isSource = false) => {
      const place = ref.current.getPlace();
      
      // Set the city name
      if (place?.formatted_address) {
         setFieldValue(fieldName, place.formatted_address);
      } else if (place?.name) {
         setFieldValue(fieldName, place.name);
      }
      
      // Extract and set latitude and longitude
      if (place?.geometry?.location) {
         const lat = place.geometry.location.lat();
         const lng = place.geometry.location.lng();
         
         if (isSource) {
            setFieldValue('FromLatitude', lat.toString());
            setFieldValue('FromLongitude', lng.toString());
         } else {
            setFieldValue('ToLatitude', lat.toString());
            setFieldValue('ToLongitude', lng.toString());
         }
      }
   };

   return (
      <>
         <Header />
         <section class="banners" style={{ backgroundImage: `url(${'../../images/banners_bg.webp'})` }} id='prebooking-trips'>
            <div class="container">
               <div class="banner_head">
                  <h1>{t('header.prebooking')} </h1>
                  <p>An enim nullam tempor sapien gravida donec enim ipsum <br /> porta justo  congue purus pretium ligula </p>
               </div>
               <div class="bredcrub">
                  <a href="index.html" target="_self"> {t('header.home')} </a><span> <img src="images/arrow.png" alt="arrow" /></span>
                  <p>{t('header.prebooking')}  </p>
               </div>
            </div>
         </section>
         <section class="prebooking_trips ptb60">
            <div class="container">
               <Formik
                  enableReinitialize
                  initialValues={tripDetails}
                  validationSchema={prebookingSchema}
                  validateOnChange={false}
                  validateOnBlur={false}
                  onSubmit={async (values, { setSubmitting, resetForm }) => {
                     setSubmitting(true);
                     const res = await handleSubmitForm(values);
                     console.log(res, "resssss")
                     resetForm();
                     setSubmitting(false);
                     if(res){
                     setTimeout(() => {
                           navigate('/my-trip');
                        }, 500);
                     }
                  }}
               >
                  {({
                     values,
                     errors,
                     touched,
                     handleChange,
                     handleSubmit,
                     setFieldValue
                  }) =>
                  (
                     <form class="prebooking_form" id="prebooking_form" onSubmit={handleSubmit}>
                        <div class="prebooking_box">
                           <div class="booking_grid">
                              <div class="booking_group">
                                 <label for="SourceCity">{t('preBookingtrips.startPlace')}</label>
                                 <Autocomplete
                                    onLoad={(autoC) => (sourceRef.current = autoC)}
                                    onPlaceChanged={() =>
                                       handlePlaceSelect(sourceRef, "SourceCity", setFieldValue, true)
                                    }
                                 >
                                    <input type="text" id="SourceCity" value={values?.SourceCity} placeholder="please enter Start Place" onChange={handleChange} />
                                 </Autocomplete>
                                 <LocalError touched={touched.SourceCity} error={errors.SourceCity} />

                              </div>
                              <div class="booking_group">
                                 <label for="DestinationCity">{t('preBookingtrips.arrivalPlace')}</label>
                                 <Autocomplete
                                    onLoad={(autoC) => (destinationRef.current = autoC)}
                                    onPlaceChanged={() =>
                                       handlePlaceSelect(destinationRef, "DestinationCity", setFieldValue, false)
                                    }
                                 >
                                    <input type="text" id="DestinationCity" value={values?.DestinationCity} placeholder="please enter Arrival Place" onChange={handleChange} />
                                 </Autocomplete>
                                 <LocalError touched={touched.DestinationCity} error={errors.DestinationCity} />

                              </div>
                           </div>
                           <div class="booking_grid">
                              <div class="booking_group">
                                 <label for="StartDate">{t('preBookingtrips.startDate')}</label>
                                 <input type="date" id="StartDate" value={values?.StartDate} placeholder="please Select Start date"
                                    onChange={handleChange} min={new Date().toISOString().split('T')[0]} />
                                 <LocalError touched={touched.StartDate} error={errors.StartDate} />

                              </div>
                              <div class="booking_group">
                                 <label for="StartTime">{t('preBookingtrips.startTime')}</label>
                                 <input type="time" id="StartTime" value={values?.StartTime} placeholder="please Select Start time" onChange={handleChange} />
                                 <LocalError touched={touched.StartTime} error={errors.StartTime} />

                              </div>
                           </div>
                           <div class="booking_grid">
                              <div class="booking_group">
                                 <label for="PassengerName">{t('preBookingtrips.PassengerName')}</label>
                                 <input type="text" id="PassengerName" value={values?.PassengerName} placeholder="please enter Passenger Name" onChange={handleChange} />
                                 <LocalError touched={touched.PassengerName} error={errors.PassengerName} />
                              </div>
                              <div class="booking_group">
                                 <label for="PassengerPhone">{t('preBookingtrips.PassengerPhone')}</label>
                                 <input type="text" id="PassengerPhone" value={values?.PassengerPhone} placeholder="please enter Passenger Phone" onChange={handleChange} />
                                 <LocalError touched={touched.PassengerPhone} error={errors.PassengerPhone} />
                              </div>
                           </div>
                           <div class="booking_grid">
                              <div class="booking_group">
                                 <label for="PaymentType">{t('preBookingtrips.paymentType')}</label>
                                 <select id="PaymentType" onChange={handleChange} value={values?.PaymentType} >
                                    <option value="">Please Select Payment type</option>
                                    <option value="true">Credit Card</option>
                                    <option value="true">Debit Card</option>
                                    <option value="true">PayPal</option>
                                 </select>
                                 <LocalError touched={touched.PaymentType} error={errors.PaymentType} />

                              </div>
                              <div class="booking_group">
                                 <label for="CarCategoryId">{t('preBookingtrips.SelectCarcategory')}</label>
                                 <select id="CarCategoryId" onChange={handleChange} value={values?.CarCategoryId} >
                                    <option value="">Please Select car category</option>
                                    {carcategoryList?.map((category) => (
                                       <option key={category.Id} value={category.Id}>
                                          {category.Name}
                                       </option>
                                    ))}
                                 </select>
                                 <LocalError touched={touched.CarCategoryId} error={errors.CarCategoryId} />

                              </div>
                           </div>
                           <div class="booking_grid">
                              <div class="booking_group">
                                 <label for="Coupon">{t('preBookingtrips.coupon')}</label>
                                 <input type="text" id="Coupon" value={values?.Coupon} placeholder="please enter coupon" onChange={handleChange} />
                                 <LocalError touched={touched.Coupon} error={errors.Coupon} />
                              </div>
                              <div class="booking_group">
                                 <label for="PassengerCount">{t('preBookingtrips.PassengerCount')}</label>
                                 <input type="text" id="PassengerCount" value={values?.PassengerCount} placeholder="please enter number of passengers" onChange={handleChange} />
                                 <LocalError touched={touched.PassengerCount} error={errors.PassengerCount} />
                              </div>
                           </div>
                           <div class="booking_grid">
                              <div class="booking_group">
                                 <label for="EmployeeName">{t('preBookingtrips.EmployeeName')}</label>
                                 <input type="text" id="EmployeeName" value={values?.EmployeeName} placeholder="please enter name of employee" onChange={handleChange} />
                                 <LocalError touched={touched.EmployeeName} error={errors.EmployeeName} />
                              </div>
                              <div class="booking_group">
                                 <label for="BagCount">{t('preBookingtrips.BagCount')}</label>
                                 <input type="text" id="BagCount" value={values?.BagCount} placeholder="please enter number of bags" onChange={handleChange} />
                                 <LocalError touched={touched.BagCount} error={errors.BagCount} />
                              </div>
                           </div>
                           <div class="booking_group">
                              <label for="Description">{t('preBookingtrips.Description')}</label>
                              <textarea
                                 id="Description"
                                 name="Description"
                                 value={values?.Description}
                                 placeholder="please enter Trip notes"
                                 onChange={handleChange}
                                 rows="4"
                                 className="form-control"
                              />
                           </div>
                        </div>
                        <button type="submit" class="prebooking_sub">{t('preBookingtrips.preBookingNow')}</button>
                     </form>
                  )
                  }

               </Formik>
            </div>
         </section>
         <Footer />
      </>
   )
}

export default PrebookingTrips