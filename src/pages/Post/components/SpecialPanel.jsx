import styled from 'styled-components'
import { Icon } from '../../../components'

const SpecialPanelContainer = ({ className, publishedAt, editButton }) => {
	return (
		<div className={className}>
			<div className="published-at">
				<Icon
					id="fa-calendar-o"
					margin="0 8px 0 0"
					size="18px"
				/>
				{publishedAt}
			</div>
			<div className="buttons">
				{editButton}
				<Icon
					id="fa-trash-o"
					size="21px"
				/>
			</div>
		</div>
	)
}

export const SpecialPanel = styled(SpecialPanelContainer)`
	margin: 10px 0 20px;
	font-size: 18px;
	display: flex;
	justify-content: space-between;

	& i {
		position: relative;
		top: 5px;
	}
`
