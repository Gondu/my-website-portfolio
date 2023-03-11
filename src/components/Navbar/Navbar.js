import { useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import styles from "./Navbar.module.scss";
import HamburgerNavbarIcon from "../HamburgerNavbarIcon/HamburgerNavbarIcon";
import { useGlitch } from "react-powerglitch";
import logo from "../../assets/svg/logo_victor.svg";
import MainGlitchButton from "../MainGlitchButton/MainGlitchButton";
import GridWrapper from "../GridWrapper/GridWrapper";
import GlitchedWriter from "glitched-writer";
import {
  navbarGlitchWritingOptions,
  glitch_loading_navbar_data,
  glitch_loading_logoAndResume_data,
  glitch_desktop_navItems,
  glitch_mobile_navItems,
} from "./NavbarData";

const Navbar = (props) => {
  // Glitch Writer after loading completed
  useEffect(() => {
    const myHomeNavbarWriter = new GlitchedWriter(
      "#homeNavbarGlitchWriting",
      navbarGlitchWritingOptions
    );

    const myWorkNavbarWriter = new GlitchedWriter(
      "#workNavbarGlitchWriting",
      navbarGlitchWritingOptions
    );

    const myAboutNavbarWriter = new GlitchedWriter(
      "#aboutNavbarGlitchWriting",
      navbarGlitchWritingOptions
    );

    const myContactNavbarWriter = new GlitchedWriter(
      "#contactNavbarGlitchWriting",
      navbarGlitchWritingOptions
    );

    const beginNavbarGlitchWriting = () => {
      myHomeNavbarWriter.write("Home");
      myWorkNavbarWriter.write("Work");
      myAboutNavbarWriter.write("About");
      myContactNavbarWriter.write("Contact");
    };

    beginNavbarGlitchWriting();
  }, []);

  // Hide scrollbar when hamburger navbar is open -> this causes a bug when opening the hamburger navbar iit jumps to the top
  // useEffect(() => {
  //   props.burgerNavIsOpen
  //     ? (document.body.style.overflow = "hidden")
  //     : (document.body.style.overflow = "visible");
  // });

  const handleburgerNavIsOpen = () => {
    props.setburgerNavIsOpen(!props.burgerNavIsOpen);
  };

  const glitch_loading_navbar = useGlitch(glitch_loading_navbar_data);
  const glitch_loading_logoAndResume = useGlitch(
    glitch_loading_logoAndResume_data
  );
  const glitchNormalNavButtons = useGlitch(glitch_desktop_navItems);
  const glitchHamburgerNavButtons = useGlitch(glitch_mobile_navItems);

  return (
    <GridWrapper>
      {/* Navbar for desktop and tablet landscape */}
      <div className={styles.normal_navbar}>
        <div
          className={styles.normal_navbar__icon}
          ref={glitch_loading_logoAndResume.ref}
        >
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
              <div ref={glitch_loading_navbar.ref}>
                <Link
                  to="#home"
                  id="homeNavbarGlitchWriting"
                  smooth
                  ref={glitchNormalNavButtons.ref}
                >
                  Home
                </Link>
              </div>
            </li>
            <li>
              <div ref={glitch_loading_navbar.ref}>
                <Link
                  to="#about"
                  id="aboutNavbarGlitchWriting"
                  smooth
                  ref={glitchNormalNavButtons.ref}
                >
                  About
                </Link>
              </div>
            </li>
            <li>
              <div ref={glitch_loading_navbar.ref}>
                <Link
                  to="#work"
                  id="workNavbarGlitchWriting"
                  smooth
                  ref={glitchNormalNavButtons.ref}
                >
                  Work
                </Link>
              </div>
            </li>
            <li>
              <div ref={glitch_loading_navbar.ref}>
                <Link
                  to="#contact"
                  id="contactNavbarGlitchWriting"
                  smooth
                  ref={glitchNormalNavButtons.ref}
                >
                  Contact
                </Link>
              </div>
            </li>
          </ul>
          <div
            className={styles.normal_navbar__nav__resume_button}
            ref={glitch_loading_logoAndResume.ref}
          >
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
            props.scrollDirection === "scrolled top" || props.burgerNavIsOpen
              ? styles.hamburger_navbar__icon__show_top
              : props.scrollDirection === "scrolling up"
              ? styles.hamburger_navbar__icon__show
              : styles.hamburger_navbar__icon__hide
          }`}
        >
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
            props.scrollDirection === "scrolled top" || props.burgerNavIsOpen
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
