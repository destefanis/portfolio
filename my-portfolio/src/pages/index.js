import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Portrait from "../images/portrait.png" 

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="title">
      Product designer and developer living in San Francisco, working at Discord.
    </div>
    <div className="hero-wrapper">
      <div className="hero">
        <div className="hero-image" style={{backgroundImage: "url(" + Portrait + ")"}}>
        </div>
        <div class="hero-text">
          <h5 className="hero-label">About</h5>
          <p className="hero-text__body">
          I’m passionate about solving problems, creating delightful user experiences, and improving my craft.
          </p>
          <p className="hero-text__body hero-text__body--last">
          In my free time you’ll find me designing, writing code, making music, and spending time with my dog, my cat, or my other cat.
          </p>
          <h5 className="hero-label">
            Currently
          </h5>
          <p className="hero-text__body">
          Senior Product Designer @ Discord
          </p>
        </div>
      </div>
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
