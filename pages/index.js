import Head from "next/head";
import Footer from "../components/Footer";
import styles from "../styles/Index.module.scss";
import SocialMedia from "../components/SocialMedia";
import moment from "moment";
const meta = require("./../articles.json");

export default function Home() {
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("clapidas@gmail.com");
  };

  return (
    <div>
      <Head>
        <title>Chris Lapidas | Web Developer</title>
        <meta name="keywords" content="Chris Lapidas, Web Developer" />
        <link rel="icon" href="C.jpg" />
      </Head>

      <main className={styles.indexContainer}>
        <img className={styles.bgWave} src="/blue-tri-2.svg"></img>
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
              I'm a full stack web developer currently working with React,
              Angular, and Node.
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
          <div className={styles.articleWrapper1}>
            <a href={meta.articles[0].link}>
              <article className={styles.article}>
                <h5>{meta.articles[0].title}</h5>
                <div className={styles.articleDate}>
                  {moment(meta.articles[0].date).format("MMMM D, YYYY")}
                </div>
              </article>
            </a>
          </div>
          <div className={styles.articleWrapper2}>
            <a href={meta.articles[1].link}>
              <article className={styles.article}>
                <h5>{meta.articles[1].title}</h5>
                <div className={styles.articleDate}>
                  {moment(meta.articles[1].date).format("MMMM D, YYYY")}
                </div>
              </article>
            </a>
          </div>
          <div className={styles.articleWrapper3}>
            <a href={meta.articles[2].link}>
              <article className={styles.article}>
                <h5>{meta.articles[2].title}</h5>
                <div className={styles.articleDate}>
                  {moment(meta.articles[2].date).format("MMMM D, YYYY")}
                </div>
              </article>
            </a>
          </div>
        </section>

        <section className={styles.aboutSection}>
          <div className={"container " + styles.aboutContainer}>
            <div className={styles.aboutCreated}>
              <div>
                I created this site using
                <br /> <b>Next.js</b> and <b>React</b>
              </div>
              <div className={styles.iconRow}>
                <img className={styles.nextIcon} src="/next.svg"></img>
                <img className={styles.reactIcon} src="/react.svg"></img>
              </div>
            </div>
            <div className={styles.aboutAws}>
              <div>
                I build, deploy, and run this site using <br />{" "}
                <a href="https://aws.amazon.com/elasticbeanstalk/">
                  <b>AWS Elastic Beanstalk</b>
                </a>
              </div>
              <div className={styles.aboutAwsContainer}>
                <a href="https://aws.amazon.com/" className={styles.awsLink}>
                  <img className={styles.awsIcon} src="/aws.svg"></img>
                </a>
                <div className={"elevation-2 " + styles.code}>
                  <code>git commit -m "Minor css changes"</code>
                  <br />
                  <code>eb deploy prod-env</code>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className={"container " + styles.hireMeContainer}>
            <div>Want to hire me? Send me an email & let's chat!</div>

            <div className={styles.emailParentButton}>
              <a href="mailto:clapidas@gmail.com">
                <button className={"elevation-1 " + styles.emailButton}>
                  clapidas@gmail.com
                </button>
              </a>

              <button
                onClick={copyEmailToClipboard}
                className={"elevation-1 " + styles.clipboardButton}
              >
                <img className={styles.clipboard} src="/clipboard.svg"></img>
              </button>
            </div>
          </div>
        </section>
        {/* 
        <div className={styles.positionRelativeBottom}>
          <img
            className={styles.bgWaveUpsideDown}
            src="/bg-wave-upside-down.svg"
          ></img>
        </div>
        */}
      </main>
    </div>
  );
}
