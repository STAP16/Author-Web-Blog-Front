import { createUser, getUser } from '../api'
import { sessions } from '../sessions'

export const regitster = async (registerLogin, registerPassword) => {
	const existedUser = await getUser(registerLogin)

	if (existedUser) {
		return {
			error: 'Пользователь с таким именем уже существует',
			res: null
		}
	}

	const user = await createUser(registerLogin, registerPassword)
	return {
		error: null,
		res: {
			id: user.id,
			login: user.login,
			roleId: user.role_id,
			session: sessions.create(user)
		}
	}
}
