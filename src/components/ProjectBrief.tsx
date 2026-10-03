"use client";

import { useState } from "react";

// The questions come from Capricorn Hub's Client Project Brief, generalised:
// the original asked about one client's NYSC-services business (redeployment,
// late posting, PPA disputes), which would make no sense to a visitor wanting
// a website. The intent and order of the brief are kept.
//
// Layout follows the reference contact page — intro on the left, form on the
// right, fields grouped in pairs — in DESIGN.md's language: no boxes, hairline
// underlines, uppercase labels, the glass button for the action.

const SERVICES = ["Web Development", "Brand Identity", "Not sure yet"];
const TONES = [
  "Approachable and friendly",
  "Authority and expert",
  "No-nonsense and efficient",
  "Not sure yet",
];

type State = {
  name: string;
  email: string;
  services: string[];
  business: string;
  track: string;
  idealClient: string;
  whereNow: string;
  tone: string;
  existingBrand: string;
  faceOfBrand: string;
  budget: string;
  timeline: string;
};

const EMPTY: State = {
  name: "",
  email: "",
  services: [],
  business: "",
  track: "",
  idealClient: "",
  whereNow: "",
  tone: "",
  existingBrand: "",
  faceOfBrand: "",
  budget: "",
  timeline: "",
};

const REQUIRED: (keyof State)[] = [
  "name", "email", "services", "business", "track",
  "idealClient", "whereNow", "tone", "existingBrand", "faceOfBrand", "budget",
];

function Label({ htmlFor, children }: { htmlFor?: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="label muted" style={{ display: "block", marginBottom: "var(--s2)" }}>
      {children}
    </label>
  );
}

export default function ProjectBrief() {
  const [v, setV] = useState<State>(EMPTY);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function set<K extends keyof State>(key: K, value: State[K]) {
    setV((prev) => ({ ...prev, [key]: value }));
  }

  function toggleService(s: string) {
    set("services", v.services.includes(s) ? v.services.filter((x) => x !== s) : [...v.services, s]);
  }

  const missing = REQUIRED.filter((k) => {
    const val = v[k];
    return Array.isArray(val) ? val.length === 0 : !val.trim();
  });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (missing.length) {
      setError("Please answer the questions marked required before sending.");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email)) {
      setError("That email address does not look right. Please check it.");
      return;
    }

    setSending(true);
    try {
      const res = await fetch("/api/brief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(v),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
      } else {
        setError(data.error ?? "We could not send that. Please email studio@capricornhub.com.");
      }
    } catch {
      setError("That did not send — you may be offline. Please try again, or email studio@capricornhub.com.");
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div style={{ maxWidth: "48ch" }}>
        <p className="label" style={{ marginBottom: "var(--s3)" }}>
          Brief received
        </p>
        <p style={{ fontSize: "16px", lineHeight: 1.6 }}>
          Thank you. We read every brief properly rather than skimming it, and
          we will come back to you within one to two business days with next
          steps, a timeline and a quote.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate style={{ display: "flex", flexDirection: "column", gap: "var(--s5)" }}>
      <div className="brief-pair">
        <div>
          <Label htmlFor="b-name">Name (required)</Label>
          <input id="b-name" className="field-row" type="text" value={v.name}
            onChange={(e) => set("name", e.target.value)} />
        </div>
        <div>
          <Label htmlFor="b-email">Email (required)</Label>
          <input id="b-email" className="field-row" type="email" value={v.email}
            onChange={(e) => set("email", e.target.value)} />
        </div>
      </div>

      <fieldset style={{ border: "none" }}>
        <legend className="label muted" style={{ marginBottom: "var(--s2)" }}>
          What are you interested in? (required)
        </legend>
        <div className="choice-grid">
          {SERVICES.map((s) => (
            <label key={s} className="choice">
              <input type="checkbox" checked={v.services.includes(s)} onChange={() => toggleService(s)} />
              <span className="choice-box" aria-hidden="true" />
              <span>{s}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <Label htmlFor="b-business">What does your business do? (required)</Label>
        <textarea id="b-business" className="field-row" rows={3} value={v.business}
          onChange={(e) => set("business", e.target.value)} style={{ resize: "vertical" }} />
      </div>

      <div>
        <Label htmlFor="b-track">
          How long have you been running, and roughly how many clients have you served? (required)
        </Label>
        <input id="b-track" className="field-row" type="text" value={v.track}
          onChange={(e) => set("track", e.target.value)} />
      </div>

      <div>
        <Label htmlFor="b-ideal">Who is your ideal client? (required)</Label>
        <textarea id="b-ideal" className="field-row" rows={3} value={v.idealClient}
          onChange={(e) => set("idealClient", e.target.value)} style={{ resize: "vertical" }} />
      </div>

      <div>
        <Label htmlFor="b-where">
          Where do those people currently look for what you offer? (required)
        </Label>
        <textarea id="b-where" className="field-row" rows={3} value={v.whereNow}
          onChange={(e) => set("whereNow", e.target.value)} style={{ resize: "vertical" }} />
      </div>

      <fieldset style={{ border: "none" }}>
        <legend className="label muted" style={{ marginBottom: "var(--s2)" }}>
          How do you want to come across? (required)
        </legend>
        <div className="choice-grid">
          {TONES.map((t) => (
            <label key={t} className="choice">
              <input type="radio" name="tone" checked={v.tone === t} onChange={() => set("tone", t)} />
              <span className="choice-box" aria-hidden="true" />
              <span>{t}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="brief-pair">
        <fieldset style={{ border: "none" }}>
          <legend className="label muted" style={{ marginBottom: "var(--s2)" }}>
            Any existing logo, colours or name to keep? (required)
          </legend>
          <div className="choice-grid">
            {["Yes", "No"].map((o) => (
              <label key={o} className="choice">
                <input type="radio" name="existingBrand" checked={v.existingBrand === o}
                  onChange={() => set("existingBrand", o)} />
                <span className="choice-box" aria-hidden="true" />
                <span>{o}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset style={{ border: "none" }}>
          <legend className="label muted" style={{ marginBottom: "var(--s2)" }}>
            Comfortable being the face of the brand? (required)
          </legend>
          <div className="choice-grid">
            {["Yes", "No", "Maybe"].map((o) => (
              <label key={o} className="choice">
                <input type="radio" name="faceOfBrand" checked={v.faceOfBrand === o}
                  onChange={() => set("faceOfBrand", o)} />
                <span className="choice-box" aria-hidden="true" />
                <span>{o}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="brief-pair">
        <div>
          <Label htmlFor="b-budget">Budget range for this engagement (required)</Label>
          <input id="b-budget" className="field-row" type="text" value={v.budget}
            onChange={(e) => set("budget", e.target.value)} />
        </div>
        <div>
          <Label htmlFor="b-timeline">When do you want this live?</Label>
          <input id="b-timeline" className="field-row" type="text" value={v.timeline}
            onChange={(e) => set("timeline", e.target.value)} />
        </div>
      </div>

      {error && (
        <p role="alert" style={{ fontSize: "14px", lineHeight: 1.6, maxWidth: "48ch" }}>
          {error}
        </p>
      )}

      <div>
        <button type="submit" className="btn-glass" disabled={sending}>
          {sending ? "Sending…" : "Send brief"}
        </button>
      </div>
    </form>
  );
}
