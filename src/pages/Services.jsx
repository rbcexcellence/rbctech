import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";

export default function Services() {
  usePageMeta({
    title: "Leistungen - Webdesign, Frontend & SEO | RBC Tech",
    description:
      "Webdesign, Frontend, SEO-Basics und Wartung: RBC Tech liefert moderne, schnelle Websites fur KMU in der Schweiz - klar, sicher und effizient.",
  });

  return (
    <>
      <section className="services-hero">
        <div className="container">
          <div className="hero-icon">
            <i className="fas fa-tools" aria-hidden="true"></i>
          </div>
          <h1>Unsere Dienstleistungen</h1>
          <p>Moderne Websites - klar, schnell und auf Ihr Geschaft ausgerichtet</p>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          <div className="services-grid">
            <div className="service-card">
              <i className="fas fa-palette" aria-hidden="true"></i>
              <h3>Responsive Webdesign</h3>
              <p>
                Modernes Design, das Ihre Marke starkt - optimiert fur Mobile, Tablet und Desktop.
              </p>
            </div>
            <div className="service-card">
              <i className="fas fa-code" aria-hidden="true"></i>
              <h3>Frontend-Entwicklung</h3>
              <p>
                Sauberer HTML/CSS/JavaScript-Code (oder auf Wunsch Framework-basiert) - schnell,
                wartbar und stabil.
              </p>
            </div>
            <div className="service-card">
              <i className="fas fa-search" aria-hidden="true"></i>
              <h3>SEO-Optimierung</h3>
              <p>
                On-Page-SEO-Basics: Seitenstruktur, Meta-Daten, Ladezeit, saubere Uberschriften und
                interne Verlinkung.
              </p>
            </div>
            <div className="service-card">
              <i className="fas fa-tools" aria-hidden="true"></i>
              <h3>Wartung & Support</h3>
              <p>
                Updates, kleine Anpassungen und Qualitats-Checks - damit Ihre Website langfristig
                zuverlassig bleibt.
              </p>
            </div>
            <div className="service-card">
              <i className="fas fa-layer-group" aria-hidden="true"></i>
              <h3>Landingpages & One-Pager</h3>
              <p>
                Fokussierte Seiten fur Kampagnen, Produkte oder Events - mit klaren CTAs und
                sauberem Tracking-Setup nach Bedarf.
              </p>
            </div>
            <div className="service-card">
              <i className="fas fa-gauge-high" aria-hidden="true"></i>
              <h3>Performance-Optimierung</h3>
              <p>
                Bild-Optimierung, Core Web Vitals, reduzierte Ladezeiten und technische
                Feinschliffe.
              </p>
            </div>
          </div>

          <div className="cta-block cta-block--center">
            <h2>Bereit fur einen professionellen Auftritt?</h2>
            <p>
              Schildern Sie kurz Ihr Ziel - wir melden uns mit einer Empfehlung und einem klaren
              nachsten Schritt.
            </p>
            <Link to="/contact" className="btn primary">
              Unverbindlich anfragen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
