import Banner from "../components/banner/index_banner";
import BannerHome from "../assets/banner.jpg";
import Gallery from "../components/gallery/index_gallery";


function Home() {
  return (
    <>
      <Banner image={BannerHome} text="Chez vous, partout et ailleurs" />
      <Gallery />
    </>
  );
}

export default Home;
