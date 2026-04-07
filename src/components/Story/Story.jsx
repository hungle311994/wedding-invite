import { Heart } from "lucide-react";
import SectionTitle from "../SectionTitle/SectionTitle";

const Story = () => {
  return (
    <section id="story" className="section bg-white">
      <Heart
        style={{ color: "#fb7185", marginBottom: "3rem" }}
        size={32}
        strokeWidth={1}
      />
      <SectionTitle>Câu chuyện của chúng mình</SectionTitle>
      <div
        style={{
          maxWidth: "42rem",
          margin: "0 auto",
          fontSize: "1.25rem",
          fontStyle: "italic",
          lineHeight: "1.8",
          color: "#57534e",
          fontWeight: "300",
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
