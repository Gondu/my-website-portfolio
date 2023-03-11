import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import g from "./global-styles/globals.scss";

const ParticlesComponent = (props) => {
  const options = useMemo(() => {
    return {
      fpsLimit: 60,
      background: {
        color: g.blue,
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
            quantity: 1,
          },
          repulse: {
            distance: 110,
          },
        },
      },
      particles: {
        number: {
          value: 30,
          // density: {
          //   enable: true,
          //   value_area: 800
          // }
        },
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
    await loadSlim(engine);
  }, []);

  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;
