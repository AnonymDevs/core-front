import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), nodePolyfills()],
	resolve: {
		alias: [
			{
				find: '@',
				replacement: fileURLToPath(new URL('./src/app', import.meta.url)),
			},
		],
	},
})
