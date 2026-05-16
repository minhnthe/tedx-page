import mocchauImage from "../Images/484559011_610455605323591_6519561237707008231_n.jpg";
import "../styles/Speakers.css";

const speakers = [
  { name: "Speaker 1", img: "https://via.placeholder.com/200" },
  { name: "Speaker 2", img: "https://via.placeholder.com/200" },
  { name: "Speaker 3", img: "https://via.placeholder.com/200" },
];

export default function Speakers() {
  return (
    <>
      <section className="featured-speakers-section">
        <div className="featured-speakers-inner">
          <div className="featured-speakers-head">
            <p className="featured-speakers-kicker">Gương mặt tiêu biểu</p>
            <h2 className="featured-speakers-title">Nguyễn Việt Dũng</h2>
            <p className="featured-speakers-kicker">Thí sinh tham gia TEDxGreenwich University Hanoi 2025</p>
            <div className="featured-speakers-line" />
          </div>

          <div className="featured-speakers-container">
            <div className="featured-speakers-image">
              <img src={mocchauImage} alt="TEDx MocChau Speaker" />
            </div>

            <div className="featured-speakers-content">
              Thông tin về bạn Dũng
            </div>
          </div>
        </div>
      </section>

      <section style={styles.container}>
      <h2>Đại diện trung tâm anh ngữ Mộc Châu</h2>

      <div style={styles.grid}>
        {speakers.map((s, i) => (
          <div key={i} style={styles.card}>
            <img src={s.img} alt="" style={styles.img} />
            <h3>{s.name}</h3>
          </div>
        ))}
      </div>
      </section>
    </>
  );
}

const styles = {
  container: {
    padding: "80px",
    textAlign: "center",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
  },
  card: {
    width: "200px",
  },
  img: {
    width: "100%",
    borderRadius: "10px",
  },
};