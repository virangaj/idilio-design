import React from 'react';

import './Footer.css';

const Footer = () => {
	return (
		<>
			<div className="footer">
				<p>
					<i className="far fa-copyright"></i> {new Date().getFullYear()}{' '}
					<a href="/">Idilio Design</a> | All Rights Reserved. Powered by{' '}
					<a href="http://web-portal.imagezero.net/" target="_blank">
						ImageZero.
					</a>
				</p>
			</div>
		</>
	);
};

export default Footer;
