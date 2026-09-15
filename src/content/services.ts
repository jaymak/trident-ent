export type ServicePage = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: { heading: string; body: string[]; bullets?: string[] }[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "ear",
    title: "Ear care",
    description:
      "Micro-ear surgery, vertigo clinic, and treatment for hearing loss and tinnitus in Vadodara.",
    intro:
      "Trident ENT Hospital provides specialised care for ear disease — from microscopic surgery to vertigo and tinnitus clinics — with careful diagnosis before any procedure.",
    sections: [
      {
        heading: "Micro-ear surgery",
        body: [
          "Micro-ear (microscopic) surgery uses a surgical microscope or endoscope for precise work on the middle and outer ear. It is typically safer for delicate structures and supports faster recovery when surgery is needed.",
        ],
        bullets: [
          "Tympanoplasty — repair of a perforated or damaged eardrum",
          "Stapedectomy — treatment for otosclerosis-related hearing loss",
          "Mastoidectomy — removal of infected or diseased mastoid tissue",
          "Canaloplasty — correction of ear-canal narrowing or deformity",
        ],
      },
      {
        heading: "Vertigo clinic",
        body: [
          "Peripheral vertigo often comes from the inner ear’s balance system. People describe spinning or whirling even when still, with imbalance and disorientation.",
          "Common causes include BPPV, vestibular neuritis, Ménière’s disease, labyrinthitis, and rarely acoustic neuroma. Many cases improve with repositioning manoeuvres or medicines; some ear diseases need surgery after evaluation.",
        ],
      },
      {
        heading: "Deafness & tinnitus clinic",
        body: [
          "We assess the type and severity of hearing loss and discuss options such as hearing aids for mild-to-moderate loss, or surgery when conductive or middle-ear problems are the cause.",
          "Tinnitus care starts by looking for contributors (infection, noise exposure, other medical factors) and may include sound therapy and practical coping strategies.",
        ],
      },
    ],
  },
  {
    slug: "nose-sinus",
    title: "Nose & sinus",
    description:
      "Medical and endoscopic treatment for nose block, sinusitis, polyps, DCR, and functional rhinoplasty in Vadodara.",
    intro:
      "Nose block and sinusitis are treated medically first when appropriate. When anatomy or chronic disease blocks drainage, endoscopic surgery can restore airflow — with plans based on examination, not a one-size approach.",
    sections: [
      {
        heading: "Medical care",
        body: [
          "Depending on the cause and severity, treatment may include decongestants, nasal corticosteroid sprays, saline irrigation, and antibiotics when bacterial infection is confirmed.",
        ],
      },
      {
        heading: "Endoscopic nasal surgery",
        body: [
          "Endoscopic nose surgery uses a thin camera through the nostrils — typically less invasive than open approaches, with a faster recovery when surgery is needed.",
        ],
        bullets: [
          "Chronic sinusitis — functional endoscopic sinus surgery (FESS) for facial pain, blockage, and discharge that do not settle medically",
          "Nasal polyps — endoscopic removal, often with powered instruments",
          "Deviated septum — endoscopic septoplasty to improve airflow",
          "Other obstruction — enlarged turbinates, scar tissue, or retained foreign material",
          "Selected sinus cysts or tumours — endoscopic removal when appropriate",
          "Recurrent severe nosebleeds — endoscopic cautery or vessel control when vessels are the source",
        ],
      },
      {
        heading: "Endoscopic DCR",
        body: [
          "Endoscopic dacryocystorhinostomy (DCR) treats blockage in the tear drainage system that causes chronic tearing and recurrent eye infections.",
          "Through the nose, a new pathway is created between the tear sac and the nasal cavity so tears can drain again — usually without an external skin incision, which means less scarring and quicker recovery than traditional open DCR.",
        ],
      },
      {
        heading: "Rhinoplasty (functional & reconstructive)",
        body: [
          "Rhinoplasty reshapes the nose for appearance and/or breathing. ENT surgeons with nasal-airway expertise are well placed when obstruction, trauma, or septal deformity is part of the problem.",
          "Open or closed techniques are chosen based on goals — correcting airflow as carefully as form.",
        ],
      },
    ],
  },
  {
    slug: "allergy",
    title: "Allergy & immunotherapy",
    description:
      "Skin prick testing and immunotherapy for nasal allergies in Vadodara.",
    intro:
      "Nasal allergies (allergic rhinitis) happen when the immune system reacts to pollens, dust mites, moulds, or certain foods. Surgery does not cure allergy — identifying triggers does.",
    sections: [
      {
        heading: "Common symptoms",
        body: [],
        bullets: [
          "Repeated sneezing",
          "Nasal congestion and stuffiness",
          "Runny nose",
          "Sinus-pressure headaches",
          "Ear discomfort from nasal congestion",
        ],
      },
      {
        heading: "Skin prick test (SPT)",
        body: [
          "SPT is a widely used standard for detecting allergies. Small amounts of allergen are placed on the skin and lightly pricked. A raised red wheal suggests sensitisation.",
          "Results are quick, many allergens can be checked in one visit, and the test helps guide avoidance and immunotherapy.",
        ],
      },
      {
        heading: "Immunotherapy",
        body: [
          "When triggers are clear and symptoms persist, immunotherapy can help the immune system become less reactive over time — addressing cause rather than only suppressing symptoms.",
        ],
      },
    ],
  },
  {
    slug: "throat-head-neck",
    title: "Throat, head & neck",
    description:
      "Tonsils, thyroid, salivary glands, voice problems, and head & neck pathways in Vadodara.",
    intro:
      "ENT surgeons manage diseases of the mouth, throat, neck, windpipe, and food pipe. Early evaluation matters for swellings, voice change, and non-healing ulcers.",
    sections: [
      {
        heading: "Conditions we commonly see",
        body: [],
        bullets: [
          "Head and neck cancers — often linked to tobacco or alcohol; non-healing ulcers that bleed need prompt review",
          "Tonsillitis — throat pain, painful swallowing, fever; usually medical care, sometimes IV antibiotics",
          "Thyroid swellings — often benign; assessment may include surgery (thyroidectomy) when indicated",
          "Salivary stones — duct blockage and swelling; small stones may be removed endoscopically",
          "Vocal cord nodules/polyps — voice strain (“teacher’s nodule”); often excised when needed",
        ],
      },
    ],
  },
  {
    slug: "audiology-speech",
    title: "Audiology & speech",
    description:
      "Audiometry, hearing guidance, and speech therapy at Trident ENT Hospital, Vadodara.",
    intro:
      "Hearing and speech support sit alongside ENT care so assessment and therapy stay coordinated.",
    sections: [
      {
        heading: "Audiometry",
        body: [
          "Audiometry measures hearing thresholds across frequencies and intensities. Results are plotted on an audiogram showing type (conductive, sensorineural, or mixed) and degree of loss.",
          "Those results guide hearing-aid fitting and other treatment decisions.",
        ],
      },
      {
        heading: "Speech therapy",
        body: [
          "Speech-language therapy helps people improve communication and manage speech or language disorders, guided by a speech-language pathologist.",
        ],
      },
    ],
  },
];

export function getService(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}
