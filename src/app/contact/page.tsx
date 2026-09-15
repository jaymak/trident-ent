import type { Metadata } from "next";
import { AppointmentForm } from "@/components/AppointmentForm";
import { locations, site, telHref, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Appointments",
  description:
    "Book an ENT appointment in Vadodara by phone, WhatsApp, or callback request.",
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="section-kicker">Contact</p>
          <h1 className="section-title font-display">Book a visit</h1>
          <p className="section-lead">
            Prefer messaging? WhatsApp is the fastest path. Prefer a call? Use
            the appointment number below.
          </p>

          <div className="mt-8 space-y-4">
            <a className="btn btn-primary" href={whatsappHref()}>
              WhatsApp now
            </a>
            <div className="text-sm text-ink-muted">
              <p>
                Appointment:{" "}
                <a
                  className="font-semibold text-brand-800"
                  href={telHref(site.appointmentPhone)}
                >
                  {site.appointmentPhoneDisplay}
                </a>
              </p>
              <p className="mt-2">
                Emergency:{" "}
                <a
                  className="font-semibold text-brand-800"
                  href={telHref(site.emergencyPhone)}
                >
                  {site.emergencyPhoneDisplay}
                </a>
              </p>
              <p className="mt-2">
                Email:{" "}
                <a
                  className="font-semibold text-brand-800"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>
              </p>
            </div>
          </div>

          <div className="mt-10 space-y-4">
            {locations.map((location) => (
              <div key={location.id} className="border-t border-brand-900/10 pt-4">
                <h2 className="font-display text-xl text-brand-950">
                  {location.name}
                </h2>
                <p className="mt-1 text-sm text-ink-muted">{location.address}</p>
                <ul className="mt-2 space-y-1 text-sm text-ink-muted">
                  {location.hours.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <AppointmentForm />
      </div>
    </section>
  );
}
