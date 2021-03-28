import styles from "../styles/Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={"container " + styles.navContainer}>
        <div className={styles.title}>CL</div>
        <ul className={styles.list}>
          <li>Articles</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
