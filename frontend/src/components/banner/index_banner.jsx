import "./style_banner.css";

function Banner({ image, text, className = ""}) {
  return (
    <section className={`kasa-banner ${className}`}>
      <img className="kasa-banner-img" src={image} alt={text} />
      <p className="kasa-banner-text">{text}</p>
    </section>
  );
}

export default Banner;
