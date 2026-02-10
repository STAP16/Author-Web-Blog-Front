import { transformUsers } from '../transformers'

export const getUsers = async () => {
	return await fetch('http://localhost:3000/users')
		.then(loadedUsers => loadedUsers.json())
		.then(loadedUsers => transformUsers(loadedUsers))
}
