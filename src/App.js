import { Center, Heading, Flex } from '@chakra-ui/react'

import { useColorMode } from '@chakra-ui/react'

import theme from './theme'

import BigL from './components/AnimatedLogo'

function App() {
  return (
    <Flex
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <BigL />
    </Flex>
  )
}

export default App
