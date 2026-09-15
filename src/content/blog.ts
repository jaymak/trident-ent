export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "foreign-body",
    title: "Foreign body in the ear, nose, or throat",
    description:
      "What to do if something is stuck in the ear, nose, or throat — and when to see an ENT in Vadodara.",
    date: "2023-08-07",
    body: [
      "Children and adults sometimes get beads, insects, food, or other objects stuck in the ear or nose. Throat foreign bodies can be more urgent, especially if breathing is affected.",
      "Do not dig with cotton buds or sharp tools — that can push the object deeper or injure the canal. Seek ENT care for safe removal under proper lighting and instruments.",
      "If there is breathing difficulty, drooling, or severe pain, treat it as an emergency and call the hospital emergency number.",
    ],
  },
  {
    slug: "nose-block-sinusitis",
    title: "Nose block, sinusitis, polyps, and allergies",
    description:
      "How ENT care approaches chronic nose block, sinusitis, polyps, and allergic sneezing.",
    date: "2023-08-23",
    body: [
      "Persistent nose block can come from infection, allergy, polyps, or anatomical obstruction. Guessing with repeated antibiotics often fails and can cause side effects.",
      "An ENT evaluation looks at the nasal passages, sinus drainage, and allergy history. Medical therapy is tried when it fits; endoscopic surgery is reserved for clear structural or chronic disease needs.",
      "Allergy testing helps when sneezing and congestion follow seasons or dust exposure — so treatment targets the trigger, not only the symptom.",
    ],
  },
  {
    slug: "when-to-see-ent",
    title: "When to see an ENT specialist",
    description:
      "Practical signs that ear, nose, or throat symptoms need an ENT visit in Vadodara.",
    date: "2026-03-15",
    body: [
      "See an ENT if ear pain, discharge, or hearing loss lasts more than a few days; if vertigo repeats; or if tinnitus is new and distressing.",
      "Nose symptoms that warrant review include blockage lasting weeks, facial pressure, reduced smell, or recurrent sinus infections.",
      "For the throat and neck, book sooner for voice change beyond two weeks, difficulty swallowing, neck lumps, or ulcers that do not heal — especially with tobacco or alcohol use.",
    ],
  },
  {
    slug: "vertigo-and-balance",
    title: "Vertigo and balance: what an ENT checks",
    description:
      "How peripheral vertigo is evaluated and why accurate diagnosis avoids unnecessary medicines.",
    date: "2026-03-15",
    body: [
      "True spinning vertigo often points to the inner ear. Positional testing can identify BPPV, which often improves with canalith repositioning rather than long courses of tablets.",
      "Other inner-ear causes need different plans — from short medical therapy to further imaging when red flags appear.",
      "A clear diagnosis shortens recovery and reduces unnecessary follow-ups.",
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
