import React, { useState } from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { UploadIdentityImage } from '../services/tripService';
import { useTranslation } from 'react-i18next';

function Verification() {
  const { t } = useTranslation();
  const [frontFile, setFrontFile] = useState(null);
  const [backFile, setBackFile] = useState(null);
  const [loading, setLoading] = useState(false);

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
                      <a href="tel:01016171926"> 01016171926</a></p>
                  </div>
                </label>
                <input type="radio" name="verify_option" id="num_varify" />
              </div>

              {/* Email verification option */}
              <div className="varification_proof">
                <label htmlFor="email_varify" className="proof_contact">
                  <span><img src="images/mail-message.svg" alt="email" /></span>
                  <div className="contact_active">
                    <p><strong>{t('dropdown.Emailaddress')}</strong>
                      <a href="mailto:example@gmail.com"> example@gmail.com</a></p>
                  </div>
                </label>
                <input type="radio" name="verify_option" id="email_varify" />
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
