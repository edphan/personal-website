import '../components/styles/one-project.css';
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
					<button onClick={() => window.open('https://github.com/edphan/e-commerce-appleclone', '_blank')}>source code</button>
					<button onClick={() => window.open('https://e-commerce-apple.herokuapp.com', '_blank')}>project live</button>
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
					various elements. This was the project that I had to learn many new things on the fly in order to get it working well.
				</p>
				<h3>Notable features:</h3>
				<p>
					- Authentication and Authorization (Log in, log out, view protected profile page) <br></br>- CRUD Functionality (View products, view previous orders,
					place orders, registration) <br></br>
				</p>
				<h3>What were the difficulties:</h3>
				<p>
					- Authentication and authorization, and what method to use to ensure security <br></br>- Create database schemas that allow for logical storage of
					orders' products and quantities <br></br>- Connect Express server to PostgreSQL <br></br>- Config for development and for production in order to use
					Heroku to host all front-end and back-ends
				</p>
				<h3>How did I overcome:</h3>
				<p>
					- I first had to do research on authentication and authorization strategies for my stack (PERN). Next, I created a flow of authentication and a flow
					of authorization, this helped me to visualize all the different parts and where they all fit. Only then, I was able to chose the specific strategies
					that ensure security and fit within the PERN stack that I used.
				</p>
				<p>
					- For database schema, the combination of research into others e-commerce database and some experiment with my own schemas allowed me to come up with
					an effective schema for the orders.
				</p>
				<p>
					- This was the first project where I had to connect the Express server to the PostgreSQL database. I had to look up how to use the node-postgres
					library and how to config it to connect to PostgreSQL.
				</p>
				<p>
					- I've learnt a lot about development and production configurations from this project. I had to learn about what does it means to be in development
					and in production before I could get the configurations right for Heroku deployment.
				</p>
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
