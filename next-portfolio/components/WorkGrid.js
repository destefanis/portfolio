import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from "react-intersection-observer";
import Card from '../components/Card'
import FeaturedCard from './FeaturedCard'
import styles from './WorkGrid.module.css'

function WorkGrid() {
  return (
    <div className="grid">
      <div className={styles.workGrid}>
        {/* <div className={`${styles.card} ${styles.featured}`}>
          <img src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-image.png" alt="Discord server video ui" className={styles.image} />
          <h6 className={styles.title}>Server Video</h6>
        </div> */}
        <AnimatePresence>
          <FeaturedCard 
            image="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-image.png"
            imageAlt="Discord server video ui"
            color="pink"
            title="Server Video"
            key="Server Video"
            size="featured"
          />
          <Card 
            image="https://newportfolio.s3-us-west-2.amazonaws.com/discord-onboarding-image.png"
            imageAlt="Image of Destiny Medals Project"
            color="blue"
            title="Discord Onboarding"
            size="normal"
          />
          <Card 
            image="https://newportfolio.s3-us-west-2.amazonaws.com/design-tooling-image.png"
            imageAlt="UI of Design Tooling Plugins in Figma"
            color="green"
            title="Design Tooling"
            size="normal"
          />
          <Card 
            image="https://newportfolio.s3-us-west-2.amazonaws.com/destiny-medals-image.png"
            imageAlt="Image of Destiny Medals Project"
            title="Destiny Medals"
            color="purple"
            size="normal"
          />
          <Card 
            image="https://newportfolio.s3-us-west-2.amazonaws.com/steelseries-image.png"
            imageAlt="SteelSeries Engine UI"
            title="SteelSeries"
            color="pink"
            size="normal"
          />
        </AnimatePresence>
      </div>
    </div>
  )
}

export default WorkGrid