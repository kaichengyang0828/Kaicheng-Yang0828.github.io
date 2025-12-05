# 🧑‍🏫 Professional Service

<div class="service-section">

## Conference Reviewing
<div class="service-conferences">
{% for conf in site.data.service.conferences %}
  <span class="service-badge" title="{{ conf.full_name }}">{{ conf.name }}</span>
{% endfor %}
</div>

## Journal Reviewing
<div class="service-journals">
{% for journal in site.data.service.journals %}
  <span class="service-badge" title="{{ journal.full_name }}">{{ journal.name }}</span>
{% endfor %}
</div>

</div>
