import { useState } from "react";
import styles from "./ProjectCard.module.scss";
import Grid from "@mui/material/Unstable_Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

let currentResolution = "";

const ProjectCard = (props) => {
  // Object destructuring, number -> number of project (es: 01, 02, etc), reverse -> reverse the project card
  const { number, title, text, technologies, images, url, reverse } = props;
  const [hoveringImage, setHoveringImage] = useState(false);
  const PortfolioTheme = useTheme();

  if (useMediaQuery(PortfolioTheme.breakpoints.only("lg"))) {
    currentResolution = "lg";
  }
  if (useMediaQuery(PortfolioTheme.breakpoints.only("md"))) {
    currentResolution = "md";
  }
  if (useMediaQuery(PortfolioTheme.breakpoints.only("sm"))) {
    currentResolution = "sm";
  }
  if (useMediaQuery(PortfolioTheme.breakpoints.only("xs"))) {
    currentResolution = "xs";
  }

  return (
    <div className={styles.project_card__project}>
      <Grid
        xsOffset={0}
        xs={4}
        smOffset={0}
        sm={3}
        mdOffset={reverse ? 5 : 0}
        md={7}
      >
        {/* Title */}
        <div
          className={styles.project_card__project__title}
          style={
            reverse &&
            (currentResolution === "md" || currentResolution === "lg")
              ? { flexDirection: "row-reverse" }
              : { flexDirection: "row" }
          }
        >
          <div
            className={styles.project_card__project__title__number}
            style={
              reverse &&
              (currentResolution === "md" || currentResolution === "lg")
                ? {
                    borderLeft: "1px solid #008080",
                    borderRight: "none",
                    paddingLeft: "8px",
                  }
                : {
                    borderRight: "1px solid #008080",
                    borderLeft: "none",
                    paddingRight: "8px",
                  }
            }
          >
            {number}
          </div>
          <h3
            className={styles.project_card__project__title__text}
            style={
              reverse &&
              (currentResolution === "md" || currentResolution === "lg")
                ? { paddingRight: "8px" }
                : { paddingLeft: "8px" }
            }
          >
            {title}
          </h3>
        </div>
      </Grid>

      {/* Project text section */}
      <Grid
        xsOffset={0}
        xs={4}
        smOffset={1}
        sm={6}
        mdOffset={reverse ? 5 : 0}
        md={7}
        className={styles.project_card__project__text}
      >
        <div className={styles.project_card__project__text__body}>
          {/* Text */}
          <div
            style={
              reverse &&
              (currentResolution === "md" || currentResolution === "lg")
                ? { textAlign: "right" }
                : { textAlign: "left" }
            }
          >
            <p>{text}</p>
          </div>
        </div>
        {/* Technologies */}
        <div className={styles.project_card__project__text__tech}>
          { technologies[0] &&
            <div className={styles.project_card__project__text__tech__item}>
              {technologies[0]}
            </div>
          }
          { technologies[1] &&
            <div className={styles.project_card__project__text__tech__item}>
              {technologies[1]}
            </div>
          }
          { technologies[2] &&
            <div className={styles.project_card__project__text__tech__item}>
              {technologies[2]}
            </div>
          }
          { technologies[3] &&
            <div className={styles.project_card__project__text__tech__item}>
              {technologies[3]}
            </div>
          }
          { technologies[4] &&
            <div className={styles.project_card__project__text__tech__item}>
              {technologies[4]}
            </div>
          }
          { technologies[5] &&
            <div className={styles.project_card__project__text__tech__item}>
              {technologies[5]}
            </div>
          }
          { technologies[6] &&
            <div className={styles.project_card__project__text__tech__item}>
              {technologies[6]}
            </div>
          }
          { technologies[7] &&
            <div className={styles.project_card__project__text__tech__item}>
              {technologies[7]}
            </div>
          }
        </div>
      </Grid>

      {/* Image section */}
      <Grid
        xsOffset={0}
        xs={4}
        smOffset={0}
        sm={8}
        mdOffset={reverse ? 0 : 6}
        md={6}
        className={styles.project_card__project__image}
      >
        <a href={url} target="_blank" rel="noreferrer">
          <picture>
            <source srcSet={images[3]} media="(min-width: 1440px)" />
            <source srcSet={images[2]} media="(min-width: 1024px)" />
            <source srcSet={images[1]} media="(min-width: 768px)" />
            <img
              onMouseEnter={() => {
                setHoveringImage(true);
              }}
              onMouseLeave={() => {
                setHoveringImage(false);
              }}
              className={`${
                hoveringImage &&
                (currentResolution === "md" || currentResolution === "lg") &&
                styles.project_card__project__image__img_hover
              } ${styles.project_card__project__image__img}`}
              // to find the right negative margin to center the image -> height_text_card + ((height_img - height_text_card)/2)
              style={
                currentResolution === "md"
                  ? { marginTop: -353 }
                  : currentResolution === "lg"
                  ? { marginTop: -315 }
                  : { marginTop: 0 }
              }
              src={images[0]}
              alt={`Project ${number}`}
              // id="img"
            />
            {/* <span className={styles.clipPath}>
            </span> */}
          </picture>
        </a>
      </Grid>
    </div>
  );
};

export default ProjectCard;
