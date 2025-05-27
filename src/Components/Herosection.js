import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/style.css';
import '../css/reset.css';
import '../css/responsive.css';
import '../css/glightbox.css';

function Herosection() {
  const { t } = useTranslation(); // Initialize the translation function

  return (
    <section className="hero" style={{ backgroundImage: `url(${'../../images/bg-image.webp'})` }}>
      <div className="container">
        <div className="hero_inner">
          <h1>{t('heroSection.heroTitle')}</h1> {/* Translated Title */}
          <p>
            {t('heroSection.heroDescription')} {/* Translated Description */}
          </p>
          <div className="app_store">
            <a target="blank"  href="https://apps.apple.com/eg/app/%D8%B1%D8%AD%D9%84%D8%A9/id1453329743"> <img src='../../images/App-Store.webp' alt="App Store" /></a>
            <a target="blank" href="https://play.google.com/store/apps/details?id=com.NativeTech.rehla&hl=en&pli=1"><img src='../../images/Play-Store.webp' alt="Play Store" /></a>
          </div>
        </div>
        <div className="hero_img">
          <img src='../../images/images.webp' alt="Rehla App is The Best App image" />
        </div>
      </div>
    </section>
  );
}

export default Herosection;
