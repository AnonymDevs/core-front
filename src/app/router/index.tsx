import { createBrowserRouter } from 'react-router-dom'
import { routesObject } from './routes'

const router = createBrowserRouter([{ ...routesObject.MAIN }])

export default router
