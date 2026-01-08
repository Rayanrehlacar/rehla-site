import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import '../css/style.css';
import '../css/reset.css';
import '../css/responsive.css';
import '../css/glightbox.css'; 
import { GetTouristAreas } from '../services/tripService';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n'; 

function TourismTours() {
  const { t } = useTranslation();
  const [tours, setTours] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTouristAreas();
  }, [i18n.language]); 

  const getTouristAreas = async () => {
    let { data } = await GetTouristAreas();
    setTours(data?.model || []);
  };

  return (
    <>
      <Header />
      <section className="banners" style={{ backgroundImage: `url(${'../../images/banners_bg.webp'})` }} id="tourism-tours">
        <div className="container">
          <div className="banner_head">
            <h1>{t('tourismTour.tourismTitle')}</h1>
            {/* <p>An enim nullam tempor sapien gravida donec enim ipsum <br /> porta justo congue purus pretium ligula </p> */}
          </div>
          <div className="bredcrub">
            <a href="index.html" target="_self"> {t('header.home')} </a>
            <span> {'>'} </span> <p>{t('tourismTour.tourismTitle')}</p>
          </div>
        </div>
      </section>
      <section className="our_team gallery_team tourism_tours ptb100">
        <div className="container">
          <div className="sec_head">
            <h2 style={{ color: '#4FA8DA' }}>{t('tourismTour.tourismTitleErr')}</h2>
            <p>{t('tourismTour.tourismTitleErr2')} <br /> {t('tourismTour.tourismTitleErr3')}</p>
          </div>
          {/* <div className="team_inner tourism_inner pt60">
            {tours.map((tour, key) => (
              <div className="card_box" key={key} onClick={() => navigate(`/city-tour?TA=${tour.Id}&Name=${encodeURIComponent(
                tour.Name)}&Page=0`)}>
                <img src={tour?.Image} alt={tour?.Name} />
                <div className="card_details">
                  <h3>{i18n.language === 'ur' ? tour?.NameLT : tour?.Name}</h3>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default TourismTours;
