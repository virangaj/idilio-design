import React from 'react';
import ImageSlider from './imgSlide/ImageSlider';
import VerticalSlider from './imgSlide/VerticalSlider';
import './pageStyles/Home.css';
const Home = () => {
	return (
		<div>
			<div className="home-header">
				<h1>The Artistic Elysium</h1>
			</div>

			<ImageSlider />
			<VerticalSlider />
		</div>
	);
};

export default Home;
