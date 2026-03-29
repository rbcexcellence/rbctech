import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const pathname = (location.pathname || "/").toLowerCase();

  const isActive = (paths) => paths.includes(pathname);
  const linkClassName = (paths) => (isActive(paths) ? "active" : "");

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <i className="fas fa-code" aria-hidden="true"></i> RBC Tech
        </div>

        <div className="footer-links">
          <h3>Navigation</h3>
          <ul>
            <li>
              <Link to="/" className={linkClassName(["/", "/index.html"])}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={linkClassName(["/about", "/about.html"])}>
                Über uns
              </Link>
            </li>
            <li>
              <Link to="/services" className={linkClassName(["/services", "/services.html"])}>
                Dienstleistungen
              </Link>
            </li>
            <li>
              <Link to="/contact" className={linkClassName(["/contact", "/contact.html"])}>
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Kontakt</h3>
          <p>E-Mail: info@rbc-tech.ch</p>
          <p>Telefon: +41 78 604 74 99</p>
        </div>
      </div>

      <div className="footer-legal">
        <p>
          &copy; 2026 RBC Tech. Alle Rechte vorbehalten. | <Link to="/impressum">Impressum</Link> |{" "}
          <Link to="/datenschutz">Datenschutz</Link>
        </p>
      </div>
    </footer>
  );
}
