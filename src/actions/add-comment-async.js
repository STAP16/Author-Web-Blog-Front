import { addComment } from './add-comment'

export const addCommentAsync = (requestServer, userId, postId, content) => dispatch => {
	requestServer('addPostComment', userId, postId, content).then(postData => {
		dispatch(addComment(postData.res.comments))
	})
}
