# Vercel hosting — Trident ENT

## Live now

| URL | Status |
|-----|--------|
| https://trident-ent.vercel.app | Production (ready) |
| https://vercel.com/jaymak-3450217c/trident-ent | Project dashboard |
| GitHub | https://github.com/jaymak/trident-ent (`main`) |

Domains attached to project `trident-ent`:
- `entvadodara.in`
- `www.entvadodara.in`

## DNS cutover (Hostinger)

Current nameservers still point at Hostinger parking (`ns1.dns-parking.com`). Update DNS so traffic reaches Vercel.

**Recommended (keep Hostinger nameservers, change records):**

| Type | Name | Value |
|------|------|-------|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

(If Hostinger requires an A for `www`, use `76.76.21.21`.)

**Alternative:** change nameservers to `ns1.vercel-dns.com` and `ns2.vercel-dns.com`.

After DNS propagates, Vercel issues SSL automatically. Verify:

```bash
curl -I https://entvadodara.in
curl -I https://www.entvadodara.in
```

## Notes

- No env vars required for v1
- Production branch: `main` (auto-deploys on push)
- Keep old WordPress live until DNS verifies, then disable/park it
