import { transformPost } from '../transformers'

export const getPosts = async (searchPhrase, page, limit) => {
	const normalizedSearch = searchPhrase.trim().toLowerCase()

	if (!normalizedSearch) {
		return fetch(`http://localhost:3000/posts?_page=${page}&_per_page=${limit}`)
			.then(loadedPosts => loadedPosts.json())
			.then(loadedPosts => {
				const { prev, first, pages, next, last } = loadedPosts
				return {
					posts: loadedPosts.data.map(post => transformPost(post)),
					paginateParams: { prev, first, pages, next, last }
				}
			})
	}

	return fetch('http://localhost:3000/posts')
		.then(loadedPosts => loadedPosts.json())
		.then(loadedPosts => {
			const filteredPosts = loadedPosts.filter(({ title = '' }) =>
				title.toLowerCase().includes(normalizedSearch)
			)
			const pages = Math.max(1, Math.ceil(filteredPosts.length / limit))
			const normalizedPage = Math.min(Math.max(1, page), pages)
			const start = (normalizedPage - 1) * limit
			const postsPage = filteredPosts.slice(start, start + limit)

			return {
				posts: postsPage.map(post => transformPost(post)),
				paginateParams: {
					first: 1,
					prev: normalizedPage > 1 ? normalizedPage - 1 : null,
					pages,
					next: normalizedPage < pages ? normalizedPage + 1 : null,
					last: pages
				}
			}
		})
}
