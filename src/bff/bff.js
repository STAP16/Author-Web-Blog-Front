export const server = {
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
		return {
			error: null,
			res: session
		}
	}
}
