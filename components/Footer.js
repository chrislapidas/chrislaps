import styles from "../styles/Footer.module.scss";
import SocialMediaGroup from "./SocialMediaGroup";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={"container " + styles.footerInner}>
        <div>
          <h4>Chris Lapidas</h4>
          <div> Copyright &#169; 2021 chrislaps.com</div>
        </div>

        <div>
          <h5>clapidas@gmail.com</h5>
          <SocialMediaGroup></SocialMediaGroup>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
