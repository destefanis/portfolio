import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import * as styles from './Header.module.scss'

const Header = ({ siteTitle }) => (
  <header className={styles.Header}>
    <nav className={styles.Nav}>
      <div className={styles.NavLeft}>
        <Link
          className={styles.Link}
          to="/">
          {siteTitle}
        </Link>
      </div>
      <div className={styles.NavRight}>
        <Link
          className={styles.Link}
          to="/about/">
          About
        </Link>
        <Link
          className={styles.Link}
          to="/work/">
          Work
        </Link>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
