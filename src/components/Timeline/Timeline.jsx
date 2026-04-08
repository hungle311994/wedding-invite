import { Camera, Utensils } from "lucide-react";
import { useEffect, useRef } from "react";
import { RingsIcon } from "../Icons/Icons";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Timeline.css";

const events = [
  {
    time: "18:00",
    label: "Welcome Guests",
    sub: "Đón khách & Chụp hình",
    icon: <Camera size={24} strokeWidth={1} />,
  },
  {
    time: "18:45",
    label: "Wedding Ceremony",
    sub: "Làm lễ thành hôn",
    icon: <RingsIcon />,
  },
  {
    time: "19:15",
    label: "Party",
    sub: "Khai tiệc & Chúc mừng",
    icon: <Utensils size={24} strokeWidth={1} />,
  },
];

const Timeline = () => {
  const nodesRef = useRef([]);
  const mainSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
          }
        });
      },
      { threshold: 0.1 },
    );

    // Observe nodes
    nodesRef.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    // Observe main section for title reveal
    if (mainSectionRef.current) {
      observer.observe(mainSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="events"
      className="section bg-stone timeline-section"
      ref={mainSectionRef}
    >
      <SectionTitle>Timeline</SectionTitle>

      <div className="timeline-wrapper">
        <div className="timeline-track" />

        {events.map((event, index) => (
          <div
            key={index}
            className="timeline-node"
            ref={(el) => (nodesRef.current[index] = el)}
          >
            <div className="timeline-info left">
              {index % 2 === 0 && (
                <div className="node-content">
                  <span className="node-time">{event.time}</span>
                  <h3 className="node-label">{event.label}</h3>
                  <p className="node-sub">{event.sub}</p>
                </div>
              )}
            </div>

            <div className="timeline-dot">
              <div className="dot-icon">{event.icon}</div>
            </div>

            <div className="timeline-info right">
              {index % 2 !== 0 && (
                <div className="node-content">
                  <span className="node-time">{event.time}</span>
                  <h3 className="node-label">{event.label}</h3>
                  <p className="node-sub">{event.sub}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
