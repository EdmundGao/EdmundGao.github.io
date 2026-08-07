/* =============================================================================
 * Renders the page from window.SITE (see data.js) and wires up the theme
 * toggle, scroll-spy nav, and reveal-on-scroll animation.
 *
 * You shouldn't need to edit this file to change content — edit data.js.
 * ===========================================================================*/

(function () {
  "use strict";

  var SITE = window.SITE || {};

  /* ------------------------------------------------------------- utilities */

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function el(id) {
    return document.getElementById(id);
  }

  // Hides the <section> wrapping an element when there's nothing to show.
  function hideSection(node) {
    var section = node && node.closest("section");
    if (section) section.hidden = true;
  }

  function has(list) {
    return Array.isArray(list) && list.length > 0;
  }

  function tagList(items) {
    if (!has(items)) return "";
    return (
      '<ul class="tags">' +
      items.map(function (t) {
        return '<li class="tag">' + esc(t) + "</li>";
      }).join("") +
      "</ul>"
    );
  }

  var ICONS = {
    external:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>',
    code:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>',
    mail:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    github:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58l-.01-2.05c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.003 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22l-.01 3.29c0 .32.21.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>',
    file:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>',
    phone:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>',
  };

  /* ----------------------------------------------------------------- theme */

  var root = document.documentElement;

  function applyTheme(theme) {
    if (theme === "dark") root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");

    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#0b1220" : "#ffffff");
  }

  function initTheme() {
    var stored = null;
    try {
      stored = localStorage.getItem("theme");
    } catch (e) {
      /* private browsing — fall back to system preference */
    }

    var prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    applyTheme(stored || (prefersDark ? "dark" : "light"));

    var toggle = el("theme-toggle");
    if (!toggle) return;

    toggle.addEventListener("click", function () {
      var next =
        root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      try {
        localStorage.setItem("theme", next);
      } catch (e) {
        /* ignore */
      }
    });
  }

  /* ------------------------------------------------------------ draft flag */

  function renderDraftBanner() {
    var banner = el("draft-banner");
    if (!banner) return;
    if (SITE.draft) banner.hidden = false;
  }

  /* ----------------------------------------------------------------- hero */

  function renderHero() {
    var p = SITE.profile || {};
    var links = p.links || {};

    document.title = p.name + " — Portfolio";

    var nameNodes = document.querySelectorAll("[data-name]");
    Array.prototype.forEach.call(nameNodes, function (node) {
      node.textContent = p.name || "";
    });

    var headline = el("hero-headline");
    if (headline) headline.textContent = p.headline || "";

    var status = el("hero-location");
    if (status) {
      var bits = [p.location, p.availability].filter(Boolean);
      if (bits.length) status.textContent = bits.join(" · ");
      else status.closest(".hero__eyebrow").hidden = true;
    }

    var actions = [];
    if (links.email) {
      actions.push(
        '<a class="btn btn--primary" href="mailto:' +
          esc(links.email) +
          '">' +
          ICONS.mail +
          "Get in touch</a>"
      );
    }
    if (links.resume) {
      actions.push(
        '<a class="btn" href="' +
          esc(links.resume) +
          '">' +
          ICONS.file +
          "Résumé</a>"
      );
    }
    if (links.github) {
      actions.push(
        '<a class="btn" href="' +
          esc(links.github) +
          '" target="_blank" rel="noopener noreferrer">' +
          ICONS.github +
          "GitHub</a>"
      );
    }
    if (links.linkedin) {
      actions.push(
        '<a class="btn" href="' +
          esc(links.linkedin) +
          '" target="_blank" rel="noopener noreferrer">' +
          ICONS.linkedin +
          "LinkedIn</a>"
      );
    }

    var mount = el("hero-actions");
    if (mount) mount.innerHTML = actions.join("");
  }

  /* ---------------------------------------------------------------- about */

  function renderAbout() {
    var mount = el("about-body");
    if (!mount) return;

    var paras = (SITE.profile || {}).about;
    if (!has(paras)) {
      hideSection(mount);
      return;
    }

    mount.innerHTML = paras.map(function (t) {
      return "<p>" + esc(t) + "</p>";
    }).join("");
  }

  /* ----------------------------------------------------------- experience */

  function renderExperience() {
    var mount = el("experience-list");
    if (!mount) return;

    if (!has(SITE.experience)) {
      hideSection(mount);
      return;
    }

    mount.innerHTML = SITE.experience.map(function (job) {
      var current = /^present$/i.test(String(job.end || ""));

      var when =
        '<div class="role__when">' +
        esc(job.start) +
        " — " +
        esc(job.end) +
        (job.location
          ? '<span class="role__where">' + esc(job.location) + "</span>"
          : "") +
        "</div>";

      var company = job.url
        ? '<a href="' +
          esc(job.url) +
          '" target="_blank" rel="noopener noreferrer">' +
          esc(job.company) +
          "</a>"
        : esc(job.company);

      var bullets = has(job.highlights)
        ? '<ul class="highlights">' +
          job.highlights.map(function (h) {
            return "<li>" + esc(h) + "</li>";
          }).join("") +
          "</ul>"
        : "";

      return (
        '<article class="role reveal">' +
        when +
        "<div>" +
        '<h3 class="role__title">' +
        esc(job.role) +
        (current ? '<span class="badge-now">Current</span>' : "") +
        "</h3>" +
        '<p class="role__company">' +
        company +
        "</p>" +
        bullets +
        tagList(job.stack) +
        "</div>" +
        "</article>"
      );
    }).join("");
  }

  /* ------------------------------------------------------------- projects */

  function renderProjects() {
    var mount = el("projects-list");
    if (!mount) return;

    if (!has(SITE.projects)) {
      hideSection(mount);
      return;
    }

    mount.innerHTML = SITE.projects.map(function (proj) {
      var links = proj.links || {};
      var linkHtml = [];

      if (links.demo) {
        linkHtml.push(
          '<a href="' +
            esc(links.demo) +
            '" target="_blank" rel="noopener noreferrer">' +
            ICONS.external +
            "Live demo</a>"
        );
      }
      if (links.source) {
        linkHtml.push(
          '<a href="' +
            esc(links.source) +
            '" target="_blank" rel="noopener noreferrer">' +
            ICONS.code +
            "Source</a>"
        );
      }

      return (
        '<article class="card reveal' +
        (proj.featured ? " card--featured" : "") +
        '">' +
        '<h3 class="card__title">' +
        esc(proj.name) +
        "</h3>" +
        '<p class="card__blurb">' +
        esc(proj.blurb) +
        "</p>" +
        tagList(proj.stack) +
        (linkHtml.length
          ? '<div class="card__links">' + linkHtml.join("") + "</div>"
          : "") +
        "</article>"
      );
    }).join("");
  }

  /* --------------------------------------------------------------- skills */

  function renderSkills() {
    var mount = el("skills-list");
    if (!mount) return;

    if (!has(SITE.skills)) {
      hideSection(mount);
      return;
    }

    mount.innerHTML = SITE.skills.map(function (group) {
      return (
        '<div class="skills__group reveal">' +
        "<h3>" +
        esc(group.group) +
        "</h3>" +
        tagList(group.items) +
        "</div>"
      );
    }).join("");
  }

  /* ---------------------------------------------- education & credentials */

  function renderEducation() {
    var eduMount = el("education-list");
    var certMount = el("certifications-list");
    var certBlock = el("certifications-block");

    var hasEdu = has(SITE.education);
    var hasCert = has(SITE.certifications);

    if (!hasEdu && !hasCert) {
      hideSection(eduMount || certMount);
      return;
    }

    if (eduMount) {
      if (hasEdu) {
        eduMount.innerHTML = SITE.education.map(function (e) {
          return (
            '<div class="entry">' +
            '<div class="entry__head">' +
            '<span class="entry__name">' +
            esc(e.school) +
            "</span>" +
            '<span class="entry__when">' +
            esc(e.start) +
            " — " +
            esc(e.end) +
            "</span>" +
            "</div>" +
            '<p class="entry__sub">' +
            esc(e.degree) +
            "</p>" +
            (e.detail
              ? '<p class="entry__detail">' + esc(e.detail) + "</p>"
              : "") +
            "</div>"
          );
        }).join("");
      } else {
        var eduBlock = eduMount.closest("div[id$='-block']") || eduMount;
        eduBlock.hidden = true;
      }
    }

    if (certBlock) {
      if (hasCert && certMount) {
        certMount.innerHTML = SITE.certifications.map(function (c) {
          return (
            '<div class="entry">' +
            '<div class="entry__head">' +
            '<span class="entry__name">' +
            esc(c.name) +
            "</span>" +
            (c.year
              ? '<span class="entry__when">' + esc(c.year) + "</span>"
              : "") +
            "</div>" +
            (c.issuer
              ? '<p class="entry__sub">' + esc(c.issuer) + "</p>"
              : "") +
            "</div>"
          );
        }).join("");
      } else {
        certBlock.hidden = true;
      }
    }
  }

  /* -------------------------------------------------------------- contact */

  function renderContact() {
    var links = (SITE.profile || {}).links || {};
    var mount = el("contact-actions");
    if (!mount) return;

    var actions = [];
    if (links.email) {
      actions.push(
        '<a class="btn btn--primary" href="mailto:' +
          esc(links.email) +
          '">' +
          ICONS.mail +
          esc(links.email) +
          "</a>"
      );
    }
    if (links.phone) {
      actions.push(
        '<a class="btn" href="tel:' +
          esc(String(links.phone).replace(/[^\d+]/g, "")) +
          '">' +
          ICONS.phone +
          esc(links.phone) +
          "</a>"
      );
    }
    if (links.linkedin) {
      actions.push(
        '<a class="btn" href="' +
          esc(links.linkedin) +
          '" target="_blank" rel="noopener noreferrer">' +
          ICONS.linkedin +
          "LinkedIn</a>"
      );
    }

    mount.innerHTML = actions.join("");

    var year = el("year");
    if (year) year.textContent = new Date().getFullYear();
  }

  /* --------------------------------- drop nav links to sections that hid */

  function pruneNav() {
    var links = document.querySelectorAll(".nav a[href^='#']");
    Array.prototype.forEach.call(links, function (link) {
      var target = document.getElementById(link.getAttribute("href").slice(1));
      if (target && target.hidden) link.hidden = true;
    });
  }

  /* ---------------------------------------------- nav highlight on scroll */

  function initScrollSpy() {
    var links = Array.prototype.slice.call(
      document.querySelectorAll(".nav a[href^='#']")
    );
    if (!links.length || !("IntersectionObserver" in window)) return;

    var byId = {};
    var sections = [];

    links.forEach(function (link) {
      var id = link.getAttribute("href").slice(1);
      var section = document.getElementById(id);
      if (!section) return;
      byId[id] = link;
      sections.push(section);
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (l) {
            l.removeAttribute("aria-current");
          });
          var active = byId[entry.target.id];
          if (active) active.setAttribute("aria-current", "true");
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach(function (s) {
      observer.observe(s);
    });
  }

  /* -------------------------------------------------- sticky header shadow */

  function initStickyHeader() {
    var header = document.querySelector(".site-header");
    if (!header) return;

    var update = function () {
      header.setAttribute("data-stuck", window.scrollY > 8 ? "true" : "false");
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  /* ----------------------------------------------------- reveal on scroll */

  function initReveal() {
    var nodes = document.querySelectorAll(".reveal");
    if (!nodes.length) return;

    var reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || !("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(nodes, function (n) {
        n.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    Array.prototype.forEach.call(nodes, function (n) {
      observer.observe(n);
    });
  }

  /* ------------------------------------------------------------------ go */

  function init() {
    initTheme();
    renderDraftBanner();
    renderHero();
    renderAbout();
    renderExperience();
    renderProjects();
    renderSkills();
    renderEducation();
    renderContact();
    pruneNav();
    initScrollSpy();
    initStickyHeader();
    initReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
