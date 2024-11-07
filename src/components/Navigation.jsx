import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar'>
      <img src='/logo.png' alt='tasty_favorites_logo' />
      <div className='burger-menu' onClick={toggleMenu}>
        {isOpen ? <IoClose size={30} /> : <GiHamburgerMenu size={30} />}
      </div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <NavLink to='/'>Forside</NavLink>
        </li>
        <li>
          <NavLink to='/recipes'>Opskrifter</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Kontakt</NavLink>
        </li>
        <li>
          <NavLink to='/about'>Om</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
