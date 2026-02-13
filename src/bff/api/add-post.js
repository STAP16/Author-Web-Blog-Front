import { getDate } from '../utils/generate-date'

export const addPost = ({ imageUrl, title, content }) =>
	fetch(`http://localhost:3000/posts`, {
		method: 'POST',
		body: JSON.stringify({
			image_url: imageUrl,
			title,
			content,
			published_at: getDate()
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(createdPost => {
		return createdPost.json()
	})
