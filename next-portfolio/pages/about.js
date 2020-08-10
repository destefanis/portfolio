import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About Daniel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <>
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </>
      </main>

      <footer>
        Let's Chat
      </footer>
    </div>
  )
}
