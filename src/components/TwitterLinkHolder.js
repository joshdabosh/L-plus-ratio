import { Flex, Box } from '@chakra-ui/layout'
import { Icon } from '@chakra-ui/icons'
import { FaTwitter } from 'react-icons/fa'

const TwitterLinkHolder = () => {
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
        <Icon as={FaTwitter} w={7} h={7} />
      </Box>
    </Flex>
  )
}

export default TwitterLinkHolder
