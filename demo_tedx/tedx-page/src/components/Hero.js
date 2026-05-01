import bg from "../Images/2d7cea4f-23d2-4d5d-a89e-f83c0b00f4a5.png";

export default function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles}>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    height: "100vh",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    height: "100%",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: "60px",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "20px",
    marginBottom: "20px",
  },
  button: {
    padding: "12px 24px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};