import React from 'react';
import PriceCard from './priceCard/PriceCard';

import AlbumPrice from './priceCard/AlbumPrice';

import images from '../img/AlbumCoverImg';
import Carousel from './carousel/Carousel';

const AlbumCover = () => {
	return (
		<div className="sec__one">
			<Carousel images={images} />
			<PriceCard details={AlbumPrice} />
		</div>
	);
};

export default AlbumCover;
