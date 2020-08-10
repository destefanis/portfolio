import Link from 'next/link'
import styles from './hero.module.css'
import { motion } from 'framer-motion'

const variants = {
  starting: { scale: 0.8 },
  ending: { scale: 1 },
}


function Hero() {
  return (
    <div className={styles.hero}>
      <div class="container">
        <h1 className={styles.title}>
          I’m a designer who’s passionate about solving problems and creating delightful user experiences.
        </h1>
        <div className={styles.details}>
          <div className={styles.detail}>
            <motion.div initial="starting"
              animate="ending"
              variants={variants}
              className={styles.iconWrapper}>
                <img src="/pointer-icon.svg" alt="Pointer Icon" className={styles.detailIcon} />
            </motion.div>
            <h3 className={styles.detailLabel}>Design Lead at Discord</h3>
          </div>
          <div className={styles.detail}>
            <motion.div initial="starting"
              animate="ending"
              variants={variants}
              className={styles.iconWrapper}>
              <img src="/map-icon.svg" alt="Map Icon" className={styles.detailIcon} />
            </motion.div>
            <h3 className={styles.detailLabel}>San Francisco</h3>
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