import React from 'react';

import './VerticalSlider.css';

const VertiicalSlider = () => {
	return (
		<>
			<div className="v-wrap">
				<div className="v-move">
					<div className="v-slide">
						<h3>Slide 1</h3>
					</div>
					<div className="v-slide">
						<h3>Slide 2</h3>
					</div>
					<div className="v-slide">
						<h3>Slide 3</h3>
					</div>
					<div className="v-slide">
						<h3>Slide 4</h3>
					</div>
					<div className="v-slide">
						<h3>Slide 5</h3>
					</div>
				</div>
			</div>
		</>
	);
};

export default VertiicalSlider;
