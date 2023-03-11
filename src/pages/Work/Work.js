import styles from "./Work.module.scss";
import Grid from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material/styles";
import FadeInSectionWrapper from "../../components/FadeInSectionWrapper/FadeInSectionWrapper";
// import Tilt from "react-parallax-tilt";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
// Import Stellantis/Maserati images 
import maseratiMobileImage from "../../assets/images/maserati_project_mobile.jpeg";
import maseratiTabletPImage from "../../assets/images/maserati_project_tabletP.jpeg";
import maseratiTabletLImage from "../../assets/images/maserati_project_tabletL.jpeg";
import maseratiDesktopImage from "../../assets/images/maserati_project_desktop.jpeg";
// Import Oliba images 
import olibaMobileImage from "../../assets/images/oliba_project_mobile.jpg";
import olibaTabletPImage from "../../assets/images/oliba_project_tabletP.jpg";
import olibaTabletLImage from "../../assets/images/oliba_project_tabletL.jpg";
import olibaDesktopImage from "../../assets/images/oliba_project_desktop.jpg";
// Import Toyota images 
import toyotaMobileImage from "../../assets/images/toyota_project_mobile.jpg";
import toyotaTabletPImage from "../../assets/images/toyota_project_tabletP.jpg";
import toyotaTabletLImage from "../../assets/images/toyota_project_tabletL.jpg";
import toyotaDesktopImage from "../../assets/images/toyota_project_desktop.jpg";
// Import Voghenza images 
import voghenzaMobileImage from "../../assets/images/voghenza_project_mobile.jpg";
import voghenzaTabletPImage from "../../assets/images/voghenza_project_tabletP.jpg";
import voghenzaTabletLImage from "../../assets/images/voghenza_project_tabletL.jpg";
import voghenzaDesktopImage from "../../assets/images/voghenza_project_desktop.jpg";
// Import Fox images 
import foxMobileImage from "../../assets/images/fox_project_mobile.jpg";
import foxTabletPImage from "../../assets/images/fox_project_tabletP.jpg";
import foxTabletLImage from "../../assets/images/fox_project_tabletL.jpg";
import foxDesktopImage from "../../assets/images/fox_project_desktop.jpg";

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
            <FadeInSectionWrapper fadeBottomToTop>
              <h2 className={styles.work_section__title}>Work</h2>
            </FadeInSectionWrapper>
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
            <FadeInSectionWrapper fadeBottomToTop delay="400ms">
              <p className={styles.work_section__subtitle}>
                Some of the projects I’ve recently worked on either by myself or
                with other amazing people I met from all over the world.
              </p>
            </FadeInSectionWrapper>
          </Grid>

        <ProjectCard
          number={"01"}
          title={"Stellantis"}
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
            maseratiDesktopImage,
          ]}
          url={"https://connect.maserati.com/us/en/login"}
        />

        <ProjectCard
          reverse
          number={"02"}
          title={"Oliba"}
          text={
            "Oliba is a consulting company that provides scientific and strategic advice in the healthcare and pharmaceuticals sectors. I have been in charge of building the frontend side of their new health-related information website. The website provides articles about non-communicable diseases, how to prevent them and the risk factors and symptoms associated with them. Users can search for specific articles, filter and read them. For development I have primarily used React, JavaScript, Bootstrap, HTML and SCSS."
          }
          technologies={[
            "React",
            "JavaScript",
            "MUI",
            "Bootstrap",
            "HTML",
            "SCSS",
            "Git",
            "Figma",
          ]}
          images={[
            olibaMobileImage,
            olibaTabletPImage,
            olibaTabletLImage,
            olibaDesktopImage,
          ]}
          url={"https://www.preventiontrainer.com/en"}
        />

        <ProjectCard
          number={"03"}
          title={"Toyota"}
          text={
            "I have been part of the frontend development team for Toyota's new dealer portal. The portal serves as a hub area where all the company apps that are used by their internal employees are displayed. Toyota dealers can easily search for any apps and download them. It also shows their future appointments, reports and documents. Moreover it allows them to display, manage and edit various information about their clients. For development we have used React with CSS Modules, TypeScript and Fluent UI."
          }
          technologies={[
            "React",
            "TypeScript",
            "Fluent UI",
            "Bootstrap",
            "HTML",
            "SCSS",
            "Git",
            "Figma",
          ]}
          images={[
            toyotaMobileImage,
            toyotaTabletPImage,
            toyotaTabletLImage,
            toyotaDesktopImage,
          ]}
        />

        <ProjectCard
          reverse
          number={"04"}
          title={"Ancient instrument"}
          text={
            "In 1984, an ancient Roman musical instrument was discovered during an excavation in the Italian city of Voghenza. Today, its remains are on display at the Civic Museum of Belriguardo. To help people learn more about this unique instrument, I created a website that showcases its history, virtually reconstructed 3D models, and simulated sounds. The website was built using JavaScript and jQuery, and I used the Unity Engine and C# programming language to create the 3D models and simulate the sounds."
          }
          technologies={[
            "JavaScript",
            "jQuery",
            "C#",
            "Unity",
            "HTML",
            "CSS",
            "Bootstrap",
            "Audacity",
          ]}
          images={[
            voghenzaMobileImage,
            voghenzaTabletPImage,
            voghenzaTabletLImage,
            voghenzaDesktopImage,
          ]}
          url={"http://csc.dei.unipd.it/vibra/"}
        />

        <ProjectCard
          number={"05"}
          title={"Unity Game"}
          text={
            "During my Erasmus period in Denmark I collaborated with my university colleagues to design and develop a Unity 2D game called 'A Fox's Journey', using the C# programming language. The game's main objective is to increase players' motivation and sense of agency in delay to address the issue of climate change. In the game, the arctic tundra has been affected by climate change, and the player must guide a little arctic fox back to her family while avoiding hostile predators and human-made pollution."
          }
          technologies={[
            "Unity",
            "C#",
            "Illustrator",
            "Blender",
            "Animator",
            "Photoshop",
            "Trello",
            "Discord",
          ]}
          images={[
            foxMobileImage,
            foxTabletPImage,
            foxTabletLImage,
            foxDesktopImage,
          ]}
          url={"http://aleflavia.com/a-foxs-journey/"}
        />
      </Grid>
    </section>
  );
};

export default Work;
