// import Navbar from "./Navbar";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { PortfolioTheme } from "../PortfolioThemeMUI";

const Home = () => {
  return (
    <div>
      <div>This is the HOME page</div>
      <div>
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
              // className={styles.paper}
              sx={{ bgcolor: "#cfe8fc", height: "10vh" }}
            >
              1111
            </Paper>
          </Grid>
          <Grid xs={2} sm={2} md={4} lg={4}>
            <Paper
              // className={styles.paper}
              sx={{ bgcolor: "#cfe8fc", height: "10vh" }}
            >
              2222
            </Paper>
          </Grid>
          <Grid xs={2} sm={2} md={4} lg={3}>
            <Paper
              // className={styles.paper}
              sx={{ bgcolor: "#cfe8fc", height: "10vh" }}
            >
              3333
            </Paper>
          </Grid>
          <Grid xs={2} sm={6} md={4} lg={9}>
            <Paper
              // className={styles.paper}
              sx={{ bgcolor: "#cfe8fc", height: "10vh" }}
            >
              4444
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
