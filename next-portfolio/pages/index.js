import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../components/navigation'
import Hero from '../components/hero'
import WorkGrid from '../components/WorkGrid'

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
      </main>
    </div>
  )
}
