import "./style_gallery.css";
import Card from "../card/index_card";
import apartments from "../../data/apartments.json";

function Gallery() {
  return (
    <section className="gallery">
      {apartments.map((apartment) => (
        <Card
          key={apartment.id}
          id={apartment.id}  
          title={apartment.title}
          cover={apartment.cover}
        />
      ))}
    </section>
  );
}

export default Gallery;
