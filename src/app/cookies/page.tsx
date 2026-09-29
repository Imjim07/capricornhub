import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { H, P, List } from "@/components/LegalText";
import { ENTITY } from "@/data/entity";

// DESIGN.md §2.1 — the single cream inversion, same as the privacy page.
//
// NOTE: a drafting aid, not legal advice. The cookies listed here were
// confirmed by loading a production build and reading the cookie jar, so the
// names and the provider are accurate. Have the wording reviewed before
// publishing.

const LAST_UPDATED = "29 September 2026";

export const metadata: Metadata = {
  title: "Cookie Policy — Capricorn Hub",
  description:
    "The cookies capricornhub.com sets, what each one does, how long it lasts, and how to refuse or remove them.",
};

export default function CookiePolicyPage() {
  return (
    <main>
      <Navbar />

      <section className="section section-invert" style={{ paddingTop: "var(--s8)" }}>
        <h1 className="display" style={{ marginBottom: "var(--s6)" }}>
          Cookies
        </h1>

        <p className="label muted" style={{ marginBottom: "var(--s7)" }}>
          Last updated {LAST_UPDATED}
        </p>

        <H>What cookies are</H>
        <P>
          A cookie is a small text file a website asks your browser to store.
          On return visits the browser sends it back, which lets the site
          recognise that the same browser has been here before. Similar
          technologies such as local storage do the same job in a different
          place; this site does not use them.
        </P>

        <H>What this site does</H>
        <P>
          <strong>
            This site sets analytics cookies as soon as you arrive. There is no
            cookie banner and we do not ask you to accept them first.
          </strong>{" "}
          Nothing on the site depends on them, so you can block or delete them
          and everything will still work.
        </P>
        <P>
          We set no advertising, retargeting, profiling or social media cookies,
          and we do not sell personal information.
        </P>

        <H>The cookies we set</H>
        <P>
          Both are set by Google Analytics 4, which we use to see which pages
          are read and how people move through the site. Google is the provider
          and acts as our processor.
        </P>
        <List
          items={[
            "_ga — tells one visitor's browser apart from another so visits are not double counted. First-party. Expires 2 years after it is set or last updated.",
            "_ga_H2NZVVEGJT — holds the session state for our specific Google Analytics property. The suffix is our measurement ID. First-party. Expires 2 years after it is set or last updated.",
          ]}
        />
        <P>
          That is the complete list. If you find another cookie from this
          domain, tell us at {ENTITY.email} and we will investigate and update
          this page.
        </P>

        <H>Third parties that see you without setting a cookie</H>
        <P>
          Loading a page makes your browser fetch files from providers we use.
          They do not set cookies here, but they do receive your IP address and
          basic request information as a normal part of serving the file:
        </P>
        <List
          items={[
            "Cloudinary — image hosting.",
            "Microlink — generates the website preview screenshots in our Work section.",
            ENTITY.hosting + " — hosts the site and keeps standard server request logs.",
          ]}
        />
        <P>
          Our fonts are served from this domain rather than a font provider, so
          loading a page sends nothing to a third-party font service.
        </P>

        <H>How to refuse or remove them</H>
        <P>
          You do not need to contact us. Any of these works, and none will stop
          you using the site:
        </P>
        <List
          items={[
            "Install Google's official opt-out browser add-on, which disables Google Analytics on every site you visit.",
            "Block or clear cookies for this site in your browser's privacy settings. Every major browser can do this for a single site.",
            "Browse in a private or incognito window, which discards cookies when you close it.",
            "Use a browser or extension that blocks analytics scripts before they load.",
          ]}
        />
        <P>
          Deleting the cookies resets you to an unrecognised visitor. They will
          be set again on your next visit unless you have blocked them.
        </P>

        <H>Your rights</H>
        <P>
          The information these cookies generate is personal data under the
          Nigeria Data Protection Act 2023, and under the GDPR and UK GDPR if
          you are in the EEA or United Kingdom. You can ask us for a copy of it,
          ask us to delete it, or object to it being collected at all. How to do
          that, and who to complain to, is set out in our{" "}
          <Link href="/privacy" className="text-link" style={{ fontSize: "inherit", letterSpacing: "normal", textTransform: "none" }}>
            privacy policy
          </Link>
          .
        </P>

        <H>Changes to this policy</H>
        <P>
          If we add, remove or change a cookie we will update the list above and
          change the date at the top of this page.
        </P>

        <H>Contact</H>
        <P>
          Questions about cookies on this site: {ENTITY.email}. {ENTITY.name},{" "}
          {ENTITY.registration}, {ENTITY.address}.
        </P>
      </section>

      <Footer />
    </main>
  );
}
