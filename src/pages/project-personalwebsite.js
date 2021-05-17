import '../components/styles/one-project.css';
import projectsdark from '../images/projects/personalwebsite/projectsdark.png';
import homepagedark from '../images/projects/personalwebsite/homepagedark.png';
import aboutdark from '../images/projects/personalwebsite/aboutdark.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectDarkmode } from '../components/darkmodeSlice';

function PersonalWebsiteProject() {
	const darkmode = useSelector(selectDarkmode);
	return (
		<div className='project-container'>
			<div className={darkmode ? 'project-title-dark' : 'project-title'}>
				<Link to='/projects' className='projects-link'>
					<p>&lt; back to projects</p>
				</Link>
				<div className='h2'>
					<span>&#47;&#47; </span>personal website
				</div>
				<div className={darkmode ? 'project-live-code-button-dark' : 'project-live-code-button'}>
					<button onClick={() => window.open('https://github.com/edphan/personal-website', '_blank')}>source code</button>
					<button onClick={() => window.open('https://e-commerce-apple.herokuapp.com', '_blank')}>project live</button>
				</div>
			</div>
			<div className='image-container'>
				<img src={homepagedark} alt='home page' />
				<img src={projectsdark} alt='post page' />
				<img src={aboutdark} alt='mobile page' />
			</div>
			<div className={darkmode ? 'project-text-dark' : 'project-text'}>
				<h3>Description:</h3>
				<p></p>
				<h3>Notable features:</h3>
				<p>
					- Darkmode! <br></br>- Responsiveness, looks great on variety of devices.<br></br>
				</p>
				<h3>What were the difficulties:</h3>
				<p></p>
				<h3>How did I overcome:</h3>
				<p></p>
				<h3>Technologies used:</h3>
				<p>React for UI, Redux for dark mode state management. Hosted on Netlify.</p>
			</div>
		</div>
	);
}

export default PersonalWebsiteProject;
