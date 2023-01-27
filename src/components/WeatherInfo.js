import React from 'react';

export default function WeatherInfo(props) {
	return (
		<div>
			<p>{props.name}</p>
			<p>{`${Math.round(props.main.temp)}°C`}</p>
			<p>Temperatura odczuwalna: {props.main.feels_like}</p>
			<p>{props.weather[0].main}</p>
		</div>
	);
}
