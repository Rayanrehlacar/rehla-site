import React from 'react'
import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/glightbox.css'
import { useTranslation } from 'react-i18next';

function ContactHeroSection() {
	const { t } = useTranslation();

  return (
    <>
        <section class="banners" style={{ backgroundImage: `url(${'../../images/banners_bg.webp'})` }}>
		<div class="container">
			<div class="banner_head">
				<h1>{t('header.contactus')}</h1>
				{/* <p>An enim nullam tempor sapien gravida donec enim ipsum <br/> porta justo  congue purus pretium ligula </p> */}
			</div>
			<div class="bredcrub">
				<a href="index.html" target="_self"> Home </a><span>{">"}</span> <p>Contact </p>
			</div>
		</div>
	</section>
    </>
  )
}

export default ContactHeroSection