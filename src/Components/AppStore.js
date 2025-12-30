import React from 'react'
import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/glightbox.css'
import { useTranslation } from 'react-i18next';

function AppStore() {
  const { t } = useTranslation();

  return (
    <>
         <section class="aap_sec ptb100" style={{ backgroundImage: `url(${'.../../images/bg_clr.webp'})` }}>
         <div class="container">
            <div class="sec_head">
                  <h2> {t('AboutUspage.availablDevices')}</h2>
                  <p> {t('AboutUspage.avaiDes')}</p>
               </div>
               <div class="app_store">
                  <a href="https://play.google.com/store/apps/details?id=com.NativeTech.rehla&hl=en&pli=1"><img src="../../images/App-Store.webp"/> </a>
                  <a href="https://apps.apple.com/eg/app/%D8%B1%D8%AD%D9%84%D8%A9/id1453329743"><img src="../../images/Play-Store.webp"/> </a>
               </div>
         </div>
      </section>
    </>
  )
}

export default AppStore