import { motion } from 'framer-motion'

const fadeInVariants = {
  hidden: {
    opacity: 0,
    display: 'none',
  },
  visible: {
    opacity: 1,
    display: 'inline',
    transition: {
      duration: 0.5,
      delay: 4.25,
      ease: 'easeInOut',
    },
  },
}

const FadeIn = ({ children, style }) => {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={fadeInVariants}
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        ...style,
      }}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn
