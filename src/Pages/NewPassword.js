import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/glightbox.css'
import { Formik } from 'formik'
import { updatePasswordSchema } from '../validationSchema/validationSchema'
import { useLocation, useNavigate } from 'react-router-dom'
import LocalError from '../Components/Error/validationError'
import { useDispatch } from 'react-redux'
import { updatePasswordAction } from '../actions/authAction'
function NewPassword() {
 const {state}=useLocation();
 const dispatch =useDispatch()
 const navigate= useNavigate();
//console.log({state})
  const handleSubmitForm=(value)=>{
    dispatch(updatePasswordAction({...value,...state},navigate))
  }
  return (
    <>
        <Header/>

        <section class="my_account new_pswd">
      <div class="account_inner">
         <div class="account_left" style={{backgroundImage: `url(${'../../images/carefree.webp'})`}}>
            {/* <!-- <img src="images/carefree.webp" alt="account_bg img" /> --> */}
            <div class="white_logo">
               <img src="images/WhiteLogo.webp" alt="white logo image"/>
            </div>
         </div>
         <div class="account_content">
            <img src="images/form_company_logo.webp" alt="company logo image" />
            <h2 class="box_heading">New password</h2>
            <p>Please enter new password</p>
            <Formik
              enableReinitialize
              initialValues={{NewPassword:"",confirmNewPassword:""}}
                validationSchema={updatePasswordSchema}
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
              })=>( <form class="login_account new_password" onSubmit={handleSubmit} id="new_password">
            <div class="form_group">
                   <label for="password1">New Password*</label>
                   <div class="password_box">
                       <input type="password" id="password1" name="NewPassword" class="password_input" placeholder="Password" onChange={handleChange}/>
                       <span class="show_password" onclick="togglePassword('password1')">👁️</span>
                   </div>
                   <LocalError touched={touched.NewPassword} error={errors.NewPassword} />
               </div>
               <div class="form_group">
                   <label for="password2">Confirm Password*</label>
                   <div class="password_box">
                       <input type="password" id="password2" name="confirmNewPassword" class="password_input" placeholder="Password" onChange={handleChange} />
                       <span class="show_password" onclick="togglePassword('password2')">👁️</span>
                   </div>
                   <LocalError touched={touched.confirmNewPassword} error={errors.confirmNewPassword} />
               </div>
            <button type="submit" class="login_button register_btn passwrd_btn" value="Change password">Change password</button>
        </form>)}
            </Formik>
           
         </div>
      </div>
   </section>

        <Footer/>
    </>
  )
}

export default NewPassword