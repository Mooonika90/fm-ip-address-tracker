function SearchResults({ ipAddress, isp, location, timezone }) {
	console.log(isp);
	return (
		<article>
			<div>
				<h2>ip address</h2>
				<h3>{ipAddress}</h3>
			</div>
			<div>
				<h2>location</h2>
				<h3>{location}</h3>
			</div>
			<div>
				<h2>timezone</h2>
				<h3>{timezone}</h3>
			</div>
			<div>
				<h2>isp</h2>
				<h3>{isp}</h3>
			</div>
		</article>
	);
}

export default SearchResults;
