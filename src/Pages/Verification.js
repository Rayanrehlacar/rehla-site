import React, { useState, useEffect } from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { UploadIdentityImage } from '../services/tripService';
import { verifyOtp,verifyEmail } from '../services/authService';
import { useTranslation } from 'react-i18next';

function Verification() {
  const { t } = useTranslation();
  const [frontFile, setFrontFile] = useState(null);
  const [backFile, setBackFile] = useState(null);
  const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [rawPhone, setRawPhone] = useState("");
  const [vcode, setVcode] = useState("");
  const [emailVcode, setEmailVcode] = useState("");

  const [phoneVerified, setPhoneVerified] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [errors, setErrors] = useState({ phone: "", email: "" });
  const [loadingPhone, setLoadingPhone] = useState(false);
  const [loadingEmail, setLoadingEmail] = useState(false);


  useEffect(() => {
    const profileData = sessionStorage.getItem("profile");
    if (profileData) {
      try {
        const parsed = JSON.parse(profileData);
        setEmail(parsed.user?.Email || "");
        setPhoneNumber(`${parsed.user?.PhoneKey || ""} ${parsed.user?.PhoneNumber || ""}`);
        setRawPhone(parsed.user?.PhoneNumber || "");
        setVcode(parsed.user?.VCode || "");
        setEmailVcode(parsed.user?.EmailVCode || "");
        setPhoneVerified(parsed.user?.Verified === true);
        setEmailVerified(parsed.user?.EmailVerified === true);
      } catch (err) {
        console.error("Error parsing profile from sessionStorage", err);
      }
    }
  }, []);



  // Auto-Clear Error with useEffect for phone
  useEffect(() => {
    if (errors.phone) {
      const timer = setTimeout(() => {
        setErrors((prev) => ({ ...prev, phone: '' }));
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [errors.phone]);

  // Auto-Clear Error with useEffect for email
  useEffect(() => {
  if (errors.email) {
    const timer = setTimeout(() => {
      setErrors((prev) => ({ ...prev, email: '' }));
    }, 3000); // auto-clear in 3 seconds

    return () => clearTimeout(timer); // cleanup on unmount or re-render
  }
  }, [errors.email]);


  const handleVerify = async (type) => {
    try {
      let res;

      if (type === "phone") {
        setLoadingPhone(true);
        res = await verifyOtp({ PhoneNumber: rawPhone, Vcode: vcode });
        if (res?.data?.model?.Verified) {
          setPhoneVerified(true);
          setErrors((prev) => ({ ...prev, phone: "" }));
        } else {
          setErrors((prev) => ({
            ...prev,
            phone: res?.data?.metas?.message || "Phone verification failed",
          }));
        }
        setLoadingPhone(false);
      }

      if (type === "email") {
        setLoadingEmail(true);
        res = await verifyEmail({ Vcode: emailVcode });
        if (res?.data?.model?.EmailVerified) {
          setEmailVerified(true);
          setErrors((prev) => ({ ...prev, email: "" }));
        } else {
          setErrors((prev) => ({
            ...prev,
            email: res?.data?.metas?.message || "Email verification failed",
          }));
        }
        setLoadingEmail(false);
      }
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        [type]: "Something went wrong while verifying.",
      }));
      setLoadingPhone(false);
      setLoadingEmail(false);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!frontFile || !backFile) {
      alert('Please upload both front and back images');
      return;
    }

    const formData = new FormData();
    formData.append('file1', frontFile);
    formData.append('file2', backFile);

    try {
      setLoading(true);
      const { data, error } = await UploadIdentityImage(formData);

      if (error) {
        alert('Upload failed.');
        console.error(error);
      } else {
        alert('Upload successful!');
        console.log('Upload response:', data);
      }
    } catch (err) {
      alert('Unexpected error during upload.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <section className="varification ptb60">
        <div className="container">
          <form
            className="varification_form"
            onSubmit={handleUpload}
            encType="multipart/form-data"
          >
            <div className="varification_grid">
              <p>{t('header.verification')}</p>

              {/* Phone verification option */}
              <div className="varification_proof">
                <label htmlFor="num_varify" className="proof_contact">
                  <span><img src="images/smartphone.svg" alt="phone" /></span>
                  <div className="contact_active">
                    <p><strong>{t('dropdown.phoneNumber')}</strong>
                      <a href={`tel:${phoneNumber}`}> {phoneNumber}</a>
                    </p>
                  </div>
                </label>
                 
                 {phoneVerified ? (
                    <div className="verified-label">✅ Verified</div>
                  ) : (
                    <div className="radio-wrapper">
                      {loadingPhone ? (
                        <div className="loading-msg">Verifying phone...</div>
                      ) : (
                        <input
                          type="radio"
                          name="verify_option"
                          id="num_varify"
                          onClick={() => handleVerify("phone")}
                        />
                      )}
                      {errors.phone && <div className="error-msg">{errors.phone}</div>}
                    </div>
                  )}

              </div>

              {/* Email verification option */}
              <div className="varification_proof">
                <label htmlFor="email_varify" className="proof_contact">
                  <span><img src="images/mail-message.svg" alt="email" /></span>
                  <div className="contact_active">
                    <p><strong>{t('dropdown.Emailaddress')}</strong>
                      <a href={`mailto:${email}`}> {email}</a>
                    </p>
                  </div>
                </label>
                {emailVerified ? (
                    <div className="verified-label">✅ Verified</div>
                  ) : (
                    <div className="radio-wrapper">
                      {loadingEmail ? (
                        <div className="loading-msg">Verifying email...</div>
                      ) : (
                        <input
                          type="radio"
                          name="verify_option"
                          id="email_varify"
                          onClick={() => handleVerify("email")}
                        />
                      )}
                      {errors.email && <div className="error-msg">{errors.email}</div>}
                    </div>
                  )}


              </div>

              {/* ID Card upload option */}
              <div className="varification_proof">
                <label htmlFor="id_card" className="proof_contact">
                  <span><img src="images/id-card.svg" alt="id card" /></span>
                  <div className="contact_active">
                    <p><strong>{t('dropdown.IDcard')}</strong>
                      <a href="javascript:void(0);">Identification card to increase confidence</a></p>
                  </div>
                </label>
                <input type="radio" name="verify_option" id="id_card" />
              </div>

              {/* Upload section */}
              <div className="varification_upload">
                <label>Upload Front of ID Card:</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFrontFile(e.target.files[0])}
                />
                <label>Upload Back of ID Card:</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setBackFile(e.target.files[0])}
                />
              </div>

              <button type="submit" disabled={loading}>
                {loading ? 'Uploading...' : 'Upload'}
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Verification;
