import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="nav-wrapper">
      <h1 className="logo-title">
        Daniel Destefanis
      </h1>
    <nav className="nav">
      <a href="#contact" className="nav-link">
        Contact
      </a>
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
