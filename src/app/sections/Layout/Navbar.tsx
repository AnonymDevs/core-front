import { Link } from 'react-router-dom'
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { routes } from '@/enums'

const Navbar = () => {
	return (
		<div className='sticky top-0 z-50 w-full px-16 py-2 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
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
		</div>
	)
}

export default Navbar
