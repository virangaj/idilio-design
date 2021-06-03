import React from 'react';
import './Navigation.css';
import logo from '../../img/logo.png';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Navigationbar = () => {
	return (
		<div className="header">
			<Navbar collapseOnSelect expand="lg" variant="dark">
				<Navbar.Brand href="/">
					<img
						src={logo}
						width="100"
						height="100"
						className="d-inline-block align-top"
						alt="React Bootstrap logo"
					/>{' '}
				</Navbar.Brand>
				{/* <Nav.Link className="tagline">The Artistic Elysium</Nav.Link> */}
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto header"></Nav>
					<Nav className="header">
						<Nav.Link>
							<Link to="/" className="header underline">
								Home
							</Link>
						</Nav.Link>
						<NavDropdown
							title="Categories"
							id="collasible-nav-dropdown"
							className="header"
						>
							<NavDropdown.Item>
								<Link to="/AlbumCover" className="subhead">
									Album Cover
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link to="/BookCover" className="subhead">
									Book Cover
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link to="/MascotLogo" className="subhead">
									Mascot Logo
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link to="/Flyers" className="subhead">
									Flyers
								</Link>
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link>
							<Link to="/Contact" className="header underline">
								Contact
							</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/About" className="header underline">
								About
							</Link>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Navigationbar;
