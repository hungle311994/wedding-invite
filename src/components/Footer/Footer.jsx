import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#050505",
        borderTop: "1px solid #1c1917",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Heart
        className="heart-icon"
        style={{
          color: "#f43f5e",
          fill: "rgba(244, 63, 94, 0.05)",
          marginBottom: "4rem",
        }}
        size={64}
        strokeWidth={1}
      />
      <h2
        style={{
          margin: "0",
          fontSize: "6rem",
          fontfamily: "DMSerifDisplay",
          fontWeight: "300",
          textTransform: "uppercase",
          color: "white",
          letterSpacing: "-0.02em",
        }}
      >
        Cảm ơn bạn
      </h2>
      <div
        style={{
          width: "100px",
          height: "1px",
          backgroundColor: "#292524",
          margin: "4rem auto",
        }}
      />

      <div className="footer-names">Giang & Hưng</div>
      <p
        style={{
          marginTop: "1rem",
          fontSize: "1.5rem",
          textTransform: "uppercase",
          color: "#44403c",
          letterSpacing: "0.5em",
        }}
      >
        03.01.2026
      </p>
    </footer>
  );
};

export default Footer;
