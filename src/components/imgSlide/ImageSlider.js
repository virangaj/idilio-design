import React from 'react';
import image1 from '../../img/1.jpg';
import image2 from '../../img/2.jpg';
import image3 from '../../img/3.jpg';
import image4 from '../../img/4.jpg';
import image5 from '../../img/5.jpg';

import './Slider.css';

const ImageSlider = () => {
	return (
		<>
			<section id="slider">
				<input type="radio" name="slider" id="s1" />
				<input type="radio" name="slider" id="s2" />
				<input type="radio" name="slider" id="s3" />
				<input type="radio" name="slider" id="s4" />
				<input type="radio" name="slider" id="s5" />
				<label for="s1" id="slide1">
					<img src={image1} height="100%" width="100%" />
				</label>
				<label for="s2" id="slide2">
					<img src={image2} height="100%" width="100%" />
				</label>
				<label for="s3" id="slide3">
					<img src={image3} height="100%" width="100%" />
				</label>
				<label for="s4" id="slide4">
					<img src={image4} height="100%" width="100%" />
				</label>
				<label for="s5" id="slide5">
					<img src={image5} height="100%" width="100%" />
				</label>
			</section>
		</>
	);
};

export default ImageSlider;
