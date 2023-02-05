import { useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import styles from "./Navbar.module.scss";
import HamburgerNavbarIcon from "../HamburgerNavbarIcon/HamburgerNavbarIcon";
import { useGlitch } from "react-powerglitch";
import logo from "../../assets/svg/logo_victor.svg";
import MainGlitchButton from "../MainGlitchButton/MainGlitchButton";
import GridWrapper from "../GridWrapper/GridWrapper";

const Navbar = (props) => {
  useEffect(() => {
    // Hide scrollbar when hamburger navbar is open
    props.burgerNavIsOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  });

  const handleburgerNavIsOpen = () => {
    props.setburgerNavIsOpen(!props.burgerNavIsOpen);
  };

  const glitchNormalNavButtons = useGlitch({
    playMode: "hover",
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 4000,
      iterations: Infinity,
    },
    glitchTimeSpan: {
      start: -0.4,
      end: 1,
    },
    shake: {
      velocity: 22,
      amplitudeX: 0.07,
      amplitudeY: 0.07,
    },
    slice: {
      count: 5,
      velocity: 5,
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
    <GridWrapper>
      {/* Navbar for desktop and tablet landscape */}
      <div className={styles.normal_navbar}>
        <div className={styles.normal_navbar__icon}>
          <Link reloadDocument ref={glitchNormalNavButtons.ref}>
            <img
              className={styles.normal_navbar__icon__img}
              src={logo}
              alt="Logo Victor Semencenco"
            />
          </Link>
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
            props.burgerNavIsOpen
              ? { width: "100%", opacity: "1" }
              : { width: "0", opacity: "0" }
          }
        >
          <ul className={styles.hamburger_navbar__nav__ul}>
            <li>
              <Link
                ref={glitchHamburgerNavButtons.ref}
                className={styles.hamburger_navbar__nav__ul__link}
                onClick={handleburgerNavIsOpen}
                to="#home"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                ref={glitchHamburgerNavButtons.ref}
                className={styles.hamburger_navbar__nav__ul__link}
                onClick={handleburgerNavIsOpen}
                to="#work"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                ref={glitchHamburgerNavButtons.ref}
                className={styles.hamburger_navbar__nav__ul__link}
                onClick={handleburgerNavIsOpen}
                to="#about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                ref={glitchHamburgerNavButtons.ref}
                className={styles.hamburger_navbar__nav__ul__link}
                onClick={handleburgerNavIsOpen}
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

        <div
            className={`${styles.hamburger_navbar__icon}  ${
              props.scrollDirection === "scrolled top"
                ? styles.hamburger_navbar__icon__show_top
                : props.scrollDirection === "scrolling up"
                ? styles.hamburger_navbar__icon__show
                : styles.hamburger_navbar__icon__hide
            }`}>
          <Link reloadDocument ref={glitchNormalNavButtons.ref}>
            <img
            className={styles.hamburger_navbar__icon__img}
            src={logo}
            alt="Logo Victor Semencenco"
            />
          </Link>
        </div>

        <label
          htmlFor="navi-toggle"
          onClick={handleburgerNavIsOpen}
          className={`${styles.hamburger_navbar__button_toggler}  ${
            props.scrollDirection === "scrolled top"
              ? styles.hamburger_navbar__button_toggler__show_top
              : props.scrollDirection === "scrolling up"
              ? styles.hamburger_navbar__button_toggler__show
              : styles.hamburger_navbar__button_toggler__hide
          }`}
        ></label>
        <div
          className={styles.hamburger_navbar__background_toggler}
          style={
            props.burgerNavIsOpen
              ? { transform: "scale(80)" }
              : { transform: "scale(0)" }
          }
        ></div>

        <HamburgerNavbarIcon
          burgerNavIsOpen={props.burgerNavIsOpen}
          handleburgerNavIsOpen={handleburgerNavIsOpen}
          scrollDirection={props.scrollDirection}
        />
      </div>
    </GridWrapper>
  );
};

export default Navbar;
