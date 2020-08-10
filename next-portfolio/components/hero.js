import Link from 'next/link'
import styles from './hero.module.css'

function Hero() {
  return (
    <div className={styles.hero}>
      <div class="container">
        <h1 className={styles.title}>
          I’m a designer who’s passionate about solving problems and creating delightful user experiences.
        </h1>
        <img src="/dots.svg" alt="Dot Shape" className="shape shape--dots" />
      </div>
    </div>
  )
}

export default Hero