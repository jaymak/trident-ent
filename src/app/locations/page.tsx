import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { locations, site, telHref, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Clinic Locations & Hours",
  description:
    "Visit Trident ENT Hospital at Bricklane / L&T Circle or Akshar Multispeciality Hospital in Vadodara.",
};

export default function LocationsPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <p className="section-kicker">Locations</p>
          <h1 className="section-title font-display">Where to find us</h1>
          <p className="section-lead">
            Two Vadodara clinics. Call or WhatsApp to confirm the right slot
            before you travel.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {locations.map((location) => (
              <article
                key={location.id}
                className="border border-teal-900/10 bg-white p-6"
              >
                <h2 className="font-display text-2xl text-teal-950">
                  {location.name}
                </h2>
                <p className="mt-3 text-ink-muted">{location.address}</p>
                <ul className="mt-4 space-y-1 text-sm text-ink-muted">
                  {location.hours.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    className="btn btn-outline"
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.mapQuery)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open map
                  </a>
                  <a className="btn btn-solid" href={whatsappHref()}>
                    WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-ink-muted">
            Appointment:{" "}
            <a
              className="font-semibold text-teal-800"
              href={telHref(site.appointmentPhone)}
            >
              {site.appointmentPhoneDisplay}
            </a>
            {" · "}
            Emergency:{" "}
            <a
              className="font-semibold text-teal-800"
              href={telHref(site.emergencyPhone)}
            >
              {site.emergencyPhoneDisplay}
            </a>
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
