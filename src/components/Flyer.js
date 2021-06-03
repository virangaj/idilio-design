import React from 'react';
import PriceCard from './priceCard/PriceCard';
import FlyerPrice from './priceCard/FlyerPrice';

import images from '../img/BookCoverImg';
import Carousel from './carousel/Carousel';

const Flyer = () => {
	return (
		<div>
			<Carousel images={images} />

			<PriceCard details={FlyerPrice} />
		</div>
	);
};

export default Flyer;
