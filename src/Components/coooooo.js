import React, { useState } from "react";
import "../css/style.css";
import "../css/reset.css";
import "../css/responsive.css";
import "../css/glightbox.css";
import { Formik } from "formik";
import { contactUsSchema } from "../validationSchema/validationSchema";
import { ContactUs } from "../services/tripService";
import LocalError from "./Error/validationError";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const { t } = useTranslation();

  const [contactUs, setContactUs] = useState({});

  // Handle form submission
  const handleSubmitForm = async (values) => {
    try {
      console.log({ values });
      const res = await ContactUs(values);

      if (res?.success) {
        toast.success(t("contactUspage.successMessage"), {
          position: "top-right",
          autoClose: 3000,
        });
      } else {
        toast.error(t("contactUspage.errorMessage"), {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error(t("contactUspage.errorMessage"), {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="contact_details">
        <div className="container">
        <div class="contact_grid">
		  <div class="contact_box">
  <a href="https://www.google.com/maps?q=2118+Thornridge+Cir,+Syracuse,+California+208434" target="_blank">
    <div class="icon">
      <svg
        width="17"
        height="25"
        viewBox="0 0 17 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.385 0C3.74929 0 0 3.81211 0 8.52548C0 14.9196 8.385 24.3585 8.385 24.3585C8.385 24.3585 16.77 14.9196 16.77 8.52548C16.77 3.81211 13.0207 0 8.385 0ZM8.385 11.5703C7.59077 11.5703 6.82907 11.2495 6.26747 10.6785C5.70586 10.1075 5.39036 9.33301 5.39036 8.52548C5.39036 7.71794 5.70586 6.94348 6.26747 6.37247C6.82907 5.80146 7.59077 5.48066 8.385 5.48066C9.17923 5.48066 9.94093 5.80146 10.5025 6.37247C11.0641 6.94348 11.3796 7.71794 11.3796 8.52548C11.3796 9.33301 11.0641 10.1075 10.5025 10.6785C9.94093 11.2495 9.17923 11.5703 8.385 11.5703Z"
          fill="white"
        />
      </svg>
    </div>
  </a>
  <a href="https://www.google.com/maps?q=2118+Thornridge+Cir,+Syracuse,+California+208434" target="_blank">
    2118 Thornridge Cir, <br />
    Syracuse, California 208434
  </a>
</div>

            <div class="contact_box">
			<a href="tel:+088(246)6422710" target="_blank">
              <div class="icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3952 13.1317C17.1707 13.1317 15.9684 12.9401 14.8291 12.5635C14.2708 12.373 13.5845 12.5478 13.2438 12.8978L10.995 14.596C8.38701 13.2034 6.78056 11.597 5.40743 9.0078L7.05509 6.81692C7.48316 6.38929 7.6367 5.76462 7.45274 5.17851C7.07462 4.03285 6.88253 2.83076 6.88253 1.60539C6.88259 0.720168 6.16264 0 5.27775 0H1.60484C0.719946 0 0 0.720168 0 1.60533C0 11.7517 8.25196 20.0061 18.3952 20.0061C19.2801 20.0061 20 19.2859 20 18.4008V14.737C19.9999 13.8519 19.28 13.1317 18.3952 13.1317Z"
                    fill="white"
                  />
                </svg>
              </div>
			  </a>
              <a href="tel:+088(246)6422710" target="_blank">
                +088 (246) 642-27-10
              </a>
              <a href="tel:+088(246)6422710" target="_blank">
                +088 (246) 642-27-10
              </a>
            </div>
            <div class="contact_box">
			<a href="mailto:appmax@gmail.com" target="_blank">

              <div class="icon">
                <svg
                  width="22"
                  height="15"
                  viewBox="0 0 22 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path
                    d="M0.452861 1.20474C3.42973 3.50593 8.6532 7.5544 10.1884 8.81673C10.3945 8.9871 10.6156 9.07371 10.8451 9.07371C11.0741 9.07371 11.2948 8.98791 11.5004 8.81835C13.037 7.55479 18.2604 3.50593 21.2373 1.20474C21.4227 1.06175 21.4509 0.810407 21.3009 0.635588C20.954 0.231622 20.4368 0 19.8826 0H1.8076C1.25336 0 0.736145 0.231622 0.389316 0.635627C0.239266 0.810407 0.267522 1.06175 0.452861 1.20474Z"
                    fill="white"
                  />{" "}
                  <path
                    d="M21.4279 2.44959C21.2677 2.38153 21.0793 2.40527 20.946 2.50921C17.6447 5.06371 13.4314 8.33805 12.1057 9.42837C11.3617 10.0414 10.3291 10.0414 9.58334 9.42756C8.17035 8.26551 3.43888 4.59404 0.743984 2.50917C0.609819 2.40523 0.420964 2.3823 0.262102 2.44955C0.102392 2.51726 0 2.66307 0 2.82378V13.1965C0 14.1064 0.810621 14.8464 1.80751 14.8464H19.8825C20.8794 14.8464 21.69 14.1064 21.69 13.1965V2.82378C21.69 2.66307 21.5876 2.51687 21.4279 2.44959Z"
                    fill="white"
                  />
                </svg>
              </div>
			  </a>
              <a href="mailto:appmax@gmail.com" target="_blank">
                Appmax@gmail.com
              </a>
              <a href="mailto:appmax@gmail.com" target="_blank">
                Appmax@gmail.com
              </a>
            </div>
          </div>
          <div className="form_map">
            <div className="map_box">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46660.68508791283!2d-76.21721880977!3d43.03527019768548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d9f39bbf979a0d%3A0xd50ce2d7ad9545!2sSyracuse%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1718624670841!5m2!1sen!2sin"
                width="600"
                height="470"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="contact_form">
              <Formik
                enableReinitialize
                initialValues={contactUs}
                validationSchema={contactUsSchema}
                validateOnChange={false}
                validateOnBlur={false}
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
                  handleSubmit,
                }) => (
                  <form
                    id="contact_form"
                    onSubmit={handleSubmit}
                    name="contact_form"
                  >
                    <div className="form_grid">
                      <div className="form_group">
                        <input
                          type="text"
                          id="UserName"
                          name="UserName"
                          placeholder={t("contactUspage.nameplaceholder")}
                          onChange={handleChange}
                          value={values?.UserName}
                        />
                        <LocalError
                          touched={touched.UserName}
                          error={errors.UserName}
                        />
                      </div>
                      <div className="form_group">
                        <input
                          type="email"
                          id="UserEmail"
                          name="UserEmail"
                          placeholder={t("contactUspage.emailplaceholder")}
                          onChange={handleChange}
                          value={values?.UserEmail}
                        />
                        <LocalError
                          touched={touched.UserEmail}
                          error={errors.UserEmail}
                        />
                      </div>
                      <div className="form_group">
                        <textarea
                          id="Message"
                          name="Message"
                          placeholder={t("contactUspage.messageplaceholder")}
                          onChange={handleChange}
                          value={values?.Message}
                        ></textarea>
                        <LocalError
                          touched={touched.Message}
                          error={errors.Message}
                        />
                      </div>
                      <div className="submit_btn">
                        <input
                          type="submit"
                          value={t("contactUspage.submit")}
                        />
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
