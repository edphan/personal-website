import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Nav from '../components/nav';
import About from '../pages/about';
import Home from '../pages/home';
import EcommerceProject from '../pages/project-ecommerce';
import PersonalWebsiteProject from '../pages/project-personalwebsite';
import RedditProject from '../pages/project-reddit';
import AllProjects from '../pages/allprojects';
import './App.css';
import { useSelector } from 'react-redux';
import { selectDarkmode } from '../components/darkmodeSlice';

function App() {
	const darkmode = useSelector(selectDarkmode);
	return (
		<Router>
			<div className={darkmode ? 'Appdark' : 'App'}>
				{/* <Nav /> */}
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/allprojects' exact component={AllProjects} />
					<Route path='/about' exact component={About} />
					<Route path='/projects/ecommerce' exact component={EcommerceProject} />
					<Route path='/projects/redditclient' exact component={RedditProject} />
					<Route path='/projects/personalwebsite' exact component={PersonalWebsiteProject} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
