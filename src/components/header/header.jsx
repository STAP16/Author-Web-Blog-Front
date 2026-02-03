import styled from 'styled-components'
import { Logo } from './components/logo'

const HeaderContainer = ({ className }) => {
	return (
		<header className={className}>
			<Logo />
		</header>
	)
}

export const Header = styled(HeaderContainer)`
	height: 120px;
	padding: 20px 40px;
	box-shadow: 0px -2px 17px #000;
	position: fixed;
	width: 1000px;
	background: #fff;
	top: 0;
`
