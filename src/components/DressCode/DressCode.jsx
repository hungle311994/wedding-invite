import SectionTitle from "../SectionTitle/SectionTitle";

const DressCode = () => {
  return (
    <section id="dress-code" className="section bg-white">
      <SectionTitle>Dress Code</SectionTitle>
      <p
        style={{
          fontSize: "1.5rem",
          fontStyle: "italic",
          maxWidth: "36rem",
          margin: "0 auto",
          color: "#57534e",
          lineHeight: "1.6",
        }}
      >
        "Sự hiện diện của bạn mới là 'dress code' quan trọng nhất mà chúng mình
        mong đợi. Hãy cứ diện bộ cánh nào khiến bạn cảm thấy là chính mình và tự
        tin nhất."
      </p>
    </section>
  );
};

export default DressCode;
