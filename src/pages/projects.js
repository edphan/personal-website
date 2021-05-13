import { Link } from 'react-router-dom';
import ecommerceimg from '../images/projects/ecommerce/homepage.png';
import redditimg from '../images/projects/reddit/homepage.png';
import personalwebsiteimg from '../images/projects/personalwebsite/homepage.png';

const ecommerce = {
	name: 'e-commerce',
	image: '',
};

const reddit = {
	name: 'reddit-client',
	image: '',
};

const personalwebsite = {
	name: 'personal website',
	image: '',
};

function Projects() {
	return (
		<div className='projects-container' id='section-projects'>
			<div className='projects-content'>
				<h2 className='projects-page-title'>
					<span>&#47;&#47;</span> projects
				</h2>

				<div className='projects-container-columns'>
					<div className='project-ecommerce'>
						<h3 className='projects-title'>{ecommerce.name}</h3>
						<img src={ecommerceimg} alt='ecommerce homepage' className='projects-img' />
						<div className='project-button'>
							<Link to='/projects/ecommerce'>
								<button>read more</button>
							</Link>
						</div>
					</div>

					<div className='project-reddit'>
						<h3 className='projects-title'>{reddit.name}</h3>
						<img src={redditimg} alt='redditclient homepage' className='projects-img' />
						<div className='project-button'>
							<Link to='/projects/redditclient'>
								<button>read more</button>
							</Link>
						</div>
					</div>

					<div className='project-personalwebsite'>
						<h3 className='projects-title'>{personalwebsite.name}</h3>
						<img src={personalwebsiteimg} alt='personal website homepage' className='projects-img' />
						<div className='project-button'>
							<Link to='/projects/personalwebsite'>
								<button>read more</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
