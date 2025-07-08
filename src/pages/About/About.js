import { useState } from "react";
import styles from "./About.module.scss";
import Grid from "@mui/material/Unstable_Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Tilt from "react-parallax-tilt";
import aboutMeImage from "../../assets/images/victor_semencenco_photo.jpeg";
import FadeInSectionWrapper from "../../components/FadeInSectionWrapper/FadeInSectionWrapper";

// Icons
import angularIcon from "../../assets/svg/angular_icon.svg";
import reactIcon from "../../assets/svg/react_icon.svg";
import jsIcon from "../../assets/svg/javascript_icon.svg";
import tsIcon from "../../assets/svg/typescript_icon.svg";
import htmlIcon from "../../assets/svg/html5_icon.svg";
import cssIcon from "../../assets/svg/css3_icon.svg";
import sassIcon from "../../assets/svg/sass_icon.svg";
import bootstrapIcon from "../../assets/svg/bootstrap_icon.svg";
import figmaIcon from "../../assets/svg/figma_icon.svg";
import gitIcon from "../../assets/svg/git_icon.svg";
import jiraIcon from "../../assets/svg/jira_icon.svg";
import materialuiIcon from "../../assets/svg/materialui_icon.svg";

let currentResolution = "";

const About = () => {
  const PortfolioTheme = useTheme();
  const [hoveringImage, setHoveringImage] = useState(false);

  if (useMediaQuery(PortfolioTheme.breakpoints.only("sm"))) {
    currentResolution = "sm";
  }

  if (useMediaQuery(PortfolioTheme.breakpoints.only("xs"))) {
    currentResolution = "xs";
  }

  return (
    <section className={styles.about_section} id="about">
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
        {/* Title */}
        <Grid
          xsOffset={1}
          xs={2}
          smOffset={2}
          sm={4}
          mdOffset={1}
          md={10}
          lgOffset={2}
          lg={8}
        >
          <FadeInSectionWrapper fadeBottomToTop delay="300ms">
            <h2 className={styles.about_section__title} aria-label="About me">
              About me
            </h2>
          </FadeInSectionWrapper>
        </Grid>
        {/* Image */}
        <Grid
          xs={4}
          smOffset={2}
          sm={4}
          mdOffset={1}
          md={4}
          lgOffset={2}
          lg={3}
          className={styles.about_section__image_ctn}
        >
          <FadeInSectionWrapper fadeBottomToTop delay="300ms">
            <Tilt
              scale={currentResolution === "xs" ? 1.001 : 1.05}
              transitionSpeed={2000}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
            >
              <a
                href="https://www.linkedin.com/in/victor-semencenco/"
                target="_blank"
                rel="noreferrer"
                aria-label={`Victor Semencenco Image`}
                tabIndex="0"
              >
                <img
                  onMouseEnter={() => {
                    setHoveringImage(true);
                  }}
                  onMouseLeave={() => {
                    setHoveringImage(false);
                  }}
                  className={`${
                    hoveringImage && styles.about_section__image_hover
                  } ${styles.about_section__image}`}
                  alt="Victor Semencenco"
                  src={aboutMeImage}
                />
              </a>
            </Tilt>
          </FadeInSectionWrapper>
        </Grid>
        {/* Text */}
        <Grid xs={4} sm={8} md={6} lg={5}>
          <FadeInSectionWrapper fadeBottomToTop delay="300ms">
            <Tilt
              scale={
                currentResolution === "sm" || currentResolution === "xs"
                  ? 1
                  : 1.05
              }
              transitionSpeed={2000}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
            >
              <div
                className={styles.about_section__text}
                aria-label="Hi, I’m Victor — a trilingual Product Manager based in Berlin, with a Master’s in Computer Engineering and a passion for building products people love.         
                I thrive at the intersection of product vision and technical execution, turning user pain points into impactful solutions. 
                Over the years, I've delivered enterprise-level products for industry leaders like Stellantis, Redcare Pharmacy, Maserati, and Toyota. 
                I bring a sharp eye for detail, a collaborative mindset, and a drive to lead with clarity and empathy. 
                My leadership style focuses on setting high standards and creating a supportive environment where everyone feels empowered and valued."
              >
                <p>
                Hi, I’m Victor — a trilingual Product Manager based in Berlin, with a Master’s in Computer Engineering and a passion for building products people love.         
                </p>
                <br />
                <p>
                I thrive at the intersection of product vision and technical execution, turning user pain points into impactful solutions. 
                Over the years, I've delivered enterprise-level products for industry leaders like Stellantis, Redcare Pharmacy, Maserati, and Toyota.                 
                </p>
                <br />
                <p>
                  I bring a sharp eye for detail, a collaborative mindset, and a drive to lead with clarity and empathy. 
                  My leadership style focuses on setting high standards and creating a supportive environment where everyone feels empowered and valued.
                </p>
              </div>
            </Tilt>
          </FadeInSectionWrapper>
        </Grid>
        {/* Skills */}
        <Grid xs={4} sm={8} mdOffset={1} md={10} lgOffset={2} lg={8}>
          <div className={styles.about_section__skills}>
            <FadeInSectionWrapper fadeInRightSide delay="350ms">
              <Tilt
                scale={
                  currentResolution === "sm" || currentResolution === "xs"
                    ? 1.001
                    : 1.3
                }
                transitionSpeed={1000}
                tiltMaxAngleX={0}
                tiltMaxAngleY={0}
              >
                <div className={styles.about_section__skills__skill}>
                  <img
                    className={styles.about_section__skills__skill__icon}
                    src={angularIcon}
                    alt="Angular Icon"
                  ></img>
                  <div
                    className={styles.about_section__skills__skill__text_icon}
                    aria-label="Angular"
                  >
                    Angular
                  </div>
                </div>
              </Tilt>
            </FadeInSectionWrapper>
            <FadeInSectionWrapper fadeInRightSide delay="400ms">
              <Tilt
                scale={
                  currentResolution === "sm" || currentResolution === "xs"
                    ? 1.001
                    : 1.3
                }
                transitionSpeed={1000}
                tiltMaxAngleX={0}
                tiltMaxAngleY={0}
              >
                <div className={styles.about_section__skills__skill}>
                  <img
                    className={styles.about_section__skills__skill__icon}
                    src={tsIcon}
                    alt="TypeScript Icon"
                  ></img>
                  <div
                    className={styles.about_section__skills__skill__text_icon}
                    aria-label="TypeScript"
                  >
                    TypeScript
                  </div>
                </div>
              </Tilt>
            </FadeInSectionWrapper>
            <FadeInSectionWrapper fadeInRightSide delay="450ms">
              <Tilt
                scale={
                  currentResolution === "sm" || currentResolution === "xs"
                    ? 1.001
                    : 1.3
                }
                transitionSpeed={1000}
                tiltMaxAngleX={0}
                tiltMaxAngleY={0}
              >
                <div className={styles.about_section__skills__skill}>
                  <img
                    className={styles.about_section__skills__skill__icon}
                    src={reactIcon}
                    alt="React Icon"
                  ></img>
                  <div
                    className={styles.about_section__skills__skill__text_icon}
                    aria-label="React"
                  >
                    React
                  </div>
                </div>
              </Tilt>
            </FadeInSectionWrapper>
            <FadeInSectionWrapper fadeInRightSide delay="500ms">
              <Tilt
                scale={
                  currentResolution === "sm" || currentResolution === "xs"
                    ? 1.001
                    : 1.3
                }
                transitionSpeed={1000}
                tiltMaxAngleX={0}
                tiltMaxAngleY={0}
              >
                <div className={styles.about_section__skills__skill}>
                  <img
                    className={styles.about_section__skills__skill__icon}
                    src={jsIcon}
                    alt="JavaScript Icon"
                  ></img>
                  <div
                    className={styles.about_section__skills__skill__text_icon}
                    aria-label="JavaScript"
                  >
                    JavaScript
                  </div>
                </div>
              </Tilt>
            </FadeInSectionWrapper>
            <FadeInSectionWrapper fadeInRightSide delay="550ms">
              <Tilt
                scale={
                  currentResolution === "sm" || currentResolution === "xs"
                    ? 1.001
                    : 1.3
                }
                transitionSpeed={1000}
                tiltMaxAngleX={0}
                tiltMaxAngleY={0}
              >
                <div className={styles.about_section__skills__skill}>
                  <img
                    className={styles.about_section__skills__skill__icon}
                    src={htmlIcon}
                    alt="HTML5 Icon"
                  ></img>
                  <div
                    className={styles.about_section__skills__skill__text_icon}
                    aria-label="HTML"
                  >
                    HTML
                  </div>
                </div>
              </Tilt>
            </FadeInSectionWrapper>
            <FadeInSectionWrapper fadeInRightSide delay="600ms">
              <Tilt
                scale={
                  currentResolution === "sm" || currentResolution === "xs"
                    ? 1.001
                    : 1.3
                }
                transitionSpeed={1000}
                tiltMaxAngleX={0}
                tiltMaxAngleY={0}
              >
                <div className={styles.about_section__skills__skill}>
                  <img
                    className={styles.about_section__skills__skill__icon}
                    src={cssIcon}
                    alt="CSS3 Icon"
                  ></img>
                  <div
                    className={styles.about_section__skills__skill__text_icon}
                    aria-label="CSS"
                  >
                    CSS
                  </div>
                </div>
              </Tilt>
            </FadeInSectionWrapper>
            <FadeInSectionWrapper fadeInRightSide delay="650ms">
              <Tilt
                scale={
                  currentResolution === "sm" || currentResolution === "xs"
                    ? 1.001
                    : 1.3
                }
                transitionSpeed={1000}
                tiltMaxAngleX={0}
                tiltMaxAngleY={0}
              >
                <div className={styles.about_section__skills__skill}>
                  <img
                    className={styles.about_section__skills__skill__icon}
                    src={sassIcon}
                    alt="SASS Icon"
                  ></img>
                  <div
                    className={styles.about_section__skills__skill__text_icon}
                    aria-label="SASS"
                  >
                    SASS
                  </div>
                </div>
              </Tilt>
            </FadeInSectionWrapper>
            <FadeInSectionWrapper fadeInRightSide delay="700ms">
              <Tilt
                scale={
                  currentResolution === "sm" || currentResolution === "xs"
                    ? 1.001
                    : 1.3
                }
                transitionSpeed={1000}
                tiltMaxAngleX={0}
                tiltMaxAngleY={0}
              >
                <div className={styles.about_section__skills__skill}>
                  <img
                    className={styles.about_section__skills__skill__icon}
                    src={bootstrapIcon}
                    alt="Bootstrap Icon"
                  ></img>
                  <div
                    className={styles.about_section__skills__skill__text_icon}
                    aria-label="Bootstrap"
                  >
                    Bootstrap
                  </div>
                </div>
              </Tilt>
            </FadeInSectionWrapper>
            <FadeInSectionWrapper fadeInRightSide delay="750ms">
              <Tilt
                scale={
                  currentResolution === "sm" || currentResolution === "xs"
                    ? 1.001
                    : 1.3
                }
                transitionSpeed={1000}
                tiltMaxAngleX={0}
                tiltMaxAngleY={0}
              >
                <div className={styles.about_section__skills__skill}>
                  <img
                    className={styles.about_section__skills__skill__icon}
                    src={materialuiIcon}
                    alt="Materialui Icon"
                  ></img>
                  <div
                    className={styles.about_section__skills__skill__text_icon}
                    aria-label="MUI"
                  >
                    MUI
                  </div>
                </div>
              </Tilt>
            </FadeInSectionWrapper>
            <FadeInSectionWrapper fadeInRightSide delay="800ms">
              <Tilt
                scale={
                  currentResolution === "sm" || currentResolution === "xs"
                    ? 1.001
                    : 1.3
                }
                transitionSpeed={1000}
                tiltMaxAngleX={0}
                tiltMaxAngleY={0}
              >
                <div className={styles.about_section__skills__skill}>
                  <img
                    className={styles.about_section__skills__skill__icon}
                    src={figmaIcon}
                    alt="Figma Icon"
                  ></img>
                  <div
                    className={styles.about_section__skills__skill__text_icon}
                    aria-label="Figma"
                  >
                    Figma
                  </div>
                </div>
              </Tilt>
            </FadeInSectionWrapper>
            <FadeInSectionWrapper fadeInRightSide delay="850ms">
              <Tilt
                scale={
                  currentResolution === "sm" || currentResolution === "xs"
                    ? 1.001
                    : 1.3
                }
                transitionSpeed={1000}
                tiltMaxAngleX={0}
                tiltMaxAngleY={0}
              >
                <div className={styles.about_section__skills__skill}>
                  <img
                    className={styles.about_section__skills__skill__icon}
                    src={jiraIcon}
                    alt="Jira Icon"
                  ></img>
                  <div
                    className={styles.about_section__skills__skill__text_icon}
                    aria-label="Jira"
                  >
                    Jira
                  </div>
                </div>
              </Tilt>
            </FadeInSectionWrapper>
            <FadeInSectionWrapper fadeInRightSide delay="900ms">
              <Tilt
                scale={
                  currentResolution === "sm" || currentResolution === "xs"
                    ? 1.001
                    : 1.3
                }
                transitionSpeed={1000}
                tiltMaxAngleX={0}
                tiltMaxAngleY={0}
              >
                <div className={styles.about_section__skills__skill}>
                  <img
                    className={styles.about_section__skills__skill__icon}
                    src={gitIcon}
                    alt="Git Icon"
                  ></img>
                  <div
                    className={styles.about_section__skills__skill__text_icon}
                    aria-label="Git"
                  >
                    Git
                  </div>
                </div>
              </Tilt>
            </FadeInSectionWrapper>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default About;
