import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDarkmode, toggle } from './darkmodeSlice';
import lightmode from '../images/icons/light-mode.png';
import darkmode from '../images/icons/dark-mode.png';
import '../components/styles/darkmode.css';

export default function DarkMode() {
	const dispatch = useDispatch();

	const handleChange = (e) => {
		document.body.style.backgroundColor = '#171725';
		dispatch(toggle());
	};

	const isDarkmode = useSelector(selectDarkmode);

	return (
		<div class='darkmode-button'>
			<button
				onClick={(e) => {
					handleChange(e);
				}}>
				<img src={isDarkmode ? lightmode : darkmode} alt='light mode switch' />
			</button>
		</div>
	);
}
