import React, { useState } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Formik } from "formik";
import { signUpSchema } from "../validationSchema/validationSchema";
import { convertBase64 } from "../services/utils";
import LocalError from "../Components/Error/validationError";
import { useDispatch } from "react-redux";
import { signUpAction } from "../actions/authAction";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Registration() {
  const { t } = useTranslation();
  const [showPass, setShowPass] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitForm = async (values) => {
    console.log(values);  // Debug the form values to ensure everything is correct
    await dispatch(signUpAction(values, navigate));
  };

  const handleProfilePhoto = async (e, setFieldValue) => {
    const file = e.target.files[0];

    if (file) {
      try {
        const base64 = await convertBase64(file);
        setFieldValue("ProfilePhoto", base64);  // Set the base64 image value
      } catch (error) {
        console.error("Error converting file to Base64:", error);
      }
    }
  };

  return (
    <>
      <Header />
      <section className="my_account account_create">
        <div className="account_inner">
          <div
            className="account_left"
            style={{ backgroundImage: `url("../../images/carefree.webp")` }}
          >
            <div className="white_logo">
              <img src="images/WhiteLogo.webp" alt="white logo" />
            </div>
          </div>
          <div className="account_content">
            <h2 className="box_heading">{t("Registration.createNew")}</h2>
            <Formik
              initialValues={{
                Name: "",
                Email: "",
                Password: "",
                PhoneKey: "+966",
                IsSaudi: true,
                IdentityNumber: "1064860119",
                PhoneNumber: "",
                DateOfBirth: "",
                CityId: 2,
                Gender: "",
                ProfilePhoto: "", // Default empty photo
              }}
              validationSchema={signUpSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                await handleSubmitForm(values);
                resetForm(); // Reset form after submission
                setSubmitting(false);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                setFieldValue,
                handleSubmit,
              }) => (
                <form
                  className="login_account create_form"
                  onSubmit={handleSubmit}
                  id="create_form"
                >
                  <div className="avatar_box">
                    <div className="avatar_inner">
                      <img
                        src={values.ProfilePhoto || "images/OBJECTS.webp"}
                        alt="Avatar Preview"
                        className="avatar_img"
                      />
                      <label htmlFor="avatarUpload" className="upload_btn">
                        <img
                          src="images/camera-icon.webp"
                          alt="Upload"
                          width="20"
                          height="20"
                        />
                      </label>
                      <input
                        type="file"
                        id="avatarUpload"
                        name="ProfilePhoto"
                        accept="image/*"
                        onChange={(e) => handleProfilePhoto(e, setFieldValue)} // Handle file upload
                      />
                    </div>
                  </div>
                  <div className="form_group">
                    <label htmlFor="fullName">{t("Registration.FullName")}</label>
                    <input
                      type="text"
                      id="fullName"
                      name="Name"
                      placeholder="Enter Full Name"
                      value={values.Name}
                      onChange={handleChange}
                    />
                    <LocalError touched={touched.Name} error={errors.Name} />
                  </div>
                  <div className="form_group">
                    <label htmlFor="phone">{t("Registration.PhoneNumber")}</label>
                    <div className="phone_box">
                      <select
                        id="country_code"
                        name="PhoneKey"
                        className="flag_select"
                        value={values.PhoneKey}
                        onChange={(e) => setFieldValue("PhoneKey", e.target.value)}
                      >
                        {/* Country code options */}
                        <option value="+965">+965</option>
                        <option value="+91">+91</option>
                        <option value="+966">+966</option>
                      </select>
                      <input
                        type="tel"
                        id="PhoneNumber"
                        name="PhoneNumber"
                        placeholder="Enter phone number"
                        value={values.PhoneNumber}
                        onChange={handleChange}
                      />
                      <LocalError
                        touched={touched.PhoneNumber}
                        error={errors.PhoneNumber}
                      />
                    </div>
                  </div>
                  <div className="form_group">
                    <label htmlFor="email">{t("Registration.Email")}</label>
                    <input
                      type="email"
                      id="email"
                      name="Email"
                      placeholder="Enter Email"
                      value={values.Email}
                      onChange={handleChange}
                    />
                    <LocalError touched={touched.Email} error={errors.Email} />
                  </div>
                  <div className="form_group">
                    <label htmlFor="password">{t("Registration.Password")}</label>
                    <div className="password_box">
                      <input
                        type={showPass ? "text" : "password"}
                        id="password"
                        name="Password"
                        placeholder="Password"
                        value={values.Password}
                        onChange={handleChange}
                      />
                      <span
                        className="show_password"
                        onClick={() => setShowPass(!showPass)}
                      >
                        <img
                          src={showPass ? "images/show-icon.svg" : "images/hide-icon.svg"}
                          alt="Toggle Password"
                        />
                      </span>
                    </div>
                    <LocalError touched={touched.Password} error={errors.Password} />
                  </div>
                  <div className="form_group birth_date">
                    <label htmlFor="dob">{t("Registration.DateofBirth")}</label>
                    <input
                      type="date"
                      id="DateOfBirth"
                      name="DateOfBirth"
                      value={values.DateOfBirth}
                      onChange={handleChange}
                    />
                    <LocalError touched={touched.DateOfBirth} error={errors.DateOfBirth} />
                  </div>
                  <div className="form_group gender gender_select">
                    <label>{t("Registration.Gender")}</label>
                    <div className="gender_options">
                      <label>
                        <input
                          type="radio"
                          name="Gender"
                          value="female"
                          checked={values.Gender === "female"}
                          onChange={() => setFieldValue("Gender", "female")}
                        />
                        <span className="gender_cat">
                          Female
                          <img src="images/female-icon.svg" alt="Female" />
                        </span>
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="Gender"
                          value="male"
                          checked={values.Gender === "male"}
                          onChange={() => setFieldValue("Gender", "male")}
                        />
                        <span className="gender_cat">
                          Male
                          <img src="images/male-icon.svg" alt="Male" />
                        </span>
                      </label>
                    </div>
                    <LocalError touched={touched.Gender} error={errors.Gender} />
                  </div>
                  <button type="submit" className="login_button register_btn">
                    {t("Registration.RegisterNow")}
                  </button>
                  <div className="create_account">
                    <p onClick={() => navigate("/login")}>
                      {t("Registration.Already")}{" "}
                      <a href="javascript:void(0)">
                        {t("Registration.LoginNow")}
                      </a>
                    </p>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Registration;
