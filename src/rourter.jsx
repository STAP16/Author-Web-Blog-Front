import { createBrowserRouter, Outlet } from 'react-router'

import Blog from './Blog'
import { Authorization } from './pages/Authorization'
import { Registration } from './pages/Registration'
import { Users } from './pages/Users'

const ErrorPage = () => <div>страница ошибки</div>

const Posts = () => <Outlet />
const Post = () => <div>Пост c id</div>
const PostsList = () => <div>Список статей</div>

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Blog />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'users',
				element: <Users />
			},
			{
				path: 'posts',
				element: <Posts />,
				children: [
					{
						element: <PostsList />,
						index: true
					},
					{
						path: ':id',
						element: <Post />,
						index: true
					},
					{
						path: 'new',
						element: <div>Новая статья</div>
					}
				]
			},
			{
				path: 'login',
				element: <Authorization />
			},
			{
				path: 'register',
				element: <Registration />
			}
		]
	}
])
