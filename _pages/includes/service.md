# 🧑‍🏫 Professional Service

<div class="service-section">
  <div class="service-panel reveal-on-scroll">
    <p class="service-panel__label">Conferences</p>
    <div class="service-conferences">
    {% for conf in site.data.service.conferences %}
      <span class="service-badge" title="{{ conf.full_name }}" tabindex="0">{{ conf.name }}</span>
    {% endfor %}
    </div>
  </div>

  <div class="service-panel reveal-on-scroll">
    <p class="service-panel__label">Journals</p>
    <div class="service-journals">
    {% for journal in site.data.service.journals %}
      <span class="service-badge" title="{{ journal.full_name }}" tabindex="0">{{ journal.name }}</span>
    {% endfor %}
    </div>
  </div>
</div>
