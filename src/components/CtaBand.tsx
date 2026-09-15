import Link from "next/link";
import { site, telHref, whatsappHref } from "@/lib/site";

export function CtaBand({
  title = "Ready to feel better?",
  text = "Call or WhatsApp for an appointment. We confirm the next available slot at your preferred location.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="section bg-brand-950 text-white">
      <div className="container reveal flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
          <p className="mt-3 text-gold-soft/90">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a className="btn btn-primary" href={whatsappHref()}>
            WhatsApp
          </a>
          <a className="btn btn-secondary" href={telHref(site.appointmentPhone)}>
            Call {site.appointmentPhoneDisplay}
          </a>
          <Link className="btn btn-secondary" href="/contact#book">
            Request callback
          </Link>
        </div>
      </div>
    </section>
  );
}
