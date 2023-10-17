import { Link } from 'react-router-dom'
import { routes } from '../router/routes'

import { t } from '../i18n'

const HelloWorld = () => {
	return (
		<>
			<h1>{t('messages.HELLO_WORLD')}</h1>
			<Link to={routes.USERS.path}>Go to Users</Link>
		</>
	)
}

export default HelloWorld
