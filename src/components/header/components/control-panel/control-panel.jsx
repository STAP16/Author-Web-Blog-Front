import styled from 'styled-components'
import { Icon } from '../../../icon/icon'
import { NavLink, useNavigate } from 'react-router'

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
	const navigate = useNavigate(null)

	const handleNavigate = () => {
		return navigate('/login')
	}
	const handleBack = () => {
		return navigate(-1)
	}

	return (
		<div className={className}>
			<RightAligned>
				<StyledButton onClick={handleNavigate}>Войти</StyledButton>
			</RightAligned>
			<RightAligned>
				<NavLink to={-1}>
					<Icon
						id="fa-backward"
						margin="10px 0 0 "
					/>
				</NavLink>
				<NavLink to={'/posts/new'}>
					<Icon
						id="fa-file-text-o"
						margin="10px 0px 0px 17px"
					/>
				</NavLink>
				<NavLink to={'/users'}>
					<Icon
						id="fa-users"
						margin="10px 0px 0px 17px"
					/>
				</NavLink>
			</RightAligned>
		</div>
	)
}

export const ControlPanel = styled(ControlPanelContainer)`
	display: grid;
`
