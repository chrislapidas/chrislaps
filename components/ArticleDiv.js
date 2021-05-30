import styles from "../styles/ArticleDiv.module.scss";

const ArticleDiv = ({ children }) => {
  return <div className={styles.contentDiv}>{children}</div>;
};

export default ArticleDiv;
