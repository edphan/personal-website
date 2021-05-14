import React from 'react';
import { useSelector } from 'react-redux';
// import { Link } from 'react-scroll';
import { Link } from 'react-router-dom';
import DarkMode from '../components/darkmode';
import { selectDarkmode } from './darkmodeSlice';

function Nav() {
	const darkmode = useSelector(selectDarkmode);
	return (
		<div className='nav-container'>
			<div className='nav-content-container'>
				<div className={darkmode ? 'nav-edwardphan-dark' : 'nav-edwardphan'}>
					<Link to='/' className='nav-edwardphan'>
						<p className={darkmode ? 'nav-edwardphan-dash-dark' : 'nav-edwardphan-dash'}>&#47;&#47; </p>
						<p className={darkmode ? 'nav-edwardphan-text-dark' : 'nav-edwardphan-text'}>Edward Phan</p>
					</Link>
				</div>

				<div className={darkmode ? 'nav-pages-dark' : 'nav-pages'}>
					<Link to='/projects' className='nav-pages'>
						<p>projects</p>
					</Link>
					<Link to='/about' className='nav-pages'>
						<p>about</p>
					</Link>
				</div>

				<div className='nav-darkmode'>
					<DarkMode />
				</div>
			</div>
		</div>
	);
}

export default Nav;
