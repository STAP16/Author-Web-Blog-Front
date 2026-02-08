import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import styled from 'styled-components'
import { server } from '../bff'
import { useState } from 'react'
import { Input, Button, H2 } from '../components'
import { NavLink } from 'react-router'
import { setUser } from '../actions'

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

const StyledForm = styled.form`
	align-items: center;
	display: flex;
	flex-direction: column;
	width: 250px;
	& > button {
		width: 100%;
	}
`

const StyledRegisterLink = styled(NavLink)`
	text-decoration: underline;
	padding: 10px 0;
`

const StyledError = styled.div`
	background-color: rgba(255, 105, 105, 0.72);
	border: 2px solid black;
	padding: 10px;
	color: black;
	font-size: 18px;
	width: 250px;
	max-width: 250px;
	box-sizing: border-box;

	overflow-wrap: break-word;
	word-wrap: break-word;
`

const AuthorizationContainer = ({ className }) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(authFormSchema),
		defaultValues: DEFAULT_FIELD_VALUES
	})

	const [authError, setAuthError] = useState(null)
	const [loading, setLoading] = useState(false)
	const dispatch = useDispatch()

	const onSubmit = ({ login, password }) => {
		server.authorize(login, password).then(({ error, res }) => {
			if (error) {
				return setAuthError(`Ошибка запроса: ${error}`)
			}

			dispatch(setUser(res))
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
					disabled={!!formError || loading}
				>
					{loading ? 'Загрузка' : 'Войти'}
				</Button>
				<StyledRegisterLink to="/register">Регистрация</StyledRegisterLink>
				{(authError || formError) && <StyledError>{errorMessage}</StyledError>}
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
