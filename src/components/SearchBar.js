import { GEOIPIFY_BASE_URL } from '../config';
import { useState } from 'react';
import arrow from '../assets/icon-arrow.svg';

function SearchBar() {
	const [inputText, setInputText] = useState('');
	let ipAddress;
	let domain;
	let url = GEOIPIFY_BASE_URL;

	console.log(url);

	return (
		<form>
			<input
				type='text'
				name='ipaddress'
				id='ipaddress'
				onChange={(e) => setInputText(e.value)}
				value={inputText}
				placeholder='Search for any IP address or domain'
			/>
			<button type='submit'>
				<img src={arrow} alt='icon-arrow' />
			</button>
		</form>
	);
}

export default SearchBar;
