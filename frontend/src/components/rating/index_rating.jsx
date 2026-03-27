import "./style_rating.css";

function Rating({ value, max = 5 }) {
  return (
    <div className="rating">
      {Array.from({ length: max }).map((_, index) => (
        <i
          key={index}
          className={
            index < value
              ? "fa-solid fa-star rating-star rating-star-filled"
              : "fa-solid fa-star rating-star"
          }
        />
      ))}
    </div>
  );
}

export default Rating;
