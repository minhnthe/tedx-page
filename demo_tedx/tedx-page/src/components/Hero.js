import { useRef } from "react";
// Use a known-working image for testing. If this shows, the PNG import/path is the issue.
import bg from "../Images/try.jpg";
import "../styles/Hero.css";


export default function Hero() {
  const heroRef = useRef(null);


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
      <div className="hero-floating hero-floating-one" aria-hidden="true" />
      <div className="hero-floating hero-floating-two" aria-hidden="true" />
      <div className="hero-mouse-glow" aria-hidden="true" />
      <div className="hero-overlay">
        <p className="hero-kicker">TEDx MocChau 2026</p>
        <h1 className="hero-title">The journey of becoming who you are.</h1>
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
