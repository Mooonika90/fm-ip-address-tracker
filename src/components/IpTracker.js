import arrow from '../assets/icon-arrow.svg';
import SearchResults from './SearchResults';
import Map from './Map';
import { useIpContext } from '../context';
function IpTracker() {
	const {
		input,
		setInput,
		data,
		IPAddress,
		location,
		timezone,
		ISP,
		coordinates,
		error,
		handleClick,
	} = useIpContext();



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
				{error ? (
					<p>
						Sorry, we couldn't find any information for the provided IP address.
					</p>
				) : (
					<SearchResults
						ipAddress={IPAddress}
						location={location}
						timezone={timezone}
						isp={ISP}
					/>
				)}
			</section>

			<Map coordinates={coordinates} />
		</>
	);
}

export default IpTracker;
