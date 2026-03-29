import usePageMeta from "../hooks/usePageMeta";

export default function Datenschutz() {
  usePageMeta({
    title: "Datenschutz | RBC Tech",
    description:
      "Datenschutzerklarung von RBC Tech. Informationen zur Bearbeitung personenbezogener Daten bei Besuch und Kontaktaufnahme.",
  });

  return (
    <>
      <section className="legal-hero">
        <div className="container">
          <h1>Datenschutzerklarung</h1>
          <p>Schutz Ihrer personlichen Daten</p>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <div className="legal-text">
            <h2>1. Allgemeine Hinweise</h2>
            <p>
              Diese Datenschutzerklarung informiert daruber, wie RBC Tech personenbezogene Daten im
              Zusammenhang mit dieser Website bearbeitet. Die Bearbeitung erfolgt nach anwendbarem
              Datenschutzrecht (insbesondere dem Schweizer Datenschutzgesetz, sofern anwendbar auch
              weiteren Vorschriften).
            </p>

            <h2>2. Verantwortliche Stelle</h2>
            <p>
              <strong>RBC Tech</strong>
              <br />
              8400 Winterthur
              <br />
              Schweiz
              <br />
              E-Mail: info@rbc-tech.ch
            </p>

            <h2>3. Besuch der Website (Server-Logs)</h2>
            <p>
              Beim Aufruf dieser Website konnen technische Daten anfallen, die Ihr Browser
              automatisch ubermittelt und die der Hosting-Anbieter typischerweise in
              Server-Logdateien speichert. Dazu konnen gehoren:
            </p>
            <ul>
              <li>IP-Adresse (ggf. gekurzt), Datum und Uhrzeit des Zugriffs</li>
              <li>aufgerufene Seite/Datei</li>
              <li>Browsertyp und -version, Betriebssystem</li>
              <li>Referrer-URL</li>
            </ul>
            <p>
              Diese Daten werden in der Regel zur Sicherstellung des Betriebs, zur Fehleranalyse und
              zur Abwehr von Missbrauch verarbeitet.
            </p>

            <h2>4. Kontaktaufnahme</h2>
            <h3>E-Mail, Telefon und Kontaktformular</h3>
            <p>
              Wenn Sie uns kontaktieren, bearbeiten wir Ihre Angaben (z.B. Name, E-Mail-Adresse,
              Inhalt der Nachricht) zur Bearbeitung Ihrer Anfrage und fur Ruckfragen.
            </p>
            <p>
              <strong>Hinweis zum Kontaktformular:</strong> Wenn Sie das Kontaktformular nutzen,
              werden die eingegebenen Daten beim Absenden an einen externen Dienst zur
              Formularubermittlung (FormSubmit, Domain <em>formsubmit.co</em>) ubertragen, der die
              Nachricht als E-Mail an uns weiterleitet. Dabei werden insbesondere die von Ihnen
              eingegebenen Felder (z.B. Name, E-Mail, Telefon, Betreff, Nachricht) ubermittelt.
              Bitte beachten Sie, dass damit eine Datenubermittlung an einen Drittanbieter verbunden
              ist.
            </p>

            <h2>5. Cookies und Tracking</h2>
            <p>
              Diese Website verwendet nach aktuellem Stand keine Analyse-Tools (z.B. Google
              Analytics) und setzt keine Tracking-Cookies zu Marketingzwecken ein.
            </p>

            <h2>6. Aufbewahrung</h2>
            <p>
              Wir bearbeiten und speichern personenbezogene Daten nur so lange, wie dies fur den
              jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
            </p>

            <h2>7. Ihre Rechte</h2>
            <p>
              Je nach anwendbarem Recht haben Sie Rechte auf Auskunft, Berichtigung, Loschung sowie
              weitere Rechte bezuglich Ihrer personenbezogenen Daten. Fur Anfragen kontaktieren Sie
              uns bitte uber die oben genannten Kontaktmoglichkeiten.
            </p>

            <h2>8. Anderungen</h2>
            <p>
              Wir konnen diese Datenschutzerklarung bei Bedarf anpassen (z.B. bei technischen
              Anderungen oder rechtlichen Anforderungen). Es gilt die jeweils veroffentlichte
              Version.
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
