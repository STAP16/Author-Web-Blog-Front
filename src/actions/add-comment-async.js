import { addComment } from './add-comment'

export const addCommentAsync = (requestServer, userLogin, userId, postId, content) => dispatch => {
	requestServer('addPostComment', userLogin, userId, postId, content).then(postData => {
		dispatch(addComment(postData.res.comments))
	})
}
