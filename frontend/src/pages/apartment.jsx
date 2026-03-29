import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Slider from "../components/slider/index_slider";
import Tag from "../components/tag/index_tag";
import Host from "../components/host/index_host";
import Rating from "../components/rating/index_rating";
import Collapse from "../components/collapse/index_collapse";
import { useFetch } from "../data/usefetch";
import "./apartment.css";

const API_BASE_URL = "http://localhost:8080/api";

function Apartment() {
  const { id } = useParams();
  const navigate = useNavigate();

  // on fetch directement /api/properties/:id
  const {
    data: apartment,
    loading,
    error,
  } = useFetch(`${API_BASE_URL}/properties/${id}`);

  useEffect(() => {
    // si erreur (404, 500, réseau...), on redirige vers la 404
    if (error) {
      navigate("/404", { replace: true });
    }
  }, [error, navigate]);

  if (loading) return <p>Chargement...</p>;
  if (!apartment) return null; 

  return (
    <main className="apartment-container">
      <Slider pictures={apartment.pictures} />
      <section className="apartment-header">
        <div className="apartment-info">
          <h1>{apartment.title}</h1>
          <p>{apartment.location}</p>
          <Tag tags={apartment.tags} />
        </div>
        <div className="apartment-aside">
          <Host
            name={apartment.host.name}
            picture={apartment.host.picture}
          />
          <Rating value={Number(apartment.rating)} />
        </div>
      </section>
      <section className="apartment-details">
        <Collapse title="Description">
          <p>{apartment.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul>
            {apartment.equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </section>
    </main>
  );
}

export default Apartment;