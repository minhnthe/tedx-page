import bg from "../Images/682137723_122097100304437311_6566578720841530717_n.jpg";
import React from "react";
import "../styles/effects.css";

export default function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <img src={bg} alt="logo" className="topbar-logo" />
        <span className="topbar-brand">TEDx MocChau</span>
      </div>

      <div className="topbar-right">
        <a
          className="btn btn-register"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdVcs96XFcuwuPRg6b1KFtf_YBe6WU7cLAmKaZrRlY_9U9-bg/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          Đăng ký
        </a>
        <button className="btn btn-contact">Liên hệ</button>
      </div>
    </header>
  );
}
