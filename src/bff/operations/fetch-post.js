import { getPost } from '../api'
import { ROLE } from '../constants/role-constants'

export const fetchPost = async postId => {
	const post = await getPost(postId)

	return {
		error: null,
		res: post
	}
}
