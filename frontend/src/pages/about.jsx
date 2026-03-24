import Banner from "../components/banner/index_banner";
import BannerAbout from "../assets/banner-about.jpg";

function About() {
  return (
    <>
      <Banner image={BannerAbout} text="" className="banner-about" />
    </>
  );
}

export default About;
