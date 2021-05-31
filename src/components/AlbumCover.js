import React from 'react';
import PriceCard from './priceCard/PriceCard';
import ImageLine from './imageLine/ImageLine';
import images from '../img/AlbumCoverImg';
import Carousel from './carousel/Carousel';

const AlbumCover = () => {
	return (
		<div className="sec__one">
			<h1> AlbumCover </h1>
			{/* <ImageLine images={images} /> */}
			<Carousel images={images} />

			<PriceCard />
		</div>
	);
};

export default AlbumCover;
