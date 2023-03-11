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
  glitch_loading_home_title_data,
  glitch_loading_home_title_hover_data,
  home_text_glitch_writer_data,
  home_name_glitch_writer_data,
  home_info_glitch_writer_data,
} from "./HomeData";

const Home = (props) => {
  const [showButton, setShowButton] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  const glitch_loading_home_button = useGlitch(glitch_loading_home_button_data);
  const glitch_loading_home_title = useGlitch(glitch_loading_home_title_data);
  const glitch_loading_home_title_hover = useGlitch(glitch_loading_home_title_hover_data);

  useEffect(() => {
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
      home_info_glitch_writer_data
    );

    const myInfoWriter = new GlitchedWriter(
      "#homeInfoGlitchWriting",
      home_info_glitch_writer_data
    );

    const beginGlitchWriting = async () => {
      await wait(350);
      await myTextWriter.write("Hi, my name is");
      await wait(450);
      await myNameWriter.write("Victor Semencenco");
      await wait(300);
      myRoleWriter.write("Front-end Developer ");
      myInfoWriter.write(
        "based in Venice, Italy specialized in creating interactive and engaging pixel perfect digital experiences, working with industry leaders such as Stellantis, Maserati and Toyota."
      );
      await wait(800);
      setShowButton(true);
      await wait(1000);
      setShowTitle(true);
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
            <div ref={glitch_loading_home_title.ref} className={styles.title}>
              <div className={styles.title__outer}>
                {showTitle && (
                  <div
                    ref={glitch_loading_home_title_hover.ref}
                    className={`${styles.title__outer__glitch_title} ${styles.glitch} ${styles.layers}`}
                    data-text="Victor Semencenco"
                  >
                    <h1 className={styles.title__outer__glitch_title__text}>
                      Victor Semencenco
                    </h1>
                  </div>
                )}
                {!showTitle && (
                  <div
                    id="homeNameGlitchWriting"
                    className={styles.title__outer__inner}
                  ></div>
                )}
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
                  text="My Projects"
                  link="#work"
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
