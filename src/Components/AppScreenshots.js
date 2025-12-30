import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/glightbox.css'

import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';


function AppScreenshots() {
  const { t } = useTranslation();

    return (
        <>
            <section className="screenshot ptb100">
                <div className="container">
                    <div className="sec_head">
                        <h2> <span>{t('heroSection.Rehla')}</span>{" "}{t('heroSection.screenShot')}</h2>
                    </div>
                    <div className="screen_owl owl-carousel owl-theme pt60">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            pagination={{ clickable: true }}
                            navigation={false}
                            modules={[Autoplay, Pagination]}
                            style={{ paddingBottom: '90px' }} // Adjust this value to control the space between slides and pagination
                            breakpoints={{
                                320: {
                                    slidesPerView: 2,
                                    spaceBetween: 50,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 40,
                                },
                            }}
                        >
                            <SwiperSlide className='item'>
                                <img src="../../images/mobile/img4.webp" alt="img" />
                                <img src="../../images/mobile/iphone.webp" alt="img" />
                            </SwiperSlide>
                            <SwiperSlide className='item'>
                                <img src="../../images/mobile/img1.webp" alt="img" />
                                <img src="../../images/mobile/iphone.webp" alt="img" />
                            </SwiperSlide>
                            <SwiperSlide className='item'>
                                <img src="../../images/mobile/Screen.webp" alt="img" />
                                <img src="../../images/mobile/iphone.webp" alt="img" />
                            </SwiperSlide>
                            <SwiperSlide className='item'>
                                <img src="../../images/mobile/img3.webp" alt="img" />
                                <img src="../../images/mobile/iphone.webp" alt="img" />
                            </SwiperSlide>
                            <SwiperSlide className='item'>
                                <img src="../../images/mobile/img2.webp" alt="img" />
                                <img src="../../images/mobile/iphone.webp" alt="img" />
                            </SwiperSlide>
                            <SwiperSlide  className='item'>
                                <img src="../../images/mobile/img4.webp" alt="img" />
                                <img src="../../images/mobile/iphone.webp" alt="img" />
                            </SwiperSlide>
                            <SwiperSlide  className='item'>
                                <img src="../../images/mobile/img1.webp" alt="img" />
                                <img src="../../images/mobile/iphone.webp" alt="img" />
                            </SwiperSlide>
                            <SwiperSlide  className='item'>
                                <img src="../../images/mobile/Screen.webp" alt="img" />
                                <img src="../../images/mobile/iphone.webp" alt="img" />
                            </SwiperSlide>
                            <SwiperSlide  className='item'>
                                <img src="../../images/mobile/img3.webp" alt="img" />
                                <img src="../../images/mobile/iphone.webp" alt="img" />
                            </SwiperSlide>
                            <SwiperSlide  className='item'>
                                <img src="../../images/mobile/img2.webp" alt="img" />
                                <img src="../../images/mobile/iphone.webp" alt="img" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AppScreenshots;
