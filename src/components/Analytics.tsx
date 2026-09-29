import Script from "next/script";

// Google Analytics 4. Rendered from the root layout, so it is on every route.
// Loads as soon as the page is interactive — there is no consent gate. If you
// add a consent banner later, this component is the single place to gate it.
//
// The measurement ID is not a secret: it ships in the page source by design.
// NEXT_PUBLIC_GA_ID overrides it if you ever need a separate property.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-H2NZVVEGJT";

// Production only, so `npm run dev` does not pollute the property with your
// own page views and hot reloads. To exercise it locally, run a production
// build: `npm run build && npm start`.
const ENABLED = process.env.NODE_ENV === "production" && Boolean(GA_ID);

export default function Analytics() {
  if (!ENABLED) return null;

  return (
    <>
      <Script
        src={"https://www.googletagmanager.com/gtag/js?id=" + GA_ID}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
