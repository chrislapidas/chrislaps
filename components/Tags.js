import styles from "../styles/Tag.module.scss";

const Tags = ({ tags }) => {
  const listItems = tags.map((tag) => <li>{tag}</li>);

  return <ul className={styles.tagList}>{listItems}</ul>;
};

export default Tags;
