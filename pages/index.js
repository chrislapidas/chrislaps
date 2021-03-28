import Head from "next/head";
import styles from "../styles/Index.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chris Lapidas | Web Developer</title>
        <meta name="keywords" content="Chris Lapidas, Web Developer" />
        <link rel="icon" href="/C.jpg" />
      </Head>

      <main>
        <section className={styles.landing}>
          <div className={"container " + styles.landingContainer}>
            <h1>Hi, I'm Chris Lapidas</h1>
            <p>
              I'm a full stack web developer working with React, Angular, and
              Node.
            </p>
          </div>
        </section>

        <section className={styles.latest}>
          <div className={"container " + styles.latestContainer}>
            <div className={"elevation-5 " + styles.articleWrapper1}>
              <article className={styles.article1}>
                Beginner's Guide to CSS Flexbox
              </article>
            </div>
            <div className={"elevation-5 " + styles.articleWrapper2}>
              <article className={styles.article2}>
                Anonymous Functions in Javascript
              </article>
            </div>
            <div className={"elevation-5 " + styles.articleWrapper3}>
              <article className={styles.article3}>
                Running A Node Application on AWS Elastic Beanstalk
              </article>
            </div>
            <div className={styles.articleWrapper4}>
              <header className={styles.latestHeader}>
                <h2>Latest Articles</h2>
              </header>
            </div>
          </div>
        </section>

        <section className={styles.aboutSection}>
          <div className={"container " + styles.aboutContainer}>
            <div className={"elevation-2 " + styles.aboutCreated}>
              <h3>I created this site using Next.js and React</h3>
              <div className={styles.iconRow}>
                <img className={styles.section1icon} src="/next.svg"></img>
                <img className={styles.section1icon} src="/react.png"></img>
              </div>
            </div>
            <div className={"elevation-2 " + styles.aboutAws}>
              <h3>I build, deploy, and run using AWS Elastic Beanstalk</h3>
              <div className={styles.aboutAwsContainer}>
                <img className={styles.awsIcon} src="/aws.png"></img>
                <div className={"elevation-2 " + styles.code}>
                  <code>git commit -m "Minor css changes"</code>
                  <br />
                  <code>eb deploy prod-env</code>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className={"container " + styles.section1row2}>
            <button className={"elevation-2 " + styles.githubButton}>
              <h3>Check it out on GitHub</h3>{" "}
              <img className={styles.github} src="/github.png"></img>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
