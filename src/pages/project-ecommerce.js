import homepage from '../images/projects/ecommerce/homepage1.png';
import login from '../images/projects/ecommerce/login.png';
import profile from '../images/projects/ecommerce/profile.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectDarkmode } from '../components/darkmodeSlice';

function EcommerceProject() {
	const darkmode = useSelector(selectDarkmode);
	return (
		<div className='project-container'>
			<div className={darkmode ? 'project-title-dark' : 'project-title'}>
				<Link to='/projects' className='projects-link'>
					<p>&lt; back to projects</p>
				</Link>
				<div className='h2'>
					<span>&#47;&#47; </span>e-commerce site
				</div>
				<div className={darkmode ? 'project-live-code-button-dark' : 'project-live-code-button'}>
					<button onClick={() => window.open('https://e-commerce-apple.herokuapp.com', '_blank')}>project live</button>
					<button onClick={() => window.open('https://github.com/edphan/e-commerce-appleclone', '_blank')}>source code</button>
				</div>
			</div>
			<div className='image-container'>
				<img src={homepage} alt='home page' />
				<img src={login} alt='login page' />
				<img src={profile} alt='profile page' />
			</div>
			<div className={darkmode ? 'project-text-dark' : 'project-text'}>
				<h3>Description:</h3>
				<p>
					This is an e-commerce website for Apple products. Demonstrated the ability to use React to render UI elements, setup server using Express, and connect
					the server to PostgreSQL database. I took many inspiration from the Apple website, from the color schemes to the rounded corners of the buttons and
					various elements.
				</p>
				<h3>Notable features:</h3>
				<p>
					- Log in, log out, register <br></br>- Add items to bag, place orders <br></br>- View protected profile page, view previous orders
				</p>
				<h3>What were the difficulties:</h3>
				<p>
					- Authentication and authorization, and what method to use to best ensure security - Connect server to PostgreSQL - Config for development and for
					production - Use Heroku to host all front-end and back-ends
				</p>
				<h3>How did I overcome:</h3>
				<p>I have learnt a ton for this project.</p>
				<h3>Technologies used:</h3>
				<p>
					React for UI, Redux for state management. Express/Node JS for server. Passport-local and passport-jwt for authentication and authorization. PostgreSQL
					for database. Hosted both front-end and back-end on Heroku.
				</p>
			</div>
		</div>
	);
}

export default EcommerceProject;
