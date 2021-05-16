import React from 'react';
import './styles/nav.css';
import { Link } from 'react-router-dom';
import DarkMode from '../components/darkmode';
// import { selectDarkmode } from './darkmodeSlice';
// import { useSelector } from 'react-redux';

function Nav() {
	return (
		<div>
			<button>
				<Link to='/'>&#47;&#47; Edward Phan</Link>
			</button>
			<button>
				<Link to='/projects'>projects</Link>
			</button>
			<button>
				<Link to='/about'>about</Link>
			</button>
			<DarkMode />
		</div>
	);
}

export default Nav;
