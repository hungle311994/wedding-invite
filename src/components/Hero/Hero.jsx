import { useEffect, useState } from "react";
import Gallery from "../Gallery/Gallery";
import "./Hero.css";

// Import images
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";

const Hero = ({ onScrollToStory }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const images = [
    { src: img1, num: "03" },
    { src: img2, num: "01" },
    { src: img3, num: "27" },
  ];

  // Scroll lock when gallery is open
  useEffect(() => {
    if (activeIndex !== null) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [activeIndex]);

  return (
    <section className="hero">
      <div className="hero-container">
        {/* Save the date */}
        <div className="hero-header-group">
          <div className="hero-header">
            <span className="hero-header__main">save</span>
            <span className="hero-header__script">the</span>
            <span className="hero-header__main">date</span>
          </div>
          <div className="hero-header__date">03.01.27</div>
        </div>

        {/* Images Grid */}
        <div className="hero-grid">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="hero-grid__item"
              onClick={() => setActiveIndex(idx)}
            >
              <img src={img.src} alt={`Wedding ${idx + 1}`} />
              <span className="hero-grid__number">{img.num}</span>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <button className="scroll-btn" onClick={onScrollToStory}>
          <div className="scroll-btn__icon">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </div>
        </button>
      </div>

      {/* Modern Gallery Component */}
      {activeIndex !== null && (
        <Gallery
          images={images}
          initialIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </section>
  );
};

export default Hero;
