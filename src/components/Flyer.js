import React from 'react';
import PriceCard from './priceCard/PriceCard';
import ImageLine from './imageLine/ImageLine';

import images from '../img/BookCoverImg';

const Flyer = () => {
	return (
		<div>
			<h1> Flyer </h1>
			<ImageLine images={images} />

			<PriceCard />
		</div>
	);
};

export default Flyer;
