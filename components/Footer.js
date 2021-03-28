import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={"container " + styles.footerInner}>
        <div>Chris Lapidas</div>
        <div>clapidas@gmail.com</div>
      </div>
    </footer>
  );
};

export default Footer;
