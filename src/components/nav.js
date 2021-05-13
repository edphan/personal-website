import React from 'react';
// import { Link } from 'react-scroll';
import { Link } from 'react-router-dom';
import DarkMode from '../components/darkmode';

function Nav() {
	return (
		<div className='nav-container'>
			<div className='nav-content-container'>
				<div className='nav-edwardphan'>
					<Link to='/' className='nav-edwardphan'>
						<span>&#47;&#47; </span>Edward Phan
					</Link>
				</div>

				<div className='nav-pages'>
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
