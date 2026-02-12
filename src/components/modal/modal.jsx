import styled from 'styled-components'
import { Button } from '../button/button'
import { useSelector } from 'react-redux'
import {
	selectModalIsOpen,
	selectModalOnClose,
	selectModalOnConfirm,
	selectModalText
} from '../../selectors'

const ModalContainer = ({ className }) => {
	const text = useSelector(selectModalText)
	const isOpen = useSelector(selectModalIsOpen)
	const onConfirm = useSelector(selectModalOnConfirm)
	const onCancel = useSelector(selectModalOnClose)

	if (!isOpen) {
		return null
	}

	return (
		<div className={className}>
			<div className="overlay"></div>
			<div className="box">
				<h3>{text}</h3>
				<div className="buttons">
					<Button
						width="120px"
						onClick={onConfirm}
					>
						Да
					</Button>
					<Button
						width="120px"
						onClick={onCancel}
					>
						Отмена
					</Button>
				</div>
			</div>
		</div>
	)
}

export const Modal = styled(ModalContainer)`
	position: fixed;

	z-index: 1001;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	& .overlay {
		height: 100%;
		background-color: rgba(0, 0, 0, 0.58);
		width: 100%;
		position: absolute;
	}

	& .box h3 {
		text-align: center;
	}

	& .box {
		width: 400px;
		position: relative;
		margin: 0 auto;
		z-index: 1002;
		top: 50%;
		transform: translateY(-50%);
		background-color: #fff;
		border: 2px solid black;
		padding: 20px;
	}

	& .buttons {
		display: flex;
		justify-content: center;
		gap: 20px;
		padding-top: 20px;
	}
`
