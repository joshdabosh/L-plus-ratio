import { Flex, Box, Stack } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'
import { FaTwitter } from 'react-icons/fa'

const TwitterLinkHolder = ({ children, clickHandler, disabled }) => {
  return (
    <Stack direction="row" spacing={4} w="80%">
      {children}
      <Box>
        <Button
          rightIcon={<FaTwitter />}
          colorScheme="white"
          variant="outline"
          borderWidth="2px"
          _focus={{ color: 'orange.200' }}
          onClick={clickHandler}
          disabled={disabled}
        >
          Tweet!
        </Button>
      </Box>
    </Stack>
  )
}

export default TwitterLinkHolder
