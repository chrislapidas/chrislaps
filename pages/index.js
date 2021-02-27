import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chris Lapidas | Web Developer</title>
        <meta name="keywords" content="Chris Lapidas, Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <h1 className="text-4xl font-semibold">Hi, I'm Chris Lapidas.</h1>
        <div>Switch themes: Clean Retro Cyberpunk</div>
        <div className="text-green-800">I'm a full stack web developer working with React, Angular, Node, and Java.</div>
     
      </main>

      <footer>
      </footer>
    </div>
  )
}
