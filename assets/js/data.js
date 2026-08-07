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

    about: [
      "I sell and deliver technical systems to the people who have to live with them. At Advantics Robotics that meant warehouse automation — walking clients through what AGV and AMR platforms could do on their specific floor, then supporting the deployment once they bought in. The interesting part is never the demo; it's the racking, the staff workflows, and the software already in place that the robots have to fit around.",
      "At Aibao Insurance I ran a CRM implementation end to end: evaluated HubSpot against Salesforce, configured the platform around how the team actually worked, and wrote the integration guide so the setup could be repeated without me. That project taught me the thing I now lead with — a rollout succeeds or fails on adoption, not on the technology.",
      "I'm completing a Master of Networking Technology at Carleton in May 2027, after a BTech in Technology Management from Ontario Tech. I'm looking for full-time IT consulting or technical sales work starting summer 2027, where the job is translating between what a client needs and what a system can actually do.",
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
    {
      company: "Advantics Robotics",
      role: "Technical Operations Manager Assistant & Sales",
      start: "Sep 2025",
      end: "Apr 2026",
      location: "Toronto, ON · Hybrid",
      highlights: [
        "Supported the deployment and ongoing management of AGV and AMR robotic systems in client warehouses, coordinating between the operations floor and the IT side of each rollout.",
        "Worked directly with clients to scope automation that fit the warehouse they already had — existing racking, staff workflows, and inventory systems — rather than the one a spec sheet assumes.",
        // TODO: add a number here if you have one — warehouses deployed, units
        // managed, throughput or labour-cost change on a site. A single
        // concrete figure will do more for you than three more sentences.
      ],
      stack: [
        "AGV / AMR systems",
        "Warehouse operations",
        "IT integration",
        "Client solutions",
      ],
    },
    {
      company: "Advantics Robotics",
      role: "Technical Operations Sales",
      start: "Mar 2025",
      end: "Aug 2025",
      location: "Toronto, ON · Hybrid",
      highlights: [
        "Introduced warehouse automation systems to prospective clients, translating what AGV and AMR platforms actually do into terms an operations manager could evaluate against their own floor.",
      ],
      stack: ["Technical sales", "Solution scoping"],
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
      stack: ["HubSpot", "Salesforce", "WordPress", "SEO", "CRM implementation"],
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
      stack: ["Inventory management", "Quality control", "Customer support"],
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
  projects: [
    {
      name: "CRM Implementation & Integration Guide",
      blurb:
        "Configured and rolled out a CRM at Aibao Insurance after evaluating HubSpot and Salesforce against the team's actual workflows. Documented the WordPress-to-HubSpot integration as a step-by-step slide deck so the setup could be repeated without me in the room.",
      stack: ["HubSpot", "WordPress", "Salesforce", "Process documentation"],
      links: {
        // If you can share the deck, drop the PDF in assets/ and link it here.
        source: null,
        demo: null,
      },
      featured: true,
    },
    {
      name: "Warehouse Automation Deployments",
      blurb:
        "Supported AGV and AMR rollouts at Advantics Robotics — scoping each client's floor, coordinating the deployment, and handling the integration work between the robots and the systems the warehouse already ran on.",
      stack: ["AGV / AMR", "Systems integration", "Operations"],
      links: { source: null, demo: null },
      featured: true,
    },
    {
      name: "This site",
      blurb:
        "Hand-written HTML, CSS, and JavaScript with no framework or build step, served from GitHub Pages. Light and dark themes, responsive down to phones, and all content driven by a single data file.",
      stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      links: {
        source: "https://github.com/EdmundGao/EdmundGao.github.io",
        demo: null,
      },
      featured: false,
    },
  ],

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
