import Link from 'next/link'
import styles from './footer.module.css'
import { motion } from 'framer-motion'

function Footer() {
  return (
    <div className="grid grid--full">
      <div className={styles.footer}>
        <div className={styles.card}>
          <h2 className={styles.title}>
            Let's chat. 
            {/* <img src="/message-circle.svg" alt="Message Icon" className={styles.icon} /> */}
          </h2>
        </div>
        <nav className={styles.footerLinks}>
          <div className={styles.openSource}>
            This portfolio is open source and available on Figma and Github.
          </div>
          <div className={styles.socialLinks}>
            <a href="#" target="_blank" className={styles.socialLink}>
              Twitter
            </a>
            <a href="#" target="_blank" className={styles.socialLink}>
              Github
            </a>
            <a href="#" target="_blank" className={styles.socialLink}>
              LinkedIn
            </a>
            <a href="#" target="_blank" className={styles.socialLink}>
              Dribbble
            </a>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Footer