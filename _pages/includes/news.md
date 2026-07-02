<div class="news-list">
{% for item in site.data.news limit:6 %}
  <article class="news-item reveal-on-scroll{% if item.highlight %} news-item--highlight{% endif %}">
    <time class="news-date" datetime="{{ item.date | replace: '.', '-' }}">{{ item.date }}</time>
    <div class="news-content">{{ item.content | markdownify }}</div>
  </article>
{% endfor %}
</div>

<details class="news-archive">
  <summary role="button" aria-expanded="false" aria-controls="archived-news"><strong>Show More News</strong></summary>
  <div id="archived-news" class="news-list">
  {% for item in site.data.news offset:6 %}
    <article class="news-item reveal-on-scroll{% if item.highlight %} news-item--highlight{% endif %}">
      <time class="news-date" datetime="{{ item.date | replace: '.', '-' }}">{{ item.date }}</time>
      <div class="news-content">{{ item.content | markdownify }}</div>
    </article>
  {% endfor %}
  </div>
</details>
