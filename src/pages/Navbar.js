import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import styles from "./Navbar.module.scss";
import NavbarIcon from "./NavbarIcon";
import { useGlitch } from "react-powerglitch";
import logo from "../logo_victor.svg";
import MainGlitchButton from "./MainGlitchButton";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const glitchNormalNavButtons = useGlitch({
    playMode: "hover",
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 3950,
      iterations: Infinity,
    },
    glitchTimeSpan: {
      start: 0,
      end: 1,
    },
    shake: {
      velocity: 15,
      amplitudeX: 0.06,
      amplitudeY: 0.06,
    },
    slice: {
      count: 4,
      velocity: 4,
      minHeight: 0.02,
      maxHeight: 0.1,
      hueRotate: true,
    },
    pulse: {
      scale: 1,
    },
  });

  const glitchHamburgerNavButtons = useGlitch({
    playMode: "always",
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 4500,
      easing: "ease-in-out",
    },
    glitchTimeSpan: {
      start: 0.9,
      end: 1,
    },
    shake: {
      velocity: 15,
      amplitudeX: 0.04,
      amplitudeY: 0.04,
    },
    slice: {
      count: 6,
      velocity: 15,
      minHeight: 0.02,
      maxHeight: 0.15,
      hueRotate: true,
    },
    pulse: false,
  });

  return (
    <>
      {/* Navbar for desktop and tablet landscape */}
      <div className={styles.normal_navbar}>
        <div className={styles.normal_navbar__icon}>
          <img
            className={styles.normal_navbar__icon__img}
            src={logo}
            alt="Logo Victor Semencenco"
          />
        </div>
        <nav className={styles.normal_navbar__nav}>
          <ul>
            <li>
              <Link to="#home" smooth ref={glitchNormalNavButtons.ref}>
                Home
              </Link>
            </li>
            <li>
              <Link to="#work" smooth ref={glitchNormalNavButtons.ref}>
                Work
              </Link>
            </li>
            <li>
              <Link to="#about" smooth ref={glitchNormalNavButtons.ref}>
                About
              </Link>
            </li>
            <li>
              <Link to="#contact" smooth ref={glitchNormalNavButtons.ref}>
                Contact
              </Link>
            </li>
          </ul>
          <div className={styles.normal_navbar__nav__resume_button}>
            <MainGlitchButton text="Resume" />
          </div>
        </nav>
      </div>
      {/* Navbar for mobile and tablet portrait */}
      <div className={styles.hamburger_navbar}>
        <nav
          className={styles.hamburger_navbar__nav}
          style={
            click
              ? { width: "100%", opacity: "1" }
              : { width: "0", opacity: "0" }
          }
        >
          <ul className={styles.hamburger_navbar__nav__ul}>
            <li>
              <Link
                ref={glitchHamburgerNavButtons.ref}
                className={styles.hamburger_navbar__nav__ul__link}
                onClick={handleClick}
                to="#home"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                ref={glitchHamburgerNavButtons.ref}
                className={styles.hamburger_navbar__nav__ul__link}
                onClick={handleClick}
                to="#work"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                ref={glitchHamburgerNavButtons.ref}
                className={styles.hamburger_navbar__nav__ul__link}
                onClick={handleClick}
                to="#about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                ref={glitchHamburgerNavButtons.ref}
                className={styles.hamburger_navbar__nav__ul__link}
                onClick={handleClick}
                to="#contact"
              >
                Contact
              </Link>
            </li>
            <div className={styles.hamburger_navbar__nav__ul__resume_button}>
              <MainGlitchButton text="Resume" blue />
            </div>
          </ul>
        </nav>

        <div className={styles.hamburger_navbar__icon}>
          <img
            className={styles.hamburger_navbar__icon__img}
            src={logo}
            alt="Logo Victor Semencenco"
          />
        </div>

        <label
          htmlFor="navi-toggle"
          className={styles.hamburger_navbar__button_toggler}
          onClick={handleClick}
        ></label>
        <div
          className={styles.hamburger_navbar__background_toggler}
          style={click ? { transform: "scale(80)" } : { transform: "scale(0)" }}
        ></div>

        <NavbarIcon click={click} handleClick={handleClick} />
      </div>
    </>
  );
};

export default Navbar;
