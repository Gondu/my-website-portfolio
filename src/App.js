import TestChildComponent from "./TestChildComponent";
import styles from "./App.module.scss";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
import Grid from "@mui/material/Unstable_Grid2";
import { ThemeProvider } from "@mui/material/styles";
import { PortfolioTheme } from "./PortfolioThemeMUI";
import { CssBaseline, Container } from "@mui/material";
import testExportVariable2 from "./global-styles/globals.scss";
import useMediaQuery from "@mui/material/useMediaQuery";

let currentResolution = "";

function App() {
  console.log(
    "testingExportvarFromMixin.scss2",
    testExportVariable2.testingvar3
  );
  console.log(
    "PortfolioTheme.containerBreakpointMaxWidth",
    PortfolioTheme.containerBreakpointMaxWidth
  );
  
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
        <Button color="primary" variant="contained">
          MUI Button
        </Button>

        <TestChildComponent>
          <button
            className={`${styles.btn} ${styles.btn2} testGlobalSCSSVariable`}
            onClick={() => alert("I am globally styled")}
          >
            Normal button
          </button>
        </TestChildComponent>

        <Grid
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
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
