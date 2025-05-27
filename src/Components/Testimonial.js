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

function Testimonial() {

  const { t } = useTranslation();

    return (
        <section className="testimonial ptb100">
            <div className="container">
                <div className="testimonial_left">
                    <div className="sec_head">
                        <h2>{t('heroSection.clentSay')}</h2>
                    </div>
                    <div className="testimonial_owl pt60">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                        >
                            <SwiperSlide className="item">
                                <img src="../../images/quote.webp" alt="img" />
                                <p>Leading an organization is incredibly rewarding and equally humbling. Confidence and humility. Every success is built on lessons from mistakes made is incredibly rewarding and equally humbling. It requires healthy.</p>
                                <div className="author">
                                    <h4>- Ahmed Bakry</h4>
                                    <p>Freelance Designer</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="item">
                                <img src="../../images/quote.webp" alt="img" />
                                <p>Leading an organization is incredibly rewarding and equally humbling. Confidence and humility. Every success is built on lessons from mistakes made is incredibly rewarding and equally humbling. It requires healthy.</p>
                                <div className="author">
                                    <h4>- Ahmed Bakry</h4>
                                    <p>Freelance Designer</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="item">
                                <img src="../../images/quote.webp" alt="img" />
                                <p>Leading an organization is incredibly rewarding and equally humbling. Confidence and humility. Every success is built on lessons from mistakes made is incredibly rewarding and equally humbling. It requires healthy.</p>
                                <div className="author">
                                    <h4>- Ahmed Bakry</h4>
                                    <p>Freelance Designer</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                </div>
                <div className="testimonial_right">
                    <img src="../../images/testimonial.webp" alt="img" />
                </div>
            </div>
        </section>
    );
}

export default Testimonial;


// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';

// import { Pagination, Navigation, Autoplay } from 'swiper/modules';


// function Testimonial() {
//     return (
//         <section className="testimonial ptb100">
//             <div className="container">
//                 <div className="testimonial_left">
//                     <div className="sec_head">
//                         <h2>What clients are saying</h2>
//                     </div>
//                     <div className="testimonial_owl pt60">
//                         <Swiper
//                             spaceBetween={30}
//                             slidesPerView={1}
//                             loop={true}
//                             navigation={{
//                                 nextEl: '.swiper-button-next',
//                                 prevEl: '.swiper-button-prev',
//                             }}
//                             className="mySwiper"
//                         >
//                             <SwiperSlide className="item">
//                                 <img src="../../images/quote.webp" alt="img" />
//                                 <p>Leading an organization is incredibly rewarding and equally humbling. Confidence and humility. Every success is built on lessons from mistakes made is incredibly rewarding and equally humbling. It requires healthy.</p>
//                                 <div className="author">
//                                     <h4>- Ahmed Bakry</h4>
//                                     <p>Freelance Designer</p>
//                                 </div>
//                             </SwiperSlide>
//                             <SwiperSlide className="item">
//                                 <img src="../../images/quote.webp" alt="img" />
//                                 <p>Leading an organization is incredibly rewarding and equally humbling. Confidence and humility. Every success is built on lessons from mistakes made is incredibly rewarding and equally humbling. It requires healthy.</p>
//                                 <div className="author">
//                                     <h4>- Ahmed Bakry</h4>
//                                     <p>Freelance Designer</p>
//                                 </div>
//                             </SwiperSlide>
//                             <SwiperSlide className="item">
//                                 <img src="../../images/quote.webp" alt="img" />
//                                 <p>Leading an organization is incredibly rewarding and equally humbling. Confidence and humility. Every success is built on lessons from mistakes made is incredibly rewarding and equally humbling. It requires healthy.</p>
//                                 <div className="author">
//                                     <h4>- Ahmed Bakry</h4>
//                                     <p>Freelance Designer</p>
//                                 </div>
//                             </SwiperSlide>
//                         </Swiper>
//                         <div className="swiper-button-prev"></div>
//                         <div className="swiper-button-next"></div>
//                     </div>
//                 </div>
//                 <div className="testimonial_right">
//                     <img src="../../images/testimonial.webp" alt="img" />
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Testimonial;
