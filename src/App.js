import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import BookCover from './components/BookCover';
import Flyer from './components/Flyer';
import AlbumCover from './components/AlbumCover';

import Navbarmenu from './components/menu/Navbarmenu';
import Navigationbar from './components/menu/Navigationbar';

function App() {
	return (
		<div>
			<Router basename="/">
				{/* Add Menu Component */}

				{/* <Navigationbar /> */}
				<Navbarmenu />

				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/About" component={About} />
					<Route path="/Contact" component={Contact} />
					<Route path="/BookCover" component={BookCover} />
					<Route path="/AlbumCover" component={AlbumCover} />
					<Route path="/Flyer" component={Flyer} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
