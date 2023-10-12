import { HelloWorld, Users } from '../pages'

export const routes = {
	HOME: { path: '/', element: <HelloWorld /> },
	USERS: { path: '/users', element: <Users /> },
}
