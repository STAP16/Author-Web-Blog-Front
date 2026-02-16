import { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { PostCard } from './components/PostCard'
import { useServerRequest } from '../../hooks'
import { Pagination } from './components/Pagination'
import { PAGINATION_LIMIT } from '../../bff/constants'
import { Search } from './components/Search'
import { debounce } from './utils/debounce'

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([])
	const [page, setPage] = useState(1)
	const [lastPage, setLastPage] = useState(1)
	const [shouldSearch, setShouldSearch] = useState(false)
	const [searchPhrase, setSearchPhrase] = useState('')

	const requestServer = useServerRequest()

	useEffect(() => {
		requestServer('fetchPosts', searchPhrase, page, PAGINATION_LIMIT).then(posts => {
			const {
				paginateParams: { last }
			} = posts
			setPosts(posts.res)
			setLastPage(last)
		})
	}, [requestServer, page, shouldSearch])

	const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 2000), [])

	const onSearch = ({ target }) => {
		setSearchPhrase(target.value)
		setPage(1)
		startDelayedSearch(prev => !prev)
	}

	return (
		<div className={className}>
			<div className="posts-and-search">
				<Search
					onChange={onSearch}
					searchPhrase={searchPhrase}
				/>
				{posts.length ? (
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
				) : (
					<div className="no-posts-found">Статьи не найдены</div>
				)}
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
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	& .post-list {
		display: flex;
		flex-wrap: wrap;
		padding: 20px 20px 80px;
	}

	& .no-posts-found {
		text-align: center;
	}
`
