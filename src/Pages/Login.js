import React,{useState} from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/glightbox.css'
import { Formik } from 'formik'
import { loginSchema } from '../validationSchema/validationSchema'
import LocalError from '../Components/Error/validationError'
import { signInAction } from '../actions/authAction'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';


function Login() {
   const { t } = useTranslation();

   const [showPassword, setShowPassword] = useState(false);
   const dispatch= useDispatch()
   const navigate= useNavigate()
   const handleSubmitForm=async(values)=>{
     await dispatch(signInAction({...values},navigate))
            // await dispatch(signInAction({...values,PhoneNumber:"+9651143134889",Password:"12345678"}))
   } 

   const togglePassword = () => {
      setShowPassword((prevState) => !prevState);
    };
  return (
    <>
        <Header/>

        <section class="my_account login">
      <div class="account_inner">
         <div class="account_left" style={{backgroundImage: `url(${'../../images/carefree.webp'})`}}>
            {/* <!-- <img src="images/carefree.webp" alt="account_bg img" /> --> */}
            <div class="white_logo">
               <img src="images/WhiteLogo.webp" alt="white logo image"/>
            </div>
         </div>
         <div class="account_content">
            <img src="images/form_company_logo.webp" alt="company logo image" />
            <h2 class="box_heading">{t('userLogin.Heading')}</h2>

            <Formik
        initialValues={{ country_code:"+966",PhoneNumber: "1234567890",Password:"12345678",remember_me:false }}
        validationSchema={loginSchema}
        onSubmit={async(values, { setSubmitting, resetForm }) => {
       
          setSubmitting(true);
         await handleSubmitForm(values)
          resetForm();
          setSubmitting(false);
        }}
      >{({
         values,
         errors,
         touched,
         handleBlur,
         handleChange,
         handleSubmit,
         isSubmitting
       })=>(
         <form class="login_account"  onSubmit={handleSubmit} id="login_form">
         <div class="form_group ">
             <label for="phone">{t('userLogin.phonenumber')}</label>
             <div class="phone_box">
                <select id="country_code" name="country_code" value={values?.country_code} onChange={handleChange}>
                    <option value="+965">+965</option>
                    <option value="+966">+966</option>
                    <option value="+91">+91</option>
                </select>
                <input type="text" className='d-block' name="PhoneNumber" placeholder="Enter phone number"  onChange={handleChange} />
             </div>
                <LocalError touched={touched.PhoneNumber} error={errors.PhoneNumber} />
         </div>
         <div class="form_group">
             <label for="password">{t('userLogin.passWord')}</label>
             <div class="password_box">
                 <input  type={showPassword ? "text" : "password"}  name="Password" class="password_input"  onChange={handleChange} placeholder="Password" required/>
                 {/* <span class="show_password" onclick="togglePassword()">👁️</span> */}
                 <span className="show_password" onClick={togglePassword}> {showPassword ? "👁️" : "🙈"} </span>
             </div>
             <LocalError touched={touched.Password} error={errors.Password} />
         </div>
         <div class="form_group remember_me">
            <div class="remember_box">
                  <input type="checkbox" id="remember_me" name="remember_me" onChange={handleChange} checked={values?.remember_me}/>
                  <label for="remember_me">{t('userLogin.remeber')}</label>
            </div>
             <a href="#/forget-password" class="forgot_password">{t('userLogin.forget')}</a>
         </div>
         <button type="submit" class="login_button" value="Login Now">{t('userLogin.loginNow')}</button>
         <div class="create_account">
             <p><span>{t('userLogin.DontHave')} </span><a href="#/registration">{t('userLogin.CreateNew')}</a></p>
         </div>
      </form>
      )}
            </Formik>
         </div>
      </div>
   </section>

   <Footer/>
    </>
  )
}

export default Login