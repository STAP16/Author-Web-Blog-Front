import { transformPost } from '../transformers'

export const getPosts = async (page, limit) => {
	return fetch(`http://localhost:3000/posts?_page=${page}&_per_page=${limit}`)
		.then(loadedPosts => loadedPosts.json())
		.then(loadedPosts => {
			const { prev, first, pages, next, last } = loadedPosts
			return {
				posts: loadedPosts && loadedPosts.data.map(post => transformPost(post)),
				paginateParams: { prev, first, pages, next, last }
			}
		})
}
