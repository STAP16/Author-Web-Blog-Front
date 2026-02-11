import { useState } from 'react'
import styled from 'styled-components'
import { Comment, Icon } from '../../../components'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserId } from '../../../selectors'
import { useServerRequest } from '../../../hooks'
import { addCommentAsync } from '../../../actions'

const CommentsContainer = ({ className, comments, postId }) => {
	const [newComment, setNewComment] = useState('')
	const userId = useSelector(selectUserId)

	const dispatch = useDispatch()
	const requestServer = useServerRequest()

	const onNewCommentAdd = (userId, postId, content) => {
		dispatch(addCommentAsync(requestServer, userId, postId, content))
	}

	return (
		<div className={className}>
			<div className="new-comment">
				<textarea
					name="comment"
					value={newComment}
					placeholder="Комментарий..."
					onChange={({ target }) => setNewComment(target.value)}
				/>
				<div
					className={newComment ? 'sent-comment-enabled' : 'sent-comment-disabled'}
					onClick={() => onNewCommentAdd(userId, postId, newComment)}
				>
					<Icon
						id="fa-paper-plane-o"
						margin="0 0 0 10px"
						size="18px"
					/>
				</div>
			</div>
			<div className="comments">
				{comments.map(({ id, author, content, published_at: publishedAt }) => (
					<Comment
						key={id}
						author={author}
						content={content}
						publishedAt={publishedAt}
					/>
				))}
			</div>
		</div>
	)
}

export const Comments = styled(CommentsContainer)`
	width: 580px;
	display: flex;
	margin: 20px auto;

	& .new-comment {
		display: flex;
		width: 100%;
		margin: 20px 0 0;
	}

	& .new-comment textarea {
		resize: none;
		width: 100%;
		height: 120px;
		font-size: 18px;
		padding: 10px;
	}

	& .sent-comment-enabled {
		& i {
			color: #000000;
			cursor: pointer;
		}
	}

	& .sent-comment-disabled {
		& i {
			color: #00000032;
			cursor: default;
		}
	}
`
