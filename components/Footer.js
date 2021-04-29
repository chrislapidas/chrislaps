import styles from "../styles/Footer.module.scss";
import SocialMediaGroup from "./SocialMediaGroup";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={"container " + styles.footerInner}>
        <div>
          <h3>Chris Lapidas</h3>
          <div>ChrisLaps.com</div>
          <div> Copyright &#169; 2021 </div>
        </div>

        <div>
          <div className={styles.footerSocialMedia}>
            <SocialMediaGroup></SocialMediaGroup>
          </div>

          <h5>clapidas@gmail.com</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
