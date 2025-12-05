# 🔥 Recent News

<div class="news-list">
{% for item in site.data.news limit:10 %}
  <div class="news-item">
    <span class="news-date">{{ item.date }}</span>
    <span class="news-content">{{ item.content | markdownify  }}</span>
  </div>
{% endfor %}
</div>

<details class="news-archive">
  <summary role="button" aria-expanded="false" aria-controls="archived-news"><strong>Show More News</strong></summary>
  <div id="archived-news" class="news-list">
  {% for item in site.data.news offset:10 %}
    <div class="news-item">
      <span class="news-date">{{ item.date }}</span>
      <span class="news-content">{{ item.content | markdownify  }}</span>
    </div>
  {% endfor %}
  </div>
</details>
