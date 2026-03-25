import { useParams } from "react-router-dom";
import apartments from "../data/apartments.json";
import Slider from "../components/slider/index_slider";

function Apartment() {
  const { id } = useParams();
  const apartment = apartments.find((item) => item.id === id);

  if (!apartment) {
    return <p>Logement introuvable</p>;
  }

  return (
    <>
      <div className="apartment-page">
        <Slider pictures={apartment.pictures} />
        <h1 className="apartment-title">{apartment.title}</h1>
        <p className="apartment-location">{apartment.location}</p>

      </div>
    </>
  );
}

export default Apartment;
