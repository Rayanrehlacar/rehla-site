import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { userSchema } from '../validationSchema/validationSchema';
import LocalError from '../Components/Error/validationError';
import { convertBase64 } from '../services/utils';
import { updateProfileAction, updateProfileImageAction } from '../actions/authAction';
import moment from 'moment/moment';
import ProfileSpinner from '../Components/CustomLoader/profileSpinner';
import { useTranslation } from 'react-i18next';

function EditProfile() {
  const { t } = useTranslation();
  const { userDetails, isUploading } = useSelector((state) => state.userStore);
  const dispatch = useDispatch();

  const handleSubmitForm = async (values) => {
    await dispatch(updateProfileAction({ ...values, Gender: values?.Gender === "male" }));
  };

  const handleProfilePhoto = async (e, setFieldValue) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      const base64 = await convertBase64(file);
      dispatch(updateProfileImageAction({ ProfilePhoto: base64.split(",")[1] }));
    }
  };

  return (
    <>
      <Header />
      <section className="banners" style={{ backgroundImage: `url(${'../../images/banners_bg.webp'})` }}>
        <div className="container">
          <div className="banner_head">
            <h1>{t('header.editProfile')}</h1>
            <p>An enim nullam tempor sapien gravida donec enim ipsum <br /> porta justo congue purus pretium ligula</p>
          </div>
          <div className="bredcrub">
            <a href="index.html" target="_self">{t('header.home')}</a>
            <span><img src="images/arrow.png" alt="arrow" /></span>
            <p>{t('header.editProfile')}</p>
          </div>
        </div>
      </section>
      <section className="profile_edit ptb100">
        <div className="container">
          <div className="profile_box">
            <Formik
              enableReinitialize
              initialValues={{
                ...userDetails,
                Gender: userDetails?.Gender ? "male" : "female",
                PhoneKey: userDetails?.PhoneKey || '+965', // Default value for phone key
              }}
              validationSchema={userSchema}
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
                handleSubmit,
              }) => (
                <form className="edit_profile" id="edit_profile" onSubmit={handleSubmit}>
                  <div className="avatar_box edit_avatar">
                    <div className="avatar_inner edit_inner relative">
                      <img src={values?.ProfilePhoto || "images/OBJECTS.webp"} alt="Avatar" id="avatarPreview" className="avatar_img edit_img" />
                      {isUploading && <div className='spinner-container'><ProfileSpinner /></div>}
                      <label htmlFor="avatarUpload" className="upload_btn edit_btn">
                        <img src="images/camera-icon.webp" alt="Camera Icon" width="20" height="20" />
                      </label>
                      <input type="file" id="avatarUpload" name="avatarUpload" accept="image/*" onChange={(e) => handleProfilePhoto(e, setFieldValue)} />
                    </div>
                  </div>
                  <div className="edit_grid edit_box ">
                    <div className="form_edit">
                      <label htmlFor="fullName">{t('dropdown.fullname')}</label>
                      <input
                        type="text"
                        id="fullName"
                        name="Name"
                        placeholder="Enter Full Name"
                        value={values?.Name}
                        onChange={handleChange}
                      />
                      <LocalError touched={touched.Name} error={errors.Name} />
                    </div>

                    <div className="form_edit">
                      <label htmlFor="phone">{t('dropdown.phone')}</label>
                      <div className="phone_box">
                        <select
                          id="country_code"
                          name="PhoneKey"
                          value={values?.PhoneKey}
                          onChange={handleChange}
                        >
                          <option value="+965">+965</option>
                          <option value="+966">+966</option>
                          <option value="+91">+91</option>
                        </select>
                        <input
                          type="tel"
                          id="phone"
                          name="PhoneNumber"
                          placeholder="Enter phone number"
                          value={values?.PhoneNumber}
                          onChange={handleChange}
                        />
                        <LocalError touched={touched.PhoneNumber} error={errors.PhoneNumber} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="edit_grid">
                    <div className="form_edit">
                      <label htmlFor="email">{t('dropdown.email')}</label>
                      <input
                        type="email"
                        id="email"
                        name="Email"
                        placeholder="Enter Email"
                        value={values?.Email}
                        onChange={handleChange}
                      />
                      <LocalError touched={touched.Email} error={errors.Email} />
                    </div>
                    <div className="form_edit edit_date birth_date">
                      <label htmlFor="dob">{t('dropdown.dob')}</label>
                      <input
                        type="date"
                        id="dob"
                        name="DateOfBirth"
                        placeholder="Select date of birth"
                        value={moment(values?.DateOfBirth).format("YYYY-MM-DD")}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="selection_box">
                    <label>{t('dropdown.Gender')}</label>
                    <div className="gender_selection">
                      <div className="genders_grid">
                        <input
                          type="radio"
                          name="Gender"
                          value="female"
                          checked={values?.Gender === "female"}
                          onChange={handleChange}
                        />
                        <label htmlFor="female" className="gender_option">
                          <span>Female</span>
                          <img src="images/female-icon.svg" alt="Female Icon" />
                        </label>
                      </div>
                      <div className="genders_grid">
                        <input
                          type="radio"
                          name="Gender"
                          value="male"
                          checked={values?.Gender === "male"}
                          onChange={handleChange}
                        />
                        <label htmlFor="male" className="gender_option">
                          <span>Male</span>
                          <img src="images/male-icon.svg" alt="Male Icon" />
                        </label>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="edit_sub">{t('dropdown.editprobutton')}</button>
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

export default EditProfile;
