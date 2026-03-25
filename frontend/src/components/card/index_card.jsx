import { Link } from "react-router-dom";
import "./style_card.css";

function Card({ id, title, cover }) {
  return (
    <Link to={`/apartment/${id}`} className="card">
      <article className="card">
        <img className="card-img" src={cover} alt={title} />
        <h2 className="card-title">{title}</h2>
      </article>
    </Link>
  );
}

export default Card;
