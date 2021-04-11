import Head from "next/head";
import Footer from "../components/Footer";
import styles from "../styles/Index.module.scss";
import SocialMedia from "../components/SocialMedia";
import SocialMediaGroup from "../components/SocialMediaGroup";
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
        <img className={styles.bgWave} src="/mac4.svg"></img>
        <SocialMediaGroup></SocialMediaGroup>

        <section className={styles.landing}>
          <div className={"container " + styles.landingContainer}>
            <h1>Hi, I'm Chris Lapidas.</h1>
            <h5>
              I'm a full stack web developer from Rhode Island working with
              React, Angular, and Node.
            </h5>
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

        <section className={"container " + styles.aboutMeSection}>
          <div className={styles.aboutMeContainer}>
            <div className={styles.aboutMeTitle}>
              <h2>About Me</h2>
            </div>
            <div className={styles.aboutMeText}>
              <p>
                I'm a web developer, designer, and admirer. My work always
                focuses on usability and simplicity.
              </p>
              <hr></hr>
              <p>
                I've spent the past 6 years creating and learning everything I
                can about web tech and trends. Anything that can make my work
                better and my life easier is always at the top of my to do list.
              </p>
              <hr></hr>
              <p>
                Previously I spent 5 years serving active duty US Navy while
                touring the country as a guitarist. My hobbies include hiking,
                cooking, and spending lots of time with friends and family.
              </p>
            </div>
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
            <h6>Want to hire me? Send me an email!</h6>

            <div className={styles.emailParentButton}>
              <a href="mailto:clapidas@gmail.com">
                <button className={"elevation-1 " + styles.emailButton}>
                  <b>clapidas@gmail.com</b>
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

        <div className={"container"}>
          <hr></hr>
        </div>

        <Footer></Footer>

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
