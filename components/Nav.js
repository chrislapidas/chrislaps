import navStyles from "../styles/Nav.module.scss"

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <div className={"container " + navStyles.navContainer}>
                <div className={navStyles.title}>Chris Lapidas</div>
                <ul className={navStyles.list}>
                    <li>Home</li>
                    <li>Articles</li>
                </ul>
            </div>
            
        </nav>
    )
}

export default Nav;