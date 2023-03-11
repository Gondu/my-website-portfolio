import logo from "../../assets/svg/logo_victor.svg";
import styles from "./LoadingScreen.module.scss";
import { useEffect } from "react";
import { useGlitch } from "react-powerglitch";
import GlitchedWriter from "glitched-writer";

const LoadingScreen = (props) => {
  const glitch = useGlitch({
    playMode: "always",
    createContainers: true,
    hideOverflow: true,
    timing: {
      duration: 3950,
    },
    glitchTimeSpan: {
      start: 0,
      end: 1,
    },
    shake: {
      velocity: 7,
      amplitudeX: 0.07,
      amplitudeY: 0.07,
    },
    slice: {
      count: 1,
      velocity: 6,
      minHeight: 0.46,
      maxHeight: 0.01,
      hueRotate: true,
    },
    pulse: {
      scale: 1,
    },
  });

  useEffect(() => {
    const myWriter1 = new GlitchedWriter("#loadingScreenGlitchWriting", {
      interval: [30, 100],
      delay: [0, 500],
      steps: [7, 10],
      maxGhosts: 0.2,
      ghostChance: 0.2,
      changeChance: 0.6,
      glyphs: "!<>-_\\/[]{}—=+*^?#________",
      mode: "normal",
      oneAtATime: 0,
      fillSpace: true,
      glyphsFromText: true,
    });

    const beginGlitchWriting = async () => {
      await myWriter1.write("Loading...");
    };

    beginGlitchWriting();
  }, []);

  if (props.fakeLoadedFadeOut) {
    glitch.stopGlitch();
  }

  return (
    <div
      className={`${styles.preloader_container} ${
        props.fakeLoadedFadeOut && styles.preloader_container_fade_out
      }`}
    >
      <img
        className={`${styles.icon} ${
          props.fakeLoadedFadeOut && styles.icon_fade_out
        }`}
        ref={glitch.ref}
        src={logo}
        alt="Logo Victor Semencenco"
      />
      <div
        className={`${styles.text} ${
          props.fakeLoadedFadeOut && styles.text_fade_out
        }`}
        data-text="Loading..."
        aria-label="Loading..."
        id="loadingScreenGlitchWriting"
      ></div>
    </div>
  );
};

export default LoadingScreen;
