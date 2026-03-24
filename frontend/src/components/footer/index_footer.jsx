import "./style_footer.css";
import logoWhite from "../../assets/logo_white.png";

function Footer() {
  return (
    <footer className="kasa-footer">
      <img className="logo" src={logoWhite} alt="Logo Kasa" />
      <p className="footer-content">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;