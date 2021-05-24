import Head from "next/head";
import styles from "../styles/Index.module.scss";
import SocialMedia from "../components/SocialMedia";
import SocialMediaGroup from "../components/SocialMediaGroup";
import moment from "moment";
import { useRef } from "react";
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
        <section className={styles.landing}>
          <div className={"container"}>
            <div className={styles.landingContainer}>
              <h1 data-aos="fade-left" data-aos-duration="1000">
                {" "}
                Hi, I'm Chris Lapidas.
              </h1>
              <h5
                data-aos="fade-left"
                data-aos-delay="150"
                data-aos-duration="1100"
                className={styles.subtitle}
              >
                I'm a full stack web developer from Rhode Island working with
                React, Angular, and Node.
              </h5>
            </div>
          </div>
        </section>

        <section className={"container " + styles.latestContainer}>
          <div
            className={styles.articleWrapper4}
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <header className={styles.latestHeader}>
              <a href="/articles">
                <h2 className={styles.latestTitle}>
                  Latest <br />
                  Articles
                </h2>
              </a>
            </header>
          </div>
          <div
            className={styles.articleWrapper1}
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <article className={styles.articleParent}>
              <a
                className={styles.article}
                href={meta.articles[meta.articles.length - 1].link}
              >
                <h5>{meta.articles[meta.articles.length - 1].title}</h5>
                <div className={styles.articleDate}>
                  {moment(meta.articles[meta.articles.length - 1].date).format(
                    "MMMM D, YYYY"
                  )}
                </div>
              </a>
            </article>
          </div>
          <div
            className={styles.articleWrapper2}
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <article className={styles.articleParent}>
              <a
                href={meta.articles[meta.articles.length - 2].link}
                className={styles.article}
              >
                <h5>{meta.articles[meta.articles.length - 2].title}</h5>
                <div className={styles.articleDate}>
                  {moment(meta.articles[meta.articles.length - 2].date).format(
                    "MMMM D, YYYY"
                  )}
                </div>{" "}
              </a>
            </article>
          </div>
          <div
            className={styles.articleWrapper3}
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <article className={styles.articleParent}>
              <a
                className={styles.article}
                href={meta.articles[meta.articles.length - 3].link}
              >
                <h5>{meta.articles[meta.articles.length - 3].title}</h5>
                <div className={styles.articleDate}>
                  {moment(meta.articles[meta.articles.length - 3].date).format(
                    "MMMM D, YYYY"
                  )}
                </div>
              </a>
            </article>
          </div>
        </section>

        <section className={styles.aboutMeSection}>
          <div className={"container"}>
            <div className={"container " + styles.aboutMeContainer}>
              <div
                className={styles.aboutMeTitle}
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h2>
                  About <br />
                  Me
                </h2>
              </div>
              <div className={styles.aboutMeText}>
                <p>
                  <div data-aos="fade-left" data-aos-duration="750">
                    I'm a web developer, designer, and admirer. My work always
                    focuses on usability and simplicity.
                  </div>
                </p>
                <hr></hr>
                <p>
                  <div data-aos="fade-left" data-aos-duration="750">
                    I've spent the past 6 years creating and learning everything
                    I can about web tech and trends. Anything that can make my
                    work better and my life easier is always at the top of my
                    to-do list.
                  </div>
                </p>
                <hr></hr>
                <p>
                  <div data-aos="fade-left" data-aos-duration="750">
                    Previously I spent 5 years serving active duty US Navy while
                    touring the country as a guitarist. My hobbies include
                    hiking, cooking, and spending lots of time with friends and
                    family.
                  </div>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.aboutSection}>
          <div className={"container " + styles.aboutContainer}>
            <div
              className={styles.aboutCreated}
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <div>
                I created this site using
                <br /> <b>Next.js</b> and <b>React</b>
              </div>
              <div className={styles.iconRow}>
                <img className={styles.nextIcon} src="/next.svg"></img>
                <img className={styles.reactIcon} src="/react.svg"></img>
              </div>
            </div>
            <div
              className={styles.aboutAws}
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="850"
            >
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
            <h5>Want to hire me? Send me an email!</h5>

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
      </main>
    </div>
  );
}
