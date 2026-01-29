import { useState } from 'react'
import styled from 'styled-components'

const Div = styled.div`
	text-algin: center;
`

function App() {
	return (
		<div>
			<div>App</div>
			<i className="fa fa-camera-retro fa-5x"></i>
			<Div>Styled div</Div>
		</div>
	)
}

export default App
