import styled from 'styled-components'
import PropTypes from 'prop-types'
import { H2 } from '../h2/h2'
import { PROP_TYPE } from '../../bff/constants'

const Div = styled.div`
	display: flex;
	margin: 0 auto;
	flex-direction: column;
	align-items: center;
	font-size: 18px;
`

export const Error = ({ error }) =>
	error && (
		<Div>
			<H2>Ошибка</H2>
			<div>{error}</div>
		</Div>
	)

Error.propTypes = {
	error: PROP_TYPE.ERROR
}
