import styled from 'styled-components'

import { useDispatch } from 'react-redux'
import { Icon } from '../../components'
import { TableRow } from '../../components/TableRow/table-row'
const UserRowContainer = ({ className, user, roles }) => {
	const dispatch = useDispatch()

	const { id: userId, login, registeredAt, roleId: userRoleId } = user
	const onRoleChange = () => {
		console.log('Change Role')
	}

	return (
		<div className={className}>
			<TableRow>
				<div className="login-column">{login}</div>
				<div className="registered-at-column">{registeredAt}</div>

				<select
					value={userRoleId}
					onChange={onRoleChange}
				>
					{roles.map(({ id: roleId, name: roleName }) => (
						<option value={roleId}>{roleName}</option>
					))}
				</select>
				<div onClick={() => dispatch(/*TODO: Вставить action delete user*/)}>
					<Icon
						id="fa-floppy-o"
						margin="0 0 0 10px"
					/>
				</div>
			</TableRow>
			<div
				className="delete-user"
				onClick={() => dispatch(/*TODO: Вставить action delete user*/)}
			>
				<Icon
					id="fa-trash-o"
					margin="0 0 0 10px"
				/>
			</div>
		</div>
	)
}

export const UserRow = styled(UserRowContainer)`
	display: flex;
	.delete-user {
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 1px solid #e8e8e8;
	}
`
