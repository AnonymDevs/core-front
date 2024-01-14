import App from '@/App'
import { routes } from '@/enums'
import { Dashboard } from '@/pages'
import { RoutesObjectType } from '@/types'

export const routesObject: RoutesObjectType = {
	MAIN: {
		path: routes.MAIN,
		element: <App />,
		children: [{ path: routes.MAIN, element: <Dashboard /> }],
	},
}
