import { useState, useEffect } from 'react';
import arrow from '../assets/icon-arrow.svg';
import SearchResults from './SearchResults';
import Map from './Map';
import { GEOIPIFY_BASE_URL } from '../config.js';

function IpTracker() {
	const [input, setInput] = useState('');
	const [data, setData] = useState('');
	const [IPAddress, setIPAddress] = useState('');
	const [location, setLocation] = useState('');
	const [timezone, setTimezone] = useState('');
	const [ISP, setISP] = useState('');
	const [coordinates, setCoordinates] = useState({
		lat: 27.5035,
		lng: 77.67215,
	});
	useEffect(() => {
		if (data) {
			setIPAddress(data?.ip);
			setLocation(
				`${data?.location?.city}, ${data?.location?.country} ${data?.location?.postalCode}`
			);
			setTimezone(`UTC ${data?.location?.timezone}`);
			setISP(`${data?.isp}`);
			setCoordinates({ lat: data?.location?.lat, lng: data?.location?.lng });
		} else {
			console.log('setError');
		}
	}, [data]);
	function fetcherIP(input) {
		fetch(`${GEOIPIFY_BASE_URL}&ipAddress=${input}`)
			.then((res) => res.json())
			.then(setData);
	}

	const handleClick = (e) => {
		e.preventDefault();
		fetcherIP(input);
	};

	return (
		<>
			<section>
				<h1>IP Address Tracker</h1>

				<form onClick={handleClick}>
					<input
						type='text'
						name='ipaddress'
						id='ipaddress'
						onChange={(e) => setInput(e.target.value)}
						placeholder='Search for any IP address or domain'
						value={input}
					/>
					<button type='submit'>
						<img src={arrow} alt='icon-arrow' />
					</button>
				</form>
				<SearchResults
					ipAddress={IPAddress}
					location={location}
					timezone={timezone}
					isp={ISP}
				/>
			</section>

			<Map coordinates={coordinates} />
		</>
	);
}

export default IpTracker;
