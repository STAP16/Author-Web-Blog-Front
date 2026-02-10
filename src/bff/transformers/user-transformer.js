export const transformUser = dbUser => ({
	id: dbUser.id,
	login: dbUser.login,
	registeredAt: dbUser.registred_at,
	roleId: dbUser.role_id,
	password: dbUser.password
})
