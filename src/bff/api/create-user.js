import { getDate } from '../utils/generate-date'

const date = getDate()
export const createUser = async (login, password) => {
	const newUser = {
		login,
		password,
		registed_at: date,
		role_id: 1
	}

	return fetch('http://localhost:3000/users', {
		method: 'POST',
		body: JSON.stringify(newUser),
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(createdUser => createdUser.json())
}
