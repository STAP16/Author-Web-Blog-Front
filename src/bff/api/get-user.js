export const getUser = async loginToFind =>
	fetch(`http://localhost:3000/users?login=${loginToFind}`)
		.then(loadedUser => loadedUser.json())
		.then(
			([loadedUser]) =>
				loadedUser && {
					id: loadedUser.id,
					login: loadedUser.login,
					registeredAt: loadedUser.registred_at,
					roleId: loadedUser.role_id,
					password: loadedUser.password
				}
		)
