import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#050505",
        padding: "12rem 1.5rem",
        textAlign: "center",
        borderTop: "1px solid #1c1917",
      }}
    >
      <Heart
        style={{
          color: "#f43f5e",
          fill: "rgba(244, 63, 94, 0.05)",
          marginBottom: "4rem",
        }}
        size={64}
        strokeWidth={0.5}
      />
      <h2
        style={{
          fontSize: "6rem",
          fontFamily: "serif",
          textTransform: "uppercase",
          color: "white",
          letterSpacing: "-0.02em",
          margin: "0",
          fontWeight: "300",
        }}
      >
        Cảm ơn bạn!
      </h2>
      <div
        style={{
          width: "100px",
          height: "1px",
          backgroundColor: "#292524",
          margin: "4rem auto",
        }}
      />
      <p
        style={{
          color: "#a8a29e",
          fontSize: "1.5rem",
          fontStyle: "italic",
          maxWidth: "44rem",
          margin: "0 auto",
          lineHeight: "1.6",
        }}
      >
        Sự hiện diện của bạn không chỉ là niềm vinh hạnh, mà còn là mảnh ghép
        quý giá nhất cho một ngày cưới vẹn tròn và hạnh phúc.
      </p>
      <div className="footer-names">Thuỳ Giang & Quang Hưng</div>
      <p
        style={{
          letterSpacing: "1em",
          color: "#44403c",
          fontSize: "0.75rem",
          textTransform: "uppercase",
          marginTop: "2rem",
        }}
      >
        03.01.2026
      </p>
    </footer>
  );
};

export default Footer;
