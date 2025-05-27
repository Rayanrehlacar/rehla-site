import React from 'react'
import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/glightbox.css'
import { useTranslation } from 'react-i18next';

function ServiceHeroSection() {
	const { t } = useTranslation(); 

  return (
    <>
        <section class="banners" style={{backgroundImage: `url(${'../../images/banners_bg.webp'})`}} id="services">
		<div class="container">
			<div class="banner_head">
				<h1>{t('header.services')} </h1>
				<p>An enim nullam tempor sapien gravida donec enim ipsum <br/> porta justo  congue purus pretium ligula </p>
			</div>
			<div class="bredcrub">
				<a href="index.html" target="_self">{t('header.home')}</a><span> {">"}</span> <p>{t('header.services')}</p>
			</div>
		</div>
	</section>
    </>
  )
}

export default ServiceHeroSection