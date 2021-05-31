import React from 'react';
import PriceCard from './priceCard/PriceCard';
import ImageLine from './imageLine/ImageLine';

import images from '../img/BookCoverImg';

const MascotLogo = () => {
	return (
		<div>
			<h1> MascotLogo </h1>
			<ImageLine images={images} />

			<PriceCard />
		</div>
	);
};

export default MascotLogo;
