import tedxImage from "../Images/2d7cea4f-23d2-4d5d-a89e-f83c0b00f4a5.png";
import mocchauImage from "../Images/682137723_122097100304437311_6566578720841530717_n.jpg";
import "../styles/About.css";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-block">
        <div className="about-content-left">
          <p className="about-kicker">TEDx là gì</p>
          <h2 className="about-title">TEDx - Nơi lan tỏa ý tưởng</h2>
          <p className="about-text">
            TED là một tổ chức truyền thông đại chúng chuyên đăng tải những bài diễn thuyết mang ý nghĩa tích cực với thông điệp “Ideas worth spreading” - Những ý tưởng đáng lan truyền.
          </p>
          <p className="about-text">
            TEDx là một sự kiện độc lập có tính chất tương tự như TED. TEDx là phiên bản được tổ chức độc lập tại từng địa phương trên toàn cầu. Mỗi sự kiện TEDx mang tinh thần chung của TED, nhưng được “bản địa hóa” - gắn với con người, câu chuyện và những vấn đề rất thật của cộng đồng nơi nó diễn ra.
          </p>
        </div>

        <div className="about-image-wrap">
          <img src={tedxImage} alt="TEDx introduction" className="about-image" />
        </div>
      </div>

      <div className="about-block">
        <div className="about-image-wrap">
          <img src={mocchauImage} alt="TEDx MocChau" className="about-image" />
        </div>

        <div className="about-content-right">
          <p className="about-kicker">TEDx MocChau</p>
          <h2 className="about-title">TEDx MocChau - câu chuyện của vùng cao nguyên xanh</h2>
          <p className="about-text">
            TEDx MocChau là sự kiện độc lập được cấp phép từ TED và được tổ chức bởi Trung tâm Anh Ngữ Châu Mộc vào năm 2026.
          </p>
          <p className="about-text">
            TEDxMocChau hướng tới việc trở thành một sân chơi quốc tế - nơi những ý tưởng từ địa phương có thể vươn ra thế giới, đồng thời mang những góc nhìn toàn cầu đến gần hơn với cộng đồng địa phương. Xây dựng với sứ mệnh trở thành một nền tảng khai phóng tư duy ngay tại Mộc Châu - nơi những ý tưởng có giá trị không chỉ được chia sẻ, mà còn được chuyển hóa thành hành động thực tiễn
          </p>
          <p className="about-text">
            Sự kiện tập trung vào việc trao quyền cho người trẻ phát triển tư duy độc lập, sáng tạo và dám cất tiếng nói; đồng thời kết nối cộng đồng địa phương với tri thức, công nghệ và góc nhìn toàn cầu, nhằm thúc đẩy những thay đổi bền vững cho chính vùng đất mình đang sống.
          </p>
        </div>
      </div>
    </section>
  );
}
