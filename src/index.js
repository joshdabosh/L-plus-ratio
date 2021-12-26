import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { extendTheme, ChakraProvider } from '@chakra-ui/react'

const theme = extendTheme({
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
  config: {
    initialColorMode: 'dark',
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
