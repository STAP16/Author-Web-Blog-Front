Области хранения данных:

- Бд на Json server
- BFF ( Backend For Frontend)
- Redux Store (Состояние приложения)

Сущности приложения:

- пользователь: БД, (список), BFF (ссесия текущего пользователя), store (отображение в браузере)

-роль пользователя: БД, (Список ролей), BFF (Ссесия пользователя с ролью), store (Отображать / использовать роль
пользователя в приложении)

- Статья: БД (Список статей), стор (Отображение в браузере)
- Комментарии: Бд (список комментариев), стор (отображение в браузере)

Таблицы БД:

- пользователи - users: id / login / name / password / registed_at / role_id
- роли - roles: id / name
- статьи - posts: id / title / image_url / content / published_at
- Комментарии - commetns: id / author_id / post_id / content / published_at

Схема состояния на BFF:

- сессия текущего пользователя: login / password / role

Схема для Redux store (клиент):

- user: id / login / roleId
- posts: массив post: id / title / imageUrl / publishedAt / commentsCount
- post: id / title / imageUrl / content / publishedAt / comments: массив comment: id / author / content / publishedAt
- users: массив user: id / login / registeredAt / role
