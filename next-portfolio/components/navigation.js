import Link from 'next/link'
import styles from './navigation.module.css'

function Navigation() {
  return (
    <div className="container">
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/"><a>Daniel Destefanis</a></Link>
        </div>
        <div className={styles.navList}>
          <Link href="/about"><a className={styles.navLink}>About</a></Link>
          <Link href="/"><a className={styles.navLink}>Work</a></Link>
        </div>
      </nav>
    </div>
  )
}

export default Navigation