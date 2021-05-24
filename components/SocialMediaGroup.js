import styles from "../styles/SocialMediaGroup.module.scss";
import SocialMedia from "./SocialMedia";

const SocialMediaGroup = (props) => {
  let githubSrc = "github.svg";
  let instaSrc = "instagram.svg";
  let fbSrc = "facebook.svg";

  if (props.article) {
    githubSrc = "../github.svg";
    instaSrc = "../instagram.svg";
    fbSrc = "../facebook.svg";
  }
  return (
    <ul className={styles.socialMediaList}>
      <li>
        <SocialMedia
          src={githubSrc}
          href="https://github.com/chrislapidas"
        ></SocialMedia>
      </li>
      <li>
        <SocialMedia
          src={instaSrc}
          href="https://www.instagram.com/chrislapidas/"
        ></SocialMedia>
      </li>
      <li>
        <SocialMedia
          src={fbSrc}
          href="https://www.facebook.com/chris.lapidas"
        ></SocialMedia>
      </li>
    </ul>
  );
};

export default SocialMediaGroup;
