import { getComments, getPosts } from '../api'
import { getCommentsCount } from '../utils/get-comments-count'

export const fetchPosts = async (searchPhrase, page, limit) => {
	const [{ posts, paginateParams }, comments] = await Promise.all([
		getPosts(searchPhrase, page, limit),
		getComments()
	])

	return {
		error: null,
		res: posts.map(post => ({
			...post,
			commentsCount: getCommentsCount(comments, post.id)
		})),
		paginateParams
	}
}
