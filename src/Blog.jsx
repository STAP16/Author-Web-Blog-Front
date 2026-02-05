import { useState } from 'react'
import { Outlet } from 'react-router'
import styled from 'styled-components'
import { Footer, Header } from './components'

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100%;
	margin: 0 auto;

	background-color: #fff;
`

const Content = styled.div`
	padding: 120px 0;
`

const H2 = styled.h2`
	text-align: center;
`

function Blog() {
	return (
		<AppColumn>
			<Header />
			<Content>
				<H2>Контент страницы</H2>
				<Outlet />
			</Content>
			<Footer />
		</AppColumn>
	)
}

export default Blog
