export const updatePost = async ({ id, imageUrl, title, content }) =>
	fetch(`http://localhost:3000/posts/${id}`, {
		method: 'PATCH',
		body: JSON.stringify({ image_url: imageUrl, title, content }),
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(loadedPost => loadedPost.json())
