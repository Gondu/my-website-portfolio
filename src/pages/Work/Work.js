import styles from "./Work.module.scss";
import Grid from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material/styles";
import Tilt from "react-parallax-tilt";
import workMeImage from "../../assets/images/victor_semencenco_photo.jpg";


const Work = () => {
  const PortfolioTheme = useTheme();

    return (
      <section
      className={styles.work_section}
      style={{height: 500, backgroundColor: "#f0000f"}} 
      id="work"
    >
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
        {/* Title section */}
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
          {/* Title */}
          <h2 className={styles.work_section__title}>Work</h2>
          {/* Text */}
          <div className={styles.work_section__subtitle}>Some of the projects I’ve recently worked on either by myself or with other amazing people I met from all over the world.</div>
        </Grid>

        {/* Info section */}
        <Grid
          xsOffset={1}
          xs={2}
          smOffset={2}
          sm={4}
          mdOffset={1}
          md={10}
          lgOffset={0}
          lg={6}
        >
          {/* Title */}
          <h2 className={styles.work_section__info__title}>Title</h2>
          {/* Text */}
          <h2 className={styles.work_section__info__text}>Text</h2>
          {/* Technologies */}
          <h2 className={styles.work_section__info__tech}>Technologies</h2>
        </Grid>

        {/* Image section */}
        <Grid
          xsOffset={1}
          xs={2}
          smOffset={2}
          sm={4}
          mdOffset={1}
          md={10}
          lgOffset={0}
          lg={6}
        >
          <img
              className={styles.work_section__image}
              alt="Victor Semencenco"
              src={workMeImage}
            />
        </Grid>
      </Grid>
    </section>
    );
  };
  
  export default Work;
  