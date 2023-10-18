import { Layout } from '../modules'
import { HelloWorld } from '../pages'

import { RoutesObjectType } from '../types'

export const routesObject: RoutesObjectType = {
	MAIN: {
		path: '/',
		element: <Layout />,
		children: [{ path: '/', element: <HelloWorld /> }],
	},
	SIGN_IN: { path: '/sign-in', element: <h1>sign in</h1> },
	SIGN_UP: { path: '/sign-up', element: <h1>sign up</h1> },
}
