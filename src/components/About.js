import React from 'react';

import Team from './team/Team';
import profile1 from '../img/profile1.jpg';
import profile2 from '../img/profile2.jpg';
import profile3 from '../img/profile3.jpg';
import profile4 from '../img/profile4.jpg';
import profile5 from '../img/profile5.jpg';
import group from '../img/grouppic.jpg';

import './team/Team.css';

const About = () => {
	return (
		<>
			<section className="team-body">
				<div className="team-group">
					<img src={group} alt="group" />
				</div>
				<div className="team-description">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
				<section className="cards-position">
					<h1>Our Team</h1>
					<div className="t-container">
						{/* <h1>About us</h1> */}

						<Team img={profile1} name="Peter Parker" position="CEO" />
						<Team img={profile2} name="Gavin Andrew" position="Designer" />
						<Team img={profile3} name="Colin Edward" position="Designer" />
						<Team img={profile4} name="David Miller" position="Designer" />
						<Team img={profile5} name="Mike Hussey" position="Designer" />
					</div>
				</section>
			</section>
		</>
	);
};

export default About;
