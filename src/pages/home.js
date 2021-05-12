import github from '../images/icons/Octocat/Octocat.png';
import linkedin from '../images/icons/LinkedIn-Logos/LI-In-Bug.png';
import email from '../images/icons/email_3.png';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<div className='home-container' id='section-home'>
			<div className='home-content'>
				<div className='home-text'>
					<h1 className='home-gradient-text'>hello world, I'm Edward</h1>
					<h2 className='home-description-text'>// full-stack engineer</h2>
				</div>

				<div className='home-logo-container'>
					<a href='https://github.com/edphan'>
						<img src={github} alt='github logo' />
					</a>
					<a href='https://www.linkedin.com/in/trungngocphan/'>
						<img src={linkedin} alt='linkedin logo' />
					</a>
					<a href='https://www.linkedin.com/in/trungngocphan/'>
						<img src={email} alt='email logo' />
					</a>
				</div>

				<div className='button-container'>
					<div className='homepage-button'>
						<Link to='/projects' className='link'>
							<button>projects</button>
						</Link>
					</div>
					<div className='homepage-button'>
						<Link to='/about' className='link'>
							<button>about</button>
						</Link>
					</div>
				</div>
			</div>
			<footer>Copyright © 2021 Edward Phan</footer>
		</div>
	);
}

export default Home;
