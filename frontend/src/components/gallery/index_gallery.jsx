import "./style_gallery.css";
import Card from "../card/index_card";
import { useFetch } from "../../data/usefetch";

const API_BASE_URL = "http://localhost:8080/api";

function Gallery() {
  const {
    data: apartments,
    loading,
    error,
  } = useFetch(`${API_BASE_URL}/properties`);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;

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
