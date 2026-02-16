export const addSession = (hash, user) => {
	return fetch(`http://localhost:3000/sessions`, {
		method: 'POST',
		body: JSON.stringify({ hash, user }),
		headers: {
			'Content-Type': 'application/json'
		}
	})
}
