import { MainNav } from '@/components/dashboard/main-nav'
import { Search } from '@/components/dashboard/search'
import TeamSwitcher from '@/components/dashboard/team-switcher'
import { UserNav } from '@/components/dashboard/user-nav'
import { ThemeSwitcher } from '@/components/theme-switcher'

const Navbar = () => {
	return (
		<div className='border-b'>
			<div className='flex h-16 items-center px-4'>
				<TeamSwitcher />
				<MainNav className='mx-6' />
				<div className='ml-auto flex items-center space-x-4'>
					<Search />
					<UserNav />
					<ThemeSwitcher />
				</div>
			</div>
		</div>
	)
}

export default Navbar
