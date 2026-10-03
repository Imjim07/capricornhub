// Legal identity, shared by the privacy and cookie policies so the two can
// never disagree about who the controller is.

export const ENTITY = {
  name: "Capricorn Hub",
  registration: "CAC registration number 7809956",
  address: "Lagos, Nigeria",
  email: "studio@capricornhub.com",
  hosting: "Vercel",
  /** How long contact enquiries are kept before deletion. */
  retention: "12 months",
};

/** Shown in the footer on tablet and up, and in the Contact section on
    phones. Both read this, so the two can never disagree. */
export const CONTACT_DETAILS = [
  { label: "Mail", value: "studio@capricornhub.com", href: "mailto:studio@capricornhub.com" },
  { label: "Phone", value: "+234 902 947 8440", href: "tel:+2349029478440" },
  { label: "Studio", value: "Lagos, Nigeria" },
];
