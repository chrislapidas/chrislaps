import Head from 'next/head';
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
          <title>Chris Lapidas | Web Developer</title>
          <meta name="keywords" content="Chris Lapidas, Web Developer" />
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.landing}>
          <div className={"container"}>
            <h1>Hi, I'm Chris Lapidas.</h1>
            <div>Switch themes: Clean Retro Cyberpunk</div>
            <div>I'm a full stack web developer working with React, Angular, Node, and Java.</div>
            <div>This site was made using:</div>
            <div>Next.js, React, and Express</div>
            <div>Check it out <a>here on GitHub</a></div>
          </div>
        </div>
        

        
     
      </main>

      <footer>
      </footer>
    </div>
  )
}
