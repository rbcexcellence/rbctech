import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";

export default function Impressum() {
  usePageMeta({
    title: "Impressum | RBC Tech",
    description: "Impressum und rechtliche Angaben von RBC Tech (Schweiz).",
  });

  return (
    <>
      <section className="legal-hero">
        <div className="container">
          <h1>Impressum</h1>
          <p>Rechtliche Informationen gemäss schweizerischem Recht</p>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <div className="legal-text">
            <h2>Kontakt & Anbieter</h2>
            <p>
              <strong>RBC Tech</strong>
              <br />
              8400 Winterthur
              <br />
              Schweiz
            </p>

            <h2>Kontakt</h2>
            <p>
              <strong>E-Mail:</strong> info@rbc-tech.ch
              <br />
              <strong>Telefon:</strong> +41 78 604 74 99
              <br />
              <strong>Website:</strong> www.rbc-tech.ch
            </p>

            <h2>Vertretungsberechtigte Person</h2>
            <p>
              <strong>Inhaber / Geschäftsführung:</strong> Riart Çekaj
            </p>

            <h2>Hinweis</h2>
            <p>
              Die Angaben auf dieser Seite dienen der Kontaktaufnahme und der Erfüllung gesetzlicher
              Informationspflichten nach anwendbarem Recht (insbesondere schweizerischem Recht).
            </p>

            <h2>Haftungsausschluss</h2>
            <h3>Haftung für Inhalte</h3>
            <p>
              Die Inhalte dieser Website werden mit Sorgfalt erstellt. Dennoch übernehmen wir keine
              Gewähr für Richtigkeit, Vollständigkeit und Aktualität. Haftungsanspruche gegen RBC
              Tech wegen Schaden materieller oder immaterieller Art, die aus dem Zugriff oder der
              Nutzung bzw. Nichtnutzung der veröffentlichten Informationen entstanden sind, werden -
              soweit gesetzlich zulässig - ausgeschlossen.
            </p>

            <h3>Haftung für Links</h3>
            <p>
              Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres
              Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt.
              Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers.
            </p>

            <h3>Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem schweizerischen Urheberrecht. Die Vervielfaltigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechtes
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
              Gebrauch gestattet.
            </p>

            <h3>Datenschutz</h3>
            <p>
              Informationen zur Bearbeitung personenbezogener Daten finden Sie in unserer{" "}
              <Link to="/datenschutz">Datenschutzerklärung</Link>.
            </p>

            <p>
              <em>Stand: Februar 2026</em>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
