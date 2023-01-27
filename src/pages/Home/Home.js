// import Navbar from "./Navbar";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { PortfolioTheme } from "../../PortfolioThemeMUI";
import styles from "./Home.module.scss";
import MainGlitchButton from "../../components/MainGlitchButton/MainGlitchButton";
import ScrollDownButton from "../../components/ScrollDownButton/ScrollDownButton";

const Home = (props) => {
  return (
    <section className={styles.home_section} id="home">
        <div>
          <Grid
            container
            // 4 grid columns for Mobile, 8 for Tablet, 12 for Desktop
            columns={{ xs: 4, sm: 8, md:12, lg: 12 }}
            rowSpacing={PortfolioTheme.rowGutters}
            columnSpacing={{
              xs: PortfolioTheme.columnGuttersDownMd,
              md: PortfolioTheme.columnGuttersUpMd,
            }}
          >
            <Grid xs={4} smOffset={1} sm={7} mdOffset={1} md={11} lgOffset={1} lg={11}>
              <div>Hi, my name is</div>
            </Grid>
            <Grid xs={4} smOffset={1} sm={7} mdOffset={1} md={11} lgOffset={1} lg={11}>
              <div>Victor Semencenco</div>
            </Grid>
            <Grid xs={4} smOffset={1} sm={7} mdOffset={1} md={11} lgOffset={1} lg={11}>
              <div>Front-end web developer</div>
            </Grid>
            <Grid xs={4} smOffset={1} sm={7} mdOffset={1} md={11} lgOffset={1} lg={11}>
              <MainGlitchButton text="My Projects" link="#work"/>
            </Grid>


            {/* <Grid xs={2} sm={2} md={4} lg={4}>
              <Paper
                // className={styles.paper}
                sx={{ bgcolor: "#cfe8fc", height: "10vh" }}
              >
                2222
              </Paper>
            </Grid> */}
          </Grid>
        </div>
        <ScrollDownButton burgerNavIsOpen={props.burgerNavIsOpen}/>
    </section>
  );
};

export default Home;
