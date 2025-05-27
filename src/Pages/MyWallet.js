import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import { GetTransactions } from '../services/tripService';
import moment from 'moment';
import { useTranslation } from 'react-i18next';


function MyWallet() {
   const { t } = useTranslation();
   const [loading, setLoading] = useState(true);

   const [transaction, setTransaction] = useState({})
   useEffect(() => {
      getTransaction();
   }, [])
   const getTransaction = async () => {
      let { data } = await GetTransactions();
      setTransaction(data?.model || []);
      setLoading(false);
   };

   const positiveTransactions = transaction?.Transactions?.filter(item => item.Amount > 0) || [];
   const negativeTransactions = transaction?.Transactions?.filter(item => item.Amount < 0) || [];


   return (
      <>
         <Header />
         <section className="banners" style={{ backgroundImage: `url(${'../../images/banners_bg.webp'})` }}>
            <div className="container">
               <div className="banner_head">
                  <h1>{t('header.myWallet')}</h1>
                  <p>An enim nullam tempor sapien gravida donec enim ipsum <br /> porta justo  congue purus pretium ligula </p>
               </div>
               <div className="bredcrub">
                  <a href="index.html" target="_self">{t('header.home')}</a><span> <img src="images/arrow.png" alt="arrow" /></span>
                  <p>{t('header.myWallet')}</p>
               </div>
            </div>
         </section>
         <section className="my_wallet">
            <div className="container">
               <div className="wallet_bal">
                  <img src="images/my-wallet.webp" alt=" wallet cart" />
                  <h4>{t('dropdown.Walletbalance')}</h4>
                  <h2>{transaction?.TotalAmount} SAR</h2>
                  {/* <h2>350.50 SAR</h2> */}
               </div>
               <div className="history_box">
                  <h4>{t('dropdown.Wallethistory')}</h4>
                  <div className="balance_grid">
                     <div className="add_box">
                        {loading ? (
                           <p>Loading...</p>
                        ) : positiveTransactions.length > 0 ? (
                           positiveTransactions.map((item, index) => (
                              <div className="wallet_history" key={index}>
                                 <div className="add_blnc">
                                    <h5>{t('dropdown.Addbalance')}</h5>
                                    <p>{item?.Reason}</p>
                                 </div>
                                 <div className="add_date">
                                    <p>
                                       <span>{moment(item.TransactionDate).format('D-M-YYYY, h A')}</span>
                                       <strong>{item.Amount} SAR</strong>
                                    </p>
                                 </div>
                              </div>
                           ))
                        ) : (
                           <p>No add balance history available.</p>
                        )}


                        <a href="#/add-balance-form" className="add_btn">{t('dropdown.Addbalance')}</a>

                        {/* <a href="javascript:void(0);" className="Withdraw_btn">Withdraw a balance</a> */}
                     </div>
                     <div className="withdraw_box">


                        {loading ? (
                           <p>Loading...</p>
                        ) : negativeTransactions.length > 0 ? (
                           negativeTransactions.map((item, index) => (
                              <div className="wallet_history" key={index}>
                                 <div className="add_blnc">
                                    <h5>{t('dropdown.Withdrawbalance')}</h5>
                                    <p>{item?.Reason}</p>
                                 </div>
                                 <div className="withdraw_date">
                                    <p>
                                       <span>{moment(item.TransactionDate).format('D-M-YYYY, h A')}</span>
                                       <strong>{item.Amount} SAR</strong>
                                    </p>
                                 </div>
                              </div>
                           ))
                        ) : (
                           <p>No withdraw history available.</p>
                        )}

                        <a href="#/withdraw-balance" className="Withdraw_btn">{t('dropdown.Withdrawbalance')}</a>

                     </div>
                  </div>
               </div>
            </div>
         </section>
         <Footer />
      </>
   )
}

export default MyWallet