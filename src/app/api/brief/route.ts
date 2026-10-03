import { Resend } from "resend";

// Project brief submissions go to the studio address.
// NOTE: /api/contact sends to a personal Gmail; this one does not.

const TO = "studio@capricornhub.com";

type Brief = Record<string, string | string[] | undefined>;

const FIELDS: { key: string; label: string }[] = [
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "services", label: "Services wanted" },
  { key: "business", label: "What the business does" },
  { key: "track", label: "How long running / clients served" },
  { key: "idealClient", label: "Ideal client" },
  { key: "whereNow", label: "Where those people look now" },
  { key: "tone", label: "How they want to come across" },
  { key: "existingBrand", label: "Existing brand assets to keep" },
  { key: "faceOfBrand", label: "Comfortable being the face" },
  { key: "budget", label: "Budget range" },
  { key: "timeline", label: "Timeline" },
];

const REQUIRED = FIELDS.map((f) => f.key).filter((k) => k !== "timeline");

function esc(v: string) {
  return v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: Brief;
  try {
    body = await request.json();
  } catch {
    return Response.json({ success: false, error: "Could not read the form." }, { status: 400 });
  }

  const value = (k: string) => {
    const v = body[k];
    return Array.isArray(v) ? v.join(", ") : (v ?? "").toString().trim();
  };

  const missing = REQUIRED.filter((k) => !value(k));
  if (missing.length) {
    return Response.json(
      { success: false, error: "Some required answers are missing.", missing },
      { status: 400 }
    );
  }

  const rows = FIELDS.map((f) => {
    const v = value(f.key);
    if (!v) return "";
    return (
      '<tr><td style="padding:8px 16px 8px 0;vertical-align:top;color:#555;white-space:nowrap">' +
      esc(f.label) +
      '</td><td style="padding:8px 0;vertical-align:top;white-space:pre-wrap">' +
      esc(v) +
      "</td></tr>"
    );
  }).join("");

  const html =
    '<h2 style="font-family:sans-serif">Project brief from ' +
    esc(value("name")) +
    '</h2><table style="font-family:sans-serif;font-size:14px;line-height:1.6;border-collapse:collapse">' +
    rows +
    "</table>";

  // Constructed per request rather than at module scope, so a missing key is
  // a 500 at request time instead of a build-time crash.
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return Response.json(
      { success: false, error: "Email is not configured. Please email us directly." },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Capricorn Hub <onboarding@resend.dev>",
      to: TO,
      replyTo: value("email"),
      subject: "Project brief — " + value("name"),
      html,
    });

    if (error) {
      console.error("Resend rejected the brief:", error);
      return Response.json(
        { success: false, error: "We could not send that. Please email us directly." },
        { status: 502 }
      );
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Brief send failed:", err);
    return Response.json(
      { success: false, error: "We could not send that. Please email us directly." },
      { status: 500 }
    );
  }
}
