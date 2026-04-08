import { useEffect, useRef } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./DressCode.css";

const DressCode = () => {
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

  return (
    <section
      id="dress-code"
      className="section bg-white dress-code-container"
      ref={sectionRef}
    >
      <SectionTitle>Dress Code</SectionTitle>
      <div className="dress-code-content">
        <p>
          Sự hiện diện của bạn mới là "dress code" quan trọng nhất mà chúng mình
          mong đợi. Hãy cứ diện bộ cánh nào khiến bạn cảm thấy tự tin nhất nhé.
        </p>
      </div>
    </section>
  );
};

export default DressCode;
