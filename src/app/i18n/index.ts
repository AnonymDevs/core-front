import i18n from 'i18next'

import { en } from './en'
import { fa } from './fa'

i18n.init({
	resources: { en, fa },
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
})

const t = i18n.t

export { i18n, t }
