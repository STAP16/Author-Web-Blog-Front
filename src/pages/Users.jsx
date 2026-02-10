import styled from 'styled-components'
import { H2 } from '../components'
import { useDispatch } from 'react-redux'
import { UserRow } from '../components/UserRow/user-row'

const UsersContainer = ({ className }) => {
	const users = []
	const dispatch = useDispatch()

	return (
		<div className={className}>
			<H2>Пользователи</H2>
			<div>
				<div className="table-header">
					<div className="login-column">Логин</div>
					<div className="registered-at-column">Дата регистрации</div>
					<div className="role-column">Роль</div>
				</div>
				{users.map(user => (
					<UserRow
						user={user}
						key={user.id}
					/>
				))}
			</div>
		</div>
	)
}

export const Users = styled(UsersContainer)``
