import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import '../css/style.css'
import '../css/reset.css'
import '../css/responsive.css'
import '../css/glightbox.css'
function Partner() {
    return (
        <>
            <section className="partner ptb100">
                <div className="container">
                    <Swiper
                        spaceBetween={140}
                        slidesPerView={4}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        navigation={false}
                        modules={[Autoplay]}
                        breakpoints={{
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 150,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <img src="../../images/acrevis.webp" alt="img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../../images/sauter.webp" alt="img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../../images/logistics.webp" alt="img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../../images/burflex.webp" alt="img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="../../images/sauter.webp" alt="img" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    );
}

export default Partner;
