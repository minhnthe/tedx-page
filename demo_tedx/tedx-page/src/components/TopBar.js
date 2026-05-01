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
        <button className="btn btn-register">Đăng ký</button>
        <button className="btn btn-contact">Liên hệ</button>
      </div>
    </header>
  );
}
