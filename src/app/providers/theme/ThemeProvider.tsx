import { createContext, useEffect, useState } from 'react'
import { ThemeModeType } from '@/enums'

type ThemeProviderProps = {
	children: React.ReactNode
	defaultTheme?: ThemeModeType
	storageKey?: string
}

type ThemeContextType = {
	theme: ThemeModeType
	setTheme: (themeMode: ThemeModeType) => void
}

export const ThemeContext = createContext<ThemeContextType>({
	theme: 'dark',
	setTheme: () => null,
})

const ThemeProvider = ({
	children,
	defaultTheme = 'dark',
	storageKey = 'vite-ui-theme',
}: ThemeProviderProps) => {
	const [theme, setTheme] = useState<ThemeModeType>(
		() => (localStorage.getItem(storageKey) as ThemeModeType) || defaultTheme
	)

	useEffect(() => {
		const root = window.document.documentElement
		root.classList.remove('light', 'dark')
		root.classList.add(theme)
	}, [theme])

	const contextValue: ThemeContextType = {
		theme,
		setTheme: (themeMode: ThemeModeType) => {
			localStorage.setItem(storageKey, themeMode)
			setTheme(themeMode)
		},
	}

	return (
		<ThemeContext.Provider value={contextValue}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
