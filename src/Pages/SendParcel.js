import React, { useEffect } from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { Formik } from 'formik';
import { sendParcelSchema } from '../validationSchema/validationSchema';
import LocalError from '../Components/Error/validationError';
import { submitSendParcel } from '../actions/tripAction';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';



function SendParcel() {
   const { t } = useTranslation(); 
   const navigate = useNavigate();
   const location = useLocation();

   // Check login status
  useEffect(() => {
   const isLoggedIn = sessionStorage.getItem('profile');
   if (!isLoggedIn) {
     navigate('/login', { state: { from: location.pathname } });
   }
   }, [navigate, location]);

   // const [tripDetails, setTripDetails] = useState({
   //    SourceCity: "",
   //    DestinationCity: "",
   //    SenderPhone: "",
   //    SenderName: "",
   //    SenderId: "",
   //    ReceiverPhone: "",
   //    ReceiverName: "",
   //    ReceiverId: "",
   //    Notes: "",
   // });

   const dispatch = useDispatch();

   const handleSubmitForm = async (values) => {
      let post = {
         ...values
      }
      let res = dispatch(submitSendParcel(post));
   };

   return (
      <>
         <Header />
         <section class="banners" style={{ backgroundImage: `url(${'../../images/banners_bg.webp'})` }} id='prebooking-trips'>
            <div class="container">
               <div class="banner_head">
                  <h1>{t('header.sendParcel')} </h1>
                  <p>An enim nullam tempor sapien gravida donec enim ipsum <br /> porta justo  congue purus pretium ligula </p>
               </div>
               <div class="bredcrub">
                  <a href="index.html" target="_self"> {t('header.home')} </a><span> <img src="images/arrow.png" alt="arrow" /></span>
                  <p>{t('header.sendParcel')}  </p>
               </div>
            </div>
         </section>
         <section class="prebooking_trips ptb60">
            <div class="container">
               <Formik
                  enableReinitialize
                  initialValues={{
                     SourceCity: "",
                     DestinationCity: "",
                     SenderPhone: "",
                     SenderName: "",
                     SenderId: "",
                     ReceiverPhone: "",
                     ReceiverName: "",
                     ReceiverId: "",
                     Notes: "",
                   }}
                  validationSchema={sendParcelSchema}
                  validateOnChange={false}
                  validateOnBlur={false}
                  onSubmit={async (values, { setSubmitting, resetForm }) => {
                     setSubmitting(true);
                     console.log({ values });
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
                     <form class="prebooking_form" id="prebooking_form" onSubmit={handleSubmit}>
                        <div class="prebooking_box">
                           <div class="booking_grid">
                              <div class="booking_group">
                                 <label htmlFor="SourceCity">{t('sendParcel.SourceCity')}</label>
                                 <input type="text" id="SourceCity" value={values?.SourceCity} placeholder="please enter sender location" onChange={handleChange} />
                                 <LocalError touched={touched.SourceCity} error={errors.SourceCity} />

                              </div>
                              <div class="booking_group">
                                 <label htmlFor="DestinationCity">{t('sendParcel.DestinationCity')}</label>
                                 <input type="text" id="DestinationCity" value={values?.DestinationCity} placeholder="please enter recevier location" onChange={handleChange} />
                                 <LocalError touched={touched.DestinationCity} error={errors.DestinationCity} />

                              </div>
                           </div>
   
                           <div class="booking_grid">
                            <div class="booking_group">
                                <label htmlFor="SenderName">{t('sendParcel.SenderName')}</label>
                                <input type="text" id="SenderName" value={values?.SenderName} placeholder="please enter name of sender" onChange={handleChange} />
                                <LocalError touched={touched.SenderName} error={errors.SenderName} />
                            </div>
                            <div class="booking_group">
                                <label htmlFor="SenderPhone">{t('sendParcel.SenderPhone')}</label>
                                <input type="text" id="SenderPhone" value={values?.SenderPhone} placeholder="please enter phone of sender" onChange={handleChange} />
                                <LocalError touched={touched.SenderPhone} error={errors.SenderPhone} />
                            </div>
                           </div>

                           <div class="booking_grid">
                            <div class="booking_group">
                                <label htmlFor="SenderId">{t('sendParcel.SenderId')}</label>
                                <input type="text" id="SenderId" value={values?.SenderId} placeholder="please enter sender ID" onChange={handleChange} />
                                <LocalError touched={touched.SenderId} error={errors.SenderId} />
                            </div>
                            <div class="booking_group">
                                <label htmlFor="ReceiverId">{t('sendParcel.ReceiverId')}</label>
                                <input type="text" id="ReceiverId" value={values?.ReceiverId} placeholder="please enter receiver ID" onChange={handleChange} />
                                <LocalError touched={touched.ReceiverId} error={errors.ReceiverId} />
                            </div>
                           </div>

                           <div class="booking_grid">
                            <div class="booking_group">
                                <label htmlFor="ReceiverName">{t('sendParcel.ReceiverName')}</label>
                                <input type="text" id="ReceiverName" value={values?.ReceiverName} placeholder="please enter name of receiver" onChange={handleChange} />
                                <LocalError touched={touched.ReceiverName} error={errors.ReceiverName} />
                            </div>
                            <div class="booking_group">
                                <label htmlFor="ReceiverPhone">{t('sendParcel.ReceiverPhone')}</label>
                                <input type="text" id="ReceiverPhone" value={values?.ReceiverPhone} placeholder="please enter phone of receiver" onChange={handleChange} />
                                <LocalError touched={touched.ReceiverPhone} error={errors.ReceiverPhone} />
                            </div>
                           </div>

                           <div className="booking_grid">
                                <div className="booking_group">
                                    <label htmlhtmlFor="Notes">{t('sendParcel.Notes')}</label>
                                    <textarea
                                    id="Notes"
                                    name="Notes"
                                    value={values?.Notes}
                                    placeholder="Please enter Trip Note"
                                    onChange={handleChange}
                                    rows={4} // Optional: sets the height
                                    />
                                    <LocalError touched={touched.Notes} error={errors.Notes} />
                                </div>
                            </div>

                           
                        </div>
                        <button type="submit" class="prebooking_sub">{t('sendParcel.sendParcelNow')}</button>
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

export default SendParcel