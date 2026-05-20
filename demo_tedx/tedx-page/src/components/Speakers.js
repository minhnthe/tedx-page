import mocchauImage from "../Images/484559011_610455605323591_6519561237707008231_n.jpg";
import { motion } from "framer-motion";
import "../styles/Speakers.css";

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};


export default function Speakers() {
  return (
    <>
      <motion.section
        className="featured-speakers-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
        variants={fadeUp}
      >
        <div className="featured-speakers-inner">
          <motion.div className="featured-speakers-head" variants={fadeUp}>
            <p className="featured-speakers-kicker">Gương mặt tiêu biểu</p>
            <h2 className="featured-speakers-title">Nguyễn Việt Dũng</h2>
            <p className="featured-speakers-kicker">Thí sinh tham gia TEDxGreenwich University Hanoi 2025</p>
            <div className="featured-speakers-line" />
          </motion.div>

          <motion.div className="featured-speakers-container" variants={fadeUp}>
            <motion.div className="featured-speakers-image" variants={cardReveal}>
              <img src={mocchauImage} alt="TEDx MocChau Speaker" />
            </motion.div>

            <motion.div className="featured-speakers-content" variants={cardReveal}>
              <p>Bạn Nguyễn Việt Dũng hiện nay là học sinh lớp 11 trường THPT Mộc Lỵ</p>
              <p>Với thành tích xuất sắc bạn đã và đang là học viên ưu tú kiêm trợ giảng và là cộng tác viên chính thức của Trung tâm Anh ngữ Châu Mộc</p>
              <p>Bằng sự tự tin cùng với suy nghĩ dám nghĩ dám làm thì bạn đã tham gia và là một trong những diễn giả TEDx chính thức tại TEDxGreenWich năm 2025</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}