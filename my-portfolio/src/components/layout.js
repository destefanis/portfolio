/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./fonts/stylesheet.css"
import "./layout.css"
import "./hero.css"
import "./footer.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer className="footer" id="contact">
          <header className="footer-wrapper">
            <nav className="nav">
              <a href="https://twitter.com/it_daniel_d" className="nav-link">
                Twitter
              </a>
              <a href="https://dribbble.com/danielrd" className="nav-link">
                Dribbble
              </a>
              <a href="https://github.com/destefanis" className="nav-link">
                Github
              </a>
              <a href="https://www.linkedin.com/in/danielrd/" className="nav-link">
                LinkedIn
              </a>
            </nav>
          </header>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
