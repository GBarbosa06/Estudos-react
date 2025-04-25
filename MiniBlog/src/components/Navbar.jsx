import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <NavLink to="/" className={styles.logo}>
            Mini <span>Blog</span>
        </NavLink>
        <ul className={styles.links_list}>
            <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : undefined)}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : undefined)}>
                    Sobre
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar