import React from 'react';
import Carousel from './carousel/Carousel';
import Team from './team/Team';
import profile1 from '../img/profile1.jpg';
import profile2 from '../img/profile2.jpg';
import profile3 from '../img/profile3.jpg';
import profile4 from '../img/profile4.jpg';
import profile5 from '../img/profile5.jpg';
import './team/Team.css';

const About = () => {
	return (
		<>
			<section className="team-body">
				<section className="cards-position">
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
