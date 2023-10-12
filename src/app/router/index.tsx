import { createBrowserRouter } from 'react-router-dom'
import { routes } from './routes'

const router = createBrowserRouter([{ ...routes.HOME }, { ...routes.USERS }])

export default router
