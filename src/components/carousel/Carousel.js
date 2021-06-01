import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

import './Carousel.css';

// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

export default function Carousel(props) {
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={10}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 4,
						spaceBetween: 40,
					},
					1024: {
						slidesPerView: 5,
						spaceBetween: 50,
					},
				}}
				className="mySwiper"
			>
				<SwiperSlide>
					<img src={props.images.image1} alt="Snow" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={props.images.image2} alt="Snow" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={props.images.image3} alt="Snow" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={props.images.image4} alt="Snow" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={props.images.image5} alt="Snow" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={props.images.image1} alt="Snow" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={props.images.image2} alt="Snow" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={props.images.image4} alt="Snow" />
				</SwiperSlide>
			</Swiper>
		</>
	);
}
