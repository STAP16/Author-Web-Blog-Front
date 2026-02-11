import { ACTION_TYPE } from './action-type'

export const addComment = postData => {
	console.log(postData)
	return {
		type: ACTION_TYPE.ADD_COMMENT,
		payload: postData
	}
}
