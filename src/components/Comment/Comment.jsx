import styled from 'styled-components'
import { Icon } from '../icon/icon'
import { useServerRequest } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { CLOSE_MODAL, openModal, removeCommentAsync } from '../../actions'
import { checkAccess } from '../../utils'
import { ROLE } from '../../bff/constants'
import { selectUserRole } from '../../selectors'

const CommentContainer = ({ className, author, content, publishedAt, commentId, postId }) => {
	const requestServer = useServerRequest()
	const dispatch = useDispatch()
	const roleId = useSelector(selectUserRole)
	const onCommentRemove = id => {
		dispatch(
			openModal({
				text: 'Удалить комментарий?',
				onConfirm: () => {
					dispatch(removeCommentAsync(requestServer, postId, id))
					dispatch(CLOSE_MODAL)
				},
				onCancel: () => dispatch(CLOSE_MODAL)
			})
		)
		if (!content) {
			return
		}
	}

	const isRoleCanDeletedComments = checkAccess([ROLE.ADMIN, ROLE.MODERATOR], roleId)

	return (
		<div className={className}>
			<div className="comment">
				<div className="information-panel">
					<div className="author">
						<Icon
							id="fa-user-circle-o"
							size="21px"
							margin="0 10px 0 0"
						/>

						{author}
					</div>
					<div className="published-at">
						<Icon
							id="fa-calendar-o"
							size="18px"
							margin="0 10px 0 0"
						/>
						{publishedAt}
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>
			{isRoleCanDeletedComments && (
				<div
					className="delete-comment"
					onClick={() => onCommentRemove(commentId)}
				>
					<Icon
						id="fa-trash-o"
						size="21px"
						margin="0 0px 0 10px"
					/>
				</div>
			)}
		</div>
	)
}

export const Comment = styled(CommentContainer)`
	display: flex;
	margin-top: 10px;

	& .comment {
		border: 1px solid #000;
		width: 550px;
		padding: 5px 10px;
	}

	& .information-panel {
		display: flex;
		justify-content: space-between;
	}

	& .author {
		display: flex;
	}

	& .published-at {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	& .published-at i {
		margin: 0 -1px -1px;
	}

	& .delete-comment {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	& .delete-comment i {
		cursor: pointer;
	}
`
