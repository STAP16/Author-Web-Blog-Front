import PropTypes from 'prop-types'
import { ROLE } from './role-constants'

export const PROP_TYPE = {
	ROLE: PropTypes.oneOf(Object.values(ROLE)),
	ERROR: PropTypes.oneOfType([PropTypes.string, PropTypes.exact(null)]),
	COMMENT: PropTypes.shape({
		commentId: PropTypes.string.isRequired,
		author: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
		publishedAt: PropTypes.string.isRequired
	}),
	POST: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		imageUrl: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
		publishedAt: PropTypes.string.isRequired
	}),
	USER: PropTypes.shape({
		id: PropTypes.string.isRequired,
		login: PropTypes.string.isRequired,
		registredAt: PropTypes.string.isRequired,
		roleId: ROLE.isRequired
	})
}
