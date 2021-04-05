import styles from "../styles/SocialMedia.module.scss";

const SocialMedia = ({ href, children }) => {
  return <a href={href}>{children}</a>;
};

export default SocialMedia;
