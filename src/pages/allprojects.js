import { useSelector } from 'react-redux';
import { selectDarkmode } from '../components/darkmodeSlice';
import '../components/styles/allprojects.css';
import ecommerceimg from '../images/projects/ecommerce/homepage1.png';
import redditimg from '../images/projects/reddit/homepage3.png';
import personalwebsiteimg from '../images/projects/personalwebsite/homepagedark.png';
import react from '../images/icons/react1.png';
import node from '../images/icons/nodejs1.png';
import postgres from '../images/icons/postgresql.png';
import redux from '../images/icons/redux.png';
import netlify from '../images/icons/netlify.png';
import heroku from '../images/icons/heroku.png';

function AllProjects() {
	const darkmode = useSelector(selectDarkmode);
	return (
		<div className='allprojects-page-container'>
			<h2 className='projects-page-title'>
				<span>&#47;&#47;</span> projects
			</h2>

			<div className='individual-project-container'>
				<div className='project-left'>
					<h3>e-commerce</h3>
					<p>A full-stack project, completes with front-end, server, and a database. This is an e-commerce website inspired by the Apple Store.</p>
					<div className='project-tech-logos'>
						<img src={react} alt='react logo' />
						<img src={node} alt='node logo' />
						<img src={postgres} alt='postgresql logo' />
						<img src={heroku} alt='heroku logo' />
					</div>

					<div className='project-button-container'>
						<button>read more</button>
						<button>project live</button>
					</div>
				</div>
				<div className='project-image'>
					<img src={ecommerceimg} alt='ecommerce homepage' />
				</div>
			</div>

			<div className='individual-project-container'>
				<div className='project-left'>
					<h3>reddit-client</h3>
					<p>A full-stack project, completes with front-end, server, and a database. This is an e-commerce website inspired by the Apple Store.</p>
					<div className='project-tech-logos'>
						<img src={react} alt='react logo' />
						<img src={node} alt='node logo' />
						<img src={postgres} alt='postgresql logo' />
						<img src={heroku} alt='heroku logo' />
					</div>

					<div className='project-button-container'>
						<button>read more</button>
						<button>project live</button>
					</div>
				</div>
				<div className='project-image'>
					<img src={redditimg} alt='ecommerce homepage' />
				</div>
			</div>

			<div className='individual-project-container'>
				<div className='project-left'>
					<h3>personal website</h3>
					<p>A full-stack project, completes with front-end, server, and a database. This is an e-commerce website inspired by the Apple Store.</p>
					<div className='project-tech-logos'>
						<img src={react} alt='react logo' />
						<img src={node} alt='node logo' />
						<img src={postgres} alt='postgresql logo' />
						<img src={heroku} alt='heroku logo' />
					</div>

					<div className='project-button-container'>
						<button>read more</button>
						<button>project live</button>
					</div>
				</div>
				<div className='project-image'>
					<img src={personalwebsiteimg} alt='ecommerce homepage' />
				</div>
			</div>
		</div>
	);
}

export default AllProjects;