// import Navbar from "./Navbar";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { PortfolioTheme } from "../../PortfolioThemeMUI";
import styles from "./Home.module.scss";
import MainGlitchButton from "../../components/MainGlitchButton/MainGlitchButton";

const Home = (props) => {
  return (
    <section className={styles.home_section} id="home">
        <div className={styles.home_section__top}>
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
              <div className={styles.text}>Hi, my name is</div>
            </Grid>
            <Grid xs={4} smOffset={1} sm={7} mdOffset={1} md={11} lgOffset={1} lg={11}>
              <h1 className={styles.title}>Victor Semencenco</h1>
            </Grid>
            {/* <Grid xs={4} smOffset={1} sm={7} mdOffset={1} md={11} lgOffset={1} lg={11}>
              <h2 className={styles.subtitle}>Front-end web developer</h2>
            </Grid> */}
            <Grid xs={4} smOffset={1} sm={7} mdOffset={1} md={11} lgOffset={1} lg={11}>
              {/* <p className={styles.description}>
                I'm a professional <span className={styles.description__role}>front-end developer</span> based in Venice, Italy. 
                Passionate about interactive and engaging pixel-perfect digital experiences, I worked for 
                brands and industry leaders such as Stellantis, Toyota and Maserati.
              </p> */}
              <p className={styles.description}>
                I'm a professional <span className={styles.description__role}>Front-end Developer</span> from Italy with a passion for creating
                interactive and engaging pixel-perfect digital experiences.
              </p>
            </Grid>
            <Grid style={props.burgerNavIsOpen ? {zIndex: -1} : {}} className={styles.main_button_home} xs={4} smOffset={1} sm={7} mdOffset={1} md={11} lgOffset={1} lg={11}>
              <MainGlitchButton text="Contact me" link="#contact"/>
              {/* <MainGlitchButton text="Contact me" link="#contact" blue/> */}
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
    </section>
  );
};

export default Home;
