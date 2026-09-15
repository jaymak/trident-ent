# Vercel hosting plan — Trident ENT

Target production domain: **entvadodara.in** (existing Hostinger site today).

## Recommended architecture

| Piece | Choice |
|-------|--------|
| Framework | Next.js 15 App Router (already in repo) |
| Host | Vercel team `jaymak` (Hobby) |
| Git source | [github.com/jaymak/trident-ent](https://github.com/jaymak/trident-ent) `main` |
| Project name | `trident-ent` |
| Build | `npm run build` / output Next.js default |
| Root directory | `.` (repo root) |
| Node | 20.x or 22.x (Vercel default is fine) |

No server secrets required for v1 (WhatsApp CTAs are client-side). Optional later: form webhook / Resend API key.

## Deploy steps

1. **Import project** in Vercel → GitHub → `jaymak/trident-ent`
   - Framework preset: Next.js
   - Root: `/`
   - Production branch: `main`
2. **First production deploy** → get `trident-ent.vercel.app` (or similar)
3. **Domain**
   - Add `entvadodara.in` and `www.entvadodara.in` in Vercel project Domains
   - At Hostinger DNS: point apex + www to Vercel
     - Apex: A record `76.76.21.21` (Vercel anycast) **or** use Hostinger CNAME flattening if available
     - `www`: CNAME → `cname.vercel-dns.com`
   - Keep old Hostinger WordPress live until DNS cutover + verify
4. **Cutover checklist**
   - Preview URL looks correct on mobile
   - `tel:` / WhatsApp links work
   - Legacy redirects (`/ear` → `/services/ear`, etc.) work
   - Google Search Console property / sitemap `https://entvadodara.in/sitemap.xml`
5. **Post-cutover**
   - Disable or park old WP hosting to avoid split-brain
   - Optional: Vercel Analytics + Speed Insights

## CLI alternative (once linked)

```bash
npm i -g vercel
vercel login
vercel link --yes --project trident-ent --scope jaymak-3450217c
vercel --prod
```

## Env vars (v1)

None required. If you add email/callback later:

| Name | Scope | Notes |
|------|-------|-------|
| `RESEND_API_KEY` or form webhook | Production | Only if server-side forms |

## Risks / notes

- Hobby plan is fine for a clinic marketing site
- Custom domain SSL is automatic on Vercel after DNS verifies
- DNS TTL: lower TTL at Hostinger a day before cutover if possible
- Do not deploy from the mistaken SupplyIQ PR; this repo is the source of truth
