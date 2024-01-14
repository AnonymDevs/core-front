import { Outlet } from 'react-router-dom'
import Layout from '@/sections/Layout'

const App = () => {
	return (
		<Layout>
			<Outlet />
		</Layout>
	)
}

export default App
