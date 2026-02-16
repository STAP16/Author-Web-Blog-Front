import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Icon, Input } from '../../../components'

const SearchContainer = ({ className, searchPhrase, onChange }) => {
	return (
		<div className={className}>
			<Icon
				id="fa-search"
				margin="0 8px 0 0"
				size="18px"
			/>
			<Input
				value={searchPhrase}
				onChange={onChange}
				placeholder="Поиск по заголовкам..."
			/>
		</div>
	)
}

export const Search = styled(SearchContainer)`
	display: flex;
	margin: 40px auto 0;
	margin-bottom: 20px;
	width: 340px;
	height: 40px;
	position: relative;

	& > input {
		padding: 10px 40px 10px 10px;
	}

	& i {
		position: absolute;
		top: 10px;
		right: 15px;
	}
`

Search.propTypes = {
	searchPhrase: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
}
