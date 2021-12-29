import { Flex, Box, Input, useToast } from '@chakra-ui/react'

import { useForm } from 'react-hook-form'

import BigL from './components/BigL'
import TwitterLinkHolder from './components/TwitterLinkHolder'
import FadeIn from './components/FadeIn'
import Footer from './components/Footer'

import generateReply from './util/generateReply'

const twitterStatusRegex = /^https?:\/\/twitter\.com\/.*?status\/(\d+)$/

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      status_url: '',
    },
  })

  const sendToast = useToast()

  const generateTweet = ({ status_url }) => {
    const status_id = status_url.match(twitterStatusRegex)[1]

    const openLink = window.open(
      `https://twitter.com/intent/tweet?in_reply_to=${status_id}&text=${encodeURIComponent(
        generateReply()
      )}`,
      '_blank'
    )

    if (openLink) {
      openLink.focus()
    } else {
      console.log(1)
      sendToast({
        title: 'Error opening new tab',
        description: 'You hate to see it happen.',
        status: 'error',
        duration: 2500,
        isClosable: true,
      })
    }
  }

  return (
    <>
      <BigL />

      <Flex
        justify='center'
        align='center'
        height='100vh'
        flexDirection='column'
      >
        <FadeIn>
          <Flex
            flexDirection={['column', 'column', 'row']}
            width='100%'
            height='100%'
            justify='space-around'
            align='center'
          >
            <TwitterLinkHolder
              clickHandler={handleSubmit(generateTweet)}
              disabled={!isValid || !isDirty}
            >
              <Box w={['100%', '100%', '85%']}>
                <Input
                  placeholder='https://twitter.com/xxx/status/yyy'
                  color='white'
                  borderColor='white'
                  borderWidth='2px'
                  _focus={{
                    outline: 'none',
                    borderColor: 'orange.200',
                  }}
                  _hover={{
                    borderColor: 'orange.200',
                  }}
                  _placeholder={{
                    color: 'gray.300',
                  }}
                  {...register('status_url', { pattern: twitterStatusRegex })}
                />
              </Box>
            </TwitterLinkHolder>
          </Flex>
        </FadeIn>
      </Flex>

      <FadeIn
        style={{
          position: 'absolute',
          bottom: 0,
        }}
      >
        <Footer />
      </FadeIn>
    </>
  )
}

export default App
