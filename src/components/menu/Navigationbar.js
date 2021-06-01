import React from 'react';
import './Navigation.css';
import logo from '../../img/logo.png';

import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
const Navigationbar = () => {
	return (
		<div className="header">
			<Navbar collapseOnSelect expand="lg" variant="dark" className="header">
				<Navbar.Brand href="/" className="header">
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
						<Nav.Link href="/" className="header">
							Home
						</Nav.Link>
						<NavDropdown
							title="Categories"
							id="collasible-nav-dropdown"
							className="header"
						>
							<NavDropdown.Item href="/AlbumCover" className="header subhead">
								Album Cover
							</NavDropdown.Item>
							<NavDropdown.Item href="/BookCover" className="header subhead">
								Book Cover
							</NavDropdown.Item>
							<NavDropdown.Item href="/Flyer" className="header subhead">
								Flyer
							</NavDropdown.Item>
							<NavDropdown.Item href="/MascotLogo" className="header subhead">
								Mascot Logo
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="/Contact" className="header">
							Contact
						</Nav.Link>
						<Nav.Link href="/About" className="header">
							About
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Navigationbar;
