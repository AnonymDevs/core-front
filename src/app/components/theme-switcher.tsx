import { Button } from '@/components/ui/button'
import { useTheme } from '@/providers/theme'
import { MoonIcon, SunIcon } from 'lucide-react'

export const ThemeSwitcher = () => {
	const { setTheme, theme } = useTheme()

	const handleThemeChange = () => setTheme(theme === 'dark' ? 'light' : 'dark')

	return (
		<Button
			className='rounded-full'
			variant='ghost'
			onClick={handleThemeChange}>
			{theme === 'dark' ? <SunIcon /> : <MoonIcon />}
		</Button>
	)
}
