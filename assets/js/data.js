/* =============================================================================
 * SITE CONTENT — this is the only file you need to edit to update the site.
 *
 * Everything on the page is rendered from the object below, so you never have
 * to touch the HTML. Any section whose array is empty hides itself.
 *
 * Content was drafted from your LinkedIn profile. Read it over — a few spots
 * are marked TODO where a specific number or detail would make the point land
 * much harder than the LinkedIn wording does.
 * ===========================================================================*/

window.SITE = {
  // Set to true to show a "Draft" banner across the top while you're editing.
  draft: false,

  /* ---------------------------------------------------------------- basics */
  profile: {
    name: "Edmund Gao",
    headline:
      "IT consulting and technical sales — I help clients scope the right systems, deploy them, and actually get them adopted.",

    // TODO: pick the market you're targeting for 2027. You're from Scarborough
    // but studying in Ottawa, and a recruiter reading "Scarborough" will assume
    // Toronto-only. If you'd take either, say so — it widens the funnel.
    location: "Toronto & Ottawa, Ontario",

    // Shown next to the green dot in the hero. Set to null to hide it.
    availability: "Seeking full-time roles from Summer 2027",

    // Keep this about *how you work*, not a recap of the jobs below — the
    // timeline already covers those. Repeating them here is the fastest way to
    // make a short page feel padded.
    about: [
      "The work I'm best at sits between what a system can do and what a client actually needs. In practice that means being in the room twice: once to scope and sell it honestly, and again when it has to run inside a business that already has its own workflows, staff, and software.",
      "Doing that across warehouse automation and CRM taught me two things. The constraint is almost never the technology — it's the racking, the headcount, and the process nobody wants to change. And a rollout isn't finished until someone else can repeat it without me, which is why I write the documentation before I leave.",
      "I'm completing a Master of Networking Technology at Carleton in May 2027, after a BTech in Technology Management from Ontario Tech.",
    ],

    links: {
      // TODO: double-check this — I read it off your LinkedIn banner image.
      email: "gaojungxiang@gmail.com",
      github: "https://github.com/EdmundGao",
      linkedin: "https://www.linkedin.com/in/edmund-gao-51777415a/",

      // Drop a PDF at assets/resume.pdf to make this button work.
      // Set to null to hide it until you have one ready.
      resume: "assets/resume.pdf",

      // Your number is on your LinkedIn banner, but a phone number on a public
      // page gets scraped and dialed by recruiters' bots. Left off on purpose —
      // set it to "437-261-1218" if you'd rather have it on.
      phone: null,
    },
  },

  /* ------------------------------------------------------------ experience */
  experience: [
    // The two Advantics roles are combined into one entry: as separate rows
    // they repeated each other, and a single row shows the progression better
    // than two near-identical ones.
    {
      company: "Advantics Robotics",
      role: "Technical Operations Sales → Manager Assistant & Sales",
      start: "Mar 2025",
      end: "Apr 2026",
      location: "Toronto, ON · Hybrid",
      highlights: [
        "Ran the technical half of the sales conversation — translating AGV and AMR capability into what it would mean on a client's specific floor, against the racking, headcount, and inventory systems they already had.",
        "Moved from selling into delivery after six months, supporting deployments through to running and owning the integration work between the robots and the warehouse's existing systems.",
        // TODO: one number, anywhere in these two lines — sites deployed, units
        // managed, deal size, throughput or labour-cost change. For technical
        // sales this is the evidence a hiring manager is actually looking for.
      ],
      stack: ["AGV / AMR", "Solution scoping", "Systems integration"],
    },
    {
      company: "Aibao Insurance",
      role: "Project Assistant — Internship",
      start: "Jun 2024",
      end: "Aug 2024",
      location: "Markham, ON · Hybrid",
      highlights: [
        "Planned, configured, and implemented a CRM system alongside the project manager, focusing on adoption and fit with existing business processes rather than just the technical setup.",
        "Evaluated CRM platforms including HubSpot and Salesforce, comparing workflows and integration options before the team committed.",
        "Built and customized WordPress sites, and improved search visibility by optimizing content and tracking performance metrics.",
        "Wrote a slide-deck tutorial documenting the WordPress-to-HubSpot integration so the team could repeat the setup without me.",
      ],
      stack: ["HubSpot", "Salesforce", "WordPress"],
    },
    {
      company: "Ontario Tech University CSSA",
      role: "Event Coordinator",
      start: "Sep 2023",
      end: "Sep 2024",
      location: "Oshawa, ON",
      highlights: [
        "Planned and ran a range of student events — assemblies, performances, fundraisers, and extracurricular programming — coordinating with association members across a full academic year.",
      ],
      stack: ["Event planning", "Communication"],
    },
    {
      company: "Technology Management Student Association (TMSA), Ontario Tech",
      role: "Member",
      start: "Sep 2023",
      end: "Apr 2025",
      location: "Ontario, Canada",
      highlights: [],
      stack: [],
      // TODO: this entry says nothing a recruiter can use, and a thin entry
      // makes the strong ones above look padded. Either delete it, or give it
      // a real line — an event you ran, a speaker you brought in, a committee.
    },
    {
      company: "Best Vanity Toronto",
      role: "Sales Representative",
      start: "May 2022",
      end: "Aug 2022",
      location: "Scarborough, ON · On-site",
      highlights: [
        "Maintained inventory records and monitored delivery schedules and stock levels so customer orders and production runs never stalled on supply.",
        "Implemented quality control checks on newly assembled vanities, and handled returns and repairs on damaged items.",
        "Diagnosed and resolved customer issues with product usage, maintenance, and repair, and independently organized sales promotions.",
      ],
      stack: ["Inventory management", "Quality control"],
    },
    {
      company: "Georges P. Vanier Secondary School",
      role: "Volunteer Summer Camp Tutor",
      start: "Jun 2019",
      end: "Aug 2019",
      location: "Toronto, ON · On-site",
      highlights: [
        "Prepared course materials with teachers, administered quizzes for grades 3–5, and supervised students after class, walking them through homework problems.",
      ],
      stack: [],
    },
  ],

  /* ---------------------------------------------------------- selected work */
  // Concrete things you produced, pulled out of the jobs above so a recruiter
  // skimming the page sees deliverables rather than only date ranges.
  //
  // TODO: this is the thinnest section and the one worth investing in. If you
  // can add a coursework project from Carleton (a network design, a lab build,
  // anything with a diagram) it will do real work for you here.
  // Empty, so the section hides itself. It previously held three cards, and
  // two of them just restated the Advantics and Aibao roles in different
  // words — a section that repeats the timeline reads as filler, which is
  // worse than not having one.
  //
  // Refill it only with work that is NOT already in the timeline above. The
  // best candidate is a Carleton project — a network design, a lab build,
  // anything with a diagram — since that would also give the page evidence
  // for the networking degree, which nothing currently does.
  //
  // Shape of an entry:
  // {
  //   name: "...",
  //   blurb: "One or two sentences. Assume the reader has 8 seconds.",
  //   stack: ["..."],
  //   links: { source: "https://...", demo: null },
  //   featured: true,   // renders double-wide
  // }
  projects: [],

  /* ---------------------------------------------------------------- skills */
  skills: [
    {
      group: "Technical",
      items: ["Python", "SQL", "HTML", "WordPress", "Networking"],
    },
    {
      group: "Operations & Automation",
      items: [
        "AGV / AMR systems",
        "Warehouse operations",
        "IT integration",
        "Inventory management",
        "Quality control",
      ],
    },
    {
      group: "Business Systems",
      items: [
        "HubSpot",
        "Salesforce",
        "CRM implementation",
        "SEO",
        "Microsoft Office",
      ],
    },
    {
      group: "Consulting & Client-Facing",
      items: [
        "Technical sales",
        "Solution scoping",
        "Requirements gathering",
        "Client training & documentation",
        "Stakeholder communication",
      ],
    },
  ],

  /* ------------------------------------------------------------- education */
  education: [
    {
      school: "Carleton University",
      degree: "Master of Networking Technology, Information Technology",
      start: "Sep 2025",
      end: "May 2027",
      detail: null,
    },
    {
      school: "Ontario Tech University",
      degree: "Bachelor of Technology (BTech), Technology Management",
      start: "Sep 2021",
      end: "May 2025",
      detail:
        "Coursework across IT infrastructure, databases, and technology operations.",
    },
    // Secondary school is on your LinkedIn but left off here on purpose — once
    // you have a master's and a bachelor's, listing high school reads as
    // padding. Add it back if you want it.
  ],

  /* --------------------------------------------------------- certificates */
  // Add any as: { name: "...", issuer: "...", year: "2026" }
  // Worth doing — a CCNA or Network+ would pair well with the Carleton degree.
  certifications: [],
};
