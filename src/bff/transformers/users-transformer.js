export const transformUsers = dbUsers =>
	dbUsers.map(({ id, login, role_id, registed_at }) => {
		return {
			id,
			login,
			roleId: role_id,
			registeredAt: registed_at
		}
	})
