import styles from "../styles/SocialMedia.module.scss";

const SocialMedia = ({ href, src }) => {
  return (
    <a href={href}>
      <img className={styles.socialMediaIcon} src={src}></img>
    </a>
  );
};

export default SocialMedia;
