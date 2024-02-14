import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CalendarDateRangePicker } from '@/components/dashboard/date-range-picker'
import { t } from '@/i18n'
import { Overview_Tab } from '@/components/dashboard/tabs/overview-tab'

export default function Dashboard() {
	return (
		<div className='flex-col md:flex'>
			<div className='flex-1 space-y-4 p-8 pt-6'>
				<div className='flex items-center justify-between space-y-2'>
					<h2 className='text-3xl font-bold tracking-tight'>
						{t('nouns.DEFAULT.DASHBOARD')}
					</h2>
					<div className='flex items-center space-x-2'>
						<CalendarDateRangePicker />
						<Button>{t('nouns.DEFAULT.DOWNLOAD')}</Button>
					</div>
				</div>
				<Tabs defaultValue='overview' className='space-y-4'>
					<TabsList>
						<TabsTrigger value='overview'>
							{t('nouns.DEFAULT.OVERVIEW')}
						</TabsTrigger>
						<TabsTrigger value='analytics'>
							{t('nouns.DEFAULT.ANALYTICS')}
						</TabsTrigger>
					</TabsList>
					<Overview_Tab />
				</Tabs>
			</div>
		</div>
	)
}
