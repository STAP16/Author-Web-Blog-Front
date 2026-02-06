import styled from 'styled-components'
import { useEffect, useState } from 'react'

const FooterContainer = styled.div`
	height: 100px;
	background-color: #ffffff;
	box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.23);
	display: flex;
	justify-content: space-between;
	padding: 0 40px;
	font-size: 16px;
	font-weight: 700;
	align-items: center;
`

const AboutBlog = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0px;
	font-size: 16px;
`

const WeatherBlock = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0px;
`
const WeatherInfo = styled.div`
	background: #808080d4;
	color: #1c1c1c;
	width: 200px;
	padding: 10px;
	display: flex;
	justify-content: center;
`

export const Footer = () => {
	const [weatherData, setWeatherData] = useState({})
	const date = new Date().toLocaleString('ru-RU', {
		day: '2-digit',
		month: 'long',
		year: 'numeric'
	})
	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/3.0/onecall?lat=55.7504&lon=37.6175&units=metric&lang=ru&appid=012dada58760df570cd3afb66f314963'
		)
			.then(res => res.json())
			.then(data => setWeatherData(data))
	}, [])
	// Погода не отоброжается (API не работает)
	return (
		<FooterContainer>
			<AboutBlog>
				<span>Блог веб-разработчика</span>
				<span>stepakot0@gmail.com</span>
			</AboutBlog>
			<WeatherBlock>
				<span>{date}</span>
				<WeatherInfo>Погода</WeatherInfo>
			</WeatherBlock>
		</FooterContainer>
	)
}
