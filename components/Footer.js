import styles from "../styles/Footer.module.scss";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={"container " + styles.footerInner}>
        <h4>Chris Lapidas</h4>
        <h5>clapidas@gmail.com</h5>
      </div>
      <ul className={"container " + styles.socialMediaList}>
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
    </footer>
  );
};

export default Footer;
