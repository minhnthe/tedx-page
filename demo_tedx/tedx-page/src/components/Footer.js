import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-left">© {new Date().getFullYear()} TEDx MocChau</div>
        <div className="footer-right">
          <a href="#about">Về chúng tôi</a>
          <p>Email: tedxmocchau@gmail.com</p>
          <p>Tel: 0396 560 797 (Ms. Thu Thủy)</p>
          <p>Fanpage: https://www.facebook.com/profile.php?id=61563119350218</p>
        </div>
      </div>
    </footer>
  );
}
