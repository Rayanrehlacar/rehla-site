import React from 'react'
import '../../css/style.css'
import '../../css/reset.css'
import '../../css/responsive.css'
import '../../css/glightbox.css'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Footer() {
  const { t } = useTranslation();
  const handleScroll = (id) => {
    const targetElement = document.getElementById(id);

    if (targetElement) {

      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <footer class="footer">
        <div class="container">
          <div class="footer_grid">
            <div class="footer_logo">
              <a href="index.html" target="_blank"> <img src="images/footer_logo.webp" alt="Company Logo" /> </a>
              <p>{t('footer.description1')}<br /> {t('footer.description2')}  <br /> {t('footer.description3')} <br /> {t('footer.description4')}.</p>

              <ul class="social_links">
                <li>
                  <a href="https://www.instagram.com/rehlacar/" target='_blank'><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.3934 0.154297H3.81518C1.70844 0.154297 0 1.85428 0 3.95059V8.50615C0 10.6025 1.70844 12.3024 3.81518 12.3024H8.3934C10.5001 12.3024 12.2086 10.6025 12.2086 8.50615V3.95059C12.2086 1.85428 10.5001 0.154297 8.3934 0.154297ZM11.064 8.50615C11.064 9.97152 9.86606 11.1636 8.3934 11.1636H3.81518C2.34252 11.1636 1.14455 9.97152 1.14455 8.50615V3.95059C1.14455 2.48522 2.34252 1.29319 3.81518 1.29319H8.3934C9.86606 1.29319 11.064 2.48522 11.064 3.95059V8.50615Z" fill="#000B33" /> <path d="M6.11074 3.19824C4.42519 3.19824 3.05859 4.55808 3.05859 6.23528C3.05859 7.91248 4.42519 9.27232 6.11074 9.27232C7.79629 9.27232 9.16289 7.91248 9.16289 6.23528C9.16289 4.55808 7.79629 3.19824 6.11074 3.19824ZM6.11074 8.13343C5.05928 8.13343 4.20315 7.28154 4.20315 6.23528C4.20315 5.18826 5.05928 4.33713 6.11074 4.33713C7.1622 4.33713 8.01833 5.18826 8.01833 6.23528C8.01833 7.28154 7.1622 8.13343 6.11074 8.13343Z" fill="#000B33" /> <path d="M9.37648 3.37784C9.60167 3.37784 9.78422 3.19619 9.78422 2.97212C9.78422 2.74805 9.60167 2.56641 9.37648 2.56641C9.1513 2.56641 8.96875 2.74805 8.96875 2.97212C8.96875 3.19619 9.1513 3.37784 9.37648 3.37784Z" fill="#000B33" /> </svg> </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/rehlacar/" target='_blank'>
                    <svg width="13" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.23 0H1.77C.792 0 0 .775 0 1.729v20.542C0 23.225.792 24 1.77 24h20.46C23.208 24 24 23.225 24 22.271V1.729C24 .775 23.208 0 22.23 0ZM7.119 20.452H3.557V9.029h3.562v11.423ZM5.338 7.514a2.062 2.062 0 1 1 0-4.123 2.062 2.062 0 0 1 0 4.123ZM20.452 20.452h-3.561v-5.619c0-1.34-.027-3.064-1.867-3.064-1.868 0-2.154 1.46-2.154 2.968v5.715H9.308V9.029h3.419v1.561h.048c.477-.902 1.64-1.852 3.377-1.852 3.609 0 4.276 2.375 4.276 5.464v6.25Z" fill="#000B33" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/RehlaCars/?ref=bookmarks" target='_blank'><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.28625 0.00268021L5.6075 0C3.72148 0 2.50266 1.24429 2.50266 3.17016V4.63181H0.814748C0.668893 4.63181 0.550781 4.74947 0.550781 4.89461V7.01238C0.550781 7.15751 0.669028 7.27504 0.814748 7.27504H2.50266V12.6189C2.50266 12.764 2.62077 12.8815 2.76662 12.8815H4.96886C5.11472 12.8815 5.23283 12.7639 5.23283 12.6189V7.27504H7.20639C7.35224 7.27504 7.47035 7.15751 7.47035 7.01238L7.47116 4.89461C7.47116 4.82492 7.44328 4.75818 7.39386 4.70887C7.34443 4.65955 7.27709 4.63181 7.20706 4.63181H5.23283V3.39275C5.23283 2.79721 5.37545 2.49488 6.1551 2.49488L7.28598 2.49448C7.4317 2.49448 7.54981 2.37681 7.54981 2.23181V0.265341C7.54981 0.120476 7.43183 0.00294824 7.28625 0.00268021Z" fill="#000B33" /></svg></a>
                </li>
                <li> <a href="https://x.com/Rehlacar?s=08" target='_blank'> <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 1.48865C13.4816 1.71494 12.9291 1.86494 12.3532 1.93777C12.9457 1.58575 13.3979 1.03259 13.6105 0.365851C13.0581 0.693586 12.4481 0.925082 11.7981 1.05427C11.2736 0.498506 10.526 0.154297 9.7104 0.154297C8.12805 0.154297 6.85416 1.43229 6.85416 2.999C6.85416 3.22443 6.87333 3.44119 6.92038 3.64754C4.54424 3.53222 2.4417 2.39902 1.02926 0.672778C0.782675 1.09849 0.638033 1.58575 0.638033 2.1103C0.638033 3.09524 1.14777 3.96834 1.90757 4.47381C1.44838 4.46514 0.997896 4.33249 0.61625 4.12354C0.61625 4.13221 0.61625 4.14348 0.61625 4.15475C0.61625 5.53679 1.60696 6.68473 2.90613 6.94917C2.67348 7.01246 2.41992 7.04281 2.15677 7.04281C1.97379 7.04281 1.78907 7.0324 1.61567 6.99425C1.98599 8.12052 3.03683 8.94853 4.28632 8.97541C3.31391 9.73232 2.07923 10.1884 0.742594 10.1884C0.508204 10.1884 0.283399 10.178 0.0585938 10.1494C1.32465 10.9618 2.82509 11.4256 4.44317 11.4256C9.70256 11.4256 12.578 7.09049 12.578 3.33281C12.578 3.20709 12.5736 3.08571 12.5675 2.96519C13.1348 2.56463 13.6114 2.06435 14 1.48865Z" fill="#222D61" /></svg></a> </li>
              </ul>
            </div>
            <div className="footer_menu">
              <h4>{t('footer.sitemap')}</h4>
              <ul className="footer_links">
                <li><Link to="/">{t('footer.home')}</Link></li>
                <li><a href="#services">{t('footer.services')}</a></li>
                <li><a href="#prebooking-trips">{t('footer.prebooking')}</a></li>
                <li><a href="#tourism-tours">{t('footer.tourism')}</a></li>
              </ul>
            </div>
            <div className="footer_menu">
              <h4>{t('footer.usefulLinks')}</h4>
              <ul className="footer_links">
                <li><a href="#news">{t('footer.news')}</a></li>
                <li><a href="#terms-of-use">{t('footer.terms')}</a></li>
                <li><a href="#privacy-policy">{t('footer.privacy')}</a></li>
                <li><a href="#faq">{t('footer.faq')}</a></li>
              </ul>
            </div>
            <div className="footer_menu">
              <h4>{t('footer.contactInfo')}</h4>
              <ul className="footer_links">
                <li><a href="https://www.google.com/maps/search/455+West+Orchard+Street+Kings+Mountain,+NC+280867/@37.442407,-122.170830,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D">{t('footer.address')}</a></li>
                <li><a href="tel:+088(246)6422710">{t('footer.phone')}</a></li>
                <li><a href="mailto:example@gmail.com">{t('footer.email')}</a></li>
              </ul>
            </div>
          </div>
          <div class="copyright">
            <p> © <span id="year"></span> {t('footer.copyright')}
              <script>document.getElementById("year").innerHTML = new Date().getFullYear();</script></p>

          </div>
        </div>
        <div class="whts_icon">
          <a href="https://wa.me/+966920011455" target="_blank"> <img src="images/whatapp.webp" alt="whatsapp icon" /> </a>
        </div>
        {/* <!-------------|| Script Start ||-----------------> */}
        <script src="js/isotope.pkgd.js"></script>
        <script src="js/glightbox.js"></script>
        <script src="js/tab.js"></script>
        <script type="text/javascript" src="js/custom.js"></script>
        {/* <!-------------|| Script End ||-----------------> */}
      </footer>
    </>
  )
}

export default Footer