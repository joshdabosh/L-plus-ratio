import { Box, Center, Link } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <Box
      as='footer'
      role='contentinfo'
      mx='auto'
      maxW='7xl'
      py='12'
      px={{ base: '4', md: '8' }}
    >
      <Center>
        <Link
          href='https://github.com/joshdabosh/L-plus-ratio'
          isExternal
          _hover={{
            color: 'orange.200',
          }}
        >
          <FaGithub size={28} />
        </Link>
      </Center>
    </Box>
  )
}

export default Footer
