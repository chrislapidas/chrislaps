import styles from "../styles/Nav.module.scss";
import SocialMedia from "./SocialMedia";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={"container " + styles.navContainer}>
        <div className={styles.title}>
          <a href="/">
            <h3>CL</h3>
          </a>
        </div>
        <ul className={styles.list}>
          <li>
            <a href="/articles">
              <h4>Articles</h4>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
