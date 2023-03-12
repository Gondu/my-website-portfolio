import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import g from "./global-styles/globals.scss";

const ParticlesComponent = (props) => {
  const options = useMemo(() => {
    return {
      fpsLimit: 30,
      background: {
        color: g.blue,
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 130,
          },
        },
      },
      particles: {
        number: {
          value: 26,
        },
        links: {
          enable: true,
          color: g.darkaqua,
          distance: 167, // maximum distance for linking the particles
        },
        move: {
          enable: true,
          speed: { min: 1, max: 2 },
          out_mode: "bounce",
        },
        size: {
          value: { min: 1, max: 2 },
        },
        opacity: {
          value: { min: 0.2, max: 1 },
        },
      },
      detectRetina: true,
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;
