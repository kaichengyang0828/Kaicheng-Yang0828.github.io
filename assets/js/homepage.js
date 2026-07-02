document.addEventListener("DOMContentLoaded", function () {
  document.documentElement.classList.add("home-enhanced");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealTargets = Array.prototype.slice.call(
    document.querySelectorAll(
      ".reveal-on-scroll, .paper-box, .news-item, .education-item, .experience-item, .service-panel"
    )
  );

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach(function (item) {
      item.classList.add("is-visible");
    });
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );

    revealTargets.forEach(function (item) {
      revealObserver.observe(item);
    });
  }

  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll("#site-nav a[href*='#']")
  ).filter(function (link) {
    return link.getAttribute("href").indexOf("#") !== -1;
  });
  var navMap = {};

  navLinks.forEach(function (link) {
    var href = link.getAttribute("href");
    var hash = href.slice(href.indexOf("#"));
    if (hash) {
      navMap[hash] = link;
    }
  });

  var navSections = Array.prototype.slice.call(
    document.querySelectorAll(".homepage-section[id]")
  );

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      var hash = link.getAttribute("href").split("#")[1];
      var target = hash ? document.getElementById(hash) : null;

      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start"
      });

      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, "", "#" + hash);
      } else {
        window.location.hash = hash;
      }
    });
  });

  var setCurrentLink = function (hash) {
    navLinks.forEach(function (link) {
      var isCurrent = link === navMap[hash];
      link.classList.toggle("is-current", isCurrent);
      if (link.parentElement) {
        link.parentElement.classList.toggle("is-current", isCurrent);
      }
      if (isCurrent) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  if (navSections.length && "IntersectionObserver" in window) {
    var navObserver = new IntersectionObserver(
      function (entries) {
        var visibleEntries = entries
          .filter(function (entry) {
            return entry.isIntersecting;
          })
          .sort(function (a, b) {
            return b.intersectionRatio - a.intersectionRatio;
          });

        if (visibleEntries.length) {
          setCurrentLink("#" + visibleEntries[0].target.id);
        }
      },
      { threshold: [0.2, 0.45, 0.7], rootMargin: "-25% 0px -55% 0px" }
    );

    navSections.forEach(function (section) {
      navObserver.observe(section);
    });
  }

  var newsArchives = document.querySelectorAll(".news-archive");
  newsArchives.forEach(function (archive) {
    var summary = archive.querySelector("summary");
    if (!summary) {
      return;
    }

    var syncExpanded = function () {
      summary.setAttribute("aria-expanded", archive.open ? "true" : "false");
    };

    syncExpanded();
    archive.addEventListener("toggle", syncExpanded);
  });

  var authorToggle = document.querySelector(".author__urls-toggle");
  var authorLinks = document.querySelector(".author__urls");
  if (authorToggle && authorLinks) {
    var syncAuthorLinks = function () {
      var expanded = window.getComputedStyle(authorLinks).display !== "none";
      authorToggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    };

    syncAuthorLinks();
    authorToggle.addEventListener("click", function () {
      window.setTimeout(syncAuthorLinks, 160);
    });
    window.addEventListener("resize", syncAuthorLinks);
  }
});
