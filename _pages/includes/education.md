# 🎓 Education

<div class="education-section">
{% for edu in site.data.education %}
  <div class="education-item">
    <div class="education-header">
      <h3 class="education-degree">{{ edu.degree }}</h3>
      <span class="education-period">{{ edu.period }}</span>
    </div>
    <div class="education-institution">
      <strong>{{ edu.institution }}</strong>{% if edu.location %}, {{ edu.location }}{% endif %}
    </div>
    {% if edu.details %}
    <div class="education-details">{{ edu.details }}</div>
    {% endif %}
  </div>
{% endfor %}
</div>
