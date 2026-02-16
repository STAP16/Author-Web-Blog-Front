import styled from 'styled-components'

const ButtonContainer = ({ className, children, width, ...props }) => {
	return (
		<button
			className={className}
			{...props}
		>
			{children}
		</button>
	)
}

export const Button = styled(ButtonContainer)`
	display: flex;
	-webkit-box-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	align-items: center;
	font-size: 18px;
	width: ${({ width = '100%' }) => width};
	height: 32px;
	background-color: rgb(238, 238, 238);
	cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`
