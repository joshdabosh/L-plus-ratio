import { Box, Stack, Button } from '@chakra-ui/react'
import { FaTwitter } from 'react-icons/fa'

const TwitterLinkHolder = ({ children, clickHandler, disabled }) => {
  return (
    <Stack direction={['column', 'column', 'row']} spacing={4} w='80%'>
      {children}
      <Box flex={1}>
        <Button
          rightIcon={<FaTwitter />}
          colorScheme='white'
          variant='outline'
          borderWidth='2px'
          _focus={{ color: 'orange.200' }}
          _hover={{
            color: 'orange.200',
          }}
          onClick={clickHandler}
          disabled={disabled}
          width={['100%', '100%', null]}
        >
          Tweet!
        </Button>
      </Box>
    </Stack>
  )
}

export default TwitterLinkHolder
