# 🔥 Recent News

<div class="news-list">
{% for item in site.data.news limit:10 %}
  <div class="news-item">
    <span class="news-date">{{ item.date }}</span>
    <span class="news-content">{{ item.content }}</span>
  </div>
{% endfor %}
</div>

<details class="news-archive">
  <summary><strong>Show More News</strong></summary>
  <div class="news-list">
  {% for item in site.data.news offset:10 %}
    <div class="news-item">
      <span class="news-date">{{ item.date }}</span>
      <span class="news-content">{{ item.content }}</span>
    </div>
  {% endfor %}
  </div>
</details>
