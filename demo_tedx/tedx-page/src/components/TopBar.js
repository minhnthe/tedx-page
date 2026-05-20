import bg from "../Images/682137723_122097100304437311_6566578720841530717_n.jpg";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/effects.css";

export default function TopBar() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    if (!isContactOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsContactOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isContactOpen]);

  useEffect(() => {
    if (!isContactOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isContactOpen]);

  return (
    <>
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
          <button
            type="button"
            className="btn btn-contact"
            onClick={() => setIsContactOpen(true)}
          >
            Liên hệ
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isContactOpen && (
          <motion.div
            className="contact-modal-backdrop"
            role="presentation"
            onClick={() => setIsContactOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <motion.div
              className="contact-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-modal-title"
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, y: 24, scale: 0.96, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 18, scale: 0.98, filter: "blur(4px)" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                className="contact-modal-close"
                aria-label="Đóng"
                onClick={() => setIsContactOpen(false)}
              >
                ×
              </button>
              <div className="contact-modal-layout">
                <aside className="contact-modal-hero">
                  <p className="contact-modal-kicker">TEDx MocChau 2026</p>
                  <h2 id="contact-modal-title" className="contact-modal-title">
                    Kết nối với ban tổ chức
                  </h2>
                  <p className="contact-modal-text">
                    Gửi câu hỏi, hợp tác truyền thông hoặc hỗ trợ sự kiện. Chúng
                    tôi phản hồi qua email, điện thoại và fanpage.
                  </p>

                  <div className="contact-modal-badge-row">
                    <span className="contact-modal-badge">Fast response</span>
                    <span className="contact-modal-badge">Official contact</span>
                  </div>

                  <div className="contact-modal-quote">
                    <span>Roots guide you - Roads shape you</span>
                  </div>
                </aside>

                <section className="contact-modal-panel">
                  <div className="contact-modal-list">
                    <a
                      className="contact-modal-item"
                      href="mailto:tedxmocchau@gmail.com"
                    >
                      <span className="contact-modal-label">Email</span>
                      <strong>tedxmocchau@gmail.com</strong>
                    </a>
                    <a className="contact-modal-item" href="tel:0396560797">
                      <span className="contact-modal-label">Hotline</span>
                      <strong>0396 560 797</strong>
                      <span className="contact-modal-subtext">Ms. Thu Thủy</span>
                    </a>
                    <a
                      className="contact-modal-item"
                      href="https://www.facebook.com/profile.php?id=61563119350218"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="contact-modal-label">Fanpage</span>
                      <strong>TEDx MocChau</strong>
                      <span className="contact-modal-subtext">
                        Nhận tin mới và cập nhật sự kiện
                      </span>
                    </a>
                  </div>

                  <div className="contact-modal-actions">
                    <a
                      className="contact-modal-action primary"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdVcs96XFcuwuPRg6b1KFtf_YBe6WU7cLAmKaZrRlY_9U9-bg/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Đăng ký ngay
                    </a>
                    <button
                      type="button"
                      className="contact-modal-action secondary"
                      onClick={() => setIsContactOpen(false)}
                    >
                      Đóng
                    </button>
                  </div>
                </section>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
