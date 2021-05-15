import React from 'react';
import { Link } from 'react-router-dom';
import ecommerceimg from '../images/projects/ecommerce/homepage1.png';
import redditimg from '../images/projects/reddit/homepage3.png';
import personalwebsiteimg from '../images/projects/personalwebsite/homepagedark.png';
import react from '../images/icons/react1.png';
import node from '../images/icons/nodejs1.png';
import postgres from '../images/icons/postgresql.png';
import redux from '../images/icons/redux.png';
import netlify from '../images/icons/netlify.png';
import heroku from '../images/icons/heroku.png';
import { useSelector } from 'react-redux';
import { selectDarkmode } from '../components/darkmodeSlice';

export default function Projects() {
	const darkmode = useSelector(selectDarkmode);
	return (
		<div className={darkmode ? 'projects-page-container-dark' : 'projects-page-container'}>
			<h2 className='projects-page-title'>
				<span>&#47;&#47;</span> projects
			</h2>

			<div className={darkmode ? 'projects-container-dark' : 'projects-container'}>
				<div className='projects-content'>
					<div className='projects-name'>
						<h3 className='projects-name'>E-commerce</h3>
					</div>
					<p>A full-stack project, completes with front-end, server, and a database. This is an e-commerce website inspired by the Apple Store.</p>
					<div className='projects-content-bottom'>
						<div className='projects-button'>
							<Link to='/projects/ecommerce'>
								<button>read more</button>
							</Link>
						</div>
						<div className={darkmode ? 'projects-live-button-dark' : 'projects-live-button'}>
							<button onClick={() => window.open('https://e-commerce-apple.herokuapp.com', '_blank')}>project live</button>
						</div>
						<div className='projects-icons'>
							<img src={react} alt='react' />
							<img src={node} alt='node' />
							<img src={postgres} alt='postgreSQL' />
							<img src={heroku} alt='postgreSQL' />
						</div>
					</div>
				</div>
				<div className='projects-picture'>
					<img src={ecommerceimg} alt='ecommerce homepage' />
				</div>
			</div>

			<div className={darkmode ? 'projects-container-dark' : 'projects-container'}>
				<div className='projects-content'>
					<div className='projects-name'>
						<h3 className='projects-name'>reddit-client</h3>
					</div>
					<p>A front-end client that fetches data from Reddit API. It displays posts from a combination of sub-reddits and able to search for a post.</p>
					<div className='projects-content-bottom'>
						<div className='projects-button'>
							<Link to='/projects/redditclient'>
								<button>read more</button>
							</Link>
						</div>
						<div className={darkmode ? 'projects-live-button-dark' : 'projects-live-button'}>
							<button onClick={() => window.open('https://reddit-client-ed.netlify.app')}>project live</button>
						</div>
						<div className='projects-icons'>
							<img src={react} alt='react' />
							<img src={redux} alt='redux' />
							<img src={node} alt='node' />
						</div>
					</div>
				</div>
				<div className='projects-picture'>
					<img src={redditimg} alt='reddit homepage' />
				</div>
			</div>

			<div className={darkmode ? 'projects-container-dark' : 'projects-container'}>
				<div className='projects-content'>
					<div className='projects-name'>
						<h3 className='projects-name'>personal website</h3>
					</div>
					<p>a front-end and back-end project</p>
					<div className='projects-content-bottom'>
						<div className='projects-button'>
							<Link to='/projects/personalwebsite'>
								<button>read more</button>
							</Link>
						</div>
						<div className={darkmode ? 'projects-live-button-dark' : 'projects-live-button'}>
							<button onClick={() => window.open('https://e-commerce-apple.herokuapp.com', '_blank')}>project live</button>
						</div>
						<div className='projects-icons'>
							<img src={react} alt='react' />
							<img src={node} alt='node' />
							<img src={netlify} alt='netlify' />
						</div>
					</div>
				</div>
				<div className='projects-picture'>
					<img src={personalwebsiteimg} alt='personal homepage' />
				</div>
			</div>
		</div>
	);
}
