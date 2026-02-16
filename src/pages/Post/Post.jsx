import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { PostContent } from './components/PostContent'
import { Comments } from './components/Comments'
import { useEffect, useLayoutEffect, useState } from 'react'
import { useMatch, useParams } from 'react-router'
import { useServerRequest } from '../../hooks/use-server-request'
import { loadPostAsync, RESET_POST_DATA } from '../../actions'
import { selectPost } from '../../selectors'
import { PostForm } from './components/PostForm'
import { initialPostState } from '../../reducers/post_reducer'
import { Error, PrivateContent } from '../../components'
import { ROLE } from '../../bff/constants'

const PostContainer = ({ className }) => {
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const post = useSelector(selectPost)
	const isEditing = !!useMatch('/posts/:id/edit')
	const isNewPost = !!useMatch('/posts/new')

	const dispatch = useDispatch()
	const { id } = useParams()
	const requestServer = useServerRequest()

	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA)
	}, [dispatch, isNewPost])

	useEffect(() => {
		if (isNewPost) {
			setIsLoading(false)
			return
		}
		dispatch(loadPostAsync(requestServer, id)).then(postData => {
			setError(postData.error)
			setIsLoading(false)
		})
	}, [dispatch, requestServer, id, isNewPost])

	if (isLoading) {
		return null
	}

	const conditionToViewPostsPage =
		isNewPost || isEditing ? (
			<PrivateContent
				access={[ROLE.ADMIN]}
				serverError={error}
			>
				<div className={className}>
					<PostForm
						post={post}
						isNewPost={isNewPost}
					/>
				</div>
			</PrivateContent>
		) : (
			<div className={className}>
				<PostContent
					post={isNewPost ? initialPostState : post}
					isNewPost={isNewPost}
				/>
				<Comments
					comments={post.comments}
					postId={post.id}
				/>
			</div>
		)

	return error ? <Error error={error} /> : conditionToViewPostsPage
}

export const Post = styled(PostContainer)`
	margin: 40px 0;
	padding: 0px 80px;
`
