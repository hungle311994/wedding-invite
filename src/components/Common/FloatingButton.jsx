import "./FloatingButton.css";

const FloatingButton = ({
  onClick,
  icon,
  children,
  className = "",
  isVisible = true,
  isActive = false,
  ariaLabel = "button",
}) => {
  return (
    <button
      className={`floating-btn ${className} ${!isVisible ? "hidden" : ""} ${isActive ? "active" : ""}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon || children}
    </button>
  );
};

export default FloatingButton;
