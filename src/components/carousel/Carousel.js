import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../../img/1.png';
import image2 from '../../img/2.png';
import image3 from '../../img/3.png';
import image4 from '../../img/4.png';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/pagination/pagination.min.css';

import './Carousel.css';

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

export default function Carousel() {
	return (
		<>
			<Swiper
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={'auto'}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				pagination={true}
				className="mySwiper"
			>
				<SwiperSlide>
					<img src={image1} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={image2} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={image3} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={image4} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={image1} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={image2} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={image3} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={image4} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={image1} />
				</SwiperSlide>
			</Swiper>
		</>
	);
}
