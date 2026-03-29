import usePageMeta from "../hooks/usePageMeta";

export default function Datenschutz() {
  usePageMeta({
    title: "Datenschutz | RBC Tech",
    description:
      "Datenschutzerklärung von RBC Tech. Informationen zur Bearbeitung personenbezogener Daten bei Besuch und Kontaktaufnahme.",
  });

  return (
    <>
      <section className="legal-hero">
        <div className="container">
          <h1>Datenschutzerklärung</h1>
          <p>Schutz Ihrer persönlichen Daten</p>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <div className="legal-text">
            <h2>1. Allgemeine Hinweise</h2>
            <p>
              Diese Datenschutzerklärung informiert darüber, wie RBC Tech personenbezogene Daten im
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
              Beim Aufruf dieser Website können technische Daten anfallen, die Ihr Browser
              automatisch übermittelt und die der Hosting-Anbieter typischerweise in
              Server-Logdateien speichert. Dazu können gehören:
            </p>
            <ul>
              <li>IP-Adresse (ggf. gekürzt), Datum und Uhrzeit des Zugriffs</li>
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
              Inhalt der Nachricht) zur Bearbeitung Ihrer Anfrage und für Rückfragen.
            </p>
            <p>
              <strong>Hinweis zum Kontaktformular:</strong> Wenn Sie das Kontaktformular nutzen,
              werden die eingegebenen Daten beim Absenden an einen externen Dienst zur
              Formularübermittlung (FormSubmit, Domain <em>formsubmit.co</em>) übertragen, der die
              Nachricht als E-Mail an uns weiterleitet. Dabei werden insbesondere die von Ihnen
              eingegebenen Felder (z.B. Name, E-Mail, Telefon, Betreff, Nachricht) übermittelt.
              Bitte beachten Sie, dass damit eine Datenübermittlung an einen Drittanbieter verbunden
              ist.
            </p>

            <h2>5. Cookies und Tracking</h2>
            <p>
              Diese Website verwendet nach aktuellem Stand keine Analyse-Tools (z.B. Google
              Analytics) und setzt keine Tracking-Cookies zu Marketingzwecken ein.
            </p>

            <h2>6. Aufbewahrung</h2>
            <p>
              Wir bearbeiten und speichern personenbezogene Daten nur so lange, wie dies für den
              jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
            </p>

            <h2>7. Ihre Rechte</h2>
            <p>
              Je nach anwendbarem Recht haben Sie Rechte auf Auskunft, Berichtigung, Löschung sowie
              weitere Rechte bezüglich Ihrer personenbezogenen Daten. Für Anfragen kontaktieren Sie
              uns bitte über die oben genannten Kontaktmöglichkeiten.
            </p>

            <h2>8. Änderungen</h2>
            <p>
              Wir können diese Datenschutzerklärung bei Bedarf anpassen (z.B. bei technischen
              Änderungen oder rechtlichen Anforderungen). Es gilt die jeweils veröffentlichte
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
