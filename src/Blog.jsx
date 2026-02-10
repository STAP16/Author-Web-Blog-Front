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

const Page = styled.div`
	padding: 120px 0;
`

function Blog() {
	return (
		<AppColumn>
			<Header />
			<Page>
				<Outlet />
			</Page>
			<Footer />
		</AppColumn>
	)
}

export default Blog
