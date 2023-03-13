import { motion } from 'framer-motion';

const CheckIcon = () => {
    return (
        <svg width="180px" height="180px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
               initial={{
                opacity: 0,
                rotate: -45,
                pathLength: 0, 
              }}
              transition={{
                duration: 1,
                ease: 'easeInOut',
              }}
              animate={{
                opacity: 1,
                pathLength: 1, 
              }}
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                stroke="green"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <motion.path 
             initial={{
                opacity: 0,
                pathLength: 0, 
              }}
              transition={{
                duration: 1,
                ease: 'easeInOut',
              }}
              animate={{
                opacity: 1,
                pathLength: 1, 
              }}
            d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="green" 
            stroke-width="1.5" 
            stroke-linecap="round" stroke-linejoin="round" 
            />
        </svg>
    )
}

export default CheckIcon