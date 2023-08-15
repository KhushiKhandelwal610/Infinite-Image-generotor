import React from 'react';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { IoClose } from 'react-icons/io/IoClose';
// import { IoClose } from "react-icons/io5"
// import logo from '../../constants/images/logo.png';
import './Navbar.css';
// import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar ">
      <div className="app__navbar-logo">
        <a to={"/"}>Image Generator</a>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a to={"/"}>Home</a></li>
        <li className="p__opensans"><a to={"/about"}>About</a></li>
        <li className="p__opensans"><a to={"/menu"}>Categories</a></li>
        {/* <li className="p__opensans"><a to={"/awards"}></a></li> */}
        <li className="p__opensans"><a to={"/contact"}>Contact</a></li>
      </ul>
      
      {/* <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <IoClose fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_as">
              <li><a to="/" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a to="/about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a to="/menu" onClick={() => setToggleMenu(false)}>Products</a></li>
              <li><a to="/awards" onClick={() => setToggleMenu(false)}>Quality</a></li>
              <li><a to="/contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div> */}
    </nav>
  );
};

export default Navbar;
