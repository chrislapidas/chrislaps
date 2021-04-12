import styles from "../styles/Nav.module.scss";
import SocialMedia from "./SocialMedia";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={"container " + styles.navContainer}>
        <a href="/">
          <div className={styles.title}>
            <h3>CL</h3>
          </div>
        </a>
        <ul className={styles.list}>
          <a href="/articles">
            <li>
              <h4>Articles</h4>
            </li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
