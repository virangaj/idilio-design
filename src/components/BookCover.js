import React from 'react';
import PriceCard from './priceCard/PriceCard';
import ImageLine from './imageLine/ImageLine';

import images from '../img/BookCoverImg';
import Carousel from './carousel/Carousel';

const BookCover = () => {
	return (
		<div className="sec__one">
			<h1> BookCover </h1>
			{/* <ImageLine images={images} /> */}
			<Carousel images={images} />

			<PriceCard />
		</div>
	);
};

export default BookCover;
