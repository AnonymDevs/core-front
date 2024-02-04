import { Link } from 'react-router-dom'
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'

import { routes } from '@/enums'
import { useTheme } from '@/providers/theme'

const Navbar = () => {
	const { setTheme, theme } = useTheme()

	const handleThemeChange = () => setTheme(theme === 'dark' ? 'light' : 'dark')

	return (
		<div className='sticky top-0 z-50 w-full px-16 py-2 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex'>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<Link to={routes.USERS}>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Users
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link to={routes.CHARTS}>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Charts
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
			<div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
				<Button variant='ghost' onClick={handleThemeChange}>
					{theme === 'dark' ? <Sun /> : <Moon />}
				</Button>
			</div>
		</div>
	)
}

export default Navbar
