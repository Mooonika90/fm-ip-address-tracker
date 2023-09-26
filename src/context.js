import { createContext, useContext, useState, useEffect } from 'react';
import { GEOIPIFY_BASE_URL } from './config.js';

const IpContext = createContext();

export function useIpContext() {
	return useContext(IpContext);
}

export function IpProvider({ children }) {
	const [input, setInput] = useState('');
	const [IPAddress, setIPAddress] = useState('');
	const [location, setLocation] = useState('');
	const [timezone, setTimezone] = useState('');
	const [ISP, setISP] = useState('');
	const [coordinates, setCoordinates] = useState({
		lat: 27.5035,
		lng: 77.67215,
	});
	const [error, setError] = useState(false);

	const checkIpAddress =
		/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
	const checkDomain =
		/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;
	useEffect(() => {
		fetcherIP();
	}, []);

	function fetcherIP(input = '') {
		fetch(`${GEOIPIFY_BASE_URL}&ipAddress=${input}`)
			.then((res) => {
				if (!res.ok) {
					throw new Error('Network response was not ok');
				}
				return res.json();
			})
			.then((data) => {
				setError(false);
				setIPAddress(data?.ip);
				setLocation(
					`${data?.location?.city}, ${data?.location?.country} ${data?.location?.postalCode}`
				);
				setTimezone(`UTC ${data?.location?.timezone}`);
				setISP(`${data?.isp}`);
				setCoordinates({ lat: data?.location?.lat, lng: data?.location?.lng });
			})
			.catch((error) => {
				setError(true);
				console.error('Fetch error:', error);
			});
	}

	const handleClick = (e) => {
		e.preventDefault();
		fetcherIP(input);
	};

	const contextValue = {
		input,
		setInput,
		IPAddress,
		location,
		timezone,
		ISP,
		coordinates,
		error,
		handleClick,
	};

	return (
		<IpContext.Provider value={contextValue}>{children}</IpContext.Provider>
	);
}
