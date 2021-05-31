import React from 'react';
import image1 from '../../img/1.jpg';
import image2 from '../../img/2.jpg';
import image3 from '../../img/3.jpg';
import image4 from '../../img/4.jpg';
import image5 from '../../img/5.jpg';
import './ImageLine.css';

const ImageLine = (props) => {
	console.log(props.images);
	return (
		<section className="imageLine">
			<div className="i-row">
				<div className="i-column">
					<img src={props.images.image1} alt="Snow" />
				</div>
				<div className="i-column">
					<img src={props.images.image2} alt="Forest" />
				</div>
				<div className="i-column">
					<img src={props.images.image3} alt="Mountains" />
				</div>
				<div className="i-column">
					<img src={props.images.image4} alt="Mountains" />
				</div>
				<div className="i-column">
					<img src={props.images.image5} alt="Mountains" />
				</div>
				<div className="i-column">
					<img src={props.images.image1} alt="Mountains" />
				</div>
			</div>
		</section>
	);
};

export default ImageLine;
