import {
	authorize,
	fetchUsers,
	logout,
	regitster,
	updateUserRole,
	removeUser,
	fetchRoles
} from './operations'

export const server = {
	authorize,
	logout,
	regitster,
	fetchRoles,
	fetchUsers,
	updateUserRole,
	removeUser
}
