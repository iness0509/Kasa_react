import "./style_card.css";

function Card({ title, cover }) {
  return (
    <article className="card">
    <img className="card-img" src={cover} alt={title} />
    <h2 className="card-title">{title}</h2>
    </article>
  );
}

export default Card;
