import styles from "./Work.module.scss";
import Grid from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material/styles";
// import Tilt from "react-parallax-tilt";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
// Project 1 images
import maseratiMobileImage from "../../assets/images/maserati_project_mobile.jpeg";
import maseratiTabletPImage from "../../assets/images/maserati_project_tabletP.jpeg";
import maseratiTabletLImage from "../../assets/images/maserati_project_tabletL.jpeg";
import maseratiDesktopLgImage from "../../assets/images/maserati_project_desktop_lg.jpeg";

const Work = () => {
  const PortfolioTheme = useTheme();

  return (
    <section
      className={styles.work_section}
      // style={{height: 500, backgroundColor: "#f0000f"}}
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
          <h2 className={styles.work_section__title}>Work</h2>
        </Grid>

        {/* Subtitle section */}
        <Grid
          xsOffset={0}
          xs={4}
          smOffset={0}
          sm={8}
          mdOffset={1}
          md={10}
          lgOffset={2}
          lg={8}
        >
          <p className={styles.work_section__subtitle}>
            Some of the projects I’ve recently worked on either by myself or
            with other amazing people I met from all over the world.
          </p>
        </Grid>
        {/* <div style={{ width: "100%", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}> */}
        {/* <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}> */}



        <ProjectCard
          number={"01"}
          title={"Stellantis Websites"}
          text={
            "Stellantis is the fifth largest automaker in the world and includes vehicle brands such Maserati, Dodge, Fiat, Peugeot, Jeep, Opel and many others. Following the Scrum and SAFe agile frameworks, I have been part of Stellantis' web development team and have had a major role in the creation and implementation of key features for their websites, such as the Appstore, the Google Maps integration and the Vehicle Status widgets. These features have been implemented in EMEA, NAFTA, LATAM and APAC regions."
          }
          technologies={[
            "Angular",
            "TypeScript",
            "HTML",
            "SCSS",
            "Bootstrap",
            "FCA API",
            "PSA API",
            "Invision",
          ]}
          images={[
            maseratiMobileImage,
            maseratiTabletPImage,
            maseratiTabletLImage,
            maseratiDesktopLgImage,
          ]}
        />

        <ProjectCard
          number={"01"}
          title={"Stellantis Websites"}
          text={
            "Stellantis is the fifth largest automaker in the world and includes vehicle brands such Maserati, Dodge, Fiat, Peugeot, Jeep, Opel and many others. Following the Scrum and SAFe agile frameworks, I have been part of Stellantis' web development team and have had a major role in the creation and implementation of key features for their websites, such as the Appstore, the Google Maps integration and the Vehicle Status widgets. These features have been implemented in EMEA, NAFTA, LATAM and APAC regions."
          }
          technologies={[
            "Angular",
            "TypeScript",
            "HTML",
            "SCSS",
            "Bootstrap",
            "FCA API",
            "PSA API",
            "Invision",
          ]}
          images={[
            maseratiMobileImage,
            maseratiTabletPImage,
            maseratiTabletLImage,
            maseratiDesktopLgImage,
          ]}
        />

        <ProjectCard
          number={"01"}
          title={"Stellantis Websites"}
          text={
            "Stellantis is the fifth largest automaker in the world and includes vehicle brands such Maserati, Dodge, Fiat, Peugeot, Jeep, Opel and many others. Following the Scrum and SAFe agile frameworks, I have been part of Stellantis' web development team and have had a major role in the creation and implementation of key features for their websites, such as the Appstore, the Google Maps integration and the Vehicle Status widgets. These features have been implemented in EMEA, NAFTA, LATAM and APAC regions."
          }
          technologies={[
            "Angular",
            "TypeScript",
            "HTML",
            "SCSS",
            "Bootstrap",
            "FCA API",
            "PSA API",
            "Invision",
          ]}
          images={[
            maseratiMobileImage,
            maseratiTabletPImage,
            maseratiTabletLImage,
            maseratiDesktopLgImage,
          ]}
        />

        <ProjectCard
          number={"01"}
          title={"Stellantis Websites"}
          text={
            "Stellantis is the fifth largest automaker in the world and includes vehicle brands such Maserati, Dodge, Fiat, Peugeot, Jeep, Opel and many others. Following the Scrum and SAFe agile frameworks, I have been part of Stellantis' web development team and have had a major role in the creation and implementation of key features for their websites, such as the Appstore, the Google Maps integration and the Vehicle Status widgets. These features have been implemented in EMEA, NAFTA, LATAM and APAC regions."
          }
          technologies={[
            "Angular",
            "TypeScript",
            "HTML",
            "SCSS",
            "Bootstrap",
            "FCA API",
            "PSA API",
            "Invision",
          ]}
          images={[
            maseratiMobileImage,
            maseratiTabletPImage,
            maseratiTabletLImage,
            maseratiDesktopLgImage,
          ]}
        />

        {/* </div> */}
        {/* </div> */}
      </Grid>
    </section>
  );
};

export default Work;
