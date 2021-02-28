import Head from 'next/head';
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
          <title>Chris Lapidas | Web Developer</title>
          <meta name="keywords" content="Chris Lapidas, Web Developer" />
          <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <div className={styles.landing}>
          <div className={"container"}>
            <div><h1>Hi, I'm Chris Lapidas.</h1></div>
            <div>Switch themes: Clean Retro Cyberpunk</div>
            <div>I'm a full stack web developer working with React, Angular, Node, and Java.</div>
            <div>This site was made using:</div>
            <div>Next.js, React, and Express</div>
            <div>Check it out <a>here on GitHub</a></div>
            <div>(Spotify Icon) I just listened to <a>"Do I Do" by Stevie Wonder</a></div>
            <div>Get In Touch</div>
            <div>(email icon) clapidas@gmail.com</div>
          </div>
        </div>

        <div className={styles.section1}>

            <div className={styles.section1col1}>
              <div>This site was made using </div>
              <div><h3>Next.js, React, and Express</h3></div>
              <div>..and is built/deployed/run using</div>
              <div><h3>AWS Elastic Beanstalk</h3></div>
              <div>Check it out</div>
              <h3><a>(icon) here on github</a></h3>
            </div>
            <div className={styles.section1col2}>
              Icons here
            </div>
        
        </div>
        

        
     
      </main>

      <footer>
      </footer>
    </div>
  )
}
