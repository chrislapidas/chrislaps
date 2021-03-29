import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={"container " + styles.footerInner}>
        <h4>Chris Lapidas</h4>
        <h5>clapidas@gmail.com</h5>
      </div>
    </footer>
  );
};

export default Footer;
