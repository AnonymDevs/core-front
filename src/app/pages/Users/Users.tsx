import { Link } from 'react-router-dom'
import { routes } from '../../enums'

const Users = () => {
	return (
		<>
			<h1>Users</h1>
			<Link to={routes.HOME}>Home</Link>
		</>
	)
}

export default Users
