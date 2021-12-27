import { Flex, Heading, Box } from '@chakra-ui/layout'
import { Icon } from '@chakra-ui/react'
import { FaExternalLinkAlt } from 'react-icons/fa'

const GenerateButton = () => {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <Icon as={FaExternalLinkAlt} w={8} h={8} />
      </Box>
    </Flex>
  )
}

export default GenerateButton
