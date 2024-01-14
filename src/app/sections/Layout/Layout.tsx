import Navbar from './Navbar'
import { FC, ReactNode } from 'react'

type LayoutProps = {
	children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
		</>
	)
}

export default Layout
