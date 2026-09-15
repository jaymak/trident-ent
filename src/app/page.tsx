import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import {
  doctor,
  locations,
  reviews,
  services,
  site,
  telHref,
  whatsappHref,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "ENT Specialist Vadodara | Precise care, clear diagnosis",
  description: site.support,
};

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <section className="hero-plane">
        <div className="container flex min-h-[min(92vh,820px)] flex-col justify-end pb-16 pt-28 md:pb-20">
          <p className="animate-hero text-sm font-semibold uppercase tracking-[0.18em] text-mint">
            {site.name}
          </p>
          <h1 className="animate-hero delay-1 font-display mt-4 max-w-3xl text-4xl leading-[1.08] text-white md:text-6xl">
            Precise ENT care for ear, nose & throat
          </h1>
          <p className="animate-hero delay-2 mt-5 max-w-xl text-lg text-mint-soft/95">
            Diagnosis-first treatment from {doctor.name} — careful plans that
            avoid unnecessary antibiotics and follow-ups.
          </p>
          <div className="animate-hero delay-3 mt-8 flex flex-wrap gap-3">
            <a className="btn btn-primary" href={whatsappHref()}>
              WhatsApp
            </a>
            <a
              className="btn btn-secondary"
              href={telHref(site.appointmentPhone)}
            >
              Call for appointment
            </a>
            <Link className="btn btn-secondary" href="/contact#book">
              Request callback
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container reveal grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="section-kicker">Your ENT specialist</p>
            <h2 className="section-title font-display">{doctor.name}</h2>
            <p className="section-lead">
              {doctor.role} · {doctor.experience} · Associate Professor, Dhiraj
              Hospital
            </p>
            <p className="mt-4 max-w-xl text-ink-muted">{doctor.summary}</p>
            <Link href="/doctor" className="btn btn-solid mt-6">
              Meet the doctor
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {doctor.credentials.slice(0, 4).map((item) => (
              <li
                key={item}
                className="border border-teal-900/10 bg-white px-4 py-3 text-sm text-ink-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-paper-deep/60">
        <div className="container">
          <div className="reveal max-w-2xl">
            <p className="section-kicker">Services</p>
            <h2 className="section-title font-display">Care by specialty</h2>
            <p className="section-lead">
              Choose the concern that fits — each path leads to clear next
              steps, not a maze of pages.
            </p>
          </div>
          <div className="reveal mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group border border-teal-900/10 bg-white p-5 transition hover:border-teal-700/40 hover:shadow-[0_16px_40px_rgba(6,40,36,0.08)]"
              >
                <h3 className="font-display text-xl text-teal-950 group-hover:text-teal-800">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-ink-muted">{service.short}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-teal-800">
                  View care →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="reveal flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="section-kicker">Patient trust</p>
              <h2 className="section-title font-display">
                {site.reviewCount}+ Google reviews
              </h2>
              <p className="section-lead">
                Patients value clear diagnosis, calm communication, and fewer
                unnecessary visits.
              </p>
            </div>
            <a
              className="btn btn-outline"
              href={site.googleReviewsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Read on Google
            </a>
          </div>
          <div className="reveal mt-10 grid gap-4 md:grid-cols-2">
            {reviews.map((review) => (
              <blockquote
                key={review.author}
                className="border border-teal-900/10 bg-white p-5"
              >
                <p className="text-ink-muted">&ldquo;{review.text}&rdquo;</p>
                <footer className="mt-4 text-sm font-semibold text-teal-900">
                  {review.author}
                  <span className="ml-2 font-normal text-ink-muted">
                    {review.date}
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-paper-deep/50">
        <div className="container">
          <div className="reveal max-w-2xl">
            <p className="section-kicker">Locations</p>
            <h2 className="section-title font-display">Two clinics in Vadodara</h2>
          </div>
          <div className="reveal mt-8 grid gap-4 md:grid-cols-2">
            {locations.map((location) => (
              <article
                key={location.id}
                className="border border-teal-900/10 bg-white p-5"
              >
                <h3 className="font-display text-xl text-teal-950">
                  {location.name}
                </h3>
                <p className="mt-2 text-sm text-ink-muted">{location.address}</p>
                <ul className="mt-4 space-y-1 text-sm text-ink-muted">
                  {location.hours.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <Link href="/locations" className="btn btn-solid mt-8">
            Maps & hours
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
