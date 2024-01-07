import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import './index.css'
import Router from '@/router'
import { ThemeProvider } from '@/providers/theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider>
			<RouterProvider router={Router} />
		</ThemeProvider>
	</React.StrictMode>
)
