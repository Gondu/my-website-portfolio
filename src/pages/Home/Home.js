// import Navbar from "./Navbar";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { PortfolioTheme } from "../../PortfolioThemeMUI";
import styles from "./Home.module.scss";
import MainGlitchButton from "../../components/MainGlitchButton/MainGlitchButton";
import { useEffect, useState } from "react";
import { useGlitch } from "react-powerglitch";
import { wait } from "glitched-writer";
import GlitchedWriter from "glitched-writer";
import {
  glitch_loading_home_button_data,
  home_text_glitch_writer_data,
  glitch_loading_home_title_data1,
  glitch_loading_home_title_data2,
  glitch_loading_home_title_data3,
  glitch_loading_home_title_hover_data1,
  glitch_loading_home_title_hover_data2,
  home_name_glitch_writer_data,
  home_role_glitch_writer_data,
  home_info_glitch_writer_data,
} from "./HomeData";

const Home = (props) => {
  const [showButton, setShowButton] = useState(false);

  const glitch_loading_home_button = useGlitch(glitch_loading_home_button_data);
  const glitch_loading_home_title1 = useGlitch(glitch_loading_home_title_data1);
  const glitch_loading_home_title2 = useGlitch(glitch_loading_home_title_data2);
  const glitch_loading_home_title3 = useGlitch(glitch_loading_home_title_data3);
  const glitch_loading_home_title_hover1 = useGlitch(
    glitch_loading_home_title_hover_data1
  );
  const glitch_loading_home_title_hover2 = useGlitch(
    glitch_loading_home_title_hover_data2
  );

  useEffect(() => {
    setTimeout(() => setShowButton(true), 8800);

    const myTextWriter = new GlitchedWriter(
      "#homeTextGlitchWriting",
      home_text_glitch_writer_data
    );

    const myNameWriter = new GlitchedWriter(
      "#homeNameGlitchWriting",
      home_name_glitch_writer_data
    );

    const myRoleWriter = new GlitchedWriter(
      "#homeRoleGlitchWriting",
      home_role_glitch_writer_data
    );

    const myInfoWriter = new GlitchedWriter(
      "#homeInfoGlitchWriting",
      home_info_glitch_writer_data
    );

    const beginGlitchWriting = async () => {
      await wait(800);
      await myTextWriter.write("Hi, my name is");
      await wait(950);
      await myNameWriter.write("Victor Semencenco");
      await wait(400);
      myRoleWriter.write("Front-end Developer ");
      myInfoWriter.write(
        "based in Venice, Italy specialized in creating interactive and engaging pixel perfect digital experiences, working with industry leaders such as Stellantis, Maserati and Toyota."
      );
    };

    beginGlitchWriting();
  }, []);

  return (
    <section className={styles.home_section} id="home">
      <div className={styles.home_section__top}>
        <Grid
          container
          // 4 grid columns for Mobile, 8 for Tablet, 12 for Desktop
          columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
          rowSpacing={PortfolioTheme.rowGutters}
          columnSpacing={{
            xs: PortfolioTheme.columnGuttersDownMd,
            md: PortfolioTheme.columnGuttersUpMd,
          }}
        >
          <Grid
            xs={4}
            smOffset={1}
            sm={7}
            mdOffset={1}
            md={11}
            lgOffset={1}
            lg={11}
          >
            <div id="homeTextGlitchWriting" className={styles.text}></div>
          </Grid>
          <Grid
            xs={4}
            smOffset={1}
            sm={7}
            mdOffset={1}
            md={11}
            lgOffset={1}
            lg={11}
          >
            {/* Title animations and glitches */}
            <div ref={glitch_loading_home_title1.ref} className={styles.title}>
              <div
                className={styles.title__outer}
                ref={glitch_loading_home_title_hover1.ref}
              >
                <div
                  ref={glitch_loading_home_title1.ref}
                  className={`${styles.title__outer__inner_hidden} ${styles.title__outer__inner} ${styles.blue}`}
                >
                  Victor Semencenco
                </div>
                <div
                  ref={glitch_loading_home_title2.ref}
                  className={`${styles.title__outer__inner_hidden} ${styles.title__outer__inner} ${styles.dark_aqua}`}
                >
                  Victor Semencenco
                </div>
                <div
                  ref={glitch_loading_home_title3.ref}
                  className={`${styles.title__outer__inner_hidden} ${styles.title__outer__inner} ${styles.dark_aqua}`}
                >
                  Victor Semencenco
                </div>
                <h1
                  ref={glitch_loading_home_title_hover2.ref}
                  aria-label="Victor Semencenco"
                  className={`${styles.title__outer__inner_hidden} ${styles.title__outer__inner} ${styles.dark_aqua}`}
                >
                  Victor Semencenco
                </h1>
                <div
                  id="homeNameGlitchWriting"
                  className={styles.title__outer__inner}
                ></div>
              </div>
            </div>
          </Grid>
          <Grid
            xs={4}
            smOffset={1}
            sm={7}
            mdOffset={1}
            md={11}
            lgOffset={1}
            lg={11}
          >
            <div className={styles.description}>
              <span
                className={styles.description__role}
                id="homeRoleGlitchWriting"
              ></span>
              <p
                className={styles.description__info}
                id="homeInfoGlitchWriting"
              ></p>
            </div>
          </Grid>
          <Grid
            style={props.burgerNavIsOpen ? { zIndex: -100 } : {}}
            className={styles.main_button_home}
            xs={4}
            smOffset={1}
            sm={7}
            mdOffset={1}
            md={11}
            lgOffset={1}
            lg={11}
          >
            {showButton && (
              <div ref={glitch_loading_home_button.ref}>
                <MainGlitchButton
                  showButton={showButton}
                  text="Contact me"
                  link="#contact"
                />
              </div>
            )}
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Home;
