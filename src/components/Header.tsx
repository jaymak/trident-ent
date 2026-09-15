"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site, telHref, whatsappHref } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-teal-900/10 bg-paper/90 backdrop-blur-md">
      <div className="container flex items-center justify-between gap-4 py-3 md:py-4">
        <Link href="/" className="min-w-0" onClick={() => setOpen(false)}>
          <span className="font-display block text-xl leading-none tracking-tight text-teal-950 md:text-2xl">
            {site.name}
          </span>
          <span className="mt-1 block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-teal-700">
            {site.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-muted transition hover:text-teal-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a className="btn btn-outline" href={telHref(site.appointmentPhone)}>
            Call
          </a>
          <a className="btn btn-solid" href={whatsappHref()}>
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-teal-900/20 text-teal-900 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden>
            <span
              className={`block h-0.5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 bg-current transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-teal-900/10 bg-paper px-5 py-6 lg:hidden"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium text-teal-950"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <a className="btn btn-solid" href={telHref(site.appointmentPhone)}>
              Call for appointment
            </a>
            <a className="btn btn-outline" href={whatsappHref()}>
              WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
