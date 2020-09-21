import Link from 'next/link'
import styles from './hero.module.css'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <div className="grid">
      <div className={styles.hero}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', delay: 0, damping: 12 }}
        >
          I’m a designer who’s passionate about solving problems and creating delightful user experiences.
        </motion.h1>
        <div className={styles.details}>
          <div className={styles.detail}>
            <motion.div
              initial={{ opacity: 0, scale: 0.6, y: 0 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: 'spring', delay: 0.4, damping: 15 }}
              className={styles.iconWrapper}>
                <img src="/design-icon.svg" alt="Design Layout Icon" className={styles.detailIcon} />
            </motion.div>
            <motion.h3 
              className={styles.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', delay: 0.65, damping: 15 }}>
              Design Manager at Discord
            </motion.h3>
          </div>
          <div className={styles.detail}>
            <motion.div
              initial={{ opacity: 0, scale: 0.6, y: 0 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: 'spring', delay: 0.8, damping: 15 }}
              className={styles.iconWrapper}>
              <img src="/map-icon.svg" alt="Map Icon" className={styles.detailIcon} />
            </motion.div>
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', delay: 1, damping: 15 }}
              className={styles.label}>San Francisco
            </motion.h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero