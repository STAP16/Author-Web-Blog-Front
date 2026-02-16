import { createBrowserRouter, Outlet } from 'react-router'

import Blog from './Blog'
import { Authorization } from './pages/Authorization'
import { Registration } from './pages/Registration'
import { Users } from './pages/Users'
import { Post } from './pages/Post/Post'
import { Main } from './pages/Main/Main'

const ErrorPage = () => <div>страница ошибки</div>

const Posts = () => <Outlet />
const PostPage = () => <Outlet />
const PostsList = () => <div>Список статей</div>

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Blog />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Main />
			},
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
						element: <PostPage />,
						children: [
							{
								element: <Post />,
								index: true
							},
							{
								path: 'edit',
								element: <Post />
							}
						]
					},
					{
						path: 'new',
						element: <Post />
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
