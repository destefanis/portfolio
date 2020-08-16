import Link from 'next/link'
import styles from './WorkGrid.module.css'

function WorkGrid() {
  return (
    <div className="container">
      <div className={styles.grid}>
        <div className={styles.card}>
          <div class={styles.imageWrapper}>
            <img src="/server-video-1.png" alt="Discord server video ui" className={styles.image} />
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
        <div className={styles.card}>
          <h6 className={styles.title}>Destiny Medals</h6>
        </div>
      </div>
    </div>
  )
}

export default WorkGrid