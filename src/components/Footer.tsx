import Link from "next/link";
import Image from "next/image";
import { locations, nav, site, telHref, whatsappHref } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-brand-950 text-gold-soft">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Image
            src="/images/logo.png"
            alt={site.name}
            width={180}
            height={84}
            className="h-12 w-auto brightness-110 contrast-125"
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-gold-soft/85">
            {site.promise}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn btn-primary" href={whatsappHref()}>
              WhatsApp
            </a>
            <a
              className="btn btn-secondary"
              href={telHref(site.appointmentPhone)}
            >
              {site.appointmentPhoneDisplay}
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
            Visit
          </p>
          <ul className="mt-4 space-y-4 text-sm">
            {locations.map((location) => (
              <li key={location.id}>
                <p className="font-semibold text-white">{location.name}</p>
                <p className="mt-1 text-gold-soft/80">{location.address}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm">
            <a className="hover:text-white" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          <p className="mt-2 text-sm text-gold-soft/80">
            Emergency:{" "}
            <a className="hover:text-white" href={telHref(site.emergencyPhone)}>
              {site.emergencyPhoneDisplay}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-gold-soft/65">
        © {new Date().getFullYear()} {site.name}. Trusted ENT care in Vadodara.
      </div>
    </footer>
  );
}
