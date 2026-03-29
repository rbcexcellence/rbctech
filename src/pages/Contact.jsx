import { useState } from "react";
import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";

const CONTACT_ACTION_URL = "https://formsubmit.co/ajax/cekaj.riart@outlook.com";

export default function Contact() {
  usePageMeta({
    title: "Kontakt - Kostenlose Erstberatung | RBC Tech",
    description:
      "Kontaktieren Sie RBC Tech: unverbindliche Erstberatung zu Webdesign & Frontend. Schnelle Rückmeldung, klare nächste Schritte und saubere Umsetzung.",
  });

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ text: "", success: false });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ text: "", success: false });

    const form = event.currentTarget;
    const actionUrl = CONTACT_ACTION_URL.trim();

    let parsedActionUrl = null;
    try {
      parsedActionUrl = new URL(actionUrl, window.location.href);
    } catch {
      parsedActionUrl = null;
    }

    const isAllowedEndpoint = Boolean(
      parsedActionUrl &&
        parsedActionUrl.protocol === "https:" &&
        parsedActionUrl.hostname === "formsubmit.co" &&
        parsedActionUrl.pathname.startsWith("/ajax/")
    );

    const recipientEmail = (() => {
      const marker = "/ajax/";
      const markerIndex = actionUrl.indexOf(marker);
      if (markerIndex === -1) {
        return "";
      }

      const raw = actionUrl.slice(markerIndex + marker.length);
      return decodeURIComponent(raw.split("?")[0]).trim();
    })();

    if (!actionUrl || !parsedActionUrl) {
      setStatus({
        text: recipientEmail
          ? `Formular ist nicht konfiguriert. Bitte schreiben Sie direkt an ${recipientEmail}.`
          : "Formular ist nicht konfiguriert.",
        success: false,
      });
      return;
    }

    if (!isAllowedEndpoint) {
      setStatus({
        text: "Formular-Endpoint ist ungültig. Bitte laden Sie die Seite neu oder kontaktieren Sie uns per E-Mail.",
        success: false,
      });
      return;
    }

    setSubmitting(true);

    try {
      const formData = new FormData(form);
      const subjectValue = String(formData.get("subject") || "").trim();

      if (subjectValue) {
        formData.set("_subject", subjectValue);
      }

      const response = await fetch(parsedActionUrl.toString(), {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
        referrerPolicy: "no-referrer",
      });

      if (!response.ok) {
        let details = "";
        try {
          const data = await response.json();
          details = data?.message ? ` (${data.message})` : "";
        } catch {
          details = "";
        }

        throw new Error(`Request failed${details}`);
      }

      setStatus({
        text: "Danke! Ihre Nachricht wurde gesendet. Wir melden uns in der Regel innerhalb von 1 Werktag.",
        success: true,
      });
      form.reset();
    } catch {
      setStatus({
        text: recipientEmail
          ? `Senden fehlgeschlagen. Bitte versuchen Sie es später erneut oder schreiben Sie direkt an ${recipientEmail}.`
          : "Senden fehlgeschlagen. Bitte versuchen Sie es später erneut.",
        success: false,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="contact-hero">
        <div className="container">
          <div className="hero-icon">
            <i className="fas fa-envelope" aria-hidden="true"></i>
          </div>
          <h1>Kontaktieren Sie uns</h1>
          <p>
            Haben Sie Fragen oder möchten Sie ein Projekt besprechen? Schreiben Sie uns - wir
            antworten in der Regel innerhalb von 1 Werktag.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form">
              <h2>Nachricht senden</h2>
              <p>Beschreiben Sie kurz Ihr Ziel (z.B. neue Website, Landingpage, Überarbeitung).</p>
              <br />
              <form id="contactForm" onSubmit={handleSubmit} autoComplete="on">
                <input
                  className="honeypot"
                  type="text"
                  name="_honey"
                  tabIndex="-1"
                  autoComplete="off"
                  aria-hidden="true"
                />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" id="_subject" name="_subject" value="" readOnly />

                <div className="form-group">
                  <label htmlFor="name">Vollständiger Name *</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-Mail *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Telefon *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="z.B. +41 79 123 45 67"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Betreff *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="z.B. Website für mein Unternehmen"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Nachricht *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..."
                  ></textarea>
                </div>
                <div className="form-group checkbox-group">
                  <label htmlFor="privacy" className="checkbox-label">
                    <input type="checkbox" id="privacy" name="privacy" value="accepted" required />
                    <span>
                      Ich habe die <Link to="/datenschutz">Datenschutzerklarung</Link> gelesen und
                      bin mit der Kontaktaufnahme einverstanden. *
                    </span>
                  </label>
                </div>

                <button type="submit" className="btn primary" disabled={submitting}>
                  {submitting ? "Wird gesendet..." : "Nachricht senden"}
                </button>

                <div className={`form-status ${status.success ? "success" : ""}`} aria-live="polite">
                  {status.text}
                </div>
              </form>
            </div>

            <div className="contact-info">
              <h2>Kontaktinformationen</h2>
              <p>Mehrere Wege, um mit uns in Kontakt zu treten:</p>
              <div className="contact-details">
                <div className="contact-item">
                  <i className="fas fa-envelope" aria-hidden="true"></i>
                  <div>
                    <h3>E-Mail</h3>
                    <p>info@rbc-tech.ch</p>
                    <small>Antwort i.d.R. innerhalb 1 Werktag</small>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone" aria-hidden="true"></i>
                  <div>
                    <h3>Telefon</h3>
                    <p>+41 78 604 74 99</p>
                    <small>Mo/Do 14:00-17:00</small>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                  <div>
                    <h3>Adresse</h3>
                    <p>
                      8400 Winterthur
                      <br />
                      Schweiz
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
