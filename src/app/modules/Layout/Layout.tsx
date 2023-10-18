import { Outlet } from 'react-router-dom'

const Layout = () => {
	return (
		<div>
			<h1>Layout</h1>
			<hr />
			<Outlet />
		</div>
	)
}

export default Layout
