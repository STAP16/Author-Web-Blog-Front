import { ROLE } from './constants'
import { removeComment } from './session/remove-comment'

export const getSession = async roleId => {
	const session = {
		logout() {
			Object.keys(session).forEach(key => {
				delete session[key]
			})
		}
	}

	switch (roleId) {
		case ROLE.ADMIN: {
			session.removeComment = removeComment()
			break
		}
		case ROLE.MODERATOR: {
			session.removeComment = removeComment()
			break
		}
		case ROLE.READER: {
			break
		}
		default:
		// ничего не делаем
	}

	return session
}
