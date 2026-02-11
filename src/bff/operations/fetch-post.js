import { getComments, getPost } from '../api'
import { ROLE } from '../constants/role-constants'

export const fetchPost = async postId => {
	const post = await getPost(postId)
	const comments = await getComments(postId)

	return {
		error: null,
		res: { ...post, comments }
	}
}
