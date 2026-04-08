import { Heart } from "lucide-react";
import footerBg from "../../assets/images/img_layout_footer.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div
        className="footer-bg"
        style={{ backgroundImage: `url(${footerBg})` }}
      />
      <div className="footer-overlay" />

      <div className="footer-content">
        <Heart
          className="heart-icon heart-icon-footer"
          size={64}
          strokeWidth={1}
        />
        <h2 className="footer-title">Thank you</h2>
        <div className="footer-divider" />

        <div className="footer-names">Giang & Hưng</div>
        <p className="footer-date">03.01.2027</p>
      </div>
    </footer>
  );
};

export default Footer;
