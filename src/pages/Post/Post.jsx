import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { PostContent } from './components/PostContent'
import { Comments } from './components/Comments'
import { useEffect, useLayoutEffect } from 'react'
import { useMatch, useParams } from 'react-router'
import { useServerRequest } from '../../hooks/use-server-request'
import { loadPostAsync, RESET_POST_DATA } from '../../actions'
import { selectPost } from '../../selectors'
import { PostForm } from './components/PostForm'

const PostContainer = ({ className }) => {
	const post = useSelector(selectPost)
	const isEditing = useMatch('/posts/:id/edit')

	const dispatch = useDispatch()
	const { id } = useParams()
	const requestServer = useServerRequest()

	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA)
	}, [dispatch])

	useEffect(() => {
		dispatch(loadPostAsync(requestServer, id))
	}, [dispatch, requestServer, id])

	return (
		<div className={className}>
			{isEditing ? (
				<PostForm post={post} />
			) : (
				<>
					<PostContent post={post} />
					<Comments
						comments={post.comments}
						postId={post.id}
					/>
				</>
			)}
		</div>
	)
}

export const Post = styled(PostContainer)`
	margin: 40px 0;
	padding: 0px 80px;
`
