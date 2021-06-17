import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import BookCover from './components/BookCover';
import Flyer from './components/Flyer';
import AlbumCover from './components/AlbumCover';
import MascotLogo from './components/MascotLogo';
import HashLoader from 'react-spinners/HashLoader';
import Navigationbar from './components/menu/Navigationbar';
import Footer from './components/footer/Footer';

function App() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 4000);
	}, []);
	// let progress = document.getElementById('progressBar');
	// let totalHeight = document.body.scrollHeight - window.innerHeight;
	// window.onscroll = function () {
	// 	if (progress) {
	// 		let progressHeight = (window.pageYOffset / totalHeight) * 100;
	// 		progress.style.height = progressHeight + '%';
	// 	}
	// };
	return (
		<>
			{loading ? (
				<div className="loader">
					<HashLoader color={'#45a29e'} loading={loading} size={50} />
				</div>
			) : (
				<>
					<div id="progressBar"></div>
					<div id="scrollPath"></div>
					<Router basename="/">
						<Navigationbar />

						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/About" component={About} />
							<Route path="/Contact" component={Contact} />
							<Route path="/BookCover" component={BookCover} />
							<Route path="/AlbumCover" component={AlbumCover} />
							<Route path="/Flyers" component={Flyer} />
							<Route path="/MascotLogo" component={MascotLogo} />
						</Switch>
						<Footer />
					</Router>
				</>
			)}
		</>
	);
}

export default App;
