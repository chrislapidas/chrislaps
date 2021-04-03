import styles from "../styles/SocialMedia.module.scss";

const SocialMedia = ({ image }) => {
  return <img className={styles.icon} src={image}></img>;
};

export default SocialMedia;
