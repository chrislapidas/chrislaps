import styles from "../styles/Tag.module.scss";

const Tags = ({ tags }) => {
  const listItems = tags.map((tag) => (
    <li>
      <a href="/articles">{tag}</a>
    </li>
  ));

  return <ul className={styles.tagList}>{listItems}</ul>;
};

export default Tags;
