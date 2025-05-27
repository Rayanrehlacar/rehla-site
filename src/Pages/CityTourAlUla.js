import React, {useEffect,useState} from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { useLocation, useNavigate } from 'react-router-dom';
import {GetTourismExpertsByAreaId, GetTourismProgramsByAreaId} from '../services/tripService';
import i18n from '../i18n'; 


function CityTourAlUla() {
   const location = useLocation();
   const navigate = useNavigate();
   const [toursPrograms, setToursPrograms] = useState([]);
   const [toursGuides, setToursGuides] = useState([]);
   const [loading, setLoading] = useState(true);
   const [isTourProgramVisible,  setIsTourProgramVisible] = useState(false); // State to toggle visibility
   const [queryParams, setQueryParams] = useState({
      TouristAreaId: null,
      Page: null,
    });

   const getQueryParams = () => {
      const searchParams = new URLSearchParams(location.search);
      return {
        TouristAreaId: searchParams.get('TA'),
        Page: searchParams.get('Page')
      };
    };

    useEffect(() => {
      const { TouristAreaId, Page } = getQueryParams();
      setQueryParams({ TouristAreaId, Page });
  
      if (TouristAreaId && Page !== null) {
         fetchTourPrograms(TouristAreaId, Page);
         fetchTourGuides(TouristAreaId, Page);
      }
    }, [location.search,i18n.language]);

    const fetchTourPrograms = async (TouristAreaId, Page) => {
      let { data } = await GetTourismProgramsByAreaId({ TouristAreaId: TouristAreaId, page: Page });
      setToursPrograms(data?.model);
      setLoading(false);
    }

    const fetchTourGuides = async (TouristAreaId, Page) => {
      let { data } = await GetTourismExpertsByAreaId({ TouristAreaId: TouristAreaId, page: Page });
      setToursGuides(data?.model);
      setLoading(false);
    }

    const handleGuideClick = () => {
      setIsTourProgramVisible(false); // Show tour programs when booking button is clicked
   }

   const handleProgramClick = () => {
      setIsTourProgramVisible(true); // Hide tour programs and show guides again
   }

  return (
    <>
        <Header/>
        <section className="banners" style={{backgroundImage: `url(${'../../images/banners_bg.webp'})`}}>
      <div className="container">
         <div className="banner_head">
            <h1>City Tour Al-Ula</h1>
            <p>An enim nullam tempor sapien gravida donec enim ipsum <br/> porta justo  congue purus pretium ligula </p>
         </div>
         <div className="bredcrub">
            <a href="index.html" target="_self"> Home </a><span> <img src="images/arrow.png" alt="arrow"/></span> 
            <p>City Tour Al-Ula</p>
         </div>
      </div>
   </section>
   <section className="city_tour ptb60">
           <div className="container">
              <div className="city_tour_box1">
                 <div className="btn_group1">
                  <button className={`program_btn1 ${!isTourProgramVisible ? 'active' : ''}`} onClick={handleGuideClick}>Tour guides</button>
                  <button className={`booking_btn1 ${isTourProgramVisible ? 'active' : ''}`} onClick={handleProgramClick}>Tourist programs</button>
                 </div>
              </div>
         
         {!isTourProgramVisible ? (
         <div className="city_tour_grid" id="tour_guide">
            
         {loading ? (
            <div className="city_tour_box">
               <p>Loading...</p> {/*Display loading message until data is fetched */}
          </div>
         ) :toursGuides.length > 0 ? (
            toursGuides.map((tour,index) => (
                 <div className="city_tour_box" key={index} onClick={() => navigate(`/city-tour-al-ula-single?Id=${tour.Id}&TA=${queryParams.TouristAreaId}`)}>
                 <div className="customer_grid">
                    <div className="tourism_box">
                       <img src="{tour?.ProfilePhoto}" alt="client_img" />
                          <div className="tours_detail">
                             <h5>- {i18n.language === 'ur' ? tour?.ExpertNameLT : tour?.ExpertName}</h5>
                             <p className="tourism_review">
                                <span className="star"><img src="images/star.svg" className="yello" /> </span>
                                <span className="star_count">({tour?.Rate}) </span> {tour?.Age} years
                             </p>
                          </div>
                    </div>
                    <div className="country_charges">
                       <h4>{tour?.Price} SAR / hour</h4>
                       <div className="country_flag">
                          <img src="images/united-kingdom.png" alt="united kingdom" />
                          <img src="images/circle_saudi_arabia.png" alt="saudi arabia" />
                       </div>
                    </div>
                 </div>
                 <div className="customer_text">
                    <p> {i18n.language === 'ur' ? tour?.BioLT : tour?.Bio} </p>
                 </div> 
              </div>
             ))
             ) : (
               <div className="city_tour_box">
                   <div className="customer_grid">
                     <p>No Records found</p>
                  </div>
               </div>
            )} 
           
{/* 
            <div className="city_tour_box">
               <div className="customer_grid">
                  <div className="tourism_box">
                     <img src="images/handsome-businessman.webp" alt="client_img" />
                        <div className="tours_detail">
                           <h5>- Marvin McKinney</h5>
                           <p className="tourism_review">
                              <span className="star"><img src="images/star.svg" className="yello" /> </span>
                              <span className="star_count">(4.5) </span> 5 years
                           </p>
                        </div>
                  </div>
                  <div className="country_charges">
                     <h4>12,500 SAR / hour</h4>
                     <div className="country_flag">
                        <img src="images/united-kingdom.png" alt="united kingdom" />
                        <img src="images/circle_saudi_arabia.png" alt="saudi arabia" />
                     </div>
                  </div>
               </div>
               <div className="customer_text">
                  <p>An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue purus pretium ligula An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue purus pretium ligula An enim nullam tempor sapien gravida donec enim ipsum </p>
               </div> 
               <div className="btn_group">
                  <a href="javascript:void(0)" className="program_btn">The Program</a>
                  <a href="javascript:void(0)" className="booking_btn">Book a tour</a>
               </div>   
            </div>
            <div className="city_tour_box">
               <div className="customer_grid">
                  <div className="tourism_box">
                     <img src="images/handsome-businessman.webp" alt="client_img" />
                        <div className="tours_detail">
                           <h5>- Marvin McKinney</h5>
                           <p className="tourism_review">
                              <span className="star"><img src="images/star.svg" className="yello" /> </span>
                              <span className="star_count">(4.5) </span> 5 years
                           </p>
                        </div>
                  </div>
                  <div className="country_charges">
                     <h4>12,500 SAR / hour</h4>
                     <div className="country_flag">
                        <img src="images/united-kingdom.png" alt="united kingdom" />
                        <img src="images/circle_saudi_arabia.png" alt="saudi arabia" />
                     </div>
                  </div>
               </div>
               <div className="customer_text">
                  <p>An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue purus pretium ligula An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue purus pretium ligula An enim nullam tempor sapien gravida donec enim ipsum </p>
               </div> 
               <div className="btn_group">
                  <a href="javascript:void(0)" className="program_btn">The Program</a>
                  <a href="javascript:void(0)" className="booking_btn">Book a tour</a>
               </div>   
            </div>
            <div className="city_tour_box">
               <div className="customer_grid">
                  <div className="tourism_box">
                     <img src="images/handsome-businessman.webp" alt="client_img" />
                        <div className="tours_detail">
                           <h5>- Marvin McKinney</h5>
                           <p className="tourism_review">
                              <span className="star"><img src="images/star.svg" className="yello" /> </span>
                              <span className="star_count">(4.5) </span> 5 years
                           </p>
                        </div>
                  </div>
                  <div className="country_charges">
                     <h4>12,500 SAR / hour</h4>
                     <div className="country_flag">
                        <img src="images/united-kingdom.png" alt="united kingdom" />
                        <img src="images/circle_saudi_arabia.png" alt="saudi arabia" />
                     </div>
                  </div>
               </div>
               <div className="customer_text">
                  <p>An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue purus pretium ligula An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue purus pretium ligula An enim nullam tempor sapien gravida donec enim ipsum </p>
               </div> 
               <div className="btn_group">
                  <a href="javascript:void(0)" className="program_btn">The Program</a>
                  <a href="javascript:void(0)" className="booking_btn">Book a tour</a>
               </div>   
            </div>
            <div className="city_tour_box">
               <div className="customer_grid">
                  <div className="tourism_box">
                     <img src="images/handsome-businessman.webp" alt="client_img" />
                        <div className="tours_detail">
                           <h5>- Marvin McKinney</h5>
                           <p className="tourism_review">
                              <span className="star"><img src="images/star.svg" className="yello" /> </span>
                              <span className="star_count">(4.5) </span> 5 years
                           </p>
                        </div>
                  </div>
                  <div className="country_charges">
                     <h4>12,500 SAR / hour</h4>
                     <div className="country_flag">
                        <img src="images/united-kingdom.png" alt="united kingdom" />
                        <img src="images/circle_saudi_arabia.png" alt="saudi arabia" />
                     </div>
                  </div>
               </div>
               <div className="customer_text">
                  <p>An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue purus pretium ligula An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue purus pretium ligula An enim nullam tempor sapien gravida donec enim ipsum </p>
               </div> 
               <div className="btn_group">
                  <a href="javascript:void(0)" className="program_btn">The Program</a>
                  <a href="javascript:void(0)" className="booking_btn">Book a tour</a>
               </div>   
            </div>
            <div className="city_tour_box">
               <div className="customer_grid">
                  <div className="tourism_box">
                     <img src="images/handsome-businessman.webp" alt="client_img" />
                        <div className="tours_detail">
                           <h5>- Marvin McKinney</h5>
                           <p className="tourism_review">
                              <span className="star"><img src="images/star.svg" className="yello" /> </span>
                              <span className="star_count">(4.5) </span> 5 years
                           </p>
                        </div>
                  </div>
                  <div className="country_charges">
                     <h4>12,500 SAR / hour</h4>
                     <div className="country_flag">
                        <img src="images/united-kingdom.png" alt="united kingdom" />
                        <img src="images/circle_saudi_arabia.png" alt="saudi arabia" />
                     </div>
                  </div>
               </div>
               <div className="customer_text">
                  <p>An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue purus pretium ligula An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue purus pretium ligula An enim nullam tempor sapien gravida donec enim ipsum </p>
               </div> 
               <div className="btn_group">
                  <a href="javascript:void(0)" className="program_btn">The Program</a>
                  <a href="javascript:void(0)" className="booking_btn">Book a tour</a>
               </div>   
            </div> */}
         </div>
         ): (

         <div className="city_tour_grid2" id="tour_program">
         {loading ? (
            <div className="city_tour_box">
               <p>Loading...</p> {/*Display loading message until data is fetched */}
          </div>
         ) :toursPrograms.length > 0 ? (
            toursPrograms.map((toursProgram,index) => (
               <div className="city_tour_box2" key={index} onClick={() => window.open(toursProgram.ProgramURL, '_blank')}>
                  <div className="card">
                  <div className="card-image">
                  <img 
                     src={toursProgram?.ImageURL|| '/images/default.jpg'}
                     alt="City Tour"
                     onError={(e) => {
                        e.target.onerror = null; // Prevent infinite loop if default also fails
                        e.target.src = "/images/default.jpg"; // Set your fallback image here
                     }}
                     />
                  </div>
                  <div className="card-content">
                  <p className="card-description ">
                  {/* An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue purus pretium ligula An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue purus pretium ligula An enim nullam tempor sapien gravida donec enim ipsum  */}
                     {i18n.language === 'ur' ? toursProgram?.DescriptionLT : toursProgram?.Description}
                  </p>
                  <div className="card-price">
                     <span className="start-from">Start from</span>
                     <span className="price">{toursProgram?.Price} SAR / hour</span>
                  </div>
                  </div>
                  </div>
               </div>
             
             ))
             ) : (
               <div className="city_tour_box">
                   <div className="customer_grid">
                     <p>No Records found</p>
                  </div>
               </div>
            )} 
       
         </div>
         )}
      </div>
   </section>
        <Footer/>
    </>
  )
}

export default CityTourAlUla