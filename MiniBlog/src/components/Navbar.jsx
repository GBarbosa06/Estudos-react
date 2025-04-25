import { NavLink } from "react-router-dom";
import syles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/">
            Mini <span>Blog</span>
        </NavLink>
        <ul>
            <li>
                <NavLink to="/">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/">
                    Sobre
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar