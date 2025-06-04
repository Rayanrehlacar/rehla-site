import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { registerTravelerSchema } from "../validationSchema/validationSchema";
import { Formik } from "formik";
import { AddTourismExpert, GetTouristAreas, GetLanguages } from "../services/tripService";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom'; 
import i18n from '../i18n'; 

function RegisterTraveler() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [tours, setTours] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    fetchAllData();
  }, [i18n.language]); 

  
  const fetchAllData = async () => {
    await Promise.all([getTouristAreas(), getLanguages()]);
  }

  const getTouristAreas = async () => {
    let { data } = await GetTouristAreas();
    setTours(data?.model);
  };

  const getLanguages = async () => {
    let { data } = await GetLanguages(0);
    setLanguages(data?.model);
  };

  

  const handleSubmitForm = async (values, { setSubmitting, setErrors, resetForm }) => {
    try {
      const formData = new FormData();
      formData.append("YearsOfExperienceCount", values.YearsOfExperienceCount);
      formData.append("HourCost", values.HourCost);
      formData.append("TourismExpertAreas", values.TourismExpertAreas);
      formData.append("TourismExpertLanguages", values.TourismExpertLanguages);
      formData.append("GuideLicence", values.GuideLicence); // append actual file
      formData.append("Bio", values.Bio);
      formData.append("TourismProgram", values.TourismProgram);
      formData.append("terms", values.terms);
  
      const res = await AddTourismExpert(formData); // send FormData not plain object
      if (res.error) {
        setErrors({ apiError: res.error });
      } else {
        resetForm();
        setShowSuccessModal(true);
      }
    } catch (error) {
      setErrors({
        apiError: error.response?.data?.message || "Something went wrong. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };
  
  
  
  return (
    <>
      <Header />
      <section
        className="banners"
        style={{ backgroundImage: `url(${"../../images/banners_bg.webp"})` }}
      >
        <div className="container">
          <div className="banner_head">
            <h1>{t("header.registerAsTraveler")}</h1>
            <p>
              An enim nullam tempor sapien gravida donec enim ipsum <br /> porta
              justo congue purus pretium ligula{" "}
            </p>
          </div>
          <div className="bredcrub">
            <a href="index.html" target="_self">
              {t("header.home")}
            </a>
            <span>
              {" "}
              <img src="images/arrow.png" alt="arrow" />
            </span>
            <p>{t("header.registerAsTraveler")}</p>
          </div>
        </div>
      </section>
      <section className="prebooking_trips ptb60">
        <div className="container">
          <Formik
            enableReinitialize
            initialValues={{
              YearsOfExperienceCount: "",
              HourCost: "",
              TourismExpertAreas: "",
              TourismExpertLanguages: "",
              GuideLicence: "",
              Bio: "",
              TourismProgram: "",
              terms: "",
              apiError: "",
            }}
            validationSchema={registerTravelerSchema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={async (
              values,
              { setSubmitting, setErrors, resetForm }
            ) => {
              await handleSubmitForm(values, {
                setSubmitting,
                setErrors,
                resetForm,
              });
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
                className="prebooking_form"
                id="prebooking_form"
                onSubmit={handleSubmit}
                name="prebooking_form"
              >
                {/* <form method="post" action="#" className="prebooking_form" id="prebooking_form"> */}
                <div className="prebooking_box">
                  <div className="booking_grid">
                    <div className="booking_group">
                      <label htmlFor="experience">Years of Experience*</label>
                      <input
                        onChange={handleChange}
                        value={values?.YearsOfExperienceCount}
                        type="number"
                        id="experience"
                        minlength="0"
                        name="YearsOfExperienceCount"
                        placeholder="5"
                        required
                      />
                    </div>
                    <div className="booking_group">
                      <label htmlFor="cost">Hourly cost*</label>
                      <input
                        onChange={handleChange}
                        value={values?.HourCost}
                        type="text"
                        id="cost"
                        name="HourCost"
                        placeholder="250 SAR"
                        required
                      />
                    </div>
                  </div>
                  <div className="booking_grid">
                    <div className="booking_group">
                      <label htmlFor="TourismExpertAreas">
                        Select work cities*
                      </label>
                      <div className="select-multiple">
                        {tours.map((tour, key) => (
                          <button
                            key={key}
                            type="button"
                            className={
                              values.TourismExpertAreas?.split(",").includes(`${tour?.Id}`)
                                ? "selected"
                                : ""
                            }
                            onClick={() => {
                              const selected = values.TourismExpertAreas
                                ? values.TourismExpertAreas.split(",")
                                : [];
                              if (!selected.includes(`${tour?.Id}`))
                                selected.push(`${tour?.Id}`);
                              setFieldValue(
                                "TourismExpertAreas",
                                selected.join(",")
                              );
                            }}
                          >
                            {i18n.language === "ur" ? tour?.NameLT : tour?.Name}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="booking_group">
                      <label htmlFor="TourismExpertLanguages">Languages*</label>
                      <div className="select-multiple">
                        {languages.map((item, key) => (
                          <button
                            key={key}
                            type="button"
                            className={
                              values.TourismExpertLanguages?.split(",").includes(`${item?.Id}`)
                                ? "selected"
                                : ""
                            }
                            onClick={() => {
                              const selected = values.TourismExpertLanguages
                                ? values.TourismExpertLanguages.split(",")
                                : [];
                              if (!selected.includes(`${item?.Id}`))
                                selected.push(`${item?.Id}`);
                              setFieldValue(
                                "TourismExpertLanguages",
                                selected.join(",")
                              );
                            }}
                          >
                            {i18n.language === "ur" ? item?.NameLT : item?.Name}
                          </button>
                        ))}

                        <button
                          type="button"
                          onClick={() => {
                            const selected = values.TourismExpertLanguages
                              ? values.TourismExpertLanguages.split(",")
                              : [];
                            if (!selected.includes("English"))
                              selected.push("English");
                            setFieldValue(
                              "TourismExpertLanguages",
                              selected.join(",")
                            );
                          }}
                        >
                          English
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            const selected = values.TourismExpertLanguages
                              ? values.TourismExpertLanguages.split(",")
                              : [];
                            if (!selected.includes("Spanish"))
                              selected.push("Spanish");
                            setFieldValue(
                              "TourismExpertLanguages",
                              selected.join(",")
                            );
                          }}
                        >
                          Spanish
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="booking_group">
                    <label htmlFor="license">Expert license*</label>
                    <input
                      type="file"
                      id="license"
                      name="GuideLicence"
                      onChange={(event) => {
                        setFieldValue(
                          "GuideLicence",
                          event.currentTarget.files[0]
                        ); // <-- real file
                      }}
                      required
                    />
                  </div>
                  <div className="booking_group">
                    <label htmlFor="biography">Biography*</label>
                    <textarea
                      onChange={handleChange}
                      value={values?.Bio}
                      id="biography"
                      name="Bio"
                      placeholder="An introduction about yourself"
                      required
                    ></textarea>
                  </div>
                  <div className="booking_group">
                    <label htmlFor="trip">Trip programme*</label>
                    <textarea
                      onChange={handleChange}
                      value={values?.TourismProgram}
                      id="trip"
                      name="TourismProgram"
                      placeholder="Enter Trip programme in details"
                      required
                    ></textarea>
                  </div>
                  <div className="booking_group checkbox-group">
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      onChange={handleChange}
                      value={values?.terms}
                      required
                    />
                    <label htmlFor="terms">
                      Accept <a href="#">Terms & conditions</a>
                    </label>
                  </div>
                </div>

                {/* SHOW API ERROR MESSAGE */}
                {errors.apiError && (
                  <div
                    className="error-message"
                    style={{ color: "red", marginBottom: "20px" }}
                  >
                    {errors.apiError}
                  </div>
                )}

                <button
                  type="submit"
                  value="Prebooking Now"
                  className="prebooking_sub"
                >
                  Send
                </button>

                {/* Optional Debug */}
                {/* <pre>{JSON.stringify({ values, errors }, null, 2)}</pre> */}
              </form>
            )}
          </Formik>
        </div>
      </section>
      <Footer />
      {showSuccessModal && (
        <div className="success-modal">
          <div className="success-modal-content">
            <img
              src="/images/successfully-img.webp"
              alt="Success"
              className="success-icon"
              
            /> 
            <h2>Sent Successfully</h2>
            <p>
              Your request to register as a traveler has been sent successfully
              and we will contact you shortly
            </p>
            <button onClick={() => navigate("/")}>Back to Home Page</button>
          </div>
        </div>
      )}
    </>
  );
}

export default RegisterTraveler;
