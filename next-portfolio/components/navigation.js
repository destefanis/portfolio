import { motion } from 'framer-motion'

import Link from 'next/link'
import styles from './navigation.module.css'

function Navigation() {
  return (
    <div className="container">
      <motion.nav 
        className={styles.nav}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', delay: 0 }}
      >
        <div className={styles.logo}>
          <Link href="/"><a>Daniel Destefanis</a></Link>
        </div>
        <div className={styles.navList}>
          <Link href="/about"><a className={styles.navLink}>About</a></Link>
          <Link href="/"><a className={styles.navLink}>Work</a></Link>
        </div>
      </motion.nav>
    </div>
  )
}

export default Navigation