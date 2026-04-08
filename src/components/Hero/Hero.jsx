import { ArrowDown, X } from "lucide-react";
import { useState } from "react";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import "./Hero.css";

const Hero = ({ onScrollToStory }) => {
  const [fullScreenImg, setFullScreenImg] = useState(null);

  const images = [
    { src: img1, num: "03" },
    { src: img2, num: "01" },
    { src: img3, num: "27" },
  ];

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

        {/* Images */}
        <div className="hero-grid">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="hero-grid__item"
              onClick={() => setFullScreenImg(img.src)}
            >
              <img src={img.src} alt={`Wedding ${idx + 1}`} />
              <span className="hero-grid__number">{img.num}</span>
            </div>
          ))}
        </div>

        {/* Scroll to story */}
        <button onClick={onScrollToStory} className="scroll-btn">
          <ArrowDown className="scroll-btn__icon" size={36} strokeWidth={0.5} />
        </button>
      </div>

      {/* Fullscreen Modal */}
      {fullScreenImg && (
        <div className="hero-modal" onClick={() => setFullScreenImg(null)}>
          <button className="modal-close">
            <X size={32} color="#1c1917" />
          </button>
          <img src={fullScreenImg} alt="Full screen view" />
        </div>
      )}
    </section>
  );
};

export default Hero;
