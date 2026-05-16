import { useCallback, useRef } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import bg from "../Images/2d7cea4f-23d2-4d5d-a89e-f83c0b00f4a5.png";
import "../styles/Hero.css";

export default function Hero() {
  const heroRef = useRef(null);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const handleMouseMove = (event) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    heroRef.current.style.setProperty("--mouse-x", `${x}px`);
    heroRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section
      ref={heroRef}
      className="hero"
      style={{ backgroundImage: `url(${bg})` }}
      onMouseMove={handleMouseMove}
    >
      <Particles
        id="tedx-particles"
        className="hero-particles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          background: { color: "transparent" },
          particles: {
            number: { value: 44, density: { enable: true, area: 900 } },
            color: { value: ["#ff2a35", "#ffffff", "#ff9aa0"] },
            links: {
              enable: true,
              distance: 140,
              color: "#ff2a35",
              opacity: 0.18,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.7,
              outModes: { default: "out" },
            },
            opacity: { value: { min: 0.15, max: 0.45 } },
            size: { value: { min: 1, max: 3 } },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              repulse: { distance: 90, duration: 0.35 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="hero-floating hero-floating-one" aria-hidden="true" />
      <div className="hero-floating hero-floating-two" aria-hidden="true" />
      <div className="hero-mouse-glow" aria-hidden="true" />
      <div className="hero-overlay">
        <p className="hero-kicker">TEDx MocChau 2026</p>
        <h1 className="hero-title">Believe in your self</h1>
        <p className="hero-subtitle">
          Roots guide you - Roads shape you
        </p>
        <a
          className="hero-cta"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdVcs96XFcuwuPRg6b1KFtf_YBe6WU7cLAmKaZrRlY_9U9-bg/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          Đăng ký ngay
        </a>
      </div>
    </section>
  );
}
