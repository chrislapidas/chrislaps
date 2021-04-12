import styles from "../styles/SocialMediaGroup.module.scss";
import SocialMedia from "./SocialMedia";

const SocialMediaGroup = () => {
  return (
    <ul className={styles.socialMediaList}>
      <li>
        <SocialMedia
          src="github.svg"
          href="https://github.com/chrislapidas"
        ></SocialMedia>
      </li>
      <li>
        <SocialMedia
          src="instagram.svg"
          href="https://www.instagram.com/chrislapidas/"
        ></SocialMedia>
      </li>
      <li>
        <SocialMedia
          src="facebook.svg"
          href="https://www.facebook.com/chris.lapidas"
        ></SocialMedia>
      </li>
    </ul>
  );
};

export default SocialMediaGroup;
