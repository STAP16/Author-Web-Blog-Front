import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { PostCard } from './components/PostCard'
import { useServerRequest } from '../../hooks'

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([])

	const requestServer = useServerRequest()

	useEffect(() => {
		requestServer('fetchPosts').then(posts => {
			setPosts(posts.res)
		})
	}, [requestServer])

	return (
		<div className={className}>
			<div className="search-field"></div>
			<div className="post-list">
				{posts.map(({ id, title, publishedAt, commentsCount, imageUrl }) => (
					<PostCard
						key={id}
						id={id}
						title={title}
						publishedAt={publishedAt}
						commentsCount={commentsCount}
						imageUrl={imageUrl}
					/>
				))}
			</div>
		</div>
	)
}

export const Main = styled(MainContainer)`
	padding: 20px;
	& .post-list {
		display: flex;
		flex-wrap: wrap;
	}
`
