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
import { initialPostState } from '../../reducers/post_reducer'

const PostContainer = ({ className }) => {
	const post = useSelector(selectPost)
	const isEditing = useMatch('/posts/:id/edit')
	const isNewPost = useMatch('/posts/new')

	const dispatch = useDispatch()
	const { id } = useParams()
	const requestServer = useServerRequest()

	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA)
	}, [dispatch, isNewPost])

	useEffect(() => {
		if (isNewPost) {
			return
		}
		dispatch(loadPostAsync(requestServer, id))
	}, [dispatch, requestServer, id, isNewPost])

	return (
		<div className={className}>
			{isNewPost || isEditing ? (
				<PostForm
					post={post}
					isNewPost={isNewPost}
				/>
			) : (
				<>
					<PostContent
						post={isNewPost ? initialPostState : post}
						isNewPost={isNewPost}
					/>
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
