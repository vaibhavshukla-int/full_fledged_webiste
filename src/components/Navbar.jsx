import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../images/logo.png';
import './navbar.css';
import { links } from '../data';
import { GoThreeBars } from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md';

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav>
      <div className="container nav__container">
        <Link
          to="/"
          className="logo"
          onClick={() => setIsNavShowing(!isNavShowing)}
        >
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul
          className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}
        >
          {links.map((link, index) => {
            const { path, name } = link;
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? 'active-nav' : '')}
                  onClick={() => setIsNavShowing((prevState) => !prevState)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing((prevState) => !prevState)}
        >
          {isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
