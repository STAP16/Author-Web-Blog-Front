import { createUser } from './create-user'
import { getSession } from './generate-session'
import { getUser } from './get-user'

export const server = {
	async authorize(authLogin, authPassword) {
		const user = getUser(authLogin)

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

		// После нажатия logout ссесия опусташается
		return {
			error: null,
			res: getSession(user.role_id)
		}
	},

	async regitster(registerLogin, registerPassword) {
		const user = getUser(registerLogin)

		if (user) {
			return {
				error: 'Пользователь с таким именем уже существует',
				res: null
			}
		}

		await createUser(registerLogin, registerPassword)

		return {
			error: null,
			res: getSession(user.role_id)
		}
	}
}
