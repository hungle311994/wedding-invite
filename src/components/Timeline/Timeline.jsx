import { Camera, Utensils } from "lucide-react";
import { RingsIcon } from "../Icons/Icons";
import SectionTitle from "../SectionTitle/SectionTitle";

const Timeline = () => {
  return (
    <section id="events" className="section bg-stone">
      <SectionTitle>Timeline</SectionTitle>
      <div className="timeline-container">
        <div className="timeline-line" />

        <div className="timeline-item">
          <div
            className="timeline-tick"
            style={{ transform: "translateX(-100%)" }}
          />
          <div className="timeline-content" style={{ textAlign: "right" }}>
            <div className="timeline-time">18:00 AM</div>
            <div className="timeline-icon-box">
              <Camera size={28} strokeWidth={0.8} />
            </div>
            <div className="timeline-label">Đón khách & Chụp hình</div>
          </div>
          <div className="timeline-content" />
        </div>

        <div className="timeline-item">
          <div className="timeline-content" />
          <div className="timeline-tick" />
          <div className="timeline-content" style={{ textAlign: "left" }}>
            <div className="timeline-time">18:45 PM</div>
            <div className="timeline-icon-box">
              <RingsIcon />
            </div>
            <div className="timeline-label">Làm lễ cưới</div>
          </div>
        </div>

        <div className="timeline-item" style={{ marginBottom: 0 }}>
          <div
            className="timeline-tick"
            style={{ transform: "translateX(-100%)" }}
          />
          <div className="timeline-content" style={{ textAlign: "right" }}>
            <div className="timeline-time">19:15 PM</div>
            <div className="timeline-icon-box">
              <Utensils size={28} strokeWidth={0.8} />
            </div>
            <div className="timeline-label">Nhập tiệc</div>
          </div>
          <div className="timeline-content" />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
