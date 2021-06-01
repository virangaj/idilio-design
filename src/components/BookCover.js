import React from 'react';
import PriceCard from './priceCard/PriceCard';

import images from '../img/BookCoverImg';
import Carousel from './carousel/Carousel';

const BookCover = () => {
	return (
		<div className="sec__one">
			<Carousel images={images} />

			<PriceCard />
		</div>
	);
};

export default BookCover;
