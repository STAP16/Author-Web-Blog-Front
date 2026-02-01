import { getUsers } from './get-users'

export const getUser = async loginToFind => {
	const users = await getUsers()
	const user = users.find(({ login }) => loginToFind === login)
	return user
}
