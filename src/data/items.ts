// Single source of truth for everything with a page.
// Sections read from here too, so a slug can never drift from its card.

export type ImageTone = "surface" | "surface-alt" | "surface-deep";

export type ItemImage = {
  id: string;
  alt: string;
  /** Real image URL. When absent the tone renders as a flat placeholder. */
  src?: string;
  tone: ImageTone;
};

export type SelectOption = {
  label: string;
  available: boolean;
};

/** What fills the image column on a case study page. */
export type CaseStudyVisual =
  | { kind: "image"; src: string; alt: string; fit?: "cover" | "contain" }
  | { kind: "wordmark"; text: string };

export type CaseStudyItem = {
  kind: "case-study";
  slug: string;
  title: string;
  category: string;
  /** The screenshot on the Work card. */
  image: { src: string; alt: string };
  /** The detail page visual, which is deliberately not the card screenshot. */
  detail: CaseStudyVisual;
  liveUrl?: string;
  summary: string;
  scope: string[];
  stack: string[];
};

export type DetailItem = {
  kind: "item";
  slug: string;
  title: string;
  price: string;
  /** Engagement terms. Omitted rather than filled with filler. */
  terms?: string;
  description: string;
  availability?: string;
  /** Carried by weight and position only — never an accent (DESIGN.md §2). */
  featured?: boolean;
  /** Service tiers and bespoke work are not quantity items. */
  quantity: boolean;
  action: { label: string; done: string };
  select?: { label: string; options: SelectOption[] };
  images: ItemImage[];
};

export type Service = {
  kind: "service";
  slug: string;
  title: string;
  summary: string;
  image: { src: string; alt: string; credit: string };
  tierSlugs: string[];
};

export type Item = CaseStudyItem | DetailItem;

// TODO(capricornhub): replace the placeholder tones with real photography.
// Three tones so the crossfade is visible while there are no photographs.
function placeholders(name: string): ItemImage[] {
  return [
    { id: "a", alt: name + " — placeholder image 1", tone: "surface" },
    { id: "b", alt: name + " — placeholder image 2", tone: "surface-alt" },
    { id: "c", alt: name + " — placeholder image 3", tone: "surface-deep" },
  ];
}

export const caseStudies: CaseStudyItem[] = [
  {
    kind: "case-study",
    slug: "accent-homes",
    title: "Accent Homes",
    category: "Web Platform",
    image: {
      src: "https://res.cloudinary.com/df5uashml/image/upload/f_auto,q_auto,w_1000/v1790700797/image_6_hwlpzt.png",
      alt: "The Accent Homes short-let booking platform",
    },
    // b_rgb:00423d composites --surface at the CDN. The source is a
    // transparent PNG, and f_auto serves JPEG to browsers that do not
    // advertise WebP, which would flatten the alpha to white and make a
    // white logo invisible.
    detail: {
      kind: "image",
      src: "https://res.cloudinary.com/df5uashml/image/upload/b_rgb:00423d,f_auto,q_auto,w_1000/v1783203482/taccent2_cebtvp.png",
      alt: "The Accent Homes logo",
      fit: "contain",
    },
    liveUrl: "https://accenthomesltd.com",
    summary:
      "Luxury short-let booking platform. Guests browse listings, check availability and pay online; the operator manages inventory from a single dashboard.",
    scope: [
      "Listing and availability system",
      "Paystack payment integration",
      "Booking management dashboard",
      "Responsive marketing site",
    ],
    stack: ["Next.js", "Firebase", "Paystack"],
  },
  {
    kind: "case-study",
    slug: "akarm",
    title: "AKARM",
    category: "Fashion Brand",
    image: {
      src: "https://res.cloudinary.com/df5uashml/image/upload/f_auto,q_auto,w_1000/v1790700797/image_5_co7uko.png",
      alt: "The AKARM fashion homepage and lookbook",
    },
    detail: { kind: "wordmark", text: "AKARM" },
    liveUrl: "https://akarm.vercel.app",
    summary:
      "Homepage and lookbook for a premium unisex fashion label. Editorial layout with content managed by the client rather than the developer.",
    scope: [
      "Editorial homepage and lookbook",
      "Sanity CMS for collections",
      "Image pipeline and art direction",
      "Responsive layout",
    ],
    stack: ["Next.js", "Sanity CMS"],
  },
  {
    kind: "case-study",
    slug: "avalanche-engineering",
    title: "Avalanche Engineering",
    category: "Corporate Site",
    image: {
      src: "https://res.cloudinary.com/df5uashml/image/upload/f_auto,q_auto,w_1000/v1790700798/image_4_dlicy3.png",
      alt: "The Avalanche Engineering corporate site",
    },
    detail: {
      kind: "image",
      src: "https://res.cloudinary.com/df5uashml/image/upload/b_rgb:00423d,f_auto,q_auto,w_1000/v1790804776/avalanchelogo_uot4ld.png",
      alt: "The Avalanche Engineering logo",
      fit: "contain",
    },
    liveUrl: "https://avalanche-engs.com",
    summary:
      "Corporate site for a water treatment and facility management company, including an Education Hub of technical articles for prospective clients.",
    scope: [
      "Corporate marketing site",
      "Education Hub article system",
      "Service and capability pages",
      "Contact and enquiry routing",
    ],
    stack: ["Next.js"],
  },
];

// --- Web development tiers -------------------------------------------------

export const webTiers: DetailItem[] = [
  {
    kind: "item",
    slug: "starter",
    title: "Starter",
    price: "from NGN 250,000",
    description:
      "Up to five pages, custom designed with no templates. Mobile responsive, with a contact form that delivers to email. Basic SEO setup and 30 days of post-launch support.",
    quantity: false,
    action: { label: "Request quote", done: "Quote requested" },
    images: placeholders("Starter"),
  },
  {
    kind: "item",
    slug: "studio",
    title: "Studio",
    price: "from NGN 500,000",
    featured: true,
    description:
      "Everything in Starter, up to twelve pages. CMS integration for editable content, plus an e-commerce or booking flow. Advanced SEO, performance optimisation, custom animations, and 60 days of post-launch support.",
    quantity: false,
    action: { label: "Request quote", done: "Quote requested" },
    images: placeholders("Studio"),
  },
  {
    kind: "item",
    slug: "scale",
    title: "Scale",
    price: "from NGN 1,000,000",
    terms: "Quoted per engagement above the floor.",
    description:
      "Everything in Studio with unlimited pages. Custom backend and API integrations, multi-user dashboards or admin panels, and payment gateway integrations. Priority support for 90 days.",
    quantity: false,
    action: { label: "Request quote", done: "Quote requested" },
    images: placeholders("Scale"),
  },
];

// --- Brand identity tiers --------------------------------------------------

export const brandingTiers: DetailItem[] = [
  {
    kind: "item",
    slug: "logo",
    title: "Logo",
    price: "from NGN 60,000",
    terms: "Two revision rounds included.",
    description:
      "Two to three initial concepts. One primary logo plus one or two lockup variations. Delivered as PNG, SVG and transparent files.",
    quantity: false,
    action: { label: "Request quote", done: "Quote requested" },
    images: placeholders("Logo"),
  },
  {
    kind: "item",
    slug: "brand-identity",
    title: "Brand Identity",
    price: "from NGN 150,000",
    terms: "Two revision rounds included.",
    featured: true,
    description:
      "Everything in Logo, plus a full colour palette with hex codes, typography selection and pairing, a logo system with mark and icon, and a concise brand sheet.",
    quantity: false,
    action: { label: "Request quote", done: "Quote requested" },
    images: placeholders("Brand Identity"),
  },
  {
    kind: "item",
    slug: "full-brand-system",
    title: "Full Brand System",
    price: "from NGN 300,000",
    terms: "Quoted per engagement above the floor.",
    description:
      "Everything in Brand Identity, plus a full brand guidelines document, social media templates, business stationery and launch graphics.",
    quantity: false,
    action: { label: "Request quote", done: "Quote requested" },
    images: placeholders("Full Brand System"),
  },
];

// --- Services --------------------------------------------------------------
// Photographs are Unsplash, under the Unsplash licence. Temporary stand-ins.

export const services: Service[] = [
  {
    kind: "service",
    slug: "web-development",
    title: "Web Development",
    summary:
      "Custom platforms built for performance. E-commerce, booking systems, dashboards and marketing sites, designed and built from scratch.",
    image: {
      // f_auto,q_auto lets Cloudinary serve WebP/AVIF and pick quality.
      // Never link the untransformed source.
      src: "https://res.cloudinary.com/df5uashml/image/upload/f_auto,q_auto,w_1000/v1790726224/coddev_zko58m.png",
      alt: "A syntax-highlighted screenshot of the React component that builds this site's hero section",
      credit: "Capricorn Hub",
    },
    tierSlugs: ["starter", "studio", "scale"],
  },
  {
    kind: "service",
    slug: "brand-identity",
    title: "Brand Identity",
    summary:
      "Visual identity that makes a business look as serious as it is. Logo systems, colour, typography and the guidelines that hold them together.",
    image: {
      // f_auto,q_auto lets Cloudinary serve WebP/AVIF and pick quality: the
      // 4MB source PNG comes down to ~42KB. Never link the untransformed URL.
      src: "https://res.cloudinary.com/df5uashml/image/upload/f_auto,q_auto,w_1000/v1790688611/transparenttotbag_szydya.png",
      alt: "A cream Capricorn Hub tote bag held up against a deep green background",
      credit: "Capricorn Hub",
    },
    tierSlugs: ["logo", "brand-identity", "full-brand-system"],
  },
];

export const allTiers: DetailItem[] = [...webTiers, ...brandingTiers];
export const allItems: Item[] = [...caseStudies, ...allTiers];

export function getItem(slug: string): Item | undefined {
  return allItems.find((i) => i.slug === slug);
}

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function tiersFor(service: Service): DetailItem[] {
  return service.tierSlugs
    .map((s) => allTiers.find((t) => t.slug === s))
    .filter((t): t is DetailItem => Boolean(t));
}
