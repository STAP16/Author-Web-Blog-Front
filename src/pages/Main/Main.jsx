import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { PostCard } from './components/PostCard'
import { useServerRequest } from '../../hooks'
import { Pagination } from './components/Pagination'
import { PAGINATION_LIMIT } from '../../bff/constants'

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([])
	const [page, setPage] = useState(1)
	const [lastPage, setLastPage] = useState(1)

	const requestServer = useServerRequest()

	useEffect(() => {
		requestServer('fetchPosts', page, PAGINATION_LIMIT).then(posts => {
			const {
				paginateParams: { last, prev, pages, next }
			} = posts
			setPosts(posts.res)
			setLastPage(last)
		})
	}, [requestServer, page])

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

			{lastPage > 1 && (
				<Pagination
					setPage={setPage}
					page={page}
					lastPage={lastPage}
				/>
			)}
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
