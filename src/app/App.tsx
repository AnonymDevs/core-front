import { Button } from './components/ui/button'
import { useTheme } from './providers/theme'

const App = () => {
	const { setTheme: changeTheme } = useTheme()
	return (
		<>
			<Button onClick={() => changeTheme('light')}>light</Button>
			<Button onClick={() => changeTheme('dark')}>dark</Button>
		</>
	)
}

export default App
