import React, { useEffect, useState } from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getMyRates } from '../actions/tripAction'
import {getMyAllRates} from '../services/tripService';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

function MyRates() {

   const { t } = useTranslation();
   const [myRates,setMyRates] = useState([]);
   const [loading, setLoading] = useState(true); // Added loading state
   const navigate = useNavigate();
   const location = useLocation();
   // const dispatch= useDispatch()
   // const {userDetails} = useSelector((state) => state.userStore);
   // useEffect(()=>{
   //   dispatch(getMyRates({id:userDetails?.Id}))
   // },[])

   useEffect(()=>{
      const isLoggedIn = sessionStorage.getItem('profile');

      if (!isLoggedIn) {
         navigate('/login', { state: { from: location.pathname } });
         return;
      }
      getAllRates();
   }, [navigate, location]);

   const getAllRates = async () => {
      try {
      const { data } = await getMyAllRates(0);
      setMyRates(data?.model || []); // ensure it's always an array
      } catch (error) {
      console.error("Error fetching MyRates", error);
      setMyRates([]); // fallback in case of error
      }
      setLoading(false); 
   }; 

   // Calculate the total number of reviews and average rating
   const totalReviews = myRates.length;
   const averageRating = totalReviews > 0 
   ? (myRates.reduce((sum, item) => sum + item.Value, 0) / totalReviews).toFixed(1)
   : 0; // Default to 0 if no reviews

   const starValues = [5, 4, 3, 2, 1, 'nil']; // order of stars you want to show

  return (
    <>
        <Header/>
        <section className="banners" style={{backgroundImage: `url(${'../../images/banners_bg.webp'})`}}>
      <div className="container">
         <div className="banner_head">
            <h1>{t('header.myRates')}</h1>
            <p>An enim nullam tempor sapien gravida donec enim ipsum <br/> porta justo  congue purus pretium ligula </p>
         </div>
         <div className="bredcrub">
            <a href="index.html" target="_self">{t('header.home')}</a><span> <img src="images/arrow.png" alt="arrow"/></span> 
            <p>{t('header.myRates')}</p>
         </div>
      </div>
   </section>
   <section className="my_rates">
      <div className="total_rates">
         <div className="star_review">
            <p className="total_star">
               <span className="star"><img src="images/star.svg" className="yello" /> </span>
               <span className="star_count">({averageRating}) </span> {t('dropdown.totalReview')}
            </p>
            <p className="total_review">{totalReviews} {t('dropdown.Review')}</p>
         </div>
         <div className="star_grid">
                 {starValues.map((value) => {
                     const count = myRates.filter((item) => item.Value === value).length;
                  //   console.log('star:', value, '| count:', count);
                    return (
                       <div className="star_box" key={value}>
                          <p>{count} reviews</p>
                          <p>
                             <span>
                                <img
                                   src={`images/${value}-Star.svg`}
                                   alt={`${value}-Star`}
                                   className="yello"
                                   onError={(e) => {
                                      e.target.onerror = null;
                                      e.target.src = 'images/nil-Star.svg';
                                   }}
                                />
                             </span>
                          </p>
                       </div>
                    );
                 })}
         </div>
      </div>
      <div className="rates_container">
         <h5>Rates:</h5>
         {loading ? (
         <div className="reviewer_comments">
            <p>Loading...</p> {/*Display loading message until data is fetched */}
        </div>
         ) : myRates.length > 0 ? (
         myRates.map((item,index) => (
            <div className="reviewer_comments" key={index}>
            <div className="Comments_details reviewer_content">
            <img
               src={item?.ProfilePhoto || '/images/1-Star.svg'}
               alt="client_img"
               onError={(e) => {
                  e.target.onerror = null; // Prevent infinite loop
                  e.target.src = '/images/1-Star.svg';
               }}
            />
            <div className="comment_contant">
                     <p>{item?.Comment} 
                        <span><img src={`images/${item?.Value}-Star.svg`}  className="yello" /></span>
                     </p>
                     <div className="client_name">
                        <h5>- {item?.Name}</h5>
                        <p>{moment(item.CreationDate).format('MMM DD, YYYY')} </p>
                     </div>
                  </div>
            </div>      
         </div>
         ))      
         ) : (
            <div className="reviewer_comments">
            <p>No Rates found</p>
            </div>
         )} 
         {/* <div className="reviewer_comments">
            <div className="Comments_details reviewer_content">
            <img src="images/mand-holding.webp" alt="client_img" />
            <div className="comment_contant">
                     <p>Leading an organization is incredibly rewarding and equally humbling. Confidence and humility. Every success is rewarding. 
                        <span><img src="images/4-star.svg" className="yello" /></span>
                     </p>
                     <div className="client_name">
                        <h5>- Marvin McKinney</h5>
                        <p>May 28, 2021</p>
                     </div>
                  </div>
            </div>      
         </div> */}
      </div>
   </section>
        <Footer/>
    </>
  )
}

export default MyRates