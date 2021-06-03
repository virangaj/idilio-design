import React from 'react';
import PriceCard from './priceCard/PriceCard';
import BookPrice from './priceCard/BookPrice';

import images from '../img/BookCoverImg';
import Carousel from './carousel/Carousel';

const BookCover = () => {
	return (
		<div className="sec__one">
			<Carousel images={images} />

			<PriceCard details={BookPrice} />
		</div>
	);
};

export default BookCover;
