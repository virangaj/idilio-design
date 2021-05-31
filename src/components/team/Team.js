import React from 'react';
// import profile1 from '../../img/profile1.jpg';
// import profile2 from '../../img/profile2.jpg';
// import profile3 from '../../img/profile3.jpg';
// import profile4 from '../../img/profile4.jpg';
// import profile5 from '../../img/profile5.jpg';
import './Team.css';

const Team = (props) => {
	return (
		<section>
			<div className="t-card">
				<span></span>
				<div className="t-content">
					<div className="t-imgBx">
						<img src={props.img} alt="profile1" />
					</div>
					<div className="t-contentBx">
						<h3>
							{props.name}
							<br />
							<p>{props.position}</p>
						</h3>
					</div>
				</div>
				<ul className="sci">
					<li>
						<a href="#">
							<i className="fab fa-facebook-f" aria-hidden="true"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<i className="fab fa-linkedin-in" aria-hidden="true"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<i className="fab fa-instagram" aria-hidden="true"></i>
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Team;
