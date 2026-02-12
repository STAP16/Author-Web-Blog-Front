import { ACTION_TYPE } from './action-type'

export const addComment = postData => {
	return {
		type: ACTION_TYPE.ADD_COMMENT,
		payload: postData
	}
}
