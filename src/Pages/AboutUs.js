import AOS from 'aos';
import 'aos/dist/aos.css';
import GLightbox from 'glightbox';
import Isotope from 'isotope-layout';
import React, { useEffect } from 'react';
import AboutHeroSection from '../Components/AboutHeroSection';
import AppStore from '../Components/AppStore';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Offer from '../Components/Offer';
import '../css/glightbox.css';
import '../css/reset.css';
import '../css/responsive.css';
import '../css/style.css';
import { useTranslation } from 'react-i18next';


function AboutUs() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init();

    // Portfolio isotope and filter
    const portfolioContainer = document.querySelector('.portfolio-container');
    if (portfolioContainer) {
      const portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows',
      });

      const portfolioFilters = document.querySelectorAll('#portfolio-flters li');
      portfolioFilters.forEach((filter) => {
        filter.addEventListener('click', function (e) {
          e.preventDefault();
          portfolioFilters.forEach((el) => {
            el.classList.remove('filter-active');
          });
          this.classList.add('filter-active');

          portfolioIsotope.arrange({
            filter: this.getAttribute('data-filter'),
          });
          portfolioIsotope.on('arrangeComplete', () => {
            AOS.refresh();
          });
        });
      });
    }

    // GLightbox initialization
    const lightbox = GLightbox({ selector: '.glightbox' });
    const lightboxDescription = GLightbox({ selector: '.glightbox2' });
    const lightboxVideo = GLightbox({ selector: '.glightbox3' });
    lightboxVideo.on('slide_changed', ({ prev, current }) => {
      const { player } = current;
      if (player) {
        if (!player.ready) {
          player.on('ready', () => { });
        }
        player.on('play', () => console.log('Started play'));
        player.on('volumechange', () => console.log('Volume change'));
        player.on('ended', () => console.log('Video ended'));
      }
    });
    const lightboxInlineIframe = GLightbox({ selector: '.glightbox4' });

  }, []);


  return (
    <>
      <Header />
      <AboutHeroSection />
      <Offer />

      <section className="our_team ptb100">
        <div className="container">
          <div className="sec_head">
            <h2> {t('AboutUspage.OurRehla1')} <span>{t('AboutUspage.OurRehla2')}</span> {t('AboutUspage.OurRehla3')}</h2>
            <p>Fully layered dolor sit amet, consectetur Facere, <br /> nobis, id expedita dolores officiis laboriosam.</p>
          </div>
          <div className="team_inner pt60">
            <div className="card_box">
              <img src="images/Cameron-Williamson.webp" alt="img" />
              <div className="card_details">
                <h3>Cameron Williamson</h3>
                <p>Co -Founder</p>
              </div>
            </div>
            <div className="card_box">
              <img src="images/Brooklyn-Simmons.webp" alt="img" />
              <div className="card_details">
                <h3>Brooklyn Simmons</h3>
                <p>Project Manager</p>
              </div>
            </div>
            <div className="card_box">
              <img src="images/Robert-Fox.webp" alt="img" />
              <div className="card_details">
                <h3>Robert Fox</h3>
                <p>Web Designer</p>
              </div>
            </div>
            <div className="card_box">
              <img src="images/Esther-Howard.webp" alt="img" />
              <div className="card_details">
                <h3>Esther Howard</h3>
                <p>HR Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfoio ptb120">
        <div className="container">
          <div className="sec_head pb60">
            <h2> {t('AboutUspage.OurRehla2')} <span>{t('AboutUspage.Gallery')} </span></h2>
            <p>Fully layered dolor sit amet, consectetur Facere, <br /> nobis, id expedita dolores officiis laboriosam.</p>
          </div>
          <div className="portfolio_list">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">{t('AboutUspage.SeeAll')}</li>
              <li data-filter=".branding">{t('AboutUspage.Branding')}</li>
              <li data-filter=".designing">{t('AboutUspage.Designing')}</li>
              <li data-filter=".photography">{t('AboutUspage.Photography')}</li>
              <li data-filter=".development">{t('AboutUspage.Development')}</li>
            </ul>
          </div>
          <div className="portfolio-container">
            <div className="portfolio-item branding">
              <div className="box">
                <div className="inner">
                  <a href="images/tab/img1.jpg" className="glightbox2">
                    <img src="images/tab/img1.jpg" alt="image" />
                    <div className="portfolio-info">
                      <div className="card_details">
                        <h3>Colors Magazine</h3>
                        <p>Web Design</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item photography">
              <div className="box">
                <div className="inner">
                  <a href="images/tab/img2.jpg" className="glightbox2">
                    <img src="images/tab/img2.jpg" alt="image" />
                    <div className="portfolio-info">
                      <div className="card_details">
                        <h3>Colors Magazine</h3>
                        <p>Web Design</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item branding">
              <div className="box">
                <div className="inner">
                  <a href="images/tab/img3.jpg" className="glightbox2">
                    <img src="images/tab/img3.jpg" alt="image" />
                    <div className="portfolio-info">
                      <div className="card_details">
                        <h3>Colors Magazine</h3>
                        <p>Web Design</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item designing">
              <div className="box">
                <div className="inner">
                  <a href="images/tab/img4.jpg" className="glightbox2">
                    <img src="images/tab/img4.jpg" alt="image" />
                    <div className="portfolio-info">
                      <div className="card_details">
                        <h3>Colors Magazine</h3>
                        <p>Web Design</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item photography">
              <div className="box">
                <div className="inner">
                  <a href="images/tab/img5.jpg" className="glightbox2">
                    <img src="images/tab/img5.jpg" alt="image" />
                    <div className="portfolio-info">
                      <div className="card_details">
                        <h3>Colors Magazine</h3>
                        <p>Web Design</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item branding">
              <div className="box">
                <div className="inner">
                  <a href="images/tab/img6.jpg" className="glightbox2">
                    <img src="images/tab/img6.jpg" alt="image" />
                    <div className="portfolio-info">
                      <div className="card_details">
                        <h3>Colors Magazine</h3>
                        <p>Web Design</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item designing">
              <div className="box">
                <div className="inner">
                  <a href="images/tab/img7.jpg" className="glightbox2">
                    <img src="images/tab/img7.jpg" alt="image" />
                    <div className="portfolio-info">
                      <div className="card_details">
                        <h3>Colors Magazine</h3>
                        <p>Web Design</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item development">
              <div className="box">
                <div className="inner">
                  <a href="images/tab/img7.jpg" className="glightbox2">
                    <img src="images/tab/img7.jpg" alt="image" />
                    <div className="portfolio-info">
                      <div className="card_details">
                        <h3>Colors Magazine</h3>
                        <p>Web Design</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item photography">
              <div className="box">
                <div className="inner">
                  <a href="images/tab/img8.jpg" className="glightbox2">
                    <img src="images/tab/img8.jpg" alt="image" />
                    <div className="portfolio-info">
                      <div className="card_details">
                        <h3>Colors Magazine</h3>
                        <p>Web Design</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item branding">
              <div className="box">
                <div className="inner">
                  <a href="images/tab/img9.jpg" className="glightbox2">
                    <img src="images/tab/img9.jpg" alt="image" />
                    <div className="portfolio-info">
                      <div className="card_details">
                        <h3>Colors Magazine</h3>
                        <p>Web Design</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item development">
              <div className="box">
                <div className="inner">
                  <a href="images/tab/img9.jpg" className="glightbox2">
                    <img src="images/tab/img9.jpg" alt="image" />
                    <div className="portfolio-info">
                      <div className="card_details">
                        <h3>Colors Magazine</h3>
                        <p>Web Design</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item designing">
              <div className="box">
                <div className="inner">
                  <a href="images/tab/img10.jpg" className="glightbox2">
                    <img src="images/tab/img10.jpg" alt="image" />
                    <div className="portfolio-info">
                      <div className="card_details">
                        <h3>Colors Magazine</h3>
                        <p>Web Design</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item development">
              <div className="box">
                <div className="inner">
                  <a href="images/tab/img10.jpg" className="glightbox2">
                    <img src="images/tab/img10.jpg" alt="image" />
                    <div className="portfolio-info">
                      <div className="card_details">
                        <h3>Colors Magazine</h3>
                        <p>Web Design</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AppStore />
      <Footer />
    </>
  );
}

export default AboutUs;
