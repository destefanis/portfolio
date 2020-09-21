import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../components/navigation'
import Hero from '../components/hero'
import WorkGrid from '../components/WorkGrid'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="wrapper">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation />
        <Hero />
        <WorkGrid />
        <AboutSection />
        <Footer />
      </main>
    </div>
  )
}
