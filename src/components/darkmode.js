import React from 'react';
import { useDispatch } from 'react-redux';
import { toggle } from './darkmodeSlice';

export default function DarkMode() {
	const dispatch = useDispatch();

	const handleChange = (e) => {
		document.body.style.backgroundColor = '#171725';
		dispatch(toggle());
	};

	return (
		<div>
			<label className='form-switch'>
				<input type='checkbox' id='form-switch' onChange={(e) => handleChange(e)}></input>
				<i></i>
				<label className='dark-mode-label'>dark mode</label>
			</label>
		</div>
	);
}
