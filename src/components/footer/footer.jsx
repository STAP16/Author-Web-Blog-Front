import { useEffect, useState } from 'react'

export const Footer = () => {
	const [weatherData, setWeatherData] = useState({})

	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/3.0/onecall?lat=55.7504&lon=37.6175&units=metric&lang=ru&appid=012dada58760df570cd3afb66f314963'
		)
			.then(res => res.json())
			.then(data => setWeatherData(data))
	}, [])

	console.log(weatherData)

	return (
		<div>
			<h2>Футер страницы</h2>
		</div>
	)
}
