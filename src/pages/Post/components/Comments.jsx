import PropTypes from 'prop-types'
import { useState } from 'react'
import styled from 'styled-components'
import { Comment, Icon } from '../../../components'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserId, selectUserLogin, selectUserRole } from '../../../selectors'
import { useServerRequest } from '../../../hooks'
import { addCommentAsync } from '../../../actions'
import { PROP_TYPE, ROLE } from '../../../bff/constants'
import { checkAccess } from '../../../utils'

const CommentsContainer = ({ className, comments, postId }) => {
	const [newComment, setNewComment] = useState('')
	const userId = useSelector(selectUserId)
	const userLogin = useSelector(selectUserLogin)
	const roleId = useSelector(selectUserRole)

	const dispatch = useDispatch()
	const requestServer = useServerRequest()

	const onNewCommentAdd = (userLogin, userId, postId, content) => {
		if (!content) {
			return
		}
		setNewComment('')

		dispatch(addCommentAsync(requestServer, userLogin, userId, postId, content))
	}

	const isNotGuest = checkAccess([ROLE.ADMIN, ROLE.READER, ROLE.MODERATOR], roleId)
	return (
		<div className={className}>
			{isNotGuest && (
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
			)}
			<div className="comments">
				{comments.map(({ id, userLogin, content, publishedAt }) => (
					<Comment
						key={id}
						author={userLogin}
						postId={postId}
						commentId={id}
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

Comments.propTypes = {
	comments: PropTypes.arrayOf(PROP_TYPE.COMMENT).isRequired,
	postId: PropTypes.number.isRequired
}
