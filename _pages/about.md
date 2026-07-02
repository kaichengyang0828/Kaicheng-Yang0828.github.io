---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<div class="homepage-shell">
  <section id="about-me" class="homepage-section homepage-section--hero reveal-on-scroll">
    {% include_relative includes/intro.md %}
  </section>

  <section id="news" class="homepage-section reveal-on-scroll">
    {% include_relative includes/news.md %}
  </section>

  <section id="publications" class="homepage-section reveal-on-scroll">
    {% include_relative includes/pub.md %}
  </section>

  <section id="education" class="homepage-section reveal-on-scroll">
    {% include_relative includes/education.md %}
  </section>

  <section id="experience" class="homepage-section reveal-on-scroll">
    {% include_relative includes/experience.md %}
  </section>

  <section id="service" class="homepage-section reveal-on-scroll">
    {% include_relative includes/service.md %}
  </section>

  <section class="homepage-section homepage-section--visitors reveal-on-scroll" aria-label="Site visitor map">
    <div class="visitors-card">
      <p class="visitors-card__eyebrow">Global Reach</p>
      <h2 class="visitors-card__title">Visitors Around the World</h2>
      <div class="visitors-card__globe">
        <script type="text/javascript" id="clstr_globe" src="//clustrmaps.com/globe.js?d=Wi0fgGUeD2uvqrUea-ysKX9I1v29v1RyjjROmaJakKs"></script>
      </div>
    </div>
  </section>
</div>
