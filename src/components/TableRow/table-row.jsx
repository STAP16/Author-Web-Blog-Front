import styled from 'styled-components'
import PropTypes from 'prop-types'

const TableRowContainer = ({ children, className }) => <div className={className}>{children}</div>

export const TableRow = styled(TableRowContainer)`
	display: flex;
	align-items: center;
	& > div {
		padding: 0 10px;
	}
	border-bottom: 1px solid #e8e8e8;

	& .login-column {
		width: 172px;
		margin-top: 5px;
		margin-bottom: 5px;
	}

	& .registered-at-column {
		width: 213px;
	}

	& .role-column {
		width: auto;
	}
`
TableRow.propTypes = {
	children: PropTypes.node.isRequired
}
