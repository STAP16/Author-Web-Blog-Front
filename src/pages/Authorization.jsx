import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import styled from 'styled-components'
import { server } from '../bff'
import { useEffect, useState } from 'react'
import { Input, Button, H2, AuthError, StyledForm, StyledNavLink } from '../components'
import { useNavigate } from 'react-router'
import { setUser } from '../actions'
import { selectUserRole } from '../selectors'
import { ROLE } from '../bff/constants'
import { useResetForm } from '../hooks'

const authFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Введите логин')
		.matches(/^\w+$/, 'Неверный формат логина (Только Буквы и цифры)')
		.min(3, 'Слишком короткий логин. Минимум 3 символа')
		.max(15, 'Слишком много символов, максимум 15'),

	password: yup
		.string()
		.required('Заполните поле пороля')
		.matches(/^[\w#%]+$/, 'Неверный формат пароля: Допускаются только: буквы, цифры и знаки # % ')
		.min(6, 'Слишком короткий пароль. Минимум 6 символа')
		.max(30, 'В пароле слишком много символов, максимум 30')
})

const DEFAULT_FIELD_VALUES = {
	login: '',
	password: ''
}

const AuthorizationContainer = ({ className }) => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(authFormSchema),
		defaultValues: DEFAULT_FIELD_VALUES
	})

	const [authError, setAuthError] = useState(null)
	const navigate = useNavigate(null)

	const dispatch = useDispatch()
	const roleId = useSelector(selectUserRole)

	useEffect(() => {
		if (roleId !== ROLE.GUEST) {
			navigate('/', { replace: true })
		}
	}, [roleId, navigate])

	useResetForm(reset)

	const onSubmit = ({ login, password }) => {
		server.authorize(login, password).then(({ error, res }) => {
			if (error) {
				return setAuthError(`Ошибка запроса: ${error}`)
			}

			dispatch(setUser(res))
			sessionStorage.setItem('userData', JSON.stringify(res))
		})
	}

	const formError = errors.login?.message || errors.password?.message
	const errorMessage = formError || authError

	return (
		<div className={className}>
			<H2>Авторизация</H2>
			<StyledForm onSubmit={handleSubmit(onSubmit)}>
				<Input
					className={errors.login ? 'error' : ''}
					type="text"
					{...register('login', {
						onChange: () => setAuthError(null)
					})}
					placeholder="Логин"
				/>
				<Input
					className={errors.password ? 'error' : ''}
					type="password"
					{...register('password', {
						onChange: () => setAuthError(null)
					})}
					placeholder="Пароль"
				/>
				<Button
					type="submit"
					disabled={!!formError}
				>
					Войти
				</Button>
				<StyledNavLink to="/register">Регистрация</StyledNavLink>
				{(authError || formError) && <AuthError>{errorMessage}</AuthError>}
			</StyledForm>
		</div>
	)
}

export const Authorization = styled(AuthorizationContainer)`
	display: flex;
	margin: 0 auto;
	flex-direction: column;
	align-items: center;
`
