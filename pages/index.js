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
            <div><h1>Hi, I'm Chris Lapidas</h1></div>
            
            <div>I'm a full stack web developer <br/>working with React, Angular, and Node</div>

            
          </div>
        </div>

        <div className={"elevation-2 " + styles.section1}>

          <div className={"container " + styles.section1row1}>
            <div className={"elevation-2 " + styles.section1col1}>
              <h4>I created this site using Next.js and React</h4>
              <div className={styles.iconRow}>
                <img className={styles.section1icon} src="/next.svg"></img>
                <img className={styles.section1icon} src="/react.png"></img>
              </div>
              
            </div>
            <div className={"elevation-2 " + styles.section1col2}>
              <h4>I build, deploy, and run this site using AWS Elastic Beanstalk</h4>
              <div className={styles.section1aws}>
                <img className={styles.awsIcon} src="/aws.png"></img>
                <div className={"elevation-2 " + styles.section1col2code}>
                  <code>git commit -m "Minor css changes"</code><br/>
                  <code>eb deploy prod-env</code><br/>
                </div>
                
              </div>
              
            </div>
            
          </div>
          <div className={"container " + styles.section1row2}>
              <h4>Check it out on </h4>
              <button className={styles.githubButton}><h4>GitHub</h4> <img className={styles.github} src="/github.png"></img></button>
            </div>
          
        </div>

        <div>
          Latest Articles
        </div>
        <div>(Spotify Icon) I just listened to <a>"Do I Do" by Stevie Wonder</a></div>
        <div>Get In Touch</div>
        <div>(email icon) clapidas@gmail.com</div>
        <div>Switch themes: Clean Retro Cyberpunk</div>
    

        
     
      </main>

      <footer>
      </footer>
    </div>
  )
}
