import styled from 'styled-components'
import { Icon } from '../../../icon/icon'
import { NavLink, useNavigate } from 'react-router'
import { ROLE } from '../../../../bff/constants'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserRole, selectUserLogin, selectUserSession } from '../../../../selectors'
import { logout } from '../../../../actions'
import { checkAccess } from '../../../../utils'

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
`

const StyledButton = styled.button`
	font-size: 18px;
	width: 100px;
	height: 32px;
`

const StyledUser = styled.div`
	font-size: 18px;
	margin-right: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 500;
`

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate(null)

	const handleNavigateToLogin = () => {
		return navigate('/login')
	}

	const roleId = useSelector(selectUserRole)
	const login = useSelector(selectUserLogin)
	const session = useSelector(selectUserSession)
	const dispatch = useDispatch()

	const handleLogout = () => {
		sessionStorage.removeItem('userData')
		dispatch(logout(session))
	}

	const isAdmin = checkAccess([ROLE.ADMIN], roleId)

	return (
		<div className={className}>
			<RightAligned>
				{roleId === ROLE.GUEST ? (
					<StyledButton onClick={handleNavigateToLogin}>Войти</StyledButton>
				) : (
					<>
						<StyledUser>{login}</StyledUser>
						<NavLink
							to="/"
							onClick={handleLogout}
						>
							<Icon
								id="fa-sign-out"
								margin="10px 0 0 "
							/>
						</NavLink>
					</>
				)}
			</RightAligned>
			<RightAligned>
				<NavLink to={-1}>
					<Icon
						id="fa-backward"
						margin="10px 0 0 "
					/>
				</NavLink>
				{isAdmin && (
					<>
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
					</>
				)}
			</RightAligned>
		</div>
	)
}

export const ControlPanel = styled(ControlPanelContainer)`
	display: grid;
`
