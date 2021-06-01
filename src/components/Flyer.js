import React from 'react';
import PriceCard from './priceCard/PriceCard';

import images from '../img/BookCoverImg';
import Carousel from './carousel/Carousel';

const Flyer = () => {
	return (
		<div>
			<Carousel images={images} />

			<PriceCard />
		</div>
	);
};

export default Flyer;
