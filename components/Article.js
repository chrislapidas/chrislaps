const meta = require("./../articles.json");
import * as moment from "moment";
import styles from "../styles/Article.module.scss";
import Head from "next/head";
import Tags from "./Tags";

const Article = ({ id, children }) => {
  const date = moment(meta.articles[id].date).format("MMMM Do, YYYY");

  return (
    <div className={"container " + styles.articleContainer}>
      <Head>
        <title>{meta.articles[id].title}, Chris Lapidas | Web Developer</title>
        <meta
          name="keywords"
          content={"Chris Lapidas, Web Developer " + meta.articles[id].tags}
        />
        <link rel="icon" href="./../C.jpg" />
      </Head>
      <h2>{meta.articles[id].title}</h2>
      <h4>{date}</h4>

      <Tags tags={meta.articles[id].tags}></Tags>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Article;
