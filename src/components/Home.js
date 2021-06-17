import React from 'react';
import ImageSlider from './imgSlide/ImageSlider';
import VerticalSlider from './imgSlide/VerticalSlider';

import './pageStyles/Home.css';
// import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<div className="home-header">
				<h1>The Artistic Elysium</h1>
			</div>
			<ImageSlider />

			<VerticalSlider />
			<div className="home-body">
				<p>
					We are a team of designers and artists with years of experience in
					various fields.
					<br />
					With our main field of expertise being album cover arts, we also
					provide,
					<br />
					<br />
					<ul>
						<li>
							{/* <Link to="/BookCover">Book Cover Arts</Link> */}
							Book Cover Arts
						</li>
						<li>Mixtape Covers</li>
						<li>Single Covers</li>
						<li>Logos</li>
						<li>Flyers</li>
					</ul>{' '}
					<br />
					Having engaged with customers throughout our careers so far we highly
					value customer satisfaction. For each project we only start the
					creative process after having a thorough conversation and a clear
					understanding with our customer's needs. Getting feedback from the
					customer and applying changes accordingly is a major part of the
					process.
					<br />
					<br />
					Our main goal is to provide you with a piece of art that would
					accentuate the uniqueness of your product.
				</p>
			</div>
		</div>
	);
};

export default Home;
