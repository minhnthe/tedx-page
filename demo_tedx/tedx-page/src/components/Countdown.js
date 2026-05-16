import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/Countdown.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const timelineItem = {
  hidden: { opacity: 0, y: 48 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.08,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const timelineSteps = [
  {
    step: "01",
    title: "Gửi ý tưởng",
    description:
      "Đây là vòng chấm điểm ý tưởng của thí sinh dưới dạng bài viết tiếng Việt và tiếng Anh. Thí sinh điền form đăng ký trước ngày 25/05/2026. Ngay sau khi nhận được ý tưởng BTC sẽ xác nhận thông tin tham gia. 01/06/2026: Công bố Top 50 thí sinh có ý tưởng tốt nhất sẽ vào Vòng 2.",
    accent: "#b785ff",
    startDate: new Date("2026-05-05"),
    endDate: new Date("2026-05-25"),
  },
  {
    step: "02",
    title: "Quay video thuyết trình tại nhà",
    description:
      "Đây là vòng chấm điểm năng lực trình bày ý tưởng của thí sinh bằng khả năng thuyết trình. Thí sinh sẽ gửi video ghi hình bài nói cá nhân về cho BTC .Ban giám khảo sẽ tiến hành chấm bài nói và chọn ra 30 thí sinh có phần thể hiện tốt nhất. Danh sách Top 30 sẽ được công bố vào ngày 23/06/2026",
    accent: "#c89cff",
    startDate: new Date("2026-06-02"),
    endDate: new Date("2026-06-22"),
  },
  {
    step: "03",
    title: "Vòng loại sân khấu",
    description:
      "Đây là vòng đánh giá khả năng diễn thuyết trên sân khấu của các thí sinh. Top 30 thí sinh có phần thể hiện xuất sắc nhất qua video sẽ tham gia vòng bình chọn “Diễn giả được yêu thích nhất” trên fanpage TEDx MocChau. BTC sẽ đăng tải các video của Top 30 để lấy bình chọn online. Top 30 thí sinh xuất sắc nhất Vòng 2 sẽ diễn thuyết trực tiếp trên sân khấu trước hội đồng Ban giám khảo.",
    accent: "#e1a7c4",
    startDate: new Date("2026-06-24"),
    endDate: new Date("2026-08-03"),
  },
  {
    step: "04",
    title: "On stage",
    description:
      "Top 15 thí sinh có điểm cao nhất Vòng 3 chính thức trở thành diễn giả TEDx và tham gia thuyết trình trực tiếp trên sân khấu TEDx MocChau và sẽ được ghi hình trực tiếp sau đó gửi về TED để đăng tải lên kênh YouTube chính thức TEDx Talks với hơn 40 triệu người theo dõi toàn cầu. Profile của 15 diễn giả cũng sẽ được đăng tải lên trang sự kiện của TEDx MocChau",
    accent: "#ffb8c2",
    startDate: new Date("2026-08-04"),
    endDate: new Date("2026-08-04"),
  },
];

export default function Countdown() {
  const [timeRemaining, setTimeRemaining] = useState({});
  const [expanded, setExpanded] = useState({});

  const toggleDescription = (idx) => {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(() => {
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    return `${day}/${month}`;
  };

  const calculateTimeRemaining = () => {
    const now = new Date();
    const remaining = {};

    timelineSteps.forEach((step, index) => {
      let status = "Chưa bắt đầu";
      let days = 0,
        hours = 0,
        minutes = 0,
        seconds = 0;

      if (now > step.endDate) {
        status = "Đã kết thúc";
      } else if (now >= step.startDate) {
        status = "Đang diễn ra";
        const diff = step.endDate - now;
        days = Math.floor(diff / (1000 * 60 * 60 * 24));
        hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((diff % (1000 * 60)) / 1000);
      }

      remaining[index] = {
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
        status,
        startDate: formatDate(step.startDate),
        endDate: formatDate(step.endDate),
      };
    });

    setTimeRemaining(remaining);
  };

  calculateTimeRemaining();
  const timer = setInterval(calculateTimeRemaining, 1000);
  return () => clearInterval(timer);
}, []);

  return (
    <section className="timeline-section">
      <div className="timeline-inner">
        <motion.div
          className="timeline-head"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="timeline-title">Timeline TEDx MocChau</h2>
        </motion.div>

        <div className="timeline-grid">
          {timelineSteps.map((step, index) => (
            <motion.div
              className="timeline-item"
              key={step.title}
              style={{ "--accent": step.accent }}
              custom={index}
              variants={timelineItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <div className="timeline-circle">
                <span className="timeline-label">{step.step
          }</span>
                <span className="timeline-dot" />
              </div>

              <div className="timeline-content">
                <h3 className="timeline-step">
                  <button
                    type="button"
                    className="timeline-step-btn"
                    onClick={() => toggleDescription(index)}
                    aria-expanded={!!expanded[index]}
                  >
                    {step.title}
                  </button>
                </h3>
                <p
                  className={"timeline-desc " + (expanded[index] ? "open" : "")}
                  aria-hidden={!expanded[index]}
                >
                  {step.description}
                </p>
                <div className="timeline-time">
                  <div className="timeline-date-range">
                    <span>{timeRemaining[index]?.startDate || "--/--"}</span>
                    <span>-</span>
                    <span>{timeRemaining[index]?.endDate || "--/--"}</span>
                  </div>
                  <div className="timeline-countdown">
                    <div className="countdown-block">
                      <div className="countdown-number">{timeRemaining[index]?.days || "00"}</div>
                      <div className="countdown-label">NGÀY</div>
                    </div>
                    <div className="countdown-block">
                      <div className="countdown-number">{timeRemaining[index]?.hours || "00"}</div>
                      <div className="countdown-label">GIỜ</div>
                    </div>
                    <div className="countdown-block">
                      <div className="countdown-number">{timeRemaining[index]?.minutes || "00"}</div>
                      <div className="countdown-label">PHÚT</div>
                    </div>
                    <div className="countdown-block">
                      <div className="countdown-number">{timeRemaining[index]?.seconds || "00"}</div>
                      <div className="countdown-label">GIÂY</div>
                    </div>
                  </div>
                  <span
                    className={`timeline-status ${
                      timeRemaining[index]?.status === "Đang diễn ra"
                        ? "status-live"
                        : timeRemaining[index]?.status === "Đã kết thúc"
                        ? "status-ended"
                        : "status-pending"
                    }`}
                  >
                    {timeRemaining[index]?.status || "Chưa bắt đầu"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}