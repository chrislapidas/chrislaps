import Head from 'next/head';
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
          <title>Chris Lapidas | Web Developer</title>
          <meta name="keywords" content="Chris Lapidas, Web Developer" />
          <link rel="icon" href="/C.jpg" />
      </Head>

      <main>
        <div className={styles.landing}>
          <div className={"container " + styles.landingBox}>
            <div className={styles.landingRow}>
              <div><h1>Hi, I'm <br/>Chris Lapidas</h1></div>
              
              <div>I'm a full stack web developer <br/>working with React, Angular, and Node.</div>

              <div >
                This website is my article collection <br/>and my playground for cool web stuff.
              </div>
            </div>
            

            

          </div>





          <div className={styles.section1}>

            <div className={"container " + styles.section1row1}>
              <div className={"elevation-5 " + styles.section1col1}>
                <h4>I created this site using Next.js and React</h4>
                <div className={styles.iconRow}>
                  <img className={styles.section1icon} src="/next.svg"></img>
                  <img className={styles.section1icon} src="/react.png"></img>
                </div>
                
              </div>
              <div className={"elevation-5 " + styles.section1col2}>
                <h4>I build, deploy, and run using AWS Elastic Beanstalk</h4>
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
                <button className={styles.githubButton}><h3>Check it out on <u>GitHub</u></h3> <img className={styles.github} src="/github.png"></img></button>
              </div>
            
          </div>

          <div className={styles.contact}>
            
              <div>
                <h2>Contact me</h2>
              </div>
              <button className={styles.contactButton}>
                <h3>clapidas@gmail.com</h3>
                <img className={styles.clipboard} src="/clipboard.png"></img>
              </button>
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
