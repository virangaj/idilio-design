import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import BookCover from './components/BookCover';
import Flyer from './components/Flyer';
import AlbumCover from './components/AlbumCover';
import MascotLogo from './components/MascotLogo';

import Navigationbar from './components/menu/Navigationbar';

function App() {
	return (
		<div>
			<Router basename="/">
				{/* Add Menu Component */}

				<Navigationbar />

				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/About" component={About} />
					<Route path="/Contact" component={Contact} />
					<Route path="/BookCover" component={BookCover} />
					<Route path="/AlbumCover" component={AlbumCover} />
					<Route path="/Flyer" component={Flyer} />
					<Route path="/MascotLogo" component={MascotLogo} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
