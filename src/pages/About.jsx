import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";

export default function About() {
  usePageMeta({
    title: "Uber RBC Tech - Webdesign & Frontend Schweiz",
    description:
      "RBC Tech entwickelt moderne, performante Websites fur KMU in der Schweiz. Klarer Prozess, schnelle Umsetzung, langfristig wartbar.",
  });

  return (
    <>
      <section className="about-hero">
        <div className="container">
          <div className="hero-icon">
            <i className="fas fa-users" aria-hidden="true"></i>
          </div>
          <h1>Uber RBC Tech</h1>
          <p>Frontend-Websites, die Marken starken und Anfragen generieren</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-text">
            <h2>Unsere Mission</h2>
            <p>
              Wir helfen kleinen und mittleren Unternehmen dabei, online professionell aufzutreten -
              mit schnellen, modernen und wartungsarmen Websites. Statt unnotiger Komplexitat
              setzen wir auf klare Inhalte, saubere Technik und einen strukturierten Prozess.
            </p>

            <h2>Wofur wir stehen</h2>
            <p>
              Eine gute Website ist mehr als "schon". Sie muss verstandlich sein, Vertrauen
              aufbauen und auf allen Geraten funktionieren. Darum kombinieren wir Design-Sorgfalt
              mit technischer Qualitat und Fokus auf Performance.
            </p>

            <h2>Warum wahlen Sie uns?</h2>
            <div className="benefits-grid">
              <div className="benefit">
                <i className="fas fa-lightbulb" aria-hidden="true"></i>
                <h3>Klar & modern</h3>
                <p>
                  Modernes Design, saubere Struktur und verstandliche Inhalte - ohne
                  Buzzword-Overload.
                </p>
              </div>
              <div className="benefit">
                <i className="fas fa-users" aria-hidden="true"></i>
                <h3>Partnerschaftlich</h3>
                <p>
                  Kurze Wege, transparente Entscheidungen und Feedback-Schleifen, die wirklich
                  helfen.
                </p>
              </div>
              <div className="benefit">
                <i className="fas fa-clock" aria-hidden="true"></i>
                <h3>Effizient umgesetzt</h3>
                <p>Schlanke Umsetzung, schnelle Ladezeiten und termingerechte Lieferung.</p>
              </div>
            </div>

            <h2>Unser Versprechen</h2>
            <p>
              Sie erhalten eine Website, die auf aktuellen Standards basiert, auf Mobilgeraten
              uberzeugt und Ihnen die Pflege erleichtert. Auf Wunsch unterstutzen wir auch nach dem
              Go-Live mit Updates und Optimierungen.
            </p>

            <div className="cta-block">
              <Link to="/contact" className="btn primary">
                Projekt unverbindlich anfragen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
