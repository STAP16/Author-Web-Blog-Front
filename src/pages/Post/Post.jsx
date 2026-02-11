import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { PostContent } from './components/PostContent'
import { Comments } from './components/Comments'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useServerRequest } from '../../hooks/use-server-request'
import { loadPostAsync } from '../../actions'
import { selectPost } from '../../selectors'

const PostContainer = ({ className }) => {
	const post = useSelector(selectPost)

	const dispatch = useDispatch()
	const { id } = useParams()
	const requestServer = useServerRequest()

	useEffect(() => {
		dispatch(loadPostAsync(requestServer, id))
	}, [dispatch, requestServer, id])

	return (
		<div className={className}>
			<PostContent post={post} />
			<Comments comments={post.comments} />
		</div>
	)
}

export const Post = styled(PostContainer)`
	margin: 40px 0;
	padding: 0px 80px;
`
