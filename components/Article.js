const meta = require("./../articles.json");
import * as moment from "moment";
import styles from "../styles/Article.module.scss";
import Head from "next/head";
import Tags from "./Tags";
import classnames from "classnames";

const Article = ({ id, children }) => {
  const date = moment(meta.articles[id].date).format("MMMM D, YYYY");

  return (
    <main className={"container " + styles.articleContainer}>
      <Head>
        <title>{meta.articles[id].title} | Chris Lapidas | Web Developer</title>
        <meta
          name="keywords"
          content={"Chris Lapidas, Web Developer " + meta.articles[id].tags}
        />
        <link rel="icon" href="./../C.jpg" />
      </Head>
      <h1>{meta.articles[id].title}</h1>
      <h4>{date}</h4>

      <div className={styles.tags}>
        <Tags tags={meta.articles[id].tags}></Tags>
      </div>

      <div className={styles.content}>{children}</div>
    </main>
  );
};

export default Article;
