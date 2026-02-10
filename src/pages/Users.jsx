import styled from 'styled-components'
import { H2, TableRow } from '../components'
import { useDispatch } from 'react-redux'
import { UserRow } from '../components/UserRow/user-row'

const UsersContainer = ({ className }) => {
	const users = []
	const dispatch = useDispatch()

	return (
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
						user={user}
						key={user.id}
					/>
				))}
			</div>
		</div>
	)
}

export const Users = styled(UsersContainer)`
	display: flex;
	margin: 0 auto;
	flex-direction: column;
	align-items: center;
	width: 570px;
`
