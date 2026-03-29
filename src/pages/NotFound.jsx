import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";

export default function NotFound() {
  usePageMeta({
    title: "404 - Seite nicht gefunden | RBC Tech",
    description:
      "Diese Seite existiert nicht (mehr). Zuruck zur Startseite oder kontaktieren Sie RBC Tech fur Fragen.",
    robots: "noindex,follow",
  });

  return (
    <>
      <section className="services-hero">
        <div className="container">
          <div className="hero-icon">
            <i className="fas fa-triangle-exclamation" aria-hidden="true"></i>
          </div>
          <h1>404 - Seite nicht gefunden</h1>
          <p>Die angeforderte Seite existiert nicht (mehr) oder die URL ist falsch.</p>

          <div className="hero-buttons" aria-label="Schnellnavigation">
            <Link to="/" className="btn primary">
              Zur Startseite
            </Link>
            <Link to="/contact" className="btn secondary">
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Weiter geht's hier</h2>
        <div className="features-grid">
          <div className="feature">
            <i className="fas fa-house" aria-hidden="true"></i>
            <h3>Startseite</h3>
            <p>Zur Ubersicht: Leistungen, Vorteile und Vorgehen.</p>
            <div className="cta-block cta-block--center">
              <Link to="/" className="btn primary">
                Start offnen
              </Link>
            </div>
          </div>

          <div className="feature">
            <i className="fas fa-envelope" aria-hidden="true"></i>
            <h3>Kontakt</h3>
            <p>Fragen zur Website oder einem Projekt? Wir melden uns i.d.R. innerhalb 1 Werktag.</p>
            <div className="cta-block cta-block--center">
              <Link to="/contact" className="btn primary">
                Nachricht senden
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
