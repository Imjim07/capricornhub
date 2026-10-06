"use client";
import { useState } from "react";
import { CONTACT_DETAILS } from "@/data/entity";
import CtaBlock from "@/components/CtaBlock";

// DESIGN.md §6 — input rows are a label and a bottom hairline. No box, no
// background, no radius. Focus raises the hairline to full --ink.
// The form state, handler and Resend submission path are unchanged.
//
// The Follow us row has moved out: the socials live in the footer only.

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

async function handleSubmit() {
  if (name && email && message) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
      }
    } catch (error) {
      console.error(error);
    }
  }
}

  return (
    <section id="contact" className="section">
      <h2 className="display" style={{ marginBottom: "var(--s7)" }}>
        Start something.
      </h2>

      <div className="col-2" style={{ alignItems: "start" }}>
        <div>
          {sent ? (
            <div style={{ borderTop: "1px solid var(--hairline)", paddingTop: "var(--s3)" }}>
              <p className="label" style={{ marginBottom: "var(--s2)" }}>
                Message received
              </p>
              <p className="body-copy muted">
                We will get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--s5)" }}>
              <div>
                <label htmlFor="ch-name" className="label muted" style={{ display: "block", marginBottom: "var(--s1)" }}>
                  Your Name
                </label>
                <input
                  id="ch-name"
                  className="field-row"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="ch-email" className="label muted" style={{ display: "block", marginBottom: "var(--s1)" }}>
                  Email Address
                </label>
                <input
                  id="ch-email"
                  className="field-row"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="ch-message" className="label muted" style={{ display: "block", marginBottom: "var(--s1)" }}>
                  Tell us about your project
                </label>
                <textarea
                  id="ch-message"
                  className="field-row"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  style={{ resize: "vertical" }}
                />
              </div>

              <button
                type="button"
                onClick={() => handleSubmit()}
                className="btn-outline"
                style={{ alignSelf: "flex-start" }}
              >
                Send Message
              </button>
            </div>
          )}
        </div>

        {/* The right-hand column: the closing CTA, plus the contact details on
            phones only — on tablet and up those live in the footer instead,
            see .contact-details-inline in globals.css. */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--s5)" }}>
        <CtaBlock />

        <div
          className="contact-details-inline"
          style={{ flexDirection: "column", gap: "var(--s5)" }}
        >
          {CONTACT_DETAILS.map((d) => (
            <div key={d.label} style={{ borderTop: "1px solid var(--hairline)", paddingTop: "var(--s3)" }}>
              <p className="label muted" style={{ marginBottom: "var(--s2)" }}>
                {d.label}
              </p>
              <p className="body-copy">
                {d.href ? (
                  <a href={d.href} style={{ color: "inherit", textDecoration: "none", borderBottom: "1px solid var(--hairline)" }}>
                    {d.value}
                  </a>
                ) : (
                  d.value
                )}
              </p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
