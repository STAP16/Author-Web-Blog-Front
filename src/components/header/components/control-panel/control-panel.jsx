import styled from 'styled-components'
import { Icon } from '../../../icon/icon'

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
`

const StyledButton = styled.button`
	font-size: 18px;
	width: 100px;
	height: 32px;
`

const ControlPanelContainer = ({ className }) => {
	return (
		<div className={className}>
			<RightAligned>
				<StyledButton>Войти</StyledButton>
			</RightAligned>
			<RightAligned>
				<Icon
					id="fa-backward"
					margin="10px 0 0 "
				/>
				<Icon
					id="fa-file-text-o"
					margin="10px 0px 0px 17px"
				/>
				<Icon
					id="fa-users"
					margin="10px 0px 0px 17px"
				/>
			</RightAligned>
		</div>
	)
}

export const ControlPanel = styled(ControlPanelContainer)`
	display: grid;
`
