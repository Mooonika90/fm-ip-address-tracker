import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Map from './Map';

function IpTracker() {
	return (
		<>
			<section>
				<h1>IP Address Tracker</h1>

				<SearchBar />
				<SearchResults />
			</section>

			<Map />
		</>
	);
}

export default IpTracker;
