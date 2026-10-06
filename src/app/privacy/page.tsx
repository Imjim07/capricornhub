import type { Metadata } from "next";
import { H, P, List } from "@/components/LegalText";
import { ENTITY } from "@/data/entity";

// DESIGN.md §2.1 — a long explanation is exactly what the single cream
// inversion is for. §1.1 — no mid-sized heading tier, so section headings sit
// at label scale above 16px body copy.
//
// NOTE: this is a drafting aid, not legal advice. Have it reviewed before
// publishing — see the note on lawful basis under "Why we use your
// information", which is the clause a reviewer should look at first.

const LAST_UPDATED = "29 September 2026";

export const metadata: Metadata = {
  title: "Privacy Policy — Capricorn Hub",
  description:
    "How Capricorn Hub collects, uses and protects personal information, including cookies and analytics.",
};

export default function PrivacyPage() {
  return (
    <main>

      <section className="section section-invert" style={{ paddingTop: "var(--s8)" }}>
        <h1 className="display" style={{ marginBottom: "var(--s6)" }}>
          Privacy
        </h1>

        <p className="label muted" style={{ marginBottom: "var(--s7)" }}>
          Last updated {LAST_UPDATED}
        </p>

        <H>Who we are</H>
        <P>
          {ENTITY.name} is a web development and brand design studio based in
          Lagos, Nigeria. We are the data controller for the personal
          information described in this policy.
        </P>
        <P>
          Registered name and number: {ENTITY.name}, {ENTITY.registration}.
          Registered address: {ENTITY.address}. For anything in this policy,
          including a request about your data, write to {ENTITY.email}.
        </P>

        <H>What this policy covers</H>
        <P>
          This policy covers capricornhub.com. It explains what we collect, why,
          who we share it with, how long we keep it and what you can ask us to
          do. It applies alongside the Nigeria Data Protection Act 2023 (NDPA)
          and, for visitors in the European Economic Area and the United
          Kingdom, the GDPR and UK GDPR.
        </P>

        <H>Information you give us</H>
        <P>
          The contact form on this site asks for your name, email address and a
          message. We use these only to read and reply to your enquiry. The form
          is the only place on the site where you type personal information, we
          have no accounts, no logins and no payment processing.
        </P>

        <H>Information collected automatically</H>
        <P>
          We use Google Analytics 4 to understand how the site is used, which
          pages are visited, roughly where visitors come from, what device and
          browser they use, and how they move through the site. Google Analytics
          sets cookies and collects your IP address, which Google processes to
          approximate your location.
        </P>
        <P>
          Loading this site also causes your browser to request image files
          from the provider we use to serve them. That provider receives your IP
          address and basic request information as a normal part of delivering
          the file. It is listed under Who we share it with.
        </P>

        <H>Cookies</H>
        <P>
          Cookies are small files a site stores in your browser.{" "}
          <strong>
            The analytics cookies below are set when you arrive on this site. We
            do not currently show a cookie banner and do not ask you to accept
            them beforehand.
          </strong>{" "}
          You can refuse or delete them at any time using the controls described
          under How to opt out.
        </P>
        <List
          items={[
            "_ga: distinguishes one visitor from another. Set by Google Analytics. Expires after 2 years.",
            "_ga_H2NZVVEGJT: keeps session state for our Google Analytics property. Expires after 2 years.",
          ]}
        />
        <P>
          We set no advertising, retargeting or social media cookies, and we do
          not sell personal information.
        </P>

        <H>Why we use your information</H>
        <List
          items={[
            "To reply to enquiries you send through the contact form. Under the NDPA and GDPR we rely on taking steps at your request before entering a contract, and on our legitimate interest in responding to people who contact us.",
            "To measure and improve how the site performs, using the analytics described above. We rely on our legitimate interest in understanding how our site is used.",
          ]}
        />
        <P>
          You can object to processing based on legitimate interests at any time, see Your rights.
        </P>

        <H>Who we share it with</H>
        <P>
          We do not sell or trade personal information. We share it only with the
          providers that operate parts of this site on our behalf:
        </P>
        <List
          items={[
            "Google (Google Analytics): site usage measurement, and the analytics cookies above.",
            "Resend: delivers contact form submissions to our inbox. Receives the name, email and message you submit.",
            "Cloudinary: hosts images on the site. Receives your IP address when your browser loads an image.",
            ENTITY.hosting + " hosts the site and processes standard server request logs.",
          ]}
        />
        <P>
          We may also disclose information where the law requires it, or to
          establish or defend a legal claim.
        </P>

        <H>International transfers</H>
        <P>
          The providers above are based outside Nigeria, mainly in the United
          States and the European Union, so your information is transferred
          internationally. Where personal data is transferred out of the EEA or
          UK, those transfers rely on the European Commission&rsquo;s Standard
          Contractual Clauses or an adequacy decision. Under the NDPA we take
          reasonable steps to confirm recipients provide an adequate level of
          protection.
        </P>

        <H>How long we keep it</H>
        <P>
          Contact enquiries are kept for {ENTITY.retention}, then deleted.
          Analytics data is retained according to the retention period set in our
          Google Analytics property, after which Google deletes it. You can ask
          us to delete your enquiry sooner at any time.
        </P>

        <H>Your rights</H>
        <P>
          Under the NDPA, and under the GDPR and UK GDPR if you are in the EEA or
          UK, you can ask us to:
        </P>
        <List
          items={[
            "Give you a copy of the personal information we hold about you.",
            "Correct information that is wrong or incomplete.",
            "Delete your information.",
            "Restrict how we use it.",
            "Provide it in a portable, machine-readable format.",
            "Stop processing it where we rely on legitimate interests, including for analytics.",
          ]}
        />
        <P>
          Write to {ENTITY.email} and we will respond within the time the
          applicable law allows. We will not charge you or treat you differently
          for asking.
        </P>

        <H>How to opt out of analytics</H>
        <P>
          You can block or delete the analytics cookies without contacting us:
        </P>
        <List
          items={[
            "Install Google's official browser add-on to opt out of Google Analytics across all sites.",
            "Block or clear cookies for this site in your browser settings.",
            "Use a browser or extension that blocks analytics scripts.",
          ]}
        />
        <P>
          None of these will stop you using the site, nothing here depends on
          analytics.
        </P>

        <H>Complaints</H>
        <P>
          If you think we have handled your information badly, tell us first at{" "}
          {ENTITY.email} and we will try to put it right. You also have the right
          to complain to a regulator: in Nigeria, the Nigeria Data Protection
          Commission; in the UK, the Information Commissioner&rsquo;s Office; in
          the EEA, your national supervisory authority.
        </P>

        <H>Changes to this policy</H>
        <P>
          If we change how we handle personal information we will update this
          page and change the date at the top. Where a change is significant we
          will say so clearly rather than rely on you re-reading it.
        </P>

        <H>Contact</H>
        <P>
          Questions about this policy or about your information: {ENTITY.email}.
        </P>
      </section>

    </main>
  );
}
