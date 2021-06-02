import React from 'react';

import './VerticalSlider.css';

const VertiicalSlider = () => {
	return (
		<>
			<div className="v-wrap">
				<div className="v-move">
					<div className="v-slide">
						<h3>Make it simple, but significant</h3>
					</div>
					<div className="v-slide">
						<h3>Designers are meant to be loved</h3>
					</div>
					<div className="v-slide">
						<h3>Styles come and go</h3>
					</div>
					<div className="v-slide">
						<h3>Good design is good business</h3>
					</div>
					<div className="v-slide">
						<h3>Accessible design is good design</h3>
					</div>
				</div>
			</div>
		</>
	);
};

export default VertiicalSlider;
