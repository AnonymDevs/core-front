import { Link } from 'react-router-dom'

import { routes } from '../../enums'
import { t } from '../../i18n'

const HelloWorld = () => {
	return (
		<>
			<h1>{t('messages.HELLO_WORLD')}</h1>
			<Link to={routes.SIGN_IN}>Go to sign in</Link>
			<br />
			<Link to={routes.SIGN_UP}>Go to sign up</Link>
		</>
	)
}

export default HelloWorld
