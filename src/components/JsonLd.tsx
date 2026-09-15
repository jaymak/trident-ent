import { doctor, locations, site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": `${site.url}/#clinic`,
        name: site.name,
        url: site.url,
        image: `${site.url}/images/hero.jpg`,
        telephone: site.appointmentPhone,
        email: site.email,
        description: site.promise,
        medicalSpecialty: "Otolaryngologic",
        address: {
          "@type": "PostalAddress",
          streetAddress: locations[0].address,
          addressLocality: "Vadodara",
          addressRegion: "Gujarat",
          postalCode: "390018",
          addressCountry: "IN",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "17:00",
            closes: "19:00",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: String(site.reviewCount),
        },
        sameAs: [
          site.social.facebook,
          site.social.instagram,
          site.social.youtube,
          site.googleReviewsUrl,
        ],
      },
      {
        "@type": "Physician",
        "@id": `${site.url}/#physician`,
        name: doctor.name,
        url: `${site.url}/doctor`,
        jobTitle: doctor.role,
        worksFor: { "@id": `${site.url}/#clinic` },
        medicalSpecialty: "Otolaryngologic",
        description: doctor.summary,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
