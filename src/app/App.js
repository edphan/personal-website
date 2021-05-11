import React from 'react';
import Nav from '../components/nav';
import About from '../pages/about';
import Contact from '../pages/contact';
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
			<Contact />
		</div>
	);
}

export default App;
