import React from 'react';
import PriceCard from './priceCard/PriceCard';

import images from '../img/BookCoverImg';
import Carousel from './carousel/Carousel';
import MascotPrice from './priceCard/MascotPrice';

const MascotLogo = () => {
	return (
		<div>
			<Carousel images={images} />

			<PriceCard details={MascotPrice} />
		</div>
	);
};

export default MascotLogo;
