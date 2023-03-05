import { useEffect, useRef, useState } from "react";
import styles from "./ProjectCard.module.scss";
import Grid from "@mui/material/Unstable_Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
// import Tilt from "react-parallax-tilt";
// import maseratiMobileImage from "../../assets/images/maserati_project_mobile.jpeg";
// import maseratiTabletPImage from "../../assets/images/maserati_project_tabletP.jpeg";
// import maseratiTabletLImage from "../../assets/images/maserati_project_tabletL.jpeg";
// import maseratiDesktopLgImage from "../../assets/images/maserati_project_desktop_lg.jpeg";

let currentResolution = "";

const ProjectCard = (props) => {
	// Object destructuring, number -> number of project (es: 01, 02, etc), reverse -> reverse the project card 
	const {number, title, text, technologies, images, reverse} = props;

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
        mdOffset={0}
        md={7}
        lgOffset={0}
        lg={7}
      >
        {/* Title */}
        <div className={styles.project_card__project__title}>
          <div className={styles.project_card__project__title__number}>{number}</div>
          <h3 className={styles.project_card__project__title__text}>
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
        mdOffset={0}
        md={7}
        className={styles.project_card__project__text}
      >
        <div className={styles.project_card__project__text__body}>
          {/* Text */}
          <div className={styles.project_card__project__text__body__info}>
            <p>
              {text}
            </p>
          </div>
        </div>
        {/* Technologies */}
        <div className={styles.project_card__project__text__tech}>
          <div className={styles.project_card__project__text__tech__item}>
            {technologies[0]}
          </div>
          <div className={styles.project_card__project__text__tech__item}>
						{technologies[1]}
          </div>
          <div className={styles.project_card__project__text__tech__item}>
						{technologies[2]}
          </div>
          <div className={styles.project_card__project__text__tech__item}>
						{technologies[3]}
          </div>
          <div className={styles.project_card__project__text__tech__item}>
						{technologies[4]}
          </div>
          <div className={styles.project_card__project__text__tech__item}>
          	{technologies[5]}
          </div>
          <div className={styles.project_card__project__text__tech__item}>
						{technologies[6]}
          </div>
          <div className={styles.project_card__project__text__tech__item}>
	          {technologies[7]}
          </div>
        </div>
      </Grid>

      {/* Image section */}
      <Grid
        xsOffset={0}
        xs={4}
        smOffset={0}
        sm={8}
        mdOffset={6}
        md={6}
        className={styles.project_card__project__image}
      >
        <picture>
          <source srcSet={images[3]} media="(min-width: 1440px)" />
          <source srcSet={images[2]} media="(min-width: 1024px)" />
          <source srcSet={images[1]} media="(min-width: 768px)" />
          <img
						// to find the right negative margin to center the image -> height_text_card + ((height_img - height_text_card)/2)
						style={
							currentResolution === "md" 
								? { marginTop: -353}
								: currentResolution === "lg" ? { marginTop: -315} : {marginTop: 0}
						}
            className={styles.project_card__project__image__img}
            src={images[0]}
            alt="Maserati Dashboard"
          />
        </picture>
      </Grid>
    </div>
  );
};

export default ProjectCard;
