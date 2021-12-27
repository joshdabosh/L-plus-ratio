import { motion } from 'framer-motion'

import theme from '../theme'

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2.5,
      ease: 'anticipate',
    },
  },
}

const shrinkVariants = {
  hidden: {
    scale: 1,
  },
  visible: {
    scale: 0.4,
    transition: {
      duration: 1.75,
      delay: 2.5,
      ease: 'easeInOut',
    },
  },
}

const BigL = ({ props }) => {
  return (
    <motion.svg
      width="238"
      height="359"
      viewBox="0 0 238 359"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
      variants={shrinkVariants}
      {...props}
    >
      <motion.path
        d="M 12.5,299 L 64,2.5 H 135.5 L 84,299 H 159.5"
        stroke="white"
        strokeWidth="4"
        variants={pathVariants}
      />
      <motion.path
        d="M 12.5,299 L 2.5,357.5 H 224.5 L 235,299 H 158.5"
        stroke="white"
        strokeWidth="4"
        variants={pathVariants}
      />
    </motion.svg>
  )
}

export default BigL
