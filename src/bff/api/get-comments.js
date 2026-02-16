import { transformComment } from '../transformers/comment-transformer'

const ALL_COMMENTS_URL = `http://localhost:3000/comments`
const POST_COMMENTS_URL = 'http://localhost:3000/comments?post_id='

export const getComments = async postId => {
	const url = postId === undefined ? ALL_COMMENTS_URL : POST_COMMENTS_URL + String(postId)
	console.log(postId)
	console.log(url)
	return fetch(url).then(loadedComments =>
		loadedComments
			.json()
			.then(loadedComments => loadedComments.map(comment => transformComment(comment)))
	)
}
