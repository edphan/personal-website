import homepage from '../images/projects/reddit/homepage3.png';
import post from '../images/projects/reddit/post.png';
import mobileView from '../images/projects/reddit/mobileView.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectDarkmode } from '../components/darkmodeSlice';

function RedditProject() {
	const darkmode = useSelector(selectDarkmode);
	return (
		<div className='project-container'>
			<div className={darkmode ? 'project-title-dark' : 'project-title'}>
				<Link to='/projects' className='projects-link'>
					<p>&lt; back to projects</p>
				</Link>
				<div className='h2'>
					<span>&#47;&#47; </span>reddit-client
				</div>
				<div className={darkmode ? 'project-live-code-button-dark' : 'project-live-code-button'}>
					<button onClick={() => window.open('https://reddit-client-ed.netlify.app')}>project live</button>
					<button onClick={() => window.open('https://github.com/edphan/reddit-client-main', '_blank')}>source code</button>
				</div>
			</div>
			<div className='image-container'>
				<img src={homepage} alt='home page' />
				<img src={post} alt='post page' />
				<img src={mobileView} alt='mobile page' />
			</div>
			<div className={darkmode ? 'project-text-dark' : 'project-text'}>
				<h3>Description:</h3>
				<p>
					This is a reddit client. It demonstrate the ability to use API call to Reddit’s undocumented JSON API, and display the response. I chose to make the
					client a close resemblance to the reddit website with navigation on the right and search bar on top. This was to reduce the user’s learning curve as
					some users are familiarized with reddit navigation style.
				</p>
				<h3>Notable features:</h3>
				<p>
					- Search posts<br></br>- Fetch to different subreddits<br></br>- Fetch to hot/best/new posts<br></br>
				</p>
				<h3>What were the difficulties:</h3>
				<p>
					- Authentication and authorization, and what method to use to best ensure security - Connect server to PostgreSQL - Config for development and for
					production - Use Heroku to host all front-end and back-ends
				</p>
				<h3>How did I overcome:</h3>
				<p>
					This was the first project where I had to learn to read API documents to properly fetch data from the API. Though this was undocumented, I used
					Postman to experiment with the API calls to understand what kind of data that came back. I also learnt to use Redux’s toolkit to create async thunks
					to store fetched data into states to render.
				</p>
				<h3>Technologies used:</h3>
				<p>React for UI, Redux for state management, and Fetch API to fetch data. Netlify to host the website</p>
			</div>
		</div>
	);
}

export default RedditProject;
