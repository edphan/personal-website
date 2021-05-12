import React from 'react';
// import { Link } from 'react-scroll';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<div className='nav-container'>
			<div className='nav-content-container'>
				<div className='nav-edwardphan'>
					<Link to='/' className='nav-edwardphan'>
						<span>// </span>Edward Phan
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
