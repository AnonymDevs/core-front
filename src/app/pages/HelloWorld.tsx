import { Link } from 'react-router-dom'
import { routes } from '../router/routes'

const HelloWorld = () => {
	return (
		<>
			<h1>HelloWorld</h1>
			<Link to={routes.USERS.path}>Go to Users</Link>
		</>
	)
}

export default HelloWorld
