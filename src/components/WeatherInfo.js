import React from 'react';

export default function WeatherInfo({ weatherData }) {
	return (
		<div>
			<p>{weatherData.name}</p>
			<p>{`${Math.round(weatherData.main.temp)}°C`}</p>
			<p>
				Temperatura odczuwalna:{' '}
				{weatherData.main.feels_like}
			</p>
			<p>{weatherData.weather[0].main}</p>
		</div>
	);
}
