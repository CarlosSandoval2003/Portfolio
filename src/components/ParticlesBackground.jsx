import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#0f172a", // fondo dark navy
          },
        },
        fullScreen: { enable: true, zIndex: -1 },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: { value: "#38bdf8" }, // celeste Tailwind
          links: {
            color: "#38bdf8",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          collisions: { enable: true },
          move: {
            enable: true,
            speed: 1.5,
            outModes: { default: "bounce" },
          },
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800,
            },
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 4 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
