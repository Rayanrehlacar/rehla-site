import React, { useEffect, useState } from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { useLocation } from 'react-router-dom';
import { GetTourismExpertDetails } from '../services/tripService';
import i18n from '../i18n';
import { useNavigate } from 'react-router-dom';


function CityTourSingle() {
   const location = useLocation();
   const navigate = useNavigate();
   const [queryParams, setQueryParams] = useState({
      TouristAreaId: null,
      TouristAreaName: null,
      Id: null,
   });
   const [loading, setLoading] = useState(true);
   const [toursDetails, setToursDetails] = useState([]);

   const getQueryParams = () => {
      const searchParams = new URLSearchParams(location.search);
      return {
         TouristAreaId: searchParams.get('TA'),
         TouristAreaName: searchParams.get('Name'),
         Id: searchParams.get('Id')
      };
   };

   useEffect(() => {
      // Check login status
      const isLoggedIn = sessionStorage.getItem('profile');
      if (!isLoggedIn) {
         navigate('/login', { state: { from: location.pathname } });
      }

      const { Id, TouristAreaId, TouristAreaName } = getQueryParams();
      setQueryParams({ Id, TouristAreaId, TouristAreaName });

      if (TouristAreaId && Id !== null) {
         fetchTourExpertsDetails(Id, TouristAreaId);
      }
   }, [i18n.language,navigate, location]);

   const fetchTourExpertsDetails = async (Id, TouristAreaId) => {
      let { data } = await GetTourismExpertDetails({ Id: Id, TouristAreaId: TouristAreaId });
      setToursDetails(data?.model || {});
      setLoading(false);
   }

   const getNestedProperty = (obj, path, fallback) => {
      const keys = path.split('.');
      let current = obj;
      for (let key of keys) {
          if (current && key in current) {
              current = current[key];
          } else {
              return fallback; // Return the fallback value if any key is missing
          }
      }
      return current || fallback; // Return the value or fallback if it's falsy
  };

  // console.log(toursDetails?.TourismRoutes); // Check the data here

   const carModelName = getNestedProperty(toursDetails, 'Car.CarModel.Name' + (i18n.language === 'ur' ? 'LT' : ''), 'Model not available');
   const carColorName = getNestedProperty(toursDetails, 'Car.CarColor.Name' + (i18n.language === 'ur' ? 'LT' : ''), 'Color not available');
   const userId = getNestedProperty(toursDetails, 'UserId', 'UserId not available');

   const [selectedRoutes, setSelectedRoutes] = useState([]);
   
   const handleCheckboxChange = (e, item) => {
      if (e.target.checked) {
        setSelectedRoutes((prev) => [...prev, item]);
      } else {
        setSelectedRoutes((prev) => prev.filter((route) => route.RouteID !== item.RouteID));
      }
    };
   
    const handleSubmit = () => {
      if (selectedRoutes.length === 0) {
        alert("Please select at least one route.");
        return;
      }
      // Pass full selected routes to the next page using navigation state
      navigate("/book-tour", { state: { selectedRoutes, userId:userId }});
    };

    const handleShowOnMap = (latitude, longitude) => {
      if (latitude && longitude) {
        const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        window.open(url, '_blank');
      } else {
        alert('Location not available for this route');
      }
    };

   return (
      <>
         <Header />
         <section className="banners" style={{ backgroundImage: `url(${'../../images/banners_bg.webp'})` }}>
            <div className="container">
               <div className="banner_head">
                  <h1>City Tour {queryParams.TouristAreaName}</h1>
                  <p>An enim nullam tempor sapien gravida donec enim ipsum <br /> porta justo  congue purus pretium ligula </p>
               </div>
               <div className="bredcrub">
                  <a href="index.html" target="_self"> Home </a><span> <img src="images/arrow.png" alt="arrow" /></span>
                  <p>City Tour {queryParams.TouristAreaName}</p>
               </div>
            </div>
         </section>

         <section className="city_tour ptb60">
               <div className="container">
                  {loading ? (
                     <div className="city_tour_box">Loading...
                     </div>
                       ) : (
                  <>
                     <div className="city_tour_box">
                        <div className="customer_grid">
                           <div className="tourism_box">
                              <img src={toursDetails?.ProfilePhoto} alt="client_img" />
                              <div className="tours_detail">
                                 <h5>
                                 {i18n.language === 'ur' ? (toursDetails?.ExpertNameLT || toursDetails?.ExpertName) : (toursDetails?.ExpertName || toursDetails?.ExpertNameLT)}
                                 </h5>
                                 <p className="tourism_review">
                                    <span className="star">
                                       <img src="images/star.svg" className="yello" /> 
                                       </span>
                                    <span className="star_count">({toursDetails?.Rate}) </span> {toursDetails?.YearsOfExperienceCount} years
                                 </p>
                              </div>
                           </div>
                           <div className="country_charges">
                              <h4>{toursDetails?.HourCost} SAR / hour</h4>
                              <div className="country_flag">
                                 <img src="images/united-kingdom.png" alt="united kingdom" />
                                 <img src="images/circle_saudi_arabia.png" alt="saudi arabia" />
                              </div>
                           </div>
                        </div>
                        <div className="customer_text">
                           <p>{i18n.language === 'ur' ? (toursDetails?.BioLT || toursDetails?.Bio) : (toursDetails?.Bio || toursDetails?.BioLT)}</p>
                        </div>
                     </div>
                     <div className="city_tour_box">
                        <h3>Captan's instructions</h3>
                        <ul className="captan_list">
                           <li><img src="images/City-Tour/img1.png" alt="img1" /></li>
                           <li><img src="images/City-Tour/img2.png" alt="img2" /></li>
                           <li><img src="images/City-Tour/img3.png" alt="img3" /></li>
                           <li><img src="images/City-Tour/img4.png" alt="img4" /></li>
                           <li><img src="images/City-Tour/img5.png" alt="img5" /></li>
                           <li><img src="images/City-Tour/img6.png" alt="img6" /></li>
                           <li><img src="images/City-Tour/img7.png" alt="img7" /></li>
                        </ul>
                     </div>
                     <div className="city_tour_box">
                        <div className="trip_head">
                           <img src="images/City-Tour/car.png" alt="car" />
                           <div className="trip_right">
                              <h3>Vehicle data</h3>
                              <h4>Family Trip XL</h4>
                              <p>{carModelName} {carColorName} - AW 1251</p>
                           </div>
                        </div>
                     </div>
                     <div className="city_tour_box tour-details">
                        <div className="trip_head">
                           <h3>Select Trip programme</h3>
                        </div>
                        {toursDetails?.TourismRoutes.length > 0 ? (
                        toursDetails?.TourismRoutes.map((item,index) => (
                           <div class="card-details" key={index}>
                           <div class="card-image-wrapper">
                              <input type="checkbox" class="image-checkbox"
                               onChange={(e) => handleCheckboxChange(e, item)}
                              />
                              <img src={item.Image} alt="Tour Image" class="card-image" />
                           </div>
                           <div class="card-content">
                              <p class="description">
                              {i18n.language === 'ur' ? item?.DescriptionLT : item?.Description}
                              </p>
                              <div class="bottom-row">
                                 <span class="price">{item?.Price} SAR / hour</span>
                                 <button 
                                 className="show-map" 
                                 style={{ zIndex: 10, position: 'relative' }}
                                 onClick={() => handleShowOnMap(item.Latitude, item.Longitude)}
                                 >
                                    <svg class="map-icon" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16" fill="white">
                                       <path d="M0 0h24v24H0z" fill="none" />
                                       <path d="M20.5 3l-5.5 2-6-2-6 2v18l6-2 6 2 6-2V3zm-6.5 17l-6-2V6l6 2v12zm2-12l5-2v12l-5 2V8z" />
                                    </svg>
                                    Show on map
                                 </button>
                              </div>
                           </div>
                        </div>
                        ))): (
                           <p>No Records found</p>
                        )} 
                       
      
                        {/* <div class="card-details">
                           <div class="card-image-wrapper">
                              <input type="checkbox" class="image-checkbox" />
                              <img src="images/default.jpg" alt="Tour Image" class="card-image" />
                           </div>
                           <div class="card-content">
                              <p class="description">An enim nullam tempor sapien gravida donec enim ipsum porta justo congue purus pretium ligula. An enim nullam tempor sapien gravida donec enim ipsum porta justo congue purus pretium ligula. An enim nullam tempor sapien gravida donec enim ipsum porta justo congue purus pretium ligula.</p>
                              <div class="bottom-row">
                                 <span class="price">12,500 SAR / hour</span>
                                 <button class="show-map">
                                    <svg class="map-icon" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16" fill="white">
                                       <path d="M0 0h24v24H0z" fill="none" />
                                       <path d="M20.5 3l-5.5 2-6-2-6 2v18l6-2 6 2 6-2V3zm-6.5 17l-6-2V6l6 2v12zm2-12l5-2v12l-5 2V8z" />
                                    </svg>
                                    Show on map
                                 </button>
                              </div>
                           </div>
                        </div> 
                        <a href="javascript:void(0)" className="booking_tour"
                           onClick={(e) => {
                              e.preventDefault();
                              window.location.href = '#/book-tour'
                           }}>
                           Book a tour
      
                        </a>*/}
      
      

                        <button className="booking_tour" onClick={handleSubmit}>Book a tour</button>
                     </div>
                  </>
                  )}
               </div>
            
         </section>
         <Footer />
      </>
   )
}

export default CityTourSingle