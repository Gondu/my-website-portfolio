import styles from "./Contact.module.scss";
import { useGlitch } from "react-powerglitch";
import Grid from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material/styles";
import MainGlitchButton from "../../components/MainGlitchButton/MainGlitchButton";
import FadeInSectionWrapper from "../../components/FadeInSectionWrapper/FadeInSectionWrapper";

const Contact = () => {
  const PortfolioTheme = useTheme();
  const glitch_links_hover = useGlitch({
    playMode: "hover",
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 2000,
      iterations: Infinity,
    },
    glitchTimeSpan: {
      start: 0,
      end: 1,
    },
    shake: {
      velocity: 20,
      amplitudeX: 0.005,
      amplitudeY: 0.015,
    },
    slice: {
      count: 3,
      velocity: 5,
      minHeight: 0.005,
      maxHeight: 0.085,
      hueRotate: true,
    },
  });

  return (
    <section className={styles.contact_section} id="contact">
      <FadeInSectionWrapper fadeBottomToTop>
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
            <h2
              className={styles.contact_section__title}
              aria-label="Let's talk"
            >
              Let's talk
            </h2>
          </Grid>
          {/* Subtitle section */}
          <Grid
            xsOffset={0}
            xs={4}
            smOffset={1}
            sm={6}
            mdOffset={1}
            md={10}
            lgOffset={2}
            lg={8}
          >
            <p
              className={styles.contact_section__subtitle}
              aria-label="I'm passionate about what I do and I'm always eager to connect
              with others who share that same passion. Please don't hesitate to
              get in touch if you would like to collaborate or have any
              questions about my work. You can drop me a message anytime at victor.semencenco@gmail.com or connect with me on LinkedIn."
            >
              I'm passionate about what I do and I'm always eager to connect
              with others who share that same passion. Please don't hesitate to
              get in touch if you would like to collaborate or have any
              questions about my work. You can drop me a message anytime at{" "}
              <a
                href="mailto:victor.semencenco@gmail.com"
                className={styles.contact_section__subtitle__contact}
                ref={glitch_links_hover.ref}
                aria-label="Write mail to victor.semencenco@gmail.com"
                title="Write mail to victor.semencenco@gmail.com"
                tabIndex="0"
              >
                victor.semencenco@gmail.com
              </a>{" "}
              or connect with me on{" "}
              <a
                href={"https://www.linkedin.com/in/victor-semencenco/"}
                ref={glitch_links_hover.ref}
                rel="noreferrer"
                target="_blank"
                className={styles.contact_section__subtitle__contact}
                aria-label="Go to Linkedin"
                title="Go to Linkedin"
                tabIndex="0"
              >
                LinkedIn.
              </a>
            </p>
          </Grid>
          {/* Buttons section */}
          <div className={styles.contact_section__buttons}>
            <MainGlitchButton
              text="Write me an email"
              mail="mailto:victor.semencenco@gmail.com"
            />
          </div>
        </Grid>
      </FadeInSectionWrapper>
    </section>
  );
};

export default Contact;
