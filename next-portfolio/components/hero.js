import Link from 'next/link'
import styles from './hero.module.css'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <div className={styles.hero}>
      <div class="container">
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', delay: 0.3, damping: 12 }}
        >
          I’m a designer who’s passionate about solving problems and creating delightful user experiences.
        </motion.h1>
        <div className={styles.details}>
          <div className={styles.detail}>
            <motion.div
              initial={{ opacity: 0, scale: 0.6, y: 0 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: 'spring', delay: 0.8, damping: 15 }}
              className={styles.iconWrapper}>
                <img src="/pointer-icon.svg" alt="Pointer Icon" className={styles.detailIcon} />
            </motion.div>
            <motion.h3 
              className={styles.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', delay: 1, damping: 15 }}>
              Design Lead at Discord
            </motion.h3>
          </div>
          <div className={styles.detail}>
            <motion.div
              initial={{ opacity: 0, scale: 0.6, y: 0 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: 'spring', delay: 1.2, damping: 15 }}
              className={styles.iconWrapper}>
              <img src="/map-icon.svg" alt="Map Icon" className={styles.detailIcon} />
            </motion.div>
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', delay: 1.4, damping: 15 }}
              className={styles.label}>San Francisco
            </motion.h3>
          </div>
        </div>
        <motion.img
          whileHover={{ scale: 1.1, rotate: 180}}
          animate={{ rotate: 360}}
          transition={{ scale: 1, loop: Infinity, duration: 36, ease: "linear" }}
          src="/dots.svg" alt="Dot Shape" className="shape shape--dots"
        />
        <motion.img
          whileHover={{ scale: 1.2, rotate: 30 }}
          src="/circle.svg" alt="Circle Shape" className="shape shape--circle"
        />
        <motion.img
          whileHover={{ scale: 1.2, rotate: 30 }}
          animate={{ rotate: -360}}
          transition={{ scale: 1, loop: Infinity, duration: 30, ease: "linear" }}
          src="/square.svg" alt="Square Shape" className="shape shape--square" 
        />
      </div>
    </div>
  )
}

export default Hero