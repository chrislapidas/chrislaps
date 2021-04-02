import Head from "next/head";
import Footer from "../components/Footer";
import styles from "../styles/Index.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chris Lapidas | Web Developer</title>
        <meta name="keywords" content="Chris Lapidas, Web Developer" />
        <link rel="icon" href="/C.jpg" />
      </Head>

      <main className={styles.indexContainer}>
        <img className={styles.bgWave} src="/blue-wave.svg"></img>
        <section className={styles.landing}>
          <div className={"container " + styles.landingContainer}>
            <h1>Hi, I'm Chris Lapidas</h1>
            <div>
              I'm a full stack web developer working with React, Angular, and
              Node.
            </div>
          </div>
        </section>

        <section className={styles.latest}>
          <div className={"container " + styles.latestContainer}>
            <div className={styles.articleWrapper4}>
              <header className={styles.latestHeader}>
                <a href="/articles">
                  <h2>
                    Latest <br />
                    Articles
                  </h2>
                </a>
              </header>
            </div>
            <div className={"elevation-5 " + styles.articleWrapper1}>
              <a href="/articles">
                <article className={styles.article1}>
                  <h4>Beginner's Guide to CSS Flexbox</h4>
                </article>
              </a>
            </div>
            <div className={"elevation-5 " + styles.articleWrapper2}>
              <article className={styles.article2}>
                <a>
                  <h4>Anonymous Functions in Javascript</h4>
                </a>
              </article>
            </div>
            <div className={"elevation-5 " + styles.articleWrapper3}>
              <article className={styles.article3}>
                <a>
                  <h4>Running A Node Application on AWS Elastic Beanstalk</h4>
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.aboutSection}>
          <div className={"container " + styles.aboutContainer}>
            <div className={styles.aboutCreated}>
              <h5>
                I created this site using
                <br /> Next.js and React
              </h5>
              <div className={styles.iconRow}>
                <img className={styles.nextIcon} src="/next.svg"></img>
                <img className={styles.reactIcon} src="/react.svg"></img>
              </div>
            </div>
            <div className={styles.aboutAws}>
              <h5>
                I build, deploy, and run this site using <br /> AWS Elastic
                Beanstalk
              </h5>
              <div className={styles.aboutAwsContainer}>
                <img className={styles.awsIcon} src="/aws.svg"></img>
                <div className={"elevation-2 " + styles.code}>
                  <code>git commit -m "Minor css changes"</code>
                  <br />
                  <code>eb deploy prod-env</code>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className={"container " + styles.githubContainer}>
            <div>Want to hire me? Send me an email & let's chat!</div>

            <div>
              <a>clapidas@gmail.com</a>
            </div>
            <button className={"elevation-1 " + styles.githubButton}>
              <svg
                viewBox="0 0 16 16"
                width="22"
                height="16"
                class="githubIcon"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
              <h5>Github</h5>
            </button>
          </div>
        </section>
        <div className={styles.positionRelativeBottom}>
          <img
            className={styles.bgWaveUpsideDown}
            src="/blue-wave-upside-down.svg"
          ></img>
        </div>
      </main>
    </div>
  );
}
