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
        <img className={styles.bgWave} src="/blue-wave-2.svg"></img>
        <ul className={"container " + styles.socialMediaList}>
          <li>
            <a href="https://github.com/chrislapidas">
              <svg
                className={"socialMediaIcon"}
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub icon</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/chrislapidas/">
              <svg
                className={"socialMediaIcon"}
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Instagram icon</title>
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
            </a>
          </li>
          <li></li>
          <a href="https://www.facebook.com/chris.lapidas">
            <svg
              className={"socialMediaIcon"}
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>Facebook icon</title>
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
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
