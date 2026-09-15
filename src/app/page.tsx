import type { Metadata } from "next";
import Image from "next/image";
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
  title: "Trusted ENT Care in Vadodara | Local families, NRIs & visitors",
  description: site.support,
};

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <section className="hero-plane">
        <div className="container flex min-h-[min(88vh,760px)] flex-col justify-end pb-14 pt-24 md:pb-20">
          <div className="animate-hero mb-5 flex flex-wrap gap-2">
            <span className="trust-chip">{site.reviewCount}+ Google reviews</span>
            <span className="trust-chip">Modern ENT facilities</span>
            <span className="trust-chip">Vadodara · India</span>
          </div>
          <p className="animate-hero delay-1 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            {site.name}
          </p>
          <h1 className="animate-hero delay-2 font-display mt-3 max-w-3xl text-4xl leading-[1.08] text-white md:text-5xl lg:text-[3.4rem]">
            {site.headline}
          </h1>
          <p className="animate-hero delay-3 mt-5 max-w-2xl text-base leading-relaxed text-gold-soft/95 md:text-lg">
            {site.supportLine}
          </p>
          <div className="animate-hero delay-4 mt-8 flex flex-wrap gap-3">
            <a className="btn btn-primary" href={whatsappHref()}>
              WhatsApp appointment
            </a>
            <a
              className="btn btn-secondary"
              href={telHref(site.appointmentPhone)}
            >
              Call {site.appointmentPhoneDisplay}
            </a>
            <Link className="btn btn-secondary" href="/contact#book">
              Request callback
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-brand-700/10 bg-white">
        <div className="container grid gap-6 py-7 sm:grid-cols-3">
          {[
            {
              label: "Experience",
              value: doctor.experience,
              detail: "Focused ENT practice",
            },
            {
              label: "Patient trust",
              value: `${site.reviewCount}+ reviews`,
              detail: "Verified on Google",
            },
            {
              label: "Access",
              value: "2 clinics",
              detail: "Easy for visitors & locals",
            },
          ].map((item) => (
            <div key={item.label} className="reveal">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold-deep">
                {item.label}
              </p>
              <p className="mt-1 font-display text-2xl text-brand-950">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-ink-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container reveal grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="portrait-frame mx-auto aspect-[4/5] w-full max-w-md lg:mx-0">
            <Image
              src="/images/doctor-portrait.jpeg"
              alt={`${doctor.name}, ENT Surgeon at Trident ENT Hospital`}
              width={800}
              height={1000}
              className="h-full w-full object-cover object-top"
              priority
            />
          </div>
          <div>
            <p className="section-kicker">Meet your specialist</p>
            <h2 className="section-title font-display">{doctor.name}</h2>
            <p className="section-lead">
              {doctor.role} · {doctor.experience} · Associate Professor, Dhiraj
              Hospital
            </p>
            <p className="mt-4 max-w-xl text-ink-muted">
              Patients appreciate careful listening, clear explanations, and
              treatment plans that avoid unnecessary medicines or follow-ups —
              a reassuring approach whether you are a local family, an NRI
              visiting home, or a guest in Vadodara.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {doctor.credentials.slice(0, 4).map((item) => (
                <li
                  key={item}
                  className="soft-panel px-4 py-3 text-sm text-ink-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/doctor" className="btn btn-solid mt-7">
              Full credentials
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-paper-warm/70">
        <div className="container">
          <div className="reveal max-w-2xl">
            <p className="section-kicker">Specialist care</p>
            <h2 className="section-title font-display">
              Ear, nose, throat & related care
            </h2>
            <p className="section-lead">
              Modern assessment and treatment paths explained in plain language
              — so you know what is needed, and what is not.
            </p>
          </div>
          <div className="reveal mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group soft-panel p-5 transition hover:border-gold-deep/40 hover:shadow-[0_16px_40px_rgba(16,16,12,0.08)]"
              >
                <h3 className="font-display text-xl text-brand-950 group-hover:text-brand-800">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-ink-muted">{service.short}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-gold-deep">
                  Learn more →
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
                What families say
              </h2>
              <p className="section-lead">
                {site.reviewCount}+ Google reviews highlight clear diagnosis,
                calm communication, and dependable care.
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
              <blockquote key={review.author} className="soft-panel p-5">
                <p className="text-ink-muted">&ldquo;{review.text}&rdquo;</p>
                <footer className="mt-4 text-sm font-semibold text-brand-900">
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

      <section className="section bg-paper-warm/60">
        <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="reveal max-w-2xl">
              <p className="section-kicker">Visit us</p>
              <h2 className="section-title font-display">
                Two convenient clinics in Vadodara
              </h2>
              <p className="section-lead">
                Clear timings, WhatsApp booking, and central locations — helpful
                if you are arranging care while travelling or visiting family.
              </p>
            </div>
            <div className="reveal mt-8 grid gap-4">
              {locations.map((location) => (
                <article key={location.id} className="soft-panel p-5">
                  <h3 className="font-display text-xl text-brand-950">
                    {location.name}
                  </h3>
                  <p className="mt-2 text-sm text-ink-muted">
                    {location.address}
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-ink-muted">
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
          <div className="reveal portrait-frame aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/images/clinic-exterior.jpg"
              alt="Trident ENT Hospital clinic signage"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <CtaBand
        title="Book with confidence"
        text="Appointments by call or WhatsApp. We help local patients and visitors plan a clear next step."
      />
    </>
  );
}
