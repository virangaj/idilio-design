import React from 'react';
import PriceCard from './priceCard/PriceCard';

import images from '../img/AlbumCoverImg';
import Carousel from './carousel/Carousel';

const AlbumCover = () => {
	return (
		<div className="sec__one">
			<Carousel images={images} />

			<PriceCard />
		</div>
	);
};

export default AlbumCover;
