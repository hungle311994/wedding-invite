import { ExternalLink, MapPin } from "lucide-react";
import SectionTitle from "../SectionTitle/SectionTitle";

const Location = () => {
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Gala+Center+415+Hoàng+Văn+Thụ+Phường+2+Tân+Sơn+Hòa+Hồ+Chí+Minh";

  return (
    <section id="location" className="section bg-stone">
      <SectionTitle>Địa điểm</SectionTitle>
      <div style={{ marginBottom: "4rem" }}>
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "#1c1917",
            fontSize: "2.5rem",
            fontFamily: "serif",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
          }}
        >
          Gala Center <ExternalLink size={20} color="#d6d3d1" />
        </a>
        <p
          style={{
            fontSize: "0.875rem",
            letterSpacing: "0.2em",
            color: "#78716c",
            marginTop: "1.5rem",
            textTransform: "uppercase",
          }}
        >
          <MapPin
            size={16}
            style={{ marginRight: "0.5rem", verticalAlign: "middle" }}
          />{" "}
          415 Đ. Hoàng Văn Thụ, Phường 2, Tân Sơn Hòa, Hồ Chí Minh
        </p>
      </div>
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          height: "550px",
          borderRadius: "2rem",
          overflow: "hidden",
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.1)",
          border: "1px solid #f5f5f4",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.215579930438!2d106.66635837583864!3d10.79448355885232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175293679c6563d%3A0xe54e6061327c5950!2sGala%20Center!5e0!3m2!1svi!2s!4v1713430000000!5m2!1svi!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Venue Map"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
