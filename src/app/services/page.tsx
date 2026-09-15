import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "ENT Services in Vadodara",
  description:
    "Ear, nose & sinus, allergy, throat/head & neck, and audiology & speech care at Trident ENT Hospital.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <p className="section-kicker">Services</p>
          <h1 className="section-title font-display">ENT care by specialty</h1>
          <p className="section-lead">
            Clear pathways for common ear, nose, and throat concerns — diagnosis
            first, then the right medical or surgical plan.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group border border-teal-900/10 bg-white p-5 transition hover:border-teal-700/40 hover:shadow-[0_16px_40px_rgba(6,40,36,0.08)]"
              >
                <h2 className="font-display text-2xl text-teal-950 group-hover:text-teal-800">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm text-ink-muted">{service.summary}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-teal-800">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
