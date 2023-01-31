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
// import Button from "@mui/material/Button";
// import Paper from "@mui/material/Paper";
// import imageTest from "./imageTest.jpg";
// import Grid from "@mui/material/Grid";
// import Grid from "@mui/material/Unstable_Grid2";
// import g from "./global-styles/globals.scss";

function App() {
  // console.log("testingExportvarFromMixin.scss2", g.testingvar3);

  // Use array destructuring
  const [scrollDirection] = useScrollDirection();
  const [burgerNavIsOpen, setburgerNavIsOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [fakeLoaded, setFakeLoaded] = useState(false);

  // This will run one time after the component mounts
  useEffect(() => {
    setTimeout(() => setFakeLoaded(true), 3000);
    // console.log("loaded", loaded);
    // console.log("fakeloaded", fakeLoaded);
    // Check if the page has already loaded
    if (document.readyState === "complete") {
      // console.log("readystate is completed");
      setLoaded(true);
    } else {
      // console.log("adding eventlistener load event");
      window.addEventListener("load", setLoaded(true), false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", setLoaded(true));
    }
  }, [loaded, fakeLoaded]);

  return (
    <>
      {loaded && fakeLoaded ? (
        <div className={styles.App}>
          <Particles
            id="tsparticles"
            style={{ height: "100%", width: "100%" }}
          />
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
                <Home
                  burgerNavIsOpen={burgerNavIsOpen}
                  scrollDirection={scrollDirection}
                />
                <Work />
                <About />
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
          </ThemeProvider>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default App;
