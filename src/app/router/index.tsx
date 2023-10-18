import { createBrowserRouter } from 'react-router-dom'
import { routesObject } from './routes'

const router = createBrowserRouter([
	{ ...routesObject.MAIN },
	{ ...routesObject.SIGN_IN },
	{ ...routesObject.SIGN_UP },
])

export default router
