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
              <Link to="/index.html" className={linkClassName(["/", "/index.html"])}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about.html" className={linkClassName(["/about", "/about.html"])}>
                Uber uns
              </Link>
            </li>
            <li>
              <Link to="/services.html" className={linkClassName(["/services", "/services.html"])}>
                Dienstleistungen
              </Link>
            </li>
            <li>
              <Link to="/contact.html" className={linkClassName(["/contact", "/contact.html"])}>
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
          &copy; 2026 RBC Tech. Alle Rechte vorbehalten. | <Link to="/impressum.html">Impressum</Link> |{" "}
          <Link to="/datenschutz.html">Datenschutz</Link>
        </p>
      </div>
    </footer>
  );
}
