import React from 'react';

import './PriceCard.css';
const PriceCard = () => {
	return (
		<div className="p-page">
			<div className="p-body">
				<div className="p-container">
					<div className="p-box">
						<span></span>
						<div className="p-content">
							<h2>Basic</h2>
							<p>Random text by me</p>
							<a href="#">View More</a>
						</div>
					</div>
					<div className="p-box">
						<span></span>
						<div className="p-content">
							<h2>Standard</h2>
							<p>Random text by me</p>
							<a href="#">View More</a>
						</div>
					</div>
					<div className="p-box">
						<span></span>
						<div className="p-content">
							<h2>Advance</h2>
							<p>Random text by me</p>
							<a href="#">View More</a>
						</div>
					</div>
					<div className="p-box">
						<span></span>
						<div className="p-content">
							<h2>Premium</h2>
							<p>Random text by me</p>
							<a href="#">View More</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PriceCard;
