"use client";

import { FormEvent, useState } from "react";
import { locations, site, whatsappHref } from "@/lib/site";

export function AppointmentForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const location = String(data.get("location") || "").trim();
    const concern = String(data.get("concern") || "").trim();

    const message = [
      "Appointment request — Trident ENT Hospital",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Preferred location: ${location}`,
      `Concern: ${concern || "Not specified"}`,
    ].join("\n");

    setStatus("sent");
    window.open(whatsappHref(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      id="book"
      onSubmit={onSubmit}
      className="space-y-4 border border-brand-900/10 bg-white p-6 shadow-[0_18px_50px_rgba(6,40,36,0.08)]"
    >
      <div>
        <h2 className="font-display text-2xl text-ink">Request an appointment</h2>
        <p className="mt-2 text-sm text-ink-muted">
          Send details on WhatsApp. We will confirm timing at{" "}
          {site.appointmentPhoneDisplay}.
        </p>
      </div>

      <label className="block text-sm font-medium text-ink">
        Full name
        <input
          required
          name="name"
          className="mt-1.5 w-full border border-brand-900/15 bg-paper px-3 py-2.5 outline-none focus:border-brand-700"
          autoComplete="name"
        />
      </label>

      <label className="block text-sm font-medium text-ink">
        Phone
        <input
          required
          name="phone"
          type="tel"
          className="mt-1.5 w-full border border-brand-900/15 bg-paper px-3 py-2.5 outline-none focus:border-brand-700"
          autoComplete="tel"
        />
      </label>

      <label className="block text-sm font-medium text-ink">
        Preferred location
        <select
          required
          name="location"
          className="mt-1.5 w-full border border-brand-900/15 bg-paper px-3 py-2.5 outline-none focus:border-brand-700"
          defaultValue={locations[0]?.name}
        >
          {locations.map((location) => (
            <option key={location.id} value={location.name}>
              {location.name}
            </option>
          ))}
        </select>
      </label>

      <label className="block text-sm font-medium text-ink">
        Concern (optional)
        <textarea
          name="concern"
          rows={4}
          className="mt-1.5 w-full border border-brand-900/15 bg-paper px-3 py-2.5 outline-none focus:border-brand-700"
          placeholder="Ear pain, sinus block, vertigo…"
        />
      </label>

      <button type="submit" className="btn btn-solid w-full">
        Continue on WhatsApp
      </button>

      {status === "sent" ? (
        <p className="text-sm text-brand-800" role="status">
          WhatsApp should open with your request. If it does not, message{" "}
          {site.appointmentPhoneDisplay} directly.
        </p>
      ) : null}
    </form>
  );
}
