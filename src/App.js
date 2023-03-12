// Import Libraries
import React, { useState, useEffect } from "react";
import Particles from "./Particles";
import styles from "./App.module.scss";
import { ThemeProvider } from "@mui/material/styles";
import { PortfolioTheme } from "./PortfolioThemeMUI";
import { CssBaseline } from "@mui/material";
import { useGlitch } from "react-powerglitch";
import useScrollDirection from "./hooks/useScrollDirection";
import FadeInSectionWrapper from "./components/FadeInSectionWrapper/FadeInSectionWrapper";
// Import Pages
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import GridWrapper from "./components/GridWrapper/GridWrapper";
import ScrollDownButton from "./components/ScrollDownButton/ScrollDownButton";

function App() {
  // Use array destructuring
  const [scrollDirection] = useScrollDirection();
  const [burgerNavIsOpen, setburgerNavIsOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [fakeLoaded, setFakeLoaded] = useState(false);
  const [fakeLoadedFadeOut, setFakeLoadedFadeOut] = useState(false);
  const glitch_socials_hover = useGlitch({
    playMode: "hover",
    createContainers: true,
    hideOverflow: true,
    timing: {
      duration: 2000,
      iterations: Infinity,
    },
    glitchTimeSpan: {
      start: 0,
      end: 1,
    },
    shake: {
      velocity: 20,
      amplitudeX: 0.005,
      amplitudeY: 0.015,
    },
    slice: {
      count: 3,
      velocity: 5,
      minHeight: 0.005,
      maxHeight: 0.085,
      hueRotate: true,
    },
  });

  // This will run one time after the component mounts
  useEffect(() => {
    setTimeout(() => setFakeLoaded(true), 2300);
    setTimeout(() => setFakeLoadedFadeOut(true), 2000);
    // Check if the page has already loaded
    if (document.readyState === "complete") {
      setLoaded(true);
    } else {
      window.addEventListener("load", setLoaded(true), false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", setLoaded(true));
    }
  }, [loaded, fakeLoaded]);

  return (
    <>
      <Particles id="tsparticles" className={styles.particles_ctn} />
      {loaded && fakeLoaded ? (
        <div className={styles.App}>
          <ThemeProvider theme={PortfolioTheme}>
            <CssBaseline enableColorScheme />
            <header
              className={`${styles.header_ctn}  ${
                scrollDirection === "scrolled top"
                  ? styles.header_ctn__show_top
                  : scrollDirection === "scrolling up"
                  ? styles.header_ctn__show
                  : styles.header_ctn__hide
              }`}
            >
              <Navbar
                burgerNavIsOpen={burgerNavIsOpen}
                setburgerNavIsOpen={setburgerNavIsOpen}
                scrollDirection={scrollDirection}
              />
            </header>
            <GridWrapper>
              <main>
                <Home burgerNavIsOpen={burgerNavIsOpen} />
                <About />
                <Work />
                <Contact />
              </main>
              <footer>
                <div className={styles.footer}>
                  <div className={styles.footer__socials}>
                    <FadeInSectionWrapper fadeInRightSide delay="200ms">
                      <div className={styles.footer__socials_item}>
                        <a
                          ref={glitch_socials_hover.ref}
                          href="https://www.linkedin.com/in/victor-semencenco/"
                          className={`${styles.footer__socials_item_icon} ${styles.footer__socials_item_icon__linkedin}`}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Linkedin"
                          title="Linkedin"
                          tabIndex="0"
                        >
                          <i>
                            <span></span>
                          </i>
                        </a>
                      </div>
                    </FadeInSectionWrapper>
                    <FadeInSectionWrapper fadeInRightSide delay="400ms">
                      <div className={styles.footer__socials_item}>
                        <a
                          ref={glitch_socials_hover.ref}
                          href="https://github.com/Gondu"
                          className={`${styles.footer__socials_item_icon} ${styles.footer__socials_item_icon__github}`}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Github"
                          title="Github"
                          tabIndex="0"
                        >
                          <i>
                            <span></span>
                          </i>
                        </a>
                      </div>
                    </FadeInSectionWrapper>
                    <FadeInSectionWrapper fadeInRightSide delay="600ms">
                      <div className={styles.footer__socials_item}>
                        <a
                          ref={glitch_socials_hover.ref}
                          href="https://www.facebook.com/victor.semencenco"
                          className={`${styles.footer__socials_item_icon} ${styles.footer__socials_item_icon__facebook}`}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Facebook"
                          title="Facebook"
                          tabIndex="0"
                        >
                          <i>
                            <span></span>
                          </i>
                        </a>
                      </div>
                    </FadeInSectionWrapper>
                    <FadeInSectionWrapper fadeInRightSide delay="800ms">
                      <div className={styles.footer__socials_item}>
                        <a
                          style={{ overflow: "visible" }}
                          ref={glitch_socials_hover.ref}
                          href="mailto:victor.semencenco@gmail.com"
                          className={`${styles.footer__socials_item_icon} ${styles.footer__socials_item_icon__email}`}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Email"
                          title="Email"
                          tabIndex="0"
                        >
                          <i>
                            <span></span>
                          </i>
                        </a>
                      </div>
                    </FadeInSectionWrapper>
                  </div>
                  <FadeInSectionWrapper fadeBottomToTop>
                    <p className={styles.footer__copyright} aria-label="Designed & Built by Victor Semencenco &#169; 2023">
                      Designed & Built by Victor Semencenco &#169; 2023
                    </p>
                  </FadeInSectionWrapper>
                </div>
              </footer>
            </GridWrapper>
            <ScrollDownButton
              scrollDirection={scrollDirection}
              burgerNavIsOpen={burgerNavIsOpen}
            />
          </ThemeProvider>
        </div>
      ) : (
        <LoadingScreen fakeLoadedFadeOut={fakeLoadedFadeOut} />
      )}
    </>
  );
}

export default App;
