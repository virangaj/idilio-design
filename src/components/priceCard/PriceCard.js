import React from 'react';

import './PriceCard.css';

const PriceCard = (props) => {
	console.log(props.details);
	return (
		<div className="pricing-back">
			{' '}
			<div className="pricing-table">
				<div className="pricing-card">
					<span></span>
					{/* <h3 className="pricing-card-header">Personal</h3> */}
					<h3
						className="pricing-card-header"
						dangerouslySetInnerHTML={{
							__html: props.details[0].name,
						}}
					/>
					<div className="price">
						<sup>$</sup>
						{props.details[0].price}
					</div>
					<ul>
						{props.details[0].details.map((user) => (
							<li
								className={user.className}
								dangerouslySetInnerHTML={{
									__html: user.detail,
								}}
							></li>
						))}
					</ul>
					<a href="#" className="order-btn">
						Order Now
					</a>
				</div>

				<div className="pricing-card">
					<h3
						className="pricing-card-header"
						dangerouslySetInnerHTML={{
							__html: props.details[1].name,
						}}
					/>
					<div className="price">
						<sup>$</sup>
						{props.details[1].price}
					</div>
					<ul>
						{props.details[1].details.map((user) => (
							<li
								className={user.className}
								dangerouslySetInnerHTML={{
									__html: user.detail,
								}}
							></li>
						))}
					</ul>
					<a href="#" className="order-btn">
						Order Now
					</a>
				</div>

				<div className="pricing-card">
					<h3
						className="pricing-card-header"
						dangerouslySetInnerHTML={{
							__html: props.details[2].name,
						}}
					/>
					<div className="price">
						<sup>$</sup>
						{props.details[2].price}
					</div>
					<ul>
						{props.details[2].details.map((user) => (
							<li
								className={user.className}
								dangerouslySetInnerHTML={{
									__html: user.detail,
								}}
							></li>
						))}
					</ul>
					<a href="#" className="order-btn">
						Order Now
					</a>
				</div>

				<div className="pricing-card">
					<h3
						className="pricing-card-header"
						dangerouslySetInnerHTML={{
							__html: props.details[3].name,
						}}
					/>
					<div className="price">
						<sup>$</sup>
						{props.details[3].price}
					</div>
					<ul>
						{props.details[3].details.map((user) => (
							<li
								className={user.className}
								dangerouslySetInnerHTML={{
									__html: user.detail,
								}}
							></li>
						))}
					</ul>
					<a href="#" className="order-btn">
						Order Now
					</a>
				</div>
			</div>
		</div>
	);
};

export default PriceCard;
