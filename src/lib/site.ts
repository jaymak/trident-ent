export const site = {
  name: "Trident ENT Hospital",
  tagline: "Power To Heal",
  promise:
    "Trusted ENT care in Vadodara — clear diagnosis, modern facilities, and thoughtful follow-up for families in India and abroad.",
  support:
    "Trident ENT Hospital in Vadodara offers specialist ear, nose, and throat care with Dr. Nishit Gupta — trusted by local families, NRIs, and international patients.",
  headline: "Trusted ENT care for families in India and abroad",
  supportLine:
    "From first consultation to recovery, Dr. Nishit Gupta focuses on accurate diagnosis, modern ENT practice, and care that feels personal — whether you live in Vadodara or are visiting from overseas.",
  url: "https://entvadodara.in",
  email: "entvadodara@gmail.com",
  appointmentPhone: "+919157331110",
  appointmentPhoneDisplay: "+91 91573 31110",
  emergencyPhone: "+918805160327",
  emergencyPhoneDisplay: "+91 88051 60327",
  whatsapp: "919157331110",
  reviewCount: 146,
  googleReviewsUrl: "https://g.co/kgs/13NjZt",
  social: {
    facebook: "https://m.facebook.com/104022415290611/",
    instagram: "https://www.instagram.com/trident_hospital_vadodara/",
    youtube: "https://youtube.com/user/drnist89",
  },
} as const;

export function telHref(phone: string) {
  return `tel:${phone}`;
}

export function whatsappHref(message?: string) {
  const text = encodeURIComponent(
    message ??
      "Hello Trident ENT Hospital, I would like to book an appointment.",
  );
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/doctor", label: "Doctor" },
  { href: "/locations", label: "Locations" },
  { href: "/patient-info", label: "Patient info" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export type ClinicLocation = {
  id: string;
  name: string;
  address: string;
  hours: string[];
  mapQuery: string;
  primary?: boolean;
};

export const locations: ClinicLocation[] = [
  {
    id: "trident",
    name: "Trident ENT Hospital",
    address:
      "218, 2nd Floor, Bricklane 1964, Opp. Ratri Bazar, L&T Circle, Vadodara, Gujarat 390018",
    hours: [
      "Monday–Saturday: 5:00 PM – 7:00 PM",
      "Sunday: Emergency only",
    ],
    mapQuery: "Trident ENT Hospital Bricklane 1964 L&T Circle Vadodara",
    primary: true,
  },
  {
    id: "akshar",
    name: "Akshar Multispeciality Hospital",
    address: "Akshar Chowk, Muj Mahuda, Vadodara, Gujarat 390012",
    hours: [
      "Monday–Friday: 7:00 PM – 8:00 PM",
      "Saturday: 4:00 PM – 5:00 PM",
      "Sunday: Emergency only",
    ],
    mapQuery: "Akshar Multispeciality Hospital Akshar Chowk Vadodara",
  },
];

export type ServiceSummary = {
  slug: string;
  title: string;
  short: string;
  summary: string;
};

export const services: ServiceSummary[] = [
  {
    slug: "ear",
    title: "Ear",
    short: "Micro-ear surgery, vertigo, hearing loss & tinnitus.",
    summary:
      "Microscopic ear surgery, vertigo clinic, and care for hearing loss and tinnitus.",
  },
  {
    slug: "nose-sinus",
    title: "Nose & sinus",
    short: "Nose block, sinusitis, polyps — medical and endoscopic care.",
    summary:
      "Medical and surgical treatment for nose block, chronic sinusitis, and nasal polyps.",
  },
  {
    slug: "allergy",
    title: "Allergy & immunotherapy",
    short: "Skin prick testing and immunotherapy for nasal allergies.",
    summary:
      "Identify allergy triggers with skin prick testing and treat the cause with immunotherapy.",
  },
  {
    slug: "throat-head-neck",
    title: "Throat, head & neck",
    short: "Tonsils, thyroid, salivary glands, voice, and cancer pathways.",
    summary:
      "Care for throat infections, thyroid swellings, salivary stones, voice problems, and head & neck disease.",
  },
  {
    slug: "audiology-speech",
    title: "Audiology & speech",
    short: "Audiometry, hearing guidance, and speech therapy.",
    summary:
      "Hearing assessment with audiometry and speech therapy for clearer communication.",
  },
];

export const reviews = [
  {
    author: "Satyam Kahar",
    date: "22 January 2026",
    text: "It was very nice to come here — the doctor talks very nicely and is very experienced. You must visit here.",
  },
  {
    author: "Harish Sirwani",
    date: "17 January 2026",
    text: "Dr Nishit hits the ENT cause rightly and avoids unnecessary treatment and follow-ups.",
  },
  {
    author: "Omindra Kumar",
    date: "15 January 2026",
    text: "Very good experience. Best ENT doctor in Vadodara.",
  },
  {
    author: "Dashrath Patel",
    date: "31 December 2025",
    text: "Very nice doctor. I had ear pain for two months — relief after consulting him. Cooperative and talks like family.",
  },
] as const;

export const doctor = {
  name: "Dr. Nishit Gupta",
  role: "ENT Surgeon",
  experience: "10+ years",
  summary:
    "ENT surgeon in Vadodara known for accurate diagnosis, clear communication, and careful treatment plans — trusted by local families, returning NRIs, and visitors seeking reliable ENT care.",
  bio: [
    "Dr. Nishit Gupta is a well-known ENT surgeon in Vadodara with over 10 years of experience. He obtained his MBBS from Pondicherry University and worked as a medical oncology registrar at Apollo Oncology Hospital in Chennai.",
    "His passion for ENT led him to pursue M.S. ENT from Bharati Vidyapeeth University, Pune. He then served as a senior registrar at BMC Hospital in Mumbai and trained under well-known international surgeons.",
    "He is Associate Professor at Dhiraj Hospital (Sumandeep Vidyapeeth), associated with multi-speciality hospitals in Vadodara, and completed a certified course in advanced allergy and immunotherapy.",
    "In 2022 he founded Trident ENT Hospital to deliver specialised ENT care with modern facilities — precise diagnosis first, then the right medical or surgical path.",
    "ENT covers three senses people rely on every day — smell, hearing, and taste — plus head and neck disease. Trident’s aim is clear diagnosis and effective treatment with fewer unnecessary follow-ups or antibiotics, while recognising when surgery is the safer path.",
  ],
  credentials: [
    "MBBS — Pondicherry University",
    "M.S. ENT — Bharati Vidyapeeth University, Pune",
    "Certified — Advanced allergy & immunotherapy",
    "Associate Professor — Dhiraj Hospital, Sumandeep Vidyapeeth",
    "Founder — Trident ENT Hospital (2022)",
  ],
} as const;

export const legacyRedirects: { source: string; destination: string }[] = [
  { source: "/about-us", destination: "/doctor" },
  { source: "/about-us/", destination: "/doctor" },
  { source: "/ear", destination: "/services/ear" },
  { source: "/ear/", destination: "/services/ear" },
  // Live WP menu shortcuts (nose → allergy page; throat → throat service)
  { source: "/nose", destination: "/services/allergy" },
  { source: "/nose/", destination: "/services/allergy" },
  { source: "/throat", destination: "/services/throat-head-neck" },
  { source: "/throat/", destination: "/services/throat-head-neck" },
  { source: "/nose-block-sinusitis", destination: "/services/nose-sinus" },
  { source: "/nose-block-sinusitis/", destination: "/services/nose-sinus" },
  {
    source:
      "/expert-ent-care-conquer-nose-block-sinusitis-nose-polyp-allergies-sneezing",
    destination: "/services/nose-sinus",
  },
  {
    source:
      "/expert-ent-care-conquer-nose-block-sinusitis-nose-polyp-allergies-sneezing/",
    destination: "/services/nose-sinus",
  },
  { source: "/nose-allergy-immunotherapy", destination: "/services/allergy" },
  { source: "/nose-allergy-immunotherapy/", destination: "/services/allergy" },
  {
    source: "/throat-head-neck-swelling-diseases-cancer-thyroid",
    destination: "/services/throat-head-neck",
  },
  {
    source: "/throat-head-neck-swelling-diseases-cancer-thyroid/",
    destination: "/services/throat-head-neck",
  },
  { source: "/audiology-speech", destination: "/services/audiology-speech" },
  { source: "/audiology-speech/", destination: "/services/audiology-speech" },
  { source: "/blogs", destination: "/blog" },
  { source: "/blogs/", destination: "/blog" },
  { source: "/blogs/foreign-body", destination: "/blog/foreign-body" },
  { source: "/blogs/foreign-body/", destination: "/blog/foreign-body" },
  { source: "/category/blog", destination: "/blog" },
  { source: "/category/blog/", destination: "/blog" },
  // WordPress placeholder post — no clinical content
  { source: "/hello-world", destination: "/blog" },
  { source: "/hello-world/", destination: "/blog" },
];
