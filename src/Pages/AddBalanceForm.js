import React,{useEffect} from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

function AddBalanceForm() {
   const navigate = useNavigate();
   const location = useLocation();
   
   // Check login status
   useEffect(() => {
   const isLoggedIn = sessionStorage.getItem('profile');
   if (!isLoggedIn) {
      navigate('/login', { state: { from: location.pathname } });
   }
   }, [navigate, location]);

   const handleSubmitForm = async (values) => {
      console.log({ values });
      // let res = await ContactUs(values)
      // console.log({ res });
      navigate('/add-balance')
   };
   return (
      <>
         <Header />
         <section class="banners" style={{ backgroundImage: `url(${'../../images/banners_bg.webp'})` }}>
            <div class="container">
               <div class="banner_head">
                  <h1>Add balance</h1>
                  <p>An enim nullam tempor sapien gravida donec enim ipsum <br /> porta justo  congue purus pretium ligula </p>
               </div>
               <div class="bredcrub">
                  <a href="index.html" target="_self"> Home </a><span> <img src="images/arrow.png" alt="arrow" /></span>
                  <p>Add balance</p>
               </div>
            </div>
         </section>
         <section class="add_balance ptb60">
            <div class="container">
               <div class="">
                  <div class="withdraw_inner">
                     {/* <Formik
                        enableReinitialize
                        initialValues={{ CardNumber: "" }}
                        validationSchema={addBalanceSchema}
                        validateOnChange={false}
                        validateOnBlur={false}
                        onSubmit={async (values, { setSubmitting, resetForm }) => {
                           setSubmitting(true);
                           await handleSubmitForm(values);
                           console.log({ values });
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
                        ( */}
                     <form class="add_balance_form" id="add_balance_form" name="withdraw_form">
                        {/* <form class="add_balance_form" id="add_balance_form" method="post" action="#" name="withdraw_form"> */}
                        <div class="balance_group">
                           <input type="radio" id="prepaid_card" name="CardNumber" value='09537778862901' defaultChecked />
                           <label for="prepaid_card" class="custom_radio"><span class="card_img"> <img src="images/mastercard.webp" /></span>
                              <span> Prepaid card </span>
                           </label>
                        </div>
                        <div class="balance_group">
                           <input type="radio" id="mada" name="CardNumber" value='09537778862901' />
                           <label for="mada" class="custom_radio"><span class="card_img"> <img src="images/Mada.webp" />
                           </span> <span>Mada</span>
                           </label>
                        </div>
                        <div class="balance_group">
                           <input type="radio" id="coupon" name="CardNumber" value='09537778862901' />
                           <label for="coupon" class="custom_radio"><span class="card_img"> <img src="images/shipping-coupon.webp" /></span>
                              <span>Free shipping coupon</span>
                           </label>
                        </div>
                        {/* {errors.CardNumber && <div class="balance_group">
                                 <LocalError touched={touched.CardNumber} error={errors.CardNumber} />
                              </div>} */}

                        <button type="submit" class="withdraw_sub" onClick={() => { navigate('/add-balance') }}>Select Type</button>
                     </form>
                     {/* )}
                     </Formik> */}
                  </div>
               </div>
            </div>
         </section>

         <Footer />
      </>
   )
}

export default AddBalanceForm