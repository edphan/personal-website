import React from 'react';

export default function DarkMode() {
	let clicked = 'clicked';
	const body = document.body;
	const lightTheme = 'light';
	const darkTheme = 'dark';
	let theme;

	if (localStorage) {
		theme = localStorage.getItem('theme');
	}

	if (theme === lightTheme || theme === darkTheme) {
		body.classList.add(theme);
	} else {
		body.classList.add(lightTheme);
	}

	const handleChange = (e) => {
		if (theme === darkTheme) {
			body.classList.replace(darkTheme, lightTheme);
			e.target.classList.remove(clicked);
			localStorage.setItem('theme', 'light');
			theme = lightTheme;
		} else {
			body.classList.replace(lightTheme, darkTheme);
			e.target.classList.add(clicked);
			localStorage.setItem('theme', 'dark');
			theme = darkTheme;
		}
	};

	return (
		<div>
			<label class='form-switch'>
				<input type='checkbox' id='form-switch' onChange={(e) => handleChange(e)}></input>
				<i></i>dark mode
			</label>
		</div>
	);
}
