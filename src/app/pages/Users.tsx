import { Link } from 'react-router-dom'
import { routes } from '../router/routes'

const Users = () => {
	return (
		<>
			<h1>Users</h1>
			<Link to={routes.HOME.path}>Home</Link>
		</>
	)
}

export default Users
