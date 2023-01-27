import logo from "../../assets/svg/logo_victor.svg";
import styles from "./LoadingScreen.module.scss";
import { useGlitch } from "react-powerglitch";

const LoadingScreen = () => {
  const glitch = useGlitch(
    {
      "playMode": "always",
      "createContainers": true,
      "hideOverflow": true,
      "timing": {
        "duration": 3950
      },
      "glitchTimeSpan": {
        "start": 0,
        "end": 1
      },
      "shake": {
        "velocity": 7,
        "amplitudeX": 0.07,
        "amplitudeY": 0.07
      },
      "slice": {
        "count": 1,
        "velocity": 6,
        "minHeight": 0.46,
        "maxHeight": 0.01,
        "hueRotate": true
      },
      "pulse": {
        "scale": 1
      }
  });

  return (
    <div className={styles.preloader_container}>
      <img
        className={styles.icon}
        ref={glitch.ref}
        src={logo}
        alt="Logo Victor Semencenco"
      />
      <div className={styles.text} data-text="Loading...">Loading<span>.</span><span>.</span><span>.</span></div>
    </div>
  );
};

export default LoadingScreen;
