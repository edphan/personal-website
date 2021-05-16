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
			<div className='individual-project-container'>
				<div className='project-left'>
					<h3>e-commerce</h3>
					<p>A full-stack project, completes with front-end, server, and a database. This is an e-commerce website inspired by the Apple Store.</p>

					<div className='project-button-logos'>
						<div className='project-button-container'>
							<button>read more</button>
							<button>project live</button>
						</div>
						<div className='project-tech-logos'>
							<img src={react} alt='react logo' />
							<img src={node} alt='node logo' />
							<img src={postgres} alt='postgresql logo' />
							<img src={heroku} alt='heroku logo' />
						</div>
					</div>
				</div>
				<div className='project-image'>
					<img src={ecommerceimg} alt='ecommerce homepage' />
				</div>
			</div>

			{/* <div class='allprojects-individual-container'>
				<h3>reddit-client</h3>
				<p>A front-end client that fetches data from Reddit API. It displays posts from a combination of sub-reddits and able to search for a post.</p>
				<button>read more</button>
				<button>project live</button>
			</div> */}
		</div>
	);
}

export default AllProjects;
