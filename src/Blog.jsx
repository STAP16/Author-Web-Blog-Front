import { useState } from 'react'
import { Outlet } from 'react-router'
import styled from 'styled-components'

const Content = styled.div`
	padding: 120px 0;
`

const H2 = styled.h2`
	text-align: center;
`

const Header = () => <h2>Шапка страницы</h2>

const Footer = () => <h2>Футер страницы</h2>

function Blog() {
	return (
		<>
			<Header />
			<Content>
				<H2>Контент страницы</H2>
				<Outlet />
			</Content>
			<Footer />
		</>
	)
}

export default Blog
