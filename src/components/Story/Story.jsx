import { Heart } from "lucide-react";
import { useEffect, useRef } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Story.css";

const Story = () => {
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
      id="story"
      className="section bg-white story-container"
      ref={sectionRef}
    >
      <Heart
        className="heart-icon"
        style={{ color: "#fb7185", marginBottom: "3rem" }}
        size={32}
        strokeWidth={1}
      />

      <SectionTitle>Câu chuyện của chúng mình</SectionTitle>

      <div
        className="story-text"
        style={{
          maxWidth: "42rem",
          margin: "0 auto",
          fontSize: "1.25rem",
          fontStyle: "italic",
          fontWeight: "300",
          lineHeight: "1.8",
          color: "#57534e",
        }}
      >
        <p>
          Sau một khoảng thời gian đủ dài để biết hết tật xấu của nhau mà vẫn
          quyết định không bỏ chạy, chúng mình chính thức quyết định "về chung
          một nhà".
        </p>
        <p style={{ marginTop: "2rem" }}>
          Hành trình sắp tới chắc chắn sẽ có nhiều thú vị. Nhưng trên hết, chúng
          mình rất mong bạn sẽ có mặt để chứng kiến và chung vui trong cột mốc
          đặc biệt này!
        </p>
      </div>
    </section>
  );
};

export default Story;
