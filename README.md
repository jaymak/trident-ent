# Trident ENT Hospital — website

Modern rebuild of [entvadodara.in](https://entvadodara.in/) as a conversion-first Next.js App Router site.

## Stack

- Next.js 15 + TypeScript + Tailwind CSS v4
- Static content in `src/lib/site.ts`, `src/content/services.ts`, `src/content/blog.ts`
- Appointment requests open a pre-filled WhatsApp message (no backend required)

## Develop

```bash
npm install
npm run dev   # http://localhost:3020
```

## Production

```bash
npm run build
npm start
```

## Routes

| Path | Purpose |
|------|---------|
| `/` | Brand hero, doctor, services, reviews, locations |
| `/doctor` | Credentials and bio |
| `/services` | Services hub |
| `/services/[slug]` | Ear, nose-sinus, allergy, throat-head-neck, audiology-speech |
| `/locations` | Trident + Akshar clinics |
| `/patient-info` | First visit / emergency guidance |
| `/blog` | Patient education |
| `/contact` | Phones + WhatsApp appointment form |

Legacy WordPress URLs redirect via `legacyRedirects` in `src/lib/site.ts`.

## Design notes

- Palette: deep teal + mint on warm paper (not purple/cream medical clichés)
- Typography: Outfit (UI) + Newsreader (display)
- Mobile sticky bar: Call / WhatsApp / Book
- Schema.org `MedicalClinic` + `Physician` on the homepage

## Content ownership

v1 is developer-edited TypeScript/MD-style content modules. Swap in a CMS later if clinic staff need a GUI.
