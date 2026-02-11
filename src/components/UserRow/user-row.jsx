import styled from 'styled-components'

import { Icon } from '../../components'
import { TableRow } from '../../components/TableRow/table-row'
import { useState } from 'react'
import { useServerRequest } from '../../hooks'

const UserRowContainer = ({ className, user, roles, roleId: userRoleId, onUserRemove }) => {
	const requestServer = useServerRequest()

	const [initialRoleId, setInitialRoleId] = useState(userRoleId)
	const [selectedRoleId, setSelectedRoleId] = useState(userRoleId)

	const { id: userId, login, registeredAt } = user
	const onRoleChange = ({ target }) => {
		setSelectedRoleId(Number(target.value))
	}

	const onRoleSave = (userId, newUserRoleId) => {
		requestServer('updateUserRole', userId, newUserRoleId).then(() => {
			setInitialRoleId(newUserRoleId)
		})
	}

	return (
		<div className={className}>
			<TableRow>
				<div className="login-column">{login}</div>
				<div className="registered-at-column">{registeredAt}</div>
				<select
					value={selectedRoleId}
					onChange={onRoleChange}
				>
					{roles.map(({ id: roleId, name: roleName }) => (
						<option
							key={roleId}
							value={roleId}
						>
							{roleName}
						</option>
					))}
				</select>
				<div
					className={
						selectedRoleId !== initialRoleId ? 'enabled-save-button' : 'disabled-save-button'
					}
					onClick={() => onRoleSave(userId, selectedRoleId)}
				>
					<Icon
						id="fa-floppy-o"
						margin="0 0 0 10px"
					/>
				</div>
			</TableRow>
			<div
				className="delete-user"
				onClick={onUserRemove}
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

	.enabled-save-button {
		color: #000000;
	}

	.disabled-save-button {
		color: #00000032;
		cursor: default;
	}
`
