import styled from 'styled-components'

import { ROLE } from '../../bff/constants'
import { useDispatch } from 'react-redux'
import { Icon } from '../icon/icon'

const UserRowContainer = ({ className, user }) => {
	const dispatch = useDispatch()

	const { id: userId, login, registeredAt, roleId: userRoleId } = user
	const roles = []
	const onRoleChange = () => {
		console.log('Change Role')
	}

	return (
		<div className="table-row">
			<div className="user-data">
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
			</div>
			<div onClick={() => dispatch(/*TODO: Вставить action delete user*/)}>
				<Icon
					id="fa-trash-o"
					margin="0 0 0 10px"
				/>
			</div>
		</div>
	)
}

export const UserRow = styled(UserRowContainer)``
