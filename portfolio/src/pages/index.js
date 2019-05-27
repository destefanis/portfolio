import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import * as styles from './Index.module.scss'

const IndexPage = () => (
  <Layout>
    <div className={styles.Container}>
      <SEO title="Home" />
      <h1>Product designer and developer living in San Francisco, working at Discord</h1>
    </div>
  </Layout>
)

export default IndexPage
