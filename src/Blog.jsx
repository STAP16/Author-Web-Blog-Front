import { useLayoutEffect, useState } from 'react'
import { Outlet } from 'react-router'
import styled from 'styled-components'
import { Footer, Header } from './components'
import { setUser } from './actions'
import { useDispatch } from 'react-redux'

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
	padding: 120px 0 20px;
`

function Blog() {
	const dispatch = useDispatch()
	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData')

		const currentUserData = JSON.parse(currentUserDataJSON)

		if (!currentUserData) return

		dispatch(setUser({ ...currentUserData, roleId: Number(currentUserData.roleId) }))
	}, [dispatch])

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
