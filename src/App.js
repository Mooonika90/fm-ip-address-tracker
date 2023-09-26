import './index.css';
import { IpProvider } from './context'
import IpTracker from './components/IpTracker';

function App() {
	return (
		<IpProvider>
			<main>
				<IpTracker />
			</main>
		</IpProvider>
	);
}

export default App;
