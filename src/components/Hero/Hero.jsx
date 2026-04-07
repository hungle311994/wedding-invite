import { ArrowDown } from "lucide-react";

const Hero = ({ onScrollToStory }) => {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-content">
        <div className="save-date-badge">
          <span>Save</span>
          <span> The </span>
          <span>Date</span>
        </div>
        <h1 className="hero-date">03.01.2026</h1>
        <button onClick={onScrollToStory} className="scroll-btn">
          <ArrowDown size={36} strokeWidth={0.5} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
