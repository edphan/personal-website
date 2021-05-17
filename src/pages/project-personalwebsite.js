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
				<p>This is my portfolio website that not only showcases my best projects, it also focuses on being both desktop and mobile friendly (with dark mode!).</p>
				<h3>Notable features:</h3>
				<p>
					- Darkmode! <br></br>- Responsiveness, looks great on variety of devices.<br></br>- Touch friendly, large iOS-like buttons make touch experience
					great. <br></br>- Color schemes for light mode and dark mode are carefully chosen to enhance readability.
				</p>
				<h3>What were the difficulties:</h3>
				<p>
					-One of the most significant difficulties was ensuring the website looks great on multiple mobile devices with varying screen sizes. I had
					difficulties where the website looked great when I experimented with responsiveness using desktop and testing websites but broke on actual mobile
					devices. Another challenge was that some of the pages were designed for desktop and were challenging to make mobile friendly.
				</p>
				<p>
					-The second challenge was implementing dark mode. I have had experience with dark mode with the first version of the personal portfolio website.
					However, that version was built entirely on HTML and CSS. I had to re-learn how to do dark mode in React. I didn't want to implement something I only
					understand vaguely, so I chose to experiment on my own to truly understand the dark mode implementation.
				</p>
				<h3>How did I overcome:</h3>
				<p>
					- For responsiveness, I found that it was not enough to test it on desktop and testing websites; I had to physically get mobile devices to test the
					website. This step verifies and ensures that the website actually looks good on mobile devices. I also had to redo some of the pages because they were
					so profoundly styled for large screens. This was a blessing in disguise as I was able to simplify the components much more now than I did it the
					second time. Components are simpler; this makes maintenance and readability much more manageable.
				</p>
				<p>
					- As for dark mode, I did many experiments to see which one is effective and maintainable. I finally came to a method that was a perfect fit for my
					criteria - to use Redux store for state management, and to use that state to change the component stylings accordingly.
				</p>
				<h3>Technologies used:</h3>
				<p>React for UI, Redux for dark mode state management. Netlify to host the website.</p>
			</div>
		</div>
	);
}

export default PersonalWebsiteProject;
