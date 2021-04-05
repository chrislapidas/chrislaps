import Head from "next/head";
import Footer from "../components/Footer";
import styles from "../styles/Index.module.scss";
import SocialMedia from "../components/SocialMedia";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chris Lapidas | Web Developer</title>
        <meta name="keywords" content="Chris Lapidas, Web Developer" />
        <link rel="icon" href="C.jpg" />
      </Head>

      <main className={styles.indexContainer}>
        <img className={styles.bgWave} src="/blue-bg.svg"></img>
        <ul className={"container " + styles.socialMediaList}>
          <li>
            <SocialMedia
              src="github.svg"
              href="https://github.com/chrislapidas"
            ></SocialMedia>
          </li>
          <li>
            <SocialMedia
              src="instagram.svg"
              href="https://www.instagram.com/chrislapidas/"
            ></SocialMedia>
          </li>
          <li>
            <SocialMedia
              src="facebook.svg"
              href="https://www.facebook.com/chris.lapidas"
            ></SocialMedia>
          </li>
        </ul>

        <section className={styles.landing}>
          <div className={"container " + styles.landingContainer}>
            <h1>Hi, I'm Chris Lapidas</h1>
            <div>
              I'm a full stack web developer working with React, Angular, and
              Node.
            </div>
          </div>
        </section>

        <section className={"container " + styles.latestContainer}>
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
          <div className={"elevation-2 " + styles.articleWrapper1}>
            <a href="/articles">
              <article className={styles.article1}>
                <h4>Beginner's Guide to CSS Flexbox</h4>
              </article>
            </a>
          </div>
          <div className={"elevation-2 " + styles.articleWrapper2}>
            <article className={styles.article2}>
              <a>
                <h4>Anonymous Functions in Javascript</h4>
              </a>
            </article>
          </div>
          <div className={"elevation-2 " + styles.articleWrapper3}>
            <article className={styles.article3}>
              <a>
                <h4>Running A Node Application on AWS Elastic Beanstalk</h4>
              </a>
            </article>
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
              <h5>Github</h5>
            </button>
          </div>
        </section>
        <div className={styles.positionRelativeBottom}>
          <img
            className={styles.bgWaveUpsideDown}
            src="/bg-wave-upside-down.svg"
          ></img>
        </div>
      </main>
    </div>
  );
}
