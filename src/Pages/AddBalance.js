import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import LocalError from '../Components/Error/validationError';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import { addBalanceSchema } from '../validationSchema/validationSchema';
import { GetBanks, AddTransaction } from '../services/tripService';

function AddBalance() {
  const navigate = useNavigate();
  const location = useLocation();
  const [bank, setBanks] = useState([]);
  const [message, setMessage] = useState('');

  // Check login status
  useEffect(() => {
  const isLoggedIn = sessionStorage.getItem('profile');
  if (!isLoggedIn) {
    navigate('/login', { state: { from: location.pathname } });
  }
  }, [navigate, location]);
  

  useEffect(() => {
    getBanks();
  }, []);

  const getBanks = async () => {
    const { data } = await GetBanks();
    setBanks(data?.model || []);
  };

//   const handleSubmitForm = async (values) => {
//     try {
//       const res = await AddTransaction(values);
//       return res;
//     } catch (error) {
//       console.error("Transaction error:", error);
//       return { success: false };
//     }
//   };

  const handleSubmitForm = async (values) => {
   try {
     const res = await AddTransaction(values);
 
     if (res?.error || res?.data?.metas?.result !== "success") {
      // console.error("API Error or failed response:", res);
       return { error: true, message: res?.data?.metas?.message || "Failed" };
     }
 
     return { error: null, message: res.data.metas.message, data: res.data.model };
   } catch (error) {
    // console.error("Exception:", error);
     return { error: true, message: "Unexpected error occurred" };
   }
 };
 

  return (
    <>
      <Header />

      <section
        className="banners"
        style={{ backgroundImage: `url('../../images/banners_bg.webp')` }}
      >
        <div className="container">
          <div className="banner_head">
            <h1>Add balance</h1>
          </div>
          <div className="bredcrub">
            <a href="/" target="_self">
              Home
            </a>
            <span>
              <img src="images/arrow.png" alt="arrow" />
            </span>
            <p>Add balance</p>
          </div>
        </div>
      </section>

      <section className="my_wallet add_balance">
        <div className="container">
          <div className="add_balance_inner">
            <div className="wallet_bal withdraw_bal">
              <img
                src="images/Withdraw-balance.webp"
                alt="Withdraw-balance"
              />
              <h4>Add balance</h4>
              <p>Recharge your wallet via Prepaid card</p>
            </div>
            <div className="withdraw_inner ptb60">
              <Formik
                enableReinitialize
                initialValues={{ CardNumber: "" }}
                validationSchema={addBalanceSchema}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                  setSubmitting(true);
                
                  const res = await handleSubmitForm(values);
                //  console.log("res", res);
                
                  if (res?.error === null) {
                    setMessage("Balance added successfully");
                    resetForm();
                
                    setTimeout(() => {
                      navigate("/my-wallet");
                    }, 2000); // 2 seconds delay before redirect
                  } else {
                    setMessage("Failed to add balance");
                  }
                
                  setSubmitting(false);
                }}
                
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleSubmit
                }) => (
                  
                  <form
                    className="add_balance_form"
                    id="add_balance_form"
                    onSubmit={handleSubmit}
                    name="withdraw_form"
                  >
                    <div className="withdraw_group">
                      <label htmlFor="CardNumber">Shipping card number</label>
                      <input
                        type="text"
                        name="CardNumber"
                        placeholder="Enter Card Number"
                        value={values.CardNumber}
                        onChange={handleChange}
                      />
                    </div>
                    <LocalError
                     touched={touched.CardNumber || message}  // Show when field is touched or there's a message
                     error={errors.CardNumber || message}     // Show either validation error or message
                     />
                    <button type="submit" className="withdraw_sub">
                      Add balance
                    </button>
                  </form>
                  
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>

      <Footer />
     
    </>
  );
}

export default AddBalance;
