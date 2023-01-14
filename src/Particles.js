import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import g from "./global-styles/globals.scss";
// import "./global-styles/globals.scss" as *;
// import "./App.module.scss";

// import { loadFull } from "tsparticles";

const ParticlesComponent = (props) => {
  const options = useMemo(() => {
    return {
      fpsLimit: 60,
      background: {
        color: g.white,
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 2,
          },
          repulse: {
            distance: 110,
          },
        },
      },
      particles: {
        links: {
          enable: true,
          color: "#00FFFF",
          distance: 100, // maximum distance for linking the particles
        },
        move: {
          enable: true,
          speed: { min: 1, max: 5 },
          out_mode: "bounce",
        },
        // zIndex: {
        // 	value: 20,
        // },
        size: {
          value: { min: 1, max: 3 },
        },
        opacity: {
          value: { min: 0.3, max: 0.7 },
        },
      },
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    // loadFull(engine);
    await loadSlim(engine);
  }, []);

  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;
