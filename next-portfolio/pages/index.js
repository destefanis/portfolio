import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../components/navigation'
import Hero from '../components/hero'
import WorkGrid from '../components/WorkGrid'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'

export default function Home() {
  const ref = React.useRef(null);

  return (
    <div className="wrapper" ref={ref}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation />
        <Hero text="I’m a designer who’s passionate about solving problems and creating delightful user experiences." details={true}/>
        <WorkGrid />
        <AboutSection />
        <Footer />
      </main>
    </div>
  )
}
