import React, { useState } from 'react';

export default function FetchApi() {
	const apiKey = '01abbb72af010a0f3c7dcf65f26e9a51';
	const [weatherData, setWeatherData] = useState([{}]);
	const apiGet = () => {
		fetch('https://openlibrary.org/works/editions.json')
			.then(response => response.json())
			.then(json => console.log(json));
	};

	return <div>{apiGet}</div>;
}
