<div class="experience-section">
{% for exp in site.data.experience %}
  <div class="experience-item reveal-on-scroll">
    <div class="experience-header">
      <h3 class="experience-role">{{ exp.role }}</h3>
      <span class="experience-period">{{ exp.period }}</span>
    </div>
    <div class="experience-organization">
      <strong>{{ exp.organization }}</strong>{% if exp.location %}, {{ exp.location }}{% endif %}
    </div>
    {% if exp.responsibilities %}
    <ul class="experience-responsibilities">
      {% for resp in exp.responsibilities %}
      <li>{{ resp }}</li>
      {% endfor %}
    </ul>
    {% endif %}
  </div>
{% endfor %}
</div>
