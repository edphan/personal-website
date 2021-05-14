import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from './darkmodeSlice';

export default function DarkMode() {
	const dispatch = useDispatch();

	const handleChange = (e) => {
		dispatch(toggle());
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