// import TestChildComponent from "./TestChildComponent";
// Import Libraries
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Particles from "./Particles";
import styles from "./App.module.scss";
import { ThemeProvider } from "@mui/material/styles";
import { PortfolioTheme } from "./PortfolioThemeMUI";
import { CssBaseline, Container } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
// Import Pages
import LoadingScreen from "./pages/LoadingScreen";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Button from "@mui/material/Button";
// import Paper from "@mui/material/Paper";
// import imageTest from "./imageTest.jpg";
// import Grid from "@mui/material/Grid";
// import Grid from "@mui/material/Unstable_Grid2";
// import g from "./global-styles/globals.scss";
let currentResolution = "";

function App() {
  // console.log("testingExportvarFromMixin.scss2", g.testingvar3);
  // console.log(
  //   "PortfolioTheme.containerBreakpointMaxWidth",
  //   PortfolioTheme.containerBreakpointMaxWidth
  // );

  const [loaded, setLoaded] = useState(false);
  const [fakeLoaded, setFakeLoaded] = useState(false);

  // This will run one time after the component mounts
  useEffect(() => {
    setTimeout(() => setFakeLoaded(true), 300000);
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

  // Find the current resolution of the screen so I can apply the right margin to the container
  if (useMediaQuery(PortfolioTheme.breakpoints.only("xs"))) {
    currentResolution = "xs";
  }
  if (useMediaQuery(PortfolioTheme.breakpoints.only("sm"))) {
    currentResolution = "sm";
  }
  if (useMediaQuery(PortfolioTheme.breakpoints.only("md"))) {
    currentResolution = "md";
  }
  if (useMediaQuery(PortfolioTheme.breakpoints.up("lg"))) {
    currentResolution = "lg";
  }

  return (
    <>
      {loaded && fakeLoaded ? (
        <div>
          <Particles
            id="tsparticles"
            style={{ height: "100%", width: "100%" }}
          />

          <ThemeProvider theme={PortfolioTheme}>
            <CssBaseline enableColorScheme />
            <Container
              sx={{
                maxWidth: PortfolioTheme.containerBreakpointMaxWidth,
                paddingLeft:
                  currentResolution === "xs"
                    ? PortfolioTheme.marginsContainerXs
                    : currentResolution === "sm"
                    ? PortfolioTheme.marginsContainerSm
                    : currentResolution === "md"
                    ? PortfolioTheme.marginsContainerMd
                    : "0",
                paddingRight:
                  currentResolution === "xs"
                    ? PortfolioTheme.marginsContainerXs
                    : currentResolution === "sm"
                    ? PortfolioTheme.marginsContainerSm
                    : currentResolution === "md"
                    ? PortfolioTheme.marginsContainerMd
                    : "0",
              }}
              disableGutters={true}
              maxWidth={false}
              className={styles.App}
            >
              <BrowserRouter>
                {/* <Routes>
                  <Route path="/" element={<Navbar />}>
                    <Route index element={<Home />} />
                    <Route path="work" element={<Work />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<Page404 />} />
                  </Route>
                </Routes> */}
                <Home />
                <Work />
                <About />
                <Contact />
              </BrowserRouter>
{/* 
              <Button color="primary" variant="contained">
                MUI Button
              </Button> */}

              {/* <TestChildComponent>
                <button
                  className={`${styles.btn} ${styles.btn2} testGlobalSCSSVariable`}
                  onClick={() => alert("I am globally styled")}
                >
                  Normal button
                </button>
              </TestChildComponent> */}

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
            </Container>
          </ThemeProvider>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default App;
