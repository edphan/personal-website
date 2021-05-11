import React from 'react';
import { Link } from 'react-scroll';

function Nav() {
	return (
		<div className='nav-container'>
			<div className='nav-content-container'>
				<div className='nav-edwardphan'>
					<Link activeClass='active' to='section-home' spy={true} smooth={true} duration={900}>
						<span>//</span> Edward Phan
					</Link>
				</div>
				<div className='nav-pages'>
					<Link activeClass='active' to='section-projects' spy={true} smooth={true} duration={900}>
						projects
					</Link>
					<Link activeClass='active' to='section-about' spy={true} smooth={true} duration={900}>
						about
					</Link>
				</div>
				<div className='nav-darkmode'>
					<label class='form-switch'>
						<input type='checkbox' id='form-switch'></input>
						<i></i>dark mode
					</label>
				</div>
			</div>
		</div>
	);
}

export default Nav;
