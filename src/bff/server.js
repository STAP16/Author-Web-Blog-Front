import { createUser } from './create-user'
import { getUser } from './get-user'
import { sessions } from './sessions'

export const server = {
	async authorize(authLogin, authPassword) {
		const user = await getUser(authLogin)
		if (!user) {
			return {
				error: 'Пользователь не найден',
				res: null
			}
		}

		if (user.password !== authPassword) {
			return {
				error: 'Неверный пароль',
				res: null
			}
		}

		return {
			error: null,
			res: {
				id: user.id,
				login: user.login,
				roleId: user.role_id,
				session: sessions.create(user)
			}
		}
	},

	async regitster(registerLogin, registerPassword) {
		const existedUser = await getUser(registerLogin)

		if (existedUser) {
			return {
				error: 'Пользователь с таким именем уже существует',
				res: null
			}
		}

		const user = await createUser(registerLogin, registerPassword)
		console.log(user)
		return {
			error: null,
			res: {
				id: user.id,
				login: user.login,
				roleId: user.role_id,
				session: sessions.create(user)
			}
		}
	},

	async logout(session) {
		sessions.remove(session)
	}
}
