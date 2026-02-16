import styled from 'styled-components'
import PropTypes from 'prop-types'

const IconContainer = ({ className, id }) => (
	<div className={className}>
		<i
			className={`fa ${id}`}
			aria-hidden="true"
		/>
	</div>
)

export const Icon = styled(IconContainer)`
	font-size: ${({ size = '23px' }) => size};
	margin: ${({ margin = '0' }) => margin};
	display: flex;
	justify-content: center;
`

Icon.propTypes = {
	id: PropTypes.string.isRequired
}
