import { transformComment } from '../transformers/comment-transformer'

export const getComments = async postId =>
	fetch(`http://localhost:3000/comments?post_id=${postId}`).then(loadedComments =>
		loadedComments
			.json()
			.then(loadedComments => loadedComments.map(comment => transformComment(comment)))
	)
