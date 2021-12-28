import { useState } from 'react'

import { Center, Heading, Flex, Box } from '@chakra-ui/react'

import { Input } from '@chakra-ui/react'

import { motion } from 'framer-motion'

import { useForm } from 'react-hook-form'

import BigL from './components/BigL'
import TwitterLinkHolder from './components/TwitterLinkHolder'
import FadeIn from './components/FadeIn'

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

  const twitterStatusRegex = /^https?:\/\/twitter\.com\/.*?status\/(\d+)$/

  const generateTweet = ({ status_url }) => {
    const status_id = status_url.match(twitterStatusRegex)[1]

    console.log(status_id)
  }

  return (
    <>
      <BigL />

      <Flex
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          flexDirection: 'column',
        }}
      >
        <FadeIn>
          <Flex
            sx={{
              flexDirection: 'row',
              width: '100%',
              height: '100%',
              justifyContent: 'space-around',
            }}
          >
            <TwitterLinkHolder
              clickHandler={handleSubmit(generateTweet)}
              disabled={!isValid || !isDirty}
            >
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
                  {...register('status_url', { pattern: twitterStatusRegex })}
                />
              </Box>
            </TwitterLinkHolder>
          </Flex>
        </FadeIn>
      </Flex>
    </>
  )
}

export default App
