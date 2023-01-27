import React from 'react';

export default function WeatherInfo({ weatherData }) {
	return (
		<div>
			<p>
				<strong>Miasto:</strong> {weatherData.name}
			</p>
			<p>
				<strong>Temperatura: </strong>
				{Math.round(weatherData.main.temp)}°C
			</p>
			<p>
				<strong>Temperatura odczuwalna: </strong>
				{weatherData.main.feels_like}°C
			</p>
			<p>{weatherData.weather[0].description}</p>
		</div>
	);
}
