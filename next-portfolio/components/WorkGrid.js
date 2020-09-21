import { motion } from 'framer-motion'

import Link from 'next/link'
import styles from './WorkGrid.module.css'

function WorkGrid() {
  return (
    <div className="grid">
      <div
        className={styles.workGrid}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', delay: 0.5 }}>
        <div className={`${styles.card} ${styles.featured}`}>
          <div className={styles.imageWrapper}>
            <div className={styles.carousel}>
              <img src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-image.png" alt="Discord server video ui" className={styles.image} />
            </div>
          </div>
          <h6 className={styles.title}>Server Video</h6>
        </div>
        <div className={`${styles.card} ${styles.cardBlue}`}>
          <div className={styles.imageWrapper}>
            <img src="https://newportfolio.s3-us-west-2.amazonaws.com/discord-onboarding-image.png" alt="Discord Onboarding UI" className={styles.image} />
          </div>
          <h6 className={styles.title}>Discord Onboarding</h6>
        </div>
        <div className={`${styles.card} ${styles.cardGreen}`}>
          <div className={styles.imageWrapper}>
            <img src="https://newportfolio.s3-us-west-2.amazonaws.com/design-tooling-image.png" alt="Image of the design linting plugin" className={styles.image} />
          </div>
          <h6 className={styles.title}>Design Tooling</h6>
        </div>
        <div className={`${styles.card} ${styles.cardPurple}`}>
          <div className={styles.imageWrapper}>
            <img src="https://newportfolio.s3-us-west-2.amazonaws.com/destiny-medals-image.png" alt="Image of Destiny Medals Project" className={styles.image} />
          </div>
          <h6 className={styles.title}>Destiny Medals</h6>
        </div>
        <div className={`${styles.card} ${styles.cardPink}`}>
          <div className={styles.imageWrapper}>
            <img src="https://newportfolio.s3-us-west-2.amazonaws.com/steelseries-image.png" alt="SteelSeries Engine UI" className={styles.image} />
          </div>
          <h6 className={styles.title}>SteelSeries</h6>
        </div>
      </div>
    </div>
  )
}

export default WorkGrid