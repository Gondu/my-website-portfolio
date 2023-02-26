// Import Libraries
import React, { useState, useEffect } from "react";
import Particles from "./Particles";
import styles from "./App.module.scss";
import { ThemeProvider } from "@mui/material/styles";
import { PortfolioTheme } from "./PortfolioThemeMUI";
import { CssBaseline } from "@mui/material";
// Import Pages
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import useScrollDirection from "./hooks/useScrollDirection";
import GridWrapper from "./components/GridWrapper/GridWrapper";
import ScrollDownButton from "./components/ScrollDownButton/ScrollDownButton";
import { useGlitch } from "react-powerglitch";

// import Button from "@mui/material/Button";
// import Paper from "@mui/material/Paper";
// import imageTest from "./imageTest.jpg";
// import Grid from "@mui/material/Grid";
// import Grid from "@mui/material/Unstable_Grid2";
// import g from "./global-styles/globals.scss";

function App() {
  // Use array destructuring
  const [scrollDirection] = useScrollDirection();
  const [burgerNavIsOpen, setburgerNavIsOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [fakeLoaded, setFakeLoaded] = useState(false);
  const [fakeLoadedFadeOut, setFakeLoadedFadeOut] = useState(false);

  const glitch_loading_home_screen1 = useGlitch({
    playMode: "always",
    createContainers: true,
    hideOverflow: true,
    timing: {
      duration: 3000,
      iterations: 1,
    },
    glitchTimeSpan: {
      start: 0.15,
      end: 0.25,
    },
    shake: {
      velocity: 90,
      amplitudeX: 0.01,
      amplitudeY: 0.03,
    },
    slice: {
      count: 3,
      velocity: 5,
      minHeight: 0.01,
      maxHeight: 0.02,
      hueRotate: true,
    },
  });

  const glitch_loading_home_screen2 = useGlitch({
    playMode: "always",
    createContainers: true,
    hideOverflow: true,
    timing: {
      duration: 3000,
      iterations: 1,
    },
    glitchTimeSpan: {
      start: 0.75,
      end: 0.95,
    },
    shake: {
      velocity: 90,
      amplitudeX: 0.01,
      amplitudeY: 0.03,
    },
    slice: {
      count: 5,
      velocity: 5,
      minHeight: 0.01,
      maxHeight: 0.02,
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
      <div
        ref={glitch_loading_home_screen1.ref}
        className={styles.home_screen_glitch1}
      ></div>
      <div
        ref={glitch_loading_home_screen2.ref}
        className={styles.home_screen_glitch2}
      ></div>
      <Particles id="tsparticles" style={{ height: "100%", width: "100%" }} />
      {loaded && fakeLoaded ? (
        <div className={styles.App}>
          {/* <Particles
            id="tsparticles"
            style={{ height: "100%", width: "100%" }}
          /> */}
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
                {/* <Routes>
                  <Route path="/" element={<Navbar />}>
                    <Route index element={<Home />} />
                    <Route path="work" element={<Work />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<Page404 />} />
                  </Route>
                </Routes> */}
                <Home burgerNavIsOpen={burgerNavIsOpen} />
                <About />
                <Work />
                <Contact />
              </main>
              <footer>
                Footer
                <button
                  className={`${styles.btn} ${styles.btn2} testGlobalSCSSVariable`}
                  onClick={() => alert("I am globally styled")}
                ></button>
              </footer>

              {/* 
              <Button color="primary" variant="contained">
                MUI Button
              </Button> */}

              {/* <Grid
                container
                // 4 grid columns for Mobile, 8 for Tablet, 12 for Desktop
                columns={{ xs: 4, sm: 8, lg: 12 }}
                rowSpacing={PortfolioTheme.rowGutters}
                columnSpacing={{
                  xs: PortfolioTheme.columnGuttersDownMd,
                  md: PortfolioTheme.columnGuttersUpMd,
                }}
              >
                <Grid xs={2} sm={6} md={4} lg={8}>
                  <Paper
                    className={styles.paper}
                    sx={{ bgcolor: "#cfe8fc", height: "10vh" }}
                  >
                    1111
                  </Paper>
                </Grid>
                <Grid xs={2} sm={2} md={4} lg={4}>
                  <Paper
                    className={styles.paper}
                    sx={{ bgcolor: "#cfe8fc", height: "10vh" }}
                  >
                    2222
                  </Paper>
                </Grid>
                <Grid xs={2} sm={2} md={4} lg={3}>
                  <Paper
                    className={styles.paper}
                    sx={{ bgcolor: "#cfe8fc", height: "10vh" }}
                  >
                    3333
                  </Paper>
                </Grid>
                <Grid xs={2} sm={6} md={4} lg={9}>
                  <Paper
                    className={styles.paper}
                    sx={{ bgcolor: "#cfe8fc", height: "10vh" }}
                  >
                    4444
                  </Paper>
                </Grid>
              </Grid> */}
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
