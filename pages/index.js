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
              <div><h1>Hi, I'm Chris Lapidas</h1></div>
              
              <div>I'm a full stack web developer working with React, Angular, and Node.</div>

            </div>
          </div>

          
        
          
        </div>

        <div className={styles.latest}>
          <div className={"container " + styles.latestDivs}>
            <div className={"elevation-5 " + styles.articleWrapper1}>
              <div className={styles.article1}>Beginner's Guide to CSS Flexbox</div>
            </div>
            <div className={"elevation-5 " + styles.articleWrapper2}>
              <div className={styles.article2}>Anonymous Functions in Javascript</div>
            </div>
            <div className={"elevation-5 " + styles.articleWrapper3}>
              <div className={styles.article3}>Running A Node Application on AWS Elastic Beanstalk</div>
            </div>
            <div className={styles.articleWrapper4}>
              <div className={styles.article4}><h1>Latest Articles</h1></div>
            </div>
            
            
            
          </div>

        </div>


        <div className={styles.section1}>

            <div className={"container " + styles.section1row1}>
              <div className={styles.section1col1}>
                <h4>I created this site using Next.js and React</h4>
                <div className={styles.iconRow}>
                  <img className={styles.section1icon} src="/next.svg"></img>
                  <img className={styles.section1icon} src="/react.png"></img>
                </div>
                
              </div>
              <div className={styles.section1col2}>
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
              <button className={"elevation-2 " + styles.githubButton}><h3>Check it out on GitHub</h3> <img className={styles.github} src="/github.png"></img></button>
            </div>
            
          </div>
      
     
      </main>


    </div>
  )
}
