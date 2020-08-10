import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../components/navigation'
import Hero from '../components/hero'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation />
        <Hero />
      </main>
    </div>
  )
}
