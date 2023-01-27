import styles from "./MainGlitchButton.module.scss";
import { useGlitch } from "react-powerglitch";
import { HashLink as Link } from "react-router-hash-link";
import useMediaQuery from "@mui/material/useMediaQuery";
import { PortfolioTheme } from "../../PortfolioThemeMUI";

let glitch;

const MainGlitchButton = (props) => {
  const glitch_hover = useGlitch({
    playMode: "hover",
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 3950,
      iterations: Infinity,
    },
    glitchTimeSpan: {
      start: 0,
      end: 1,
    },
    shake: {
      velocity: 15,
      amplitudeX: 0.05,
      amplitudeY: 0.05,
    },
    slice: {
      count: 4,
      velocity: 4,
      minHeight: 0.02,
      maxHeight: 0.1,
      hueRotate: true,
    },
    pulse: {
      scale: 1,
    },
  });

  // const glitch_click = useGlitch({
  //   playMode: "click",
  //   createContainers: true,
  //   hideOverflow: false,
  //   timing: {
  //     duration: 1000,
  //     iterations: 1,
  //   },
  //   glitchTimeSpan: {
  //     start: 0,
  //     end: 1,
  //   },
  //   shake: {
  //     velocity: 15,
  //     amplitudeX: 0.05,
  //     amplitudeY: 0.05,
  //   },
  //   slice: {
  //     count: 4,
  //     velocity: 4,
  //     minHeight: 0.02,
  //     maxHeight: 0.1,
  //     hueRotate: true,
  //   },
  //   pulse: {
  //     scale: 1,
  //   },
  // });

  const glitch_always = useGlitch({
    playMode: "always",
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 4500,
      easing: "ease-in-out",
    },
    glitchTimeSpan: {
      start: 0,
      end: 0.1,
    },
    shake: {
      velocity: 15,
      amplitudeX: 0.04,
      amplitudeY: 0.04,
    },
    slice: {
      count: 6,
      velocity: 15,
      minHeight: 0.02,
      maxHeight: 0.15,
      hueRotate: true,
    },
    pulse: false,
  });

  if (useMediaQuery(PortfolioTheme.breakpoints.up("md"))) {
    glitch = glitch_hover;
  } else {
    glitch = glitch_always;
  }

  return (
    <>
      {props.link ? (
        // Link Button
        <Link
          smooth
          to={props.link}
          className={`${styles.btn_glitch_fill} ${
            props.blue ? styles.btn_glitch_fill__blue : ""
          }`}
          ref={glitch.ref}
        >
          {/*eslint-disable-next-line*/}
          <span className={styles.text}>// {props.text}</span>
          <span className={styles.text_decoration}>_</span>
          <span className={styles.decoration}>&rArr;</span>
        </Link>
      ) : (
        // Download Button
        <a
        href={process.env.PUBLIC_URL + '/resume.pdf'}  target="_blank" rel="noopener noreferrer"
          className={`${styles.btn_glitch_fill} ${
            props.blue ? styles.btn_glitch_fill__blue : ""
          }`}
          ref={glitch.ref}
        >
          {/*eslint-disable-next-line*/}
          <span className={styles.text}>// {props.text}</span>
          <span className={styles.text_decoration}>_</span>
          <svg
            className={styles.download_svg}
            fill="#000000"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.293,13.707a1,1,0,1,1,1.414-1.414L11,14.586V3a1,1,0,0,1,2,0V14.586l2.293-2.293a1,1,0,0,1,1.414,1.414l-4,4a1,1,0,0,1-.325.216.986.986,0,0,1-.764,0,1,1,0,0,1-.325-.216ZM22,12a1,1,0,0,0-1,1v7H3V13a1,1,0,0,0-2,0v8a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V13A1,1,0,0,0,22,12Z" />
          </svg>
        </a>
      )}
    </>
  );
};

export default MainGlitchButton;
