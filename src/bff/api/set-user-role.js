export const setUserRole = (userId, roleId) => {
	fetch(`http://localhost:3000/users/${userId}`, {
		method: 'PATCH',
		body: JSON.stringify({ role_id: roleId }),
		headers: {
			'Content-Type': 'application/json'
		}
	})
}
