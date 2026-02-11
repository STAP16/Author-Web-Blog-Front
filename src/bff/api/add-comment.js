import { getDate } from '../utils/generate-date'

export const addComment = async (userId, postId, content) => {
	fetch(`http://localhost:3000/comments`, {
		method: 'POST',
		body: JSON.stringify({ author_id: userId, post_id: postId, content, published_at: getDate() }),
		headers: {
			'Content-Type': 'application/json'
		}
	})
}
