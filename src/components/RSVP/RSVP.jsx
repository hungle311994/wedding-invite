import { Check } from "lucide-react";
import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

const RSVP = () => {
  const [rsvpStatus, setRsvpStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    guestCount: "1",
    attending: "yes",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRsvpStatus("success");
  };

  return (
    <section
      id="rsvp"
      style={{ backgroundColor: "#0c0a09", padding: "8rem 1.5rem" }}
    >
      <SectionTitle light>Gửi Lời Hồi Đáp</SectionTitle>

      {rsvpStatus === "success" ? (
        <div
          style={{
            backgroundColor: "#1c1917",
            border: "1px solid #292524",
            padding: "5rem 2rem",
            borderRadius: "3rem",
            textAlign: "center",
            color: "white",
            maxWidth: "38rem",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              backgroundColor: "#f43f5e",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 3rem",
              boxShadow: "0 0 30px rgba(244, 63, 94, 0.3)",
            }}
          >
            <Check color="white" size={40} />
          </div>
          <h3
            style={{
              fontSize: "2.5rem",
              fontFamily: "serif",
              marginBottom: "1.5rem",
              fontWeight: "300",
            }}
          >
            Cảm ơn bạn!
          </h3>
          <p
            style={{
              fontStyle: "italic",
              color: "#a8a29e",
              marginBottom: "3.5rem",
              fontSize: "1.125rem",
            }}
          >
            Hẹn gặp bạn tại tiệc cưới của chúng mình!
          </p>
          <button
            onClick={() => setRsvpStatus(null)}
            style={{
              background: "none",
              border: "none",
              color: "#57534e",
              textDecoration: "underline",
              cursor: "pointer",
              textTransform: "uppercase",
              fontSize: "0.75rem",
              letterSpacing: "0.3em",
            }}
          >
            Gửi phản hồi khác
          </button>
        </div>
      ) : (
        <form className="rsvp-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="input-label">Họ tên của bạn *</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="input-field"
              placeholder="NHẬP TÊN CỦA BẠN..."
            />
          </div>

          <div className="input-group">
            <label className="input-label">Xác nhận tham dự *</label>
            <div className="attendance-grid">
              <div
                className={`attendance-btn ${formData.attending === "yes" ? "active" : ""}`}
                onClick={() => setFormData({ ...formData, attending: "yes" })}
              >
                CHẮC CHẮN 🎉
              </div>
              <div
                className={`attendance-btn ${formData.attending === "no" ? "active" : ""}`}
                onClick={() => setFormData({ ...formData, attending: "no" })}
              >
                TIẾC QUÁ 💌
              </div>
            </div>
          </div>

          {formData.attending === "yes" && (
            <div className="input-group">
              <label className="input-label">Số lượng người *</label>
              <select
                name="guestCount"
                value={formData.guestCount}
                onChange={handleInputChange}
                className="input-field"
                style={{ cursor: "pointer" }}
              >
                <option value="1">1 NGƯỜI</option>
                <option value="2">2 NGƯỜI</option>
                <option value="3">3 NGƯỜI</option>
                <option value="4">4 NGƯỜI TRỞ LÊN</option>
              </select>
            </div>
          )}

          <div className="input-group">
            <label className="input-label">Lời nhắn gửi</label>
            <textarea
              name="message"
              rows="2"
              value={formData.message}
              onChange={handleInputChange}
              className="input-field"
              style={{ resize: "none" }}
              placeholder="NHẮN NHỦ YÊU THƯƠNG..."
            />
          </div>

          <button type="submit" className="submit-btn uppercase">
            Xác nhận
          </button>
        </form>
      )}
    </section>
  );
};

export default RSVP;
