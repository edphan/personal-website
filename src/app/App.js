import React from 'react';
import Nav from '../components/nav';
import About from '../pages/about';
import Home from '../pages/home';
import Projects from '../pages/projects';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Nav />
			<Home />
			<Projects />
			<About />
		</div>
	);
}

export default App;
