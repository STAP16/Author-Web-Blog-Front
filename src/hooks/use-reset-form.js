import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectWasLogout } from '../selectors'

export const useResetForm = reset => {
	const wasLogout = useSelector(selectWasLogout)
	useEffect(() => {
		reset()
	}, [wasLogout])
}
