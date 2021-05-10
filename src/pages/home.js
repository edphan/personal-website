import github from '../images/icons/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png';
import linkedin from '../images/icons/LinkedIn-Logos/LI-In-Bug.png';

function Home() {
	return (
		<div className='home-container'>
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
				</div>
			</div>
		</div>
	);
}

export default Home;
