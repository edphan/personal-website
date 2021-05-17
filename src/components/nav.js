import React from 'react';
import './styles/nav.css';
import { Link } from 'react-router-dom';
import DarkMode from '../components/darkmode';
import { useSelector } from 'react-redux';
import { selectDarkmode } from './darkmodeSlice';

function Nav() {
	const darkmode = useSelector(selectDarkmode);
	return (
		<div className={darkmode ? 'nav-container-dark' : 'nav-container'}>
			<Link to='/'>
				<div className='logo-button'>
					<button>
						<span>&#47;&#47;</span> Edward Phan
					</button>
				</div>
			</Link>

			<Link to='/projects'>
				<button>Projects</button>
			</Link>

			<Link to='/about'>
				<button>About</button>
			</Link>

			<DarkMode />
		</div>
	);
}

export default Nav;
