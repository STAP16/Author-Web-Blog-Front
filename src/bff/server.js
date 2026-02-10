import { authorize, fetchUsers, logout, regitster } from './operations'
import { fetchRoles } from './operations/fetch-roles'

export const server = {
	authorize,
	logout,
	regitster,
	fetchRoles,
	fetchUsers
}
