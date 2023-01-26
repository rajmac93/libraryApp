import { useState } from 'react';

import './App.css';

function App() {
	const apiKey = '01abbb72af010a0f3c7dcf65f26e9a51';
	const lang = 'pl';
	const [weatherData, setWeatherData] = useState([{}]);
	const [city, setCity] = useState('');

	const getWeather = e => {
		if (e.key === 'Enter') {
			fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=${apiKey}&units=metric`
			)
				.then(response => response.json())
				.then(data => setWeatherData(data));
		}
	};

	return (
		<>
			<div className='container'>
				<input
					className='input'
					placeholder='Wpisz miasto...'
					onChange={e => setCity(e.target.value)}
					value={city}
					onKeyDown={getWeather}
				/>
				{typeof weatherData.main === 'undefined' ? (
					<div>
						<h1>Witaj w aplikacji WeatherApp</h1>
					</div>
				) : (
					<div>
						<p>{weatherData.name}</p>
						<p>{`${Math.round(
							weatherData.main.temp
						)}°C`}</p>
						<p>{weatherData.weather[0].main}</p>
					</div>
				)}
				{weatherData.cod === '404' ? (
					<p>Nie ma takiego miasta.</p>
				) : (
					<></>
				)}
			</div>
		</>
	);
}

export default App;
