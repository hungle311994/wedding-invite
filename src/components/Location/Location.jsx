import { useEffect, useRef } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Location.css";

const Location = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Gala+Center+415+Hoàng+Văn+Thụ+Phường+2+Tân+Sơn+Hòa+Hồ+Chí+Minh";

  return (
    <section
      id="location"
      className="section bg-stone location-container"
      ref={sectionRef}
    >
      <SectionTitle>Địa điểm</SectionTitle>

      {/* Venue name and address */}
      <div className="location-info">
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <h3
            style={{
              fontFamily: "DMSerifDisplay",
              fontSize: "2.5rem",
              color: "#1c1917",
              marginBottom: "1rem",
              fontWeight: "normal",
            }}
          >
            GALA CENTER
          </h3>
        </a>
        <p
          style={{
            maxWidth: "32rem",
            margin: "0 auto",
            fontSize: "1.125rem",
            fontStyle: "italic",
            fontWeight: "300",
            lineHeight: "1.6",
            color: "#57534e",
          }}
        >
          415 Đ. Hoàng Văn Thụ, Tân Sơn Hòa, Hồ Chí Minh
        </p>
      </div>

      {/* Map */}
      <div className="location-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1586407618565!2d106.6598348!3d10.799159099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175293124dd4ed9%3A0x539680a498dd4d26!2zVHJ1bmcgdMOibSBI4buZaSBuZ2jhu4sgJiBUaeG7h2MgY8aw4bubaSBHYWxh!5e0!3m2!1sen!2s!4v1775631674711!5m2!1sen!2s"
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
