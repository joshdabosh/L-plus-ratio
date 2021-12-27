import { Center, Heading, Flex, Box } from '@chakra-ui/react'

import { motion } from 'framer-motion'

import BigL from './components/BigL'
import TwitterLinkHolder from './components/TwitterLinkHolder'
import GenerateButton from './components/GenerateButton'

const shrinkVariants = {
  big: {
    top: 'calc(50vh - 170px)',
  },
  normal: {
    top: 'calc(20vh - 170px)',
    transition: {
      duration: 1.75,
      delay: 2.5,
      ease: 'easeInOut',
    },
  },
}

const fadeInVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 4.25,
      ease: 'easeInOut',
    },
  },
}

function App() {
  return (
    <>
      <motion.div
        initial="big"
        animate="normal"
        variants={shrinkVariants}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          position: 'absolute',
        }}
      >
        <BigL />
      </motion.div>

      <Flex
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          flexDirection: 'column',
        }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Flex
            sx={{
              flexDirection: 'row',
              width: '100%',
              height: '100%',
              justifyContent: 'space-around',
            }}
          >
            <TwitterLinkHolder />

            <GenerateButton />
          </Flex>
        </motion.div>
      </Flex>
    </>
  )
}

export default App
