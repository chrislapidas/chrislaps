import styles from "../styles/ArticleImg.module.scss";

const ArticleImg = (props) => {
  const style = { width: props.width };
  return (
    <div>
      <img className={styles.articleImg} src={props.src} style={style}></img>
    </div>
  );
};

export default ArticleImg;
