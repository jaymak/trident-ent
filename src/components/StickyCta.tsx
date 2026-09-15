import { site, telHref, whatsappHref } from "@/lib/site";

export function StickyCta() {
  return (
    <div className="sticky-cta" aria-label="Quick contact">
      <a href={telHref(site.appointmentPhone)}>Call</a>
      <a href={whatsappHref()}>WhatsApp</a>
      <a href="/contact#book">Book</a>
    </div>
  );
}
