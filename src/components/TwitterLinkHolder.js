import { Flex, Box, Stack } from '@chakra-ui/layout'
import { Input, Button } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons'
import { FaTwitter } from 'react-icons/fa'

const TwitterLinkHolder = () => {
  return (
    <Stack direction="row" spacing={4} w="80%">
      <Box w={['80%', '100%']}>
        <Input
          placeholder="Twitter Link"
          borderWidth="2px"
          _focus={{
            outline: 'none',
            borderColor: 'orange.200',
          }}
          _hover={{
            borderColor: 'orange.200',
          }}
        />
      </Box>
      <Box>
        <Button
          rightIcon={<FaTwitter />}
          colorScheme="white"
          variant="outline"
          borderWidth="2px"
          _focus={{ color: 'orange.200' }}
        >
          Tweet!
        </Button>
      </Box>
    </Stack>
  )
}

export default TwitterLinkHolder
