import styled from 'styled-components'
import { Icon } from '../../../icon/icon'

const LargeText = styled.div`
	font-size: 48px;
	font-weight: 600;
	line-height: 48px;
	margin-top: 17px;
`

const SmallText = styled.div`
	font-size: 18px;
	font-weight: bold;
`

const LogoContainer = ({ className }) => {
	return (
		<div className={className}>
			<Icon
				size="70px"
				margin="0px 10px 0px 0px"
				id="fa-code"
			/>
			<div>
				<LargeText>Блог</LargeText>
				<SmallText>веб-разработчика</SmallText>
			</div>
		</div>
	)
}

export const Logo = styled(LogoContainer)`
	display: flex;
	margin-top: -14px;
`
