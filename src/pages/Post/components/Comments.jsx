import { useState } from 'react'
import styled from 'styled-components'
import { Comment, Icon } from '../../../components'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserId, selectUserLogin } from '../../../selectors'
import { useServerRequest } from '../../../hooks'
import { addCommentAsync } from '../../../actions'

const CommentsContainer = ({ className, comments, postId }) => {
	const [newComment, setNewComment] = useState('')
	const userId = useSelector(selectUserId)
	const userLogin = useSelector(selectUserLogin)

	const dispatch = useDispatch()
	const requestServer = useServerRequest()

	const onNewCommentAdd = (userLogin, userId, postId, content) => {
		if (!content) {
			return
		}
		setNewComment('')

		dispatch(addCommentAsync(requestServer, userLogin, userId, postId, content))
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
					onClick={() => onNewCommentAdd(userLogin, userId, postId, newComment)}
				>
					<Icon
						id="fa-paper-plane-o"
						margin="0 0 0 10px"
						size="18px"
					/>
				</div>
			</div>
			<div className="comments">
				{comments.map(({ id, userLogin, content, publishedAt }) => (
					<Comment
						key={id}
						author={userLogin}
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
	margin: 20px auto;

	& .new-comment {
		display: flex;
		width: 100%;
		margin: 20px 0 0;
	}

	& .new-comment textarea {
		resize: none;
		width: 550px;
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
