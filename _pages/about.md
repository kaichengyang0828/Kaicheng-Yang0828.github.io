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
    <h2 class="homepage-section__heading homepage-section__heading--hero">About</h2>
    {% include_relative includes/intro.md %}
  </section>

  <section id="news" class="homepage-section reveal-on-scroll">
    <h2 class="homepage-section__heading">News</h2>
    {% include_relative includes/news.md %}
  </section>

  <section id="publications" class="homepage-section reveal-on-scroll">
    <h2 class="homepage-section__heading">Publications</h2>
    {% include_relative includes/pub.md %}
  </section>

  <section id="education" class="homepage-section reveal-on-scroll">
    <h2 class="homepage-section__heading">Education</h2>
    {% include_relative includes/education.md %}
  </section>

  <section id="experience" class="homepage-section reveal-on-scroll">
    <h2 class="homepage-section__heading">Experience</h2>
    {% include_relative includes/experience.md %}
  </section>

  <section id="service" class="homepage-section reveal-on-scroll">
    <h2 class="homepage-section__heading">Service</h2>
    {% include_relative includes/service.md %}
  </section>
</div>
