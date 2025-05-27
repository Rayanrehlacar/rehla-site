import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/glightbox.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { verifyPhoneAction } from '../actions/authAction'
import { Formik } from 'formik'
import { NumberSchema } from '../validationSchema/validationSchema'
import LocalError from '../Components/Error/validationError'
function ForgetPassword() {
   const navigate= useNavigate();
   const dispatch = useDispatch()

   const handleSubmitForm=(values)=>{
      dispatch(verifyPhoneAction(values,navigate))
   }
  return (
    <>

    <Header/>
    <section class="my_account forget_act">
    <div class="account_inner">
       <div class="account_left" style={{backgroundImage: `url(${'../../images/carefree.webp'})`}}>
          {/* <!-- <img src="images/carefree.webp" alt="account_bg img" /> --> */}
          <div class="white_logo">
             <img src="images/WhiteLogo.webp" alt="white logo image"/>
          </div>
       </div>
       <div class="account_content">
          <img src="images/form_company_logo.webp" alt="company logo image" />
          <h2 class="box_heading">Forget password</h2>
          <p>please enter your phone number</p>
          <Formik
              enableReinitialize
              initialValues={{PhoneNumber:"",PhoneKey:"+91"}}
                validationSchema={NumberSchema}
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
               handleSubmit
                
              })=>(<form class="login_account create_form forget_pwrd" onSubmit={handleSubmit} id="forget_pwrd">
          <div class="form_group ">
                 <label for="phone_num">Phone Number*</label>
                 <div class="phone_box">
                    <select id="country_code" name="PhoneKey" onChange={handleChange} value={values?.PhoneKey}>
                        <option value="+965">+965</option>
                        <option value="+966">+966</option>
                        <option value="+91">+91</option>
                    </select>
                    <input type="tel" id="phone" name="PhoneNumber" value={values?.PhoneNumber} placeholder="Enter phone number" onChange={handleChange} />
                    <LocalError touched={touched.PhoneNumber} error={errors.PhoneNumber} />
                 </div>
          </div>
        
          <button type="submit" class="login_button register_btn passwrd_btn">Send</button>
          
      </form>)}
            </Formik>
       </div>
    </div>
 </section>
 <Footer/>
    </>
  )
}

export default ForgetPassword