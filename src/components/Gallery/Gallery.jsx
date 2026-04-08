import { useCallback, useEffect, useState } from "react";
import "./Gallery.css";

const Gallery = ({ images, initialIndex, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [animationState, setAnimationState] = useState("entering");
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance (in pixels)
  const minSwipeDistance = 50;

  useEffect(() => {
    // Trigger scale-in after mount
    const timer = setTimeout(() => setAnimationState("active"), 10);

    // Block scroll
    document.body.classList.add("modal-open");
    document.documentElement.classList.add("modal-open");

    return () => {
      clearTimeout(timer);
      document.body.classList.remove("modal-open");
      document.documentElement.classList.remove("modal-open");
    };
  }, []);

  const handleClose = useCallback(() => {
    setAnimationState("leaving");
    setTimeout(onClose, 500); // Updated to 500ms to match CSS
  }, [onClose]);

  const handleNext = useCallback(
    (e) => {
      e?.stopPropagation();
      setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    },
    [images.length],
  );

  // Swipe logic
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const handlePrev = useCallback(
    (e) => {
      e?.stopPropagation();
      setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    },
    [images.length],
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleClose, handleNext, handlePrev]);

  return (
    <div className={`hero-gallery ${animationState}`} onClick={handleClose}>
      <div className="gallery-content">
        {/* Top Info */}
        <div className="gallery-header">
          <div className="gallery-counter">
            {activeIndex + 1} / {images.length}
          </div>
          <button className="gallery-close" onClick={handleClose}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Main Content */}
        <div
          className="gallery-main"
          onClick={(e) => e.stopPropagation()}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <button className="gallery-nav prev" onClick={handlePrev}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="gallery-image-container">
            <img
              key={activeIndex} // Force re-animation on image change
              src={images[activeIndex].src}
              alt="Zoomed"
            />
          </div>

          <button className="gallery-nav next" onClick={handleNext}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Thumbnail Strip */}
        <div
          className="gallery-thumbnails"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="thumb-container">
            {images.map((img, idx) => (
              <div
                key={idx}
                className={`thumb-item ${idx === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(idx)}
              >
                <img src={img.src} alt={`Thumb ${idx}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
