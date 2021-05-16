import React from 'react';
import './styles/nav.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DarkMode from '../components/darkmode';
import { selectDarkmode } from './darkmodeSlice';

function Nav() {
	const darkmode = useSelector(selectDarkmode);
	return (
		<div>
			<button>
				<Link to='/'>// Edward Phan</Link>
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
