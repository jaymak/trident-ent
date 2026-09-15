import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { site, telHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Patient Information",
  description:
    "What to bring, first-visit expectations, and when to use emergency care at Trident ENT Hospital.",
};

export default function PatientInfoPage() {
  return (
    <>
      <section className="section">
        <div className="container max-w-3xl">
          <p className="section-kicker">Patient info</p>
          <h1 className="section-title font-display">Before your visit</h1>
          <p className="section-lead">
            A short checklist so your first appointment is calm and useful.
          </p>
        </div>
      </section>

      <section className="section bg-paper-warm/40">
        <div className="container prose-clinic max-w-3xl">
          <h2>What to bring</h2>
          <ul>
            <li>Prior prescriptions, discharge notes, or CT/MRI reports</li>
            <li>List of current medicines and allergies</li>
            <li>Hearing-aid devices if you already use them</li>
            <li>A note of when symptoms started and what makes them worse</li>
          </ul>

          <h2>First visit</h2>
          <p>
            We focus on history and examination first. Tests or procedures are
            suggested only when they change the plan — not by default.
          </p>

          <h2>Appointment vs emergency</h2>
          <p>
            Use the appointment line for routine ear, nose, and throat concerns:{" "}
            <a href={telHref(site.appointmentPhone)}>
              {site.appointmentPhoneDisplay}
            </a>
            .
          </p>
          <p>
            For breathing difficulty, severe bleeding, or sudden facial weakness,
            call the emergency number:{" "}
            <a href={telHref(site.emergencyPhone)}>
              {site.emergencyPhoneDisplay}
            </a>{" "}
            or go to the nearest emergency department.
          </p>

          <h2>Locations</h2>
          <p>
            Clinic addresses and hours are on the{" "}
            <Link href="/locations">locations page</Link>. Confirm your slot
            before travelling.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
