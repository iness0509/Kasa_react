import { useParams } from "react-router-dom";
import apartments from "../data/apartments.json";
import Slider from "../components/slider/index_slider";
import Tag from "../components/tag/index_tag";
import Host from "../components/host/index_host";
import Rating from "../components/rating/index_rating";
import Collapse from "../components/collapse/index_collapse";
import "./apartment.css";

function Apartment() {
  const { id } = useParams();
  const apartment = apartments.find((item) => item.id === id);

  if (!apartment) {
    return <p>Logement introuvable</p>;
  }

  return (
    <>
      <main className="apartment-container">
        <Slider pictures={apartment.pictures} />
        <section className="apartment-header">
          <div className="apartment-info">
            <h1>{apartment.title}</h1>
            <p>{apartment.location}</p>
            <Tag tags={apartment.tags} />
          </div>
          <div className="apartment-aside">
            <Host name={apartment.host.name} picture={apartment.host.picture} />
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
    </>
  );
}

export default Apartment;
