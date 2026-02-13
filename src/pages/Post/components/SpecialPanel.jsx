import styled from 'styled-components'
import { Icon } from '../../../components'
import { CLOSE_MODAL, openModal, removePostAsync } from '../../../actions'
import { useDispatch } from 'react-redux'
import { useServerRequest } from '../../../hooks'
import { useNavigate } from 'react-router'

const SpecialPanelContainer = ({ id, className, publishedAt, editButton }) => {
	const dispatch = useDispatch()
	const requestServer = useServerRequest()
	const navigate = useNavigate()

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

	return (
		<div className={className}>
			<div className="published-at">
				<Icon
					id="fa-calendar-o"
					margin="0 8px 0 0"
					size="18px"
				/>
				{publishedAt}
			</div>
			<div className="buttons">
				{editButton}
				<div
					className="remove-comment"
					onClick={() => onPostRemove(id)}
				>
					<Icon
						id="fa-trash-o"
						size="21px"
					/>
				</div>
			</div>
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
