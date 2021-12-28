import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
  },
  components: {
    Input: {
      baseStyle: {
        field: {
          _placeholder: {
            color: 'gray.300',
          },
          borderColor: 'orange.200',
          color: 'white',
        },
      },
    },
  },
})

export default theme
