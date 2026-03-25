import "./style_chevron.css";

function Chevron({ direction = "down", className = "", rotated = false }) {
  return (
    <i
      className={`fa-solid fa-chevron-${direction} chevron-icon ${
        rotated ? "chevron-rotated" : ""
      } ${className}`}
    />
  );
}

export default Chevron;