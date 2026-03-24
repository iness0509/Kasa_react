import "./style_header.css";
import { NavLink } from "react-router-dom";
import logoKasa from "../../assets/logo_kasa.png";

function Header() {
  return (
    <header className="kasa-header">
      <div className="kasa-logo">
        <img src={logoKasa} alt="Logo Kasa" />
      </div>
      <nav className="kasa-nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "kasa-link kasa-link-active" : "kasa-link"
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "kasa-link kasa-link-active" : "kasa-link"
          }
        >
          A propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;