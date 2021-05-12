import github from '../images/icons/Octocat/Octocat.png';
import linkedin from '../images/icons/LinkedIn-Logos/LI-In-Bug.png';
import email from '../images/icons/email_3.png';

function About() {
	return (
		<div className='about-container' id='section-about'>
			<div className='about-content'>
				<h2 className='about-title'>
					<span>//</span> about
				</h2>
				<p>
					I have always wanted to use programming to turn ideas into cool and amazing web products. I took the plunge and enrolled in the Full-Stack Engineer
					degree from Codecademy in 2021. It was a 24-weeks intensive boot camp-like experience. I gained proficiency in full-stack engineering with the PERN
					stack. The program often forced me to learn on the spot by making me program things I don't yet know, and it taught me to learn how to fix bugs that
					define the law of the universe. I rigorously studied and coded every day, which allowed me to finished before the estimated six months. I am highly
					self-motivated and a quick learner. When I'm not coding, I'd like to think and discuss business opportunities or flying drones. I graduated from UC
					Berkeley with a BS degree in Energy Engineering in Spring 2021.
				</p>
				<h3>tech stack</h3>
				<p>
					Front-end: JavaScript ES6, React and Redux, HTML5, CSS3 (grid and flex box), jQuery; <br></br>
					Back-end: Node JS, Express, RESTful APIs;<br></br>
					Database: PostgreSQL; <br></br>
					Host: Heroku, Netlify; <br></br>
					Familiar with: Python, Jest, Chai/Mocha; <br></br>
				</p>
				<h3>get in touch</h3>
				<div className='home-logo-container'>
					<a href='https://github.com/edphan'>
						<img src={github} alt='github logo' />
					</a>
					<a href='https://www.linkedin.com/in/trungngocphan/'>
						<img src={linkedin} alt='linkedin logo' />
					</a>
					<a>
						<img src={email} alt='email logo' />
					</a>
				</div>
			</div>
		</div>
	);
}

export default About;
