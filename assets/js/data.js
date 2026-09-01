/* =============================================================================
 * SITE CONTENT — this is the only file you need to edit to update the site.
 *
 * Everything on the page is rendered from the object below, so you never have
 * to touch the HTML. Any section whose array is empty hides itself.
 *
 * Content was drafted from your LinkedIn profile. Search this file for "TODO"
 * to find every spot still needing you. In rough priority order:
 *
 *   [ ] 1. RESUME PDF — being written by hand. The button is hidden until it
 *          exists, so nothing is broken in the meantime. See the TODO at
 *          `links.resume` below for the steps to turn it back on.
 *   [ ] 2. A NUMBER in the Advantics bullets — sites deployed, units managed,
 *          deal size, throughput or cost movement. See the TODO in that entry.
 *   [ ] 3. EVIDENCE FOR THE NETWORKING DEGREE — nothing on the page supports
 *          it. A Carleton project fills this and the empty `projects` section
 *          at once. See the TODO above `projects`.
 *   [ ] 4. VERIFY THE EMAIL — read off your LinkedIn banner image, so a
 *          misread letter is possible. See the TODO at `links.email`.
 *   [ ] 5. PICK A MARKET — Toronto, Ottawa, or both. See the TODO at
 *          `location`.
 *
 * Not in this file, but worth doing: your LinkedIn still lists Advantics in
 * the present tense, and this site says the role ended April 2026.
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
      "My work sits between technology and the people who need to use it. I’m involved from the beginning, helping scope solutions and set realistic expectations, and I stay involved through implementation to make sure the solution actually fits the way the business operates.",
      "Working across warehouse automation and CRM has taught me that the biggest challenges are rarely technical. They usually come down to existing processes, staffing, physical layouts, or software that a business already relies on. I also make documentation and knowledge transfer part of the implementation, so the team can manage and maintain the solution after I’m gone.",
      "I’m completing a Master of Networking Technology at Carleton University in May 2027, following a BTech in Technology Management from Ontario Tech University.",
    ],

    links: {
      // TODO: double-check this — I read it off your LinkedIn banner image.
      email: "gaojungxiang@gmail.com",
      linkedin: "https://www.linkedin.com/in/edmund-gao-51777415a/",

      // Off on purpose: for consulting and technical sales nobody screens for
      // a GitHub profile, so the link carries no upside — while the account's
      // 2022 coursework repos give a visitor something to hold against you.
      // Set it back to "https://github.com/EdmundGao" if that changes.
      github: null,

      // null hides the Résumé button entirely, which is where this should stay
      // until the PDF exists — a hidden button costs nothing, a broken one
      // reads as careless.
      //
      // TODO (by hand): when your résumé is ready,
      //   1. Name the PDF exactly `resume.pdf`.
      //   2. Put it in `assets/`, beside the css/ img/ js/ folders.
      //   3. Change the line below to: resume: "assets/resume.pdf",
      //   4. Commit and push both the PDF and this file:
      //        git add assets/resume.pdf assets/js/data.js
      //        git commit -m "Add resume PDF"
      //        git push
      //   5. Load the site and click Résumé to confirm it opens.
      //
      // Note that Cmd-P on the site prints a clean copy with your contact
      // details at the top, if you want a starting point.
      resume: null,

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
  // Empty, so the section hides itself (and the "Work" nav link hides with
  // it). It previously held three cards, but two just restated the Advantics
  // and Aibao roles in different words, and a section that repeats the
  // timeline reads as filler.
  //
  // TODO: refill this with work that is NOT already in the timeline above.
  // The best candidate is a Carleton project — a network design, a lab build,
  // anything with a diagram — because that would also give the page its only
  // evidence for the networking degree, which nothing currently supports.
  // Add an entry here and the section and nav link come back on their own.
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
