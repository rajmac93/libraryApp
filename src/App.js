import FetchApi from './components/API/FetchApi';

import './App.css';

function App() {
	return (
		<>
			<div className='container'>
				<FetchApi />
				<input
					className='input'
					placeholder='Wpisz miasto...'
				/>
			</div>
		</>
	);
}

export default App;
