import { motion } from 'framer-motion'

import Link from 'next/link'
import styles from './WorkGrid.module.css'

function WorkGrid() {
  return (
    <div className="grid">
      <motion.div 
        className={styles.workGrid}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', delay: 0.5 }}
      >
        <div className={`${styles.card} ${styles.featured}`}>
          <div class={styles.imageWrapper}>
            <div class={styles.carousel}>
              <img src="/server-video-3.png" alt="Discord server video ui" className={styles.image} />
              <img src="/server-video-1.png" alt="Discord server video ui" className={styles.image} />
              <img src="/server-video-2.png" alt="Discord server video ui" className={styles.image} />
            </div>
          </div>
          <h6 className={styles.title}>Server Video</h6>
        </div>
        <div className={styles.card}>
          <div class={styles.imageWrapper}>
            <img src="/discord-onboarding-1.png" alt="Discord Onboarding UI" className={styles.image} />
          </div>
          <h6 className={styles.title}>Discord Onboarding</h6>
        </div>
        <div className={styles.card}>
          <h6 className={styles.title}>Design Tooling</h6>
        </div>
        {/* <div className={styles.card}>
          <h6 className={styles.title}>Destiny Medals</h6>
        </div> */}
      </motion.div>
    </div>
  )
}

export default WorkGrid