import Link from "next/link";
import { locations, nav, site, telHref, whatsappHref } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-teal-900/10 bg-teal-950 text-mint-soft">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl text-white">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-mint/90">
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
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mint">
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
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mint">
            Visit
          </p>
          <ul className="mt-4 space-y-4 text-sm">
            {locations.map((location) => (
              <li key={location.id}>
                <p className="font-semibold text-white">{location.name}</p>
                <p className="mt-1 text-mint/85">{location.address}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm">
            <a className="hover:text-white" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          <p className="mt-2 text-sm text-mint/85">
            Emergency:{" "}
            <a className="hover:text-white" href={telHref(site.emergencyPhone)}>
              {site.emergencyPhoneDisplay}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-mint/70">
        © {new Date().getFullYear()} {site.name}. Precise ENT care in Vadodara.
      </div>
    </footer>
  );
}
