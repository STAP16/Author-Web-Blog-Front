import { getDate } from '../utils/generate-date'

export const addComment = async (userLogin, userId, postId, content) => {
	fetch(`http://localhost:3000/comments`, {
		method: 'POST',
		body: JSON.stringify({
			user_login: userLogin,
			author_id: userId,
			post_id: postId,
			content,
			published_at: getDate()
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	})
}
