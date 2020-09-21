import Link from 'next/link'
import styles from './aboutSection.module.css'
import { motion } from 'framer-motion'

function AboutSection() {
  return (
    <div className="grid">
      <div className={styles.aboutSection}>
        <div className={styles.text}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', delay: 0, damping: 12 }}
          >
            Besides design, I love writing music, programming, games and taking my dog to his favorite parks.
          </motion.h2>
          <div className={styles.link}>
            About Me ->
          </div>
        </div>
        <div className={styles.videos}>
          <div className={`${styles.videoColumn} ${styles.videoColumnFirst}`}>
            <video src="https://newportfolio.s3-us-west-2.amazonaws.com/about-me-video.mp4" className={styles.video} autoPlay muted loop/>
          </div>
          <div className={styles.videoColumn}>
            <video src="https://newportfolio.s3-us-west-2.amazonaws.com/about-me-magnus.mp4" className={styles.video} autoPlay muted loop />
            <video src="https://newportfolio.s3-us-west-2.amazonaws.com/about-me-beach.mp4" className={styles.video} autoPlay muted loop />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection