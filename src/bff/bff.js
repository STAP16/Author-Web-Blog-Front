const date = new Date().toISOString().substring(0, 16).replace('T', ' ').replace('Z', '')

export const server = {
	async getSession() {
		const session = {
			logout() {
				Object.keys(session).forEach(key => {
					delete session[key]
				})
			},
			removeComment() {
				console.log('Удалить коммент')
			}
		}

		return session
	},

	async authorize(authLogin, authPassword) {
		const users = await fetch('http://localhost:3000/users').then(() => loadedUsers.json())
		const user = users.find(({ login }) => authLogin === login)

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
			res: this.getSession()
		}
	},

	async regitster(registerLogin, registerPassword) {
		const isUserLoginExists = await fetch('http://localhost:3000/users')
			.then(() => loadedUsers.json())
			.then(users => users.some(({ login }) => login === registerLogin))

		if (isUserLoginExists) {
			return {
				error: 'Пользователь с таким именем уже существует',
				res: null
			}
		}

		const newUser = {
			login: registerLogin,
			password: registerPassword,
			registed_at: date,
			role_id: 1
		}

		await fetch('http://localhost:3000/users', {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: {
				'Content-Type': 'application/json'
			}
		})

		return {
			error: null,
			res: this.getSession()
		}
	}
}
