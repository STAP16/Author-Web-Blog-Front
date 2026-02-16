import styled from 'styled-components'
import { Icon } from '../../../components'
import { CLOSE_MODAL, openModal, removePostAsync } from '../../../actions'
import { useDispatch, useSelector } from 'react-redux'
import { useServerRequest } from '../../../hooks'
import { useNavigate } from 'react-router'
import { checkAccess } from '../../../utils'
import { ROLE } from '../../../bff/constants'
import { selectUserRole } from '../../../selectors'

const SpecialPanelContainer = ({ id, className, publishedAt, editButton }) => {
	const dispatch = useDispatch()
	const requestServer = useServerRequest()
	const navigate = useNavigate()
	const roleId = useSelector(selectUserRole)

	const onPostRemove = id => {
		dispatch(
			openModal({
				text: 'Удалить пост?',
				onConfirm: () => {
					dispatch(removePostAsync(requestServer, id)).then(() => navigate('/'))
					dispatch(CLOSE_MODAL)
				},
				onCancel: () => dispatch(CLOSE_MODAL)
			})
		)
	}

	const isAdmin = checkAccess([ROLE.ADMIN], roleId)

	return (
		<div className={className}>
			<div className="published-at">
				{publishedAt && (
					<Icon
						id="fa-calendar-o"
						margin="0 8px 0 0"
						size="18px"
					/>
				)}
				{publishedAt}
			</div>

			{isAdmin && (
				<div className="buttons">
					{editButton}
					{publishedAt && (
						<div
							className="remove-comment"
							onClick={() => onPostRemove(id)}
						>
							<Icon
								id="fa-trash-o"
								size="21px"
								margin="0 0 0 10px"
							/>
						</div>
					)}
				</div>
			)}
		</div>
	)
}

export const SpecialPanel = styled(SpecialPanelContainer)`
	margin: 10px 0 20px;
	font-size: 18px;
	display: flex;
	justify-content: space-between;

	& i {
		position: relative;
		top: 5px;
	}
`
