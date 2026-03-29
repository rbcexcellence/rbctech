import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";

export default function Home() {
  usePageMeta({
    title: "RBC Tech - Webdesign & Frontend fur KMU in der Schweiz",
    description:
      "Schnelle, moderne Websites fur KMU in der Schweiz: responsiv, SEO-freundlich und wartungsarm - ohne unnotige Backend-Komplexitat.",
  });

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Websites, die professionell sind - und schnell laden</h1>
          <p>
            RBC Tech entwickelt moderne Websites fur KMU in der Schweiz: responsiv,
            SEO-freundlich und wartungsarm - ohne Backend.
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="btn primary">
              Leistungen ansehen
            </Link>
            <Link to="/contact" className="btn secondary">
              Kostenlose Erstberatung
            </Link>
          </div>

          <div className="trust-badges" aria-label="Vorteile auf einen Blick">
            <span className="badge">
              <i className="fas fa-bolt" aria-hidden="true"></i> Schnelle Ladezeiten
            </span>
            <span className="badge">
              <i className="fas fa-shield-alt" aria-hidden="true"></i> Wartungsarm
            </span>
            <span className="badge">
              <i className="fas fa-clock" aria-hidden="true"></i> Antwort i.d.R. in 1 Werktag
            </span>
          </div>
        </div>
        <div className="hero-image">
          <div className="placeholder-image">
            <i className="fas fa-laptop-code" aria-hidden="true"></i>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Warum RBC Tech?</h2>
        <div className="features-grid">
          <div className="feature">
            <i className="fas fa-rocket" aria-hidden="true"></i>
            <h3>Schnell & performant</h3>
            <p>Sauberer Frontend-Code fur kurze Ladezeiten und eine starke Nutzererfahrung.</p>
          </div>
          <div className="feature">
            <i className="fas fa-mobile-alt" aria-hidden="true"></i>
            <h3>Responsiv</h3>
            <p>Optimiert fur Desktop, Tablet und Mobile - inkl. moderner UI-Details.</p>
          </div>
          <div className="feature">
            <i className="fas fa-search" aria-hidden="true"></i>
            <h3>SEO-Optimiert</h3>
            <p>On-Page-Grundlagen: Struktur, Meta-Daten, Performance und saubere Semantik.</p>
          </div>
        </div>
      </section>

      <section className="features alt">
        <h2>So lauft die Zusammenarbeit ab</h2>
        <div className="features-grid">
          <div className="feature">
            <i className="fas fa-comments" aria-hidden="true"></i>
            <h3>1) Kurzgesprach</h3>
            <p>Wir klaren Ziele, Zielgruppe, Inhalte und Umfang - unkompliziert und klar.</p>
          </div>
          <div className="feature">
            <i className="fas fa-pen-ruler" aria-hidden="true"></i>
            <h3>2) Design & Umsetzung</h3>
            <p>Wireframe/Design, anschliessend Frontend-Umsetzung mit Feedback-Schleifen.</p>
          </div>
          <div className="feature">
            <i className="fas fa-check-circle" aria-hidden="true"></i>
            <h3>3) Go-Live</h3>
            <p>Deployment, technische Checks und Ubergabe - auf Wunsch inkl. Wartung.</p>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Referenzen</h2>
        <div className="features-grid">
          <div className="feature">
            <i className="fas fa-folder-open" aria-hidden="true"></i>
            <h3>Beispiele auf Anfrage</h3>
            <p>
              Aus Diskretionsgrunden zeigen wir Referenzen und Beispiele gerne im personlichen
              Gesprach oder per E-Mail.
            </p>
          </div>
          <div className="feature">
            <i className="fas fa-list-check" aria-hidden="true"></i>
            <h3>Was Sie bekommen</h3>
            <p>
              Saubere Struktur, responsive Umsetzung, Performance-Basics und eine klare Ubergabe -
              damit Sie schnell live gehen konnen.
            </p>
          </div>
          <div className="feature">
            <i className="fas fa-handshake" aria-hidden="true"></i>
            <h3>Transparenter Ablauf</h3>
            <p>
              Kurze Feedback-Schleifen, klare nachste Schritte und Kommunikation ohne Umwege.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
