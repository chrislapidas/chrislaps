const meta = require("./../articles.json");
import styles from "../styles/Articles.module.scss";
import Head from "next/head";
import * as moment from "moment";

const articles = () => {
  const articleListItems = meta.articles
    .slice(0)
    .reverse()
    .map((article) => (
      <li key={article.id}>
        <a href={article.link}>
          {article.title} -{" "}
          <span className={styles.date}>
            {moment(article.date).format("MMMM D, YYYY")}
          </span>
        </a>
      </li>
    ));

  return (
    <div className={"container " + styles.articlesContainer}>
      <Head>
        <title>Articles | Chris Lapidas | Web Developer</title>
        <meta
          name="keywords"
          content="Articles | Chris Lapidas | Web Developer"
        />
        <link rel="icon" href="./../C.jpg" />
      </Head>

      <h1>Articles</h1>
      <ul className={styles.articleList}>{articleListItems}</ul>
    </div>
  );
};

export default articles;
