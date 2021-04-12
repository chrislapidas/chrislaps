import styles from "../styles/Footer.module.scss";
import SocialMediaGroup from "./SocialMediaGroup";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={"container " + styles.footerInner}>
        <div>
          <h4>Chris Lapidas</h4>
          <div> Copyright &#169; 2021 </div>
        </div>

        <div>
          <SocialMediaGroup></SocialMediaGroup>
          <h5>clapidas@gmail.com</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
