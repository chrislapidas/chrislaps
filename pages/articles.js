const meta = require("./../articles.json");
import styles from "../styles/Articles.module.scss";
import Head from "next/head";
import * as moment from "Moment";

const articles = () => {
  const articleListItems = meta.articles.map((article) => (
    <li key={article.id}>
      <a href={article.link}>
        {article.title} - {moment(article.date).format("MMMM Do, YYYY")}
      </a>
    </li>
  ));

  return (
    <div className={"container " + styles.articlesContainer}>
      <Head>
        <title>Articles, Chris Lapidas | Web Developer</title>
        <meta
          name="keywords"
          content="Articles, Chris Lapidas | Web Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Articles</h1>
        <ul className={styles.articleList}>{articleListItems}</ul>
      </main>
    </div>
  );
};

export default articles;
