import Head from 'next/head'
import Link from 'next/link'
import Hero from '../components/hero'
import Navigation from '../components/navigation'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="wrapper">
      <Head>
        <title>About Daniel Destefanis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation />
        <Hero text="I’m a husband, dad to three pets, and a designer who’s trying not to take himself too seriously." details={false}/>
        <Footer />
      </main>
    </div>
  )
}
