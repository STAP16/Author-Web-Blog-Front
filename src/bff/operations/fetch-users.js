import { getUsers } from '../api'
import { ROLE } from '../constants/role-constants'
import { sessions } from '../sessions'

export const fetchUsers = async hash => {
	const accessRoles = [ROLE.ADMIN]

	const access = await sessions.access(hash, accessRoles)

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null
		}
	}

	const users = await getUsers()
	return {
		error: null,
		res: users
	}
}
