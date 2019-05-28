import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Shapes from "../assets/shapes.svg";

import * as styles from './Index.module.scss'
import { useSpring, animated } from 'react-spring'

export default class IndexPage extends React.Component {

  render() {

    return(
      <Layout>
        <Shapes className={styles.Shapes}/>
        <div className={styles.Container}>
          <SEO title="Home" />
          <h1 className={styles.Title}>Product designer and developer living in San Francisco, working at Discord.</h1>
        </div>
        <section className={styles.Section}></section>
      </Layout>
    );
  }
}