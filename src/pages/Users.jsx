import styled from 'styled-components'
import { PrivateContent, H2, TableRow } from '../components'
import { UserRow } from '../components/UserRow/user-row'
import { useServerRequest } from '../hooks'
import { useEffect, useState } from 'react'
import { ROLE } from '../bff/constants'
import { checkAccess } from '../utils'
import { useSelector } from 'react-redux'
import { selectUserRole } from '../selectors'

const UsersContainer = ({ className }) => {
	const [roles, setRoles] = useState([])
	const [users, setUsers] = useState([])
	const userRole = useSelector(selectUserRole)
	const [errorMessage, setErrorMessage] = useState(null)
	const [shouldUpdateUserList, setShouldUpdateUserList] = useState(false)
	const requestServer = useServerRequest()

	useEffect(() => {
		if (!checkAccess([ROLE.ADMIN], userRole)) {
			return
		}
		Promise.all([requestServer('fetchUsers'), requestServer('fetchRoles')]).then(
			([usersRes, rolesRes]) => {
				if (usersRes.error || rolesRes.error) {
					setErrorMessage(usersRes.error || rolesRes.error)
					return
				}
				setRoles(rolesRes.res)
				setUsers(usersRes.res)
			}
		)
	}, [requestServer, shouldUpdateUserList])

	const onUserRemove = userId => {
		if (!checkAccess([ROLE.ADMIN], userRole)) {
			return
		}
		requestServer('removeUser', userId).then(() => {
			setShouldUpdateUserList(prev => !prev)
		})
	}

	return (
		<PrivateContent
			access={[ROLE.ADMIN]}
			serverError={errorMessage}
		>
			<div className={className}>
				<H2>Пользователи</H2>
				<div>
					<TableRow>
						<div className="login-column">Логин</div>
						<div className="registered-at-column">Дата регистрации</div>
						<div className="role-column">Роль</div>
					</TableRow>
					{users.map(user => (
						<UserRow
							onUserRemove={() => onUserRemove(user.id)}
							user={user}
							key={user.id}
							roles={roles.filter(({ id: roleId }) => Number(roleId) !== ROLE.GUEST)}
							roleId={user.roleId}
						/>
					))}
				</div>
			</div>
		</PrivateContent>
	)
}

export const Users = styled(UsersContainer)`
	display: flex;
	margin: 0 auto;
	flex-direction: column;
	align-items: center;
	width: 570px;
`
