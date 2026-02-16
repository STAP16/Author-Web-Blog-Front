import { useSelector } from 'react-redux'
import { Error } from '../Error/Error'
import { selectUserRole } from '../../selectors'
import { ERROR, PROP_TYPE } from '../../bff/constants'
import { checkAccess } from '../../utils'
import PropTypes from 'prop-types'

export const PrivateContent = ({ access, children, serverError = null }) => {
	const userRole = useSelector(selectUserRole)
	const accessError = checkAccess(access, userRole) ? null : ERROR.ACCESS_DENIED
	const error = serverError || accessError

	return error ? <Error error={error} /> : children
}

PrivateContent.propsTypes = {
	children: PropTypes.node.isRequired,
	access: PropTypes.arrayOf(PROP_TYPE.ROLE).isRequired,
	serverError: PROP_TYPE.ERROR
}
