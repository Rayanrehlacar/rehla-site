import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import "../css/style.css";
import "../css/reset.css";
import "../css/responsive.css";
import "../css/glightbox.css";
import OtpInput from "react-otp-input";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTESCONSTANTS } from "../constants/authConstants";
import { useDispatch } from "react-redux";
import { resendOtpAction, verifyOtpAction } from "../actions/authAction";
function VerificationCode() {
  const [otp, setOtp] = useState("");
  const [codeSent,setCodeSent]=useState(false)
  const { state } = useLocation();
  const navigate= useNavigate();
  const dispatch= useDispatch()
 

  const handleSubmit=(e)=>{
    e.preventDefault();
    navigate(ROUTESCONSTANTS.NEW_PASSWORD,{state:{...state,otp}})
  }
  const handleSubmitForm=(values)=>{
    dispatch(verifyOtpAction(values,navigate))
 }

  const ResendCode=(e)=>{
   e.preventDefault()
     dispatch(resendOtpAction(state,setCodeSent))
  }
  return (
    <>
      <Header />
      <section class="my_account verify_code">
        <div class="account_inner">
          <div
            class="account_left"
            style={{ backgroundImage: `url(${"../../images/carefree.webp"})` }}
          >
            {/* <!-- <img src="images/carefree.webp" alt="account_bg img" /> --> */}
            <div class="white_logo">
              <img src="images/WhiteLogo.webp" alt="white logo" />
            </div>
          </div>
          <div class="account_content">
            <img src="images/form_company_logo.webp" alt="company logo" />
            <h2 class="box_heading">Verification code</h2>
            <p>
              please enter otp 4 digits number that sent to
              <a
                href={`tel:${state?.PhoneKey}${state?.PhoneNumber}`}
                target="_blank" rel="noreferrer"
              >
                
                {state?.PhoneKey} {state?.PhoneNumber}
              </a>
            </p>
            <form
              onSubmit={handleSubmit}
              id="varify_form"
              name="varify_form"
            >
              <div class="otp_inputs">
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={4}
                  renderSeparator={<span>-</span>}
                  renderInput={(props) => (
                    <input
                      {...props}
                      type="text"
                      class="otp_input"
                      name="#"
                      id="input4"
                    />
                  )}
                />
                {/* <input type="text" maxlength="1" class="otp_input" name="#" id="input1"/>
                   <input type="text" maxlength="1" class="otp_input" name="#" id="input2"/>
                   <input type="text" maxlength="1" class="otp_input" name="#" id="input3"/>
                   <input type="text" maxlength="1" class="otp_input" name="#" id="input4"/> */}
              </div>
              <button
                type="submit"
                value="Send"
                class="login_button passwrd_btn varify_btn"
              >
                Send
              </button>
            </form>
            <div class="create_account resend">
              <p>
                <span id="timer">00:30</span>{" "}
                <a href="#" onClick={ResendCode} id="resend_code">
                 {codeSent?"Code Sent": "Resend code"}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default VerificationCode;
