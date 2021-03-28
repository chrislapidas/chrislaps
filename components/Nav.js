import navStyles from "../styles/Nav.module.scss";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <div className={"container " + navStyles.navContainer}>
        <div className={navStyles.title}>CL</div>
        <ul className={navStyles.list}>
          <li>Articles</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
