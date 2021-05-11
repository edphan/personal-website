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
				<h2 className='projects-title'>
					<span>//</span> projects
				</h2>
				<div className='projects-container-columns'>
					<div className='project-ecommerce'>
						{ecommerce.name}
						<button className='project-button'>read more</button>
					</div>
					<div className='project-reddit'>
						{reddit.name}
						<button className='project-button'>read more</button>
					</div>
					<div className='project-personalwebsite'>
						{personalwebsite.name}
						<button className='project-button'>read more</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
