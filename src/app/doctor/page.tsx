import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { doctor, site, telHref, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dr. Nishit Gupta | ENT Surgeon Vadodara",
  description: doctor.summary,
};

export default function DoctorPage() {
  return (
    <>
      <section className="section">
        <div className="container grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div>
            <p className="section-kicker">ENT specialist</p>
            <h1 className="section-title font-display">{doctor.name}</h1>
            <p className="section-lead">
              {doctor.role} · {doctor.experience}
            </p>
            <p className="mt-4 max-w-xl text-ink-muted">{doctor.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn btn-primary" href={whatsappHref()}>
                WhatsApp
              </a>
              <a
                className="btn btn-solid"
                href={telHref(site.appointmentPhone)}
              >
                Call {site.appointmentPhoneDisplay}
              </a>
            </div>
          </div>
          <ul className="space-y-3 border border-teal-900/10 bg-white p-5">
            {doctor.credentials.map((item) => (
              <li key={item} className="text-sm text-ink-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-paper-deep/50">
        <div className="container prose-clinic max-w-3xl">
          <h2 className="font-display text-3xl text-ink">Background</h2>
          {doctor.bio.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
          <p>
            Prefer a shorter overview? See{" "}
            <Link href="/services" className="font-semibold text-teal-800">
              services
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="font-semibold text-teal-800">
              book a visit
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaBand title="Consult Dr. Nishit Gupta" />
    </>
  );
}
