import React from 'react';

import './Footer.css';

const Footer = () => {
	return (
		<>
			<div class="footer">
				<p>
					<i className="far fa-copyright"></i> {new Date().getFullYear()} All
					Rights Reserved | Idilio Design. Powered by{' '}
					<a href="http://web-portal.imagezero.net/">ImageZero</a>
				</p>
			</div>
		</>
	);
};

export default Footer;
