import { ChakraProvider, Spinner } from '@chakra-ui/react'
import { theme } from './style'

const App = () => {
	return (
		<ChakraProvider theme={theme}>
			<Main />
		</ChakraProvider>
	)
}

const Main = () => (
	<>
		<Spinner color='teal.500' size='xl' emptyColor='red.500' />
	</>
)

export default App
